import { kv } from "@vercel/kv";
import crypto from "node:crypto";

const TRIAL_TOKEN_TTL_SECONDS = 60 * 60 * 24 * 3;
const INIT_LINK_TTL_SECONDS = 60 * 10;

export async function createInitLink({ trialId, prospectPhone, prospectName }) {
  const token = crypto.randomBytes(24).toString("base64url");
  await kv.set(
    `trial:init:${token}`,
    {
      trialId,
      prospectPhone,
      prospectName,
      createdAt: new Date().toISOString(),
    },
    { ex: INIT_LINK_TTL_SECONDS }
  );
  return token;
}

export async function consumeInitLink(token) {
  const key = `trial:init:${token}`;
  const data = await kv.get(key);
  if (!data) return null;
  await kv.del(key);
  return data;
}

export async function storeTrialTokens({ trialId, tokens, email }) {
  const record = {
    trialId,
    email,
    accessToken: tokens.access_token,
    refreshToken: tokens.refresh_token,
    scope: tokens.scope,
    tokenType: tokens.token_type,
    expiresAt: Date.now() + (tokens.expires_in ?? 3600) * 1000,
    grantedAt: new Date().toISOString(),
    revoked: false,
  };
  await kv.set(`trial:tokens:${trialId}`, record, {
    ex: TRIAL_TOKEN_TTL_SECONDS,
  });
  return record;
}

export async function getTrialTokens(trialId) {
  return kv.get(`trial:tokens:${trialId}`);
}

export async function revokeTrialTokens(trialId) {
  const key = `trial:tokens:${trialId}`;
  const record = await kv.get(key);
  if (!record) return;
  await kv.set(
    key,
    { ...record, revoked: true, revokedAt: new Date().toISOString() },
    { ex: 60 * 60 * 24 * 30 }
  );
}

export function signState(payload) {
  const secret = process.env.OAUTH_STATE_SECRET;
  if (!secret) throw new Error("Missing env: OAUTH_STATE_SECRET");
  const json = JSON.stringify(payload);
  const sig = crypto.createHmac("sha256", secret).update(json).digest("base64url");
  return `${Buffer.from(json).toString("base64url")}.${sig}`;
}

export function verifyState(state) {
  const secret = process.env.OAUTH_STATE_SECRET;
  if (!secret) throw new Error("Missing env: OAUTH_STATE_SECRET");
  const [encoded, sig] = (state || "").split(".");
  if (!encoded || !sig) return null;
  const json = Buffer.from(encoded, "base64url").toString("utf-8");
  const expected = crypto.createHmac("sha256", secret).update(json).digest("base64url");
  if (sig !== expected) return null;
  try {
    return JSON.parse(json);
  } catch {
    return null;
  }
}
