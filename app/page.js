"use client";

import { useEffect, useRef, useState } from "react";

/* Proxi — ported from mockup v3 (phosphor CRT, live WA chat, interactive Naoise demo) */

const scenes = [
  { label: "◆ SCENE · F&B BOOKING", conv: "Cliff Coffin KL", avatar: "C", lines: [
    { who: "them", text: "Hi, do you have a table for 4 tonight at 8pm?", t: "20:42" },
    { who: "typing" },
    { who: "me", text: "Hi Rania 👋 Yes; window or bar counter?", t: "20:42" },
    { who: "them", text: "Window please", t: "20:42" },
    { who: "typing" },
    { who: "me", text: "Locked in. Table 07, 8pm for 4. Reply CANCEL anytime before 7pm.", t: "20:42" },
    { who: "them", text: "You have oat milk?", t: "20:43" },
    { who: "typing" },
    { who: "me", text: "Yes; barista holds it for you. Anything else?", t: "20:43" },
  ]},
  { label: "◆ SCENE · LAW FIRM INTAKE", conv: "RLB Advocates", avatar: "Ł", lines: [
    { who: "them", text: "Need to discuss a commercial dispute", t: "10:14" },
    { who: "typing" },
    { who: "me", text: "Of course. 2-line summary + counterparty name so I can run conflicts before booking?", t: "10:14" },
    { who: "them", text: "Alpha Sdn Bhd, contractual breach, RM 180k at stake", t: "10:15" },
    { who: "typing" },
    { who: "me", text: "Running conflicts... ✓ No conflicts. Thu 3pm or Fri 11am with Encik Azman. Which?", t: "10:15" },
    { who: "them", text: "Thursday 3pm", t: "10:16" },
    { who: "typing" },
    { who: "me", text: "Confirmed. Intake form + fee estimate link incoming. ✓", t: "10:16" },
  ]},
  { label: "◆ SCENE · CLINIC RECEPTION (BM)", conv: "Klinik Dr. Lim", avatar: "¤", lines: [
    { who: "them", text: "Anak saya 7 tahun, rash came back since last Tuesday", t: "14:22" },
    { who: "typing" },
    { who: "me", text: "Hi puan. Saya faham; rash berulang. Ada demam atau cuma gatal?", t: "14:22" },
    { who: "them", text: "Just gatal, no fever", t: "14:23" },
    { who: "typing" },
    { who: "me", text: "Baik. Triaged non-urgent. Dr. Lim Khamis 3pm or Jumaat 10am?", t: "14:23" },
    { who: "them", text: "Khamis 3pm", t: "14:23" },
    { who: "typing" },
    { who: "me", text: "Booked ✓ Pre-consult form dihantar dalam BM. See you Thursday.", t: "14:23" },
  ]},
];

const invites = {
  FOUNDING5: { tier: "Proxi Max", rate: "RM 499/mo locked; forever", setup: "RM 2,000 setup; waived" },
  TRIPTANK: { tier: "Proxi Max", rate: "RM 499/mo; 3 months locked", setup: "RM 2,000 setup; waived" },
  RAUL: { tier: "Proxi Max", rate: "Founder access; unlimited", setup: "Setup; waived" },
  TEST200: { tier: "Proxi", rate: "RM 199/mo; 6 months locked", setup: "RM 500 setup; 50% off" },
};

const patterns = [
  { re: /^(hi|hello|hey|yo|sup|salam|halo)/i, r: ["Hey. I'm <em>Naoise.</em> Try: 'clear my Tuesday afternoon', 'follow up with Ahmad', or tap a task on the left. Demo is local-only; no data leaves your browser."] },
  { re: /(email|inbox|unread|gmail|mail)/i, r: ["Scanning your inbox... ✓<br/>◆ 23 unread · 5 need attention · 12 FYI · 6 junk<br/>◆ Top 5 drafted (polite, in your voice). Ready for one-tap approve.<br/>◆ 2 urgent: <em>Ahmad re: proposal</em> (7 days silent), <em>board pack</em> (due tonight)."] },
  { re: /(clear|reschedule|cancel|block|free.*(tuesday|wednesday|thursday|friday|monday|tomorrow|afternoon|morning)|calendar)/i, r: ["Done ✓<br/>◆ Rescheduled 2 meetings (Ahmad → Thu 11am, Board sync → Fri 3pm)<br/>◆ Notified both parties with your usual apology template<br/>◆ Tuesday 2 to 6pm free. Block for deep work or keep open?"] },
  { re: /(follow.?up|chas|remind.*(him|her|them)|nudge|bump|ping)/i, r: ["On it ✓<br/>◆ Drafted follow-up referencing your last convo (14 Apr, proposal v2)<br/>◆ Tone: warm, not pushy. Thanks-opener, 2-option time ask.<br/>◆ In your WA drafts; one tap to send. Want a deadline framing?"] },
  { re: /(brief|agenda|prep.*(tomorrow|day|week|call|meeting)|summary.*tomorrow)/i, r: ["Tomorrow ✓<br/>◆ 10:00 · Ahmad (proposal walk-through); docs pulled, 3 talking points<br/>◆ 14:00 · Board quarterly; deck reviewed, ALIM budget flagged<br/>◆ 16:00 · JJ intro call; warm, runs 12-person studio, prep in Notion<br/>◆ Critical: board deck sign-off by 8pm tonight."] },
  { re: /(research|find.*best|compare|lookup|what.*are.*(good|top|best)|options|recommend)/i, r: ["Scoped ✓<br/>◆ Veo 3 · RM 95/mo; photoreal + character. Verdict: best default.<br/>◆ Runway Gen-4 · RM 144/mo; stronger motion, weaker long shots.<br/>◆ Kling 2.5 · RM 75/mo; cheapest, best physics.<br/>◆ Summary in Notion, 3 paragraphs. Verdict-first."] },
  { re: /(invoice|overdue|unpaid|chase.*money|collect|receivable)/i, r: ["Drafted ✓<br/>◆ 'Gentle reminder; invoice #2026-047 (RM 12,400)'<br/>◆ Warm but firm. References 14-day grace in contract clause 4.2.<br/>◆ CC'd your accountant. Attached: original invoice + statement.<br/>◆ Next escalation auto +7 days. Add phone option?"] },
  { re: /(draft|write.*(email|letter|memo|proposal|note)|reply to|compose)/i, r: ["Drafted ✓<br/>Three versions in your style:<br/>◆ V1 · warm + concise (recommended)<br/>◆ V2 · formal + thorough<br/>◆ V3 · brief + direct<br/>In your drafts. Pick one, approve, I send."] },
  { re: /(book|schedule|set up.*(call|meeting|appointment)|arrange)/i, r: ["Scheduling ✓<br/>◆ Pulled both calendars; 3 viable slots<br/>◆ A: Wed 15:00 to 16:00 · B: Thu 10:00 to 11:00 · C: Fri 14:00<br/>◆ Sent all three to them. First reply wins. Zoom link pre-generated."] },
  { re: /(bm|bahasa|melayu|translate|terjemah|中文|mandarin|manglish)/i, r: ["Baik ✓<br/>Saya boleh respon dalam BM, English, 中文, atau campuran. Client WhatsApp dalam bahasa rojak → saya jawab dalam bahasa yang sama. Email formally in English → formal English reply. Same tone as you."] },
  { re: /(price|cost|how much|bayar|berapa|charge|pricing|plan)/i, r: ["Three tiers ✓<br/>◆ <em>Free</em> · OpenClaw · self-host · RM 0<br/>◆ <em>Proxi</em> · RM 199/mo + RM 500 setup<br/>◆ <em>Max</em> · RM 499/mo + RM 2,000 setup<br/>◆ Enterprise · custom<br/>72h full Max trial on invite redemption. Want an invite?"] },
  { re: /(what.*can.*you|capabilit|help|how.*work|what.*do)/i, r: ["I handle:<br/>◆ Email triage + drafts · calendar + rescheduling · follow-ups any cadence<br/>◆ Research with citations · client intake + conflicts · invoice chasers<br/>◆ Custom workflows (Max tier) · multi-language (BM/EN/中文)<br/>◆ On WhatsApp, email, Slack; no new app.<br/>In <em>demo mode</em> I show what it feels like. Try a chip on the left."] },
  { re: /(demo|book.*call|sales|talk.*team|enterprise)/i, r: ["Sorted ✓<br/>Enterprise → human within 2h. For now: <a href='/waitlist' style='color:inherit;text-decoration:underline'>/waitlist</a> or invite at <a href='/invite' style='color:inherit;text-decoration:underline'>/invite</a>. Want me to draft an email to the sales team?"] },
  { re: /(thanks|thank you|thx|terima kasih|tq)/i, r: ["Any time. ✓ In production I'd be here every hour of the week. This is just a taste."] },
  { re: /(who are you|what are you|are you.*(real|human|ai)|naoise)/i, r: ["I'm <em>Naoise</em>; Proxi's first operator. Live since Feb 2026 for Axon Avenue. In this sandbox I'm simulated; in production I live on your WhatsApp, read your inbox, write on your calendar, remember your clients. Tap a chip."] },
  { re: /(invite|code|founding|trip|raul|test200)/i, r: ["Invite codes I recognise:<br/>◆ <b>FOUNDING5</b> · Max · RM 499 locked forever · setup waived<br/>◆ <b>TRIPTANK</b> · Max · 3 months locked<br/>◆ <b>RAUL</b> · founder access<br/>◆ <b>TEST200</b> · Proxi · 6 months locked · setup 50% off<br/>Paste one in the hero validator above ↑"] },
];
const fallback = "In production I'd handle that. In demo mode I'm sharpest at:<br/>◆ Email triage + drafts<br/>◆ Calendar (clear / reschedule / book)<br/>◆ Follow-ups + invoice chasers<br/>◆ Research with citations<br/>Try a chip on the left, or phrase it more specifically.";
const matchResponse = (text) => {
  for (const p of patterns) if (p.re.test(text)) return p.r[Math.floor(Math.random() * p.r.length)];
  return fallback;
};

export default function ProxiPage() {
  const chatRef = useRef(null);
  const sceneLabelRef = useRef(null);
  const convNameRef = useRef(null);
  const avatarLetterRef = useRef(null);

  const [inviteCode, setInviteCode] = useState("");
  const [inviteMsg, setInviteMsg] = useState(null);

  const [turnsUsed, setTurnsUsed] = useState(0);
  const MAX_TURNS = 10;
  const transcriptRef = useRef(null);
  const [naoiseInput, setNaoiseInput] = useState("");
  const [ctaOpen, setCtaOpen] = useState(false);

  const [hRange, setHRange] = useState(12);
  const [rRange, setRRange] = useState(500);
  const [plan, setPlan] = useState(499);

  const [ideas, setIdeas] = useState([
    { rating: "🔥", text: "Auto-draft replies to 'is this still available?' DMs with a qualifying follow-up + calendar slot", who: "@nina · 14 Apr" },
    { rating: "🔥", text: "Every time a client mentions a book / film, file it in their profile so I can reference it later", who: "@shannon · 14 Apr" },
    { rating: "👍", text: "Weekly roundup of everyone who hasn't replied to me in 14+ days with a draft nudge", who: "@amir · 12 Apr" },
    { rating: "🔥", text: "Reschedule any meeting if I mention I'm feeling unwell; default to 48h later, ask for approval", who: "@raul · 10 Apr" },
    { rating: "🤔", text: "Summarise my entire inbox every morning at 7am in one paragraph", who: "@kavita · 09 Apr" },
    { rating: "👍", text: "Auto-thank donors and send receipts; for a non-profit's WhatsApp line", who: "@alim · 09 Apr" },
    { rating: "🚫", text: "Post on my behalf without my approval (too risky)", who: "@jason · 08 Apr" },
    { rating: "🔥", text: "When someone asks about rates, qualify first: budget, timeline, scope. Only then quote.", who: "@melissa · 07 Apr" },
    { rating: "👍", text: "Birthday reminders for clients with a draft message in my tone", who: "@iqbal · 06 Apr" },
    { rating: "🤔", text: "Answer 'what's your address' differently depending on trust level", who: "@lynn · 05 Apr" },
  ]);

  // Hero chat scene loop
  useEffect(() => {
    let cancelled = false;
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    const addMsg = (who, text, t) => {
      if (who === "typing") {
        const d = document.createElement("div");
        d.className = "typing";
        d.innerHTML = "<span></span><span></span><span></span>";
        chatRef.current?.appendChild(d);
        return d;
      }
      const d = document.createElement("div");
      d.className = "msg " + who;
      d.innerHTML = text + (t ? `<span class="time">${t} ✓✓</span>` : "");
      chatRef.current?.appendChild(d);
      return d;
    };
    const playScene = async (s) => {
      if (!chatRef.current) return;
      chatRef.current.innerHTML = "";
      if (sceneLabelRef.current) sceneLabelRef.current.textContent = s.label;
      if (convNameRef.current) convNameRef.current.textContent = s.conv;
      if (avatarLetterRef.current) avatarLetterRef.current.textContent = s.avatar;
      await sleep(500);
      for (const line of s.lines) {
        if (cancelled) return;
        if (line.who === "typing") {
          const el = addMsg("typing");
          chatRef.current.scrollTop = chatRef.current.scrollHeight;
          await sleep(1100 + Math.random() * 400);
          el.remove();
        } else {
          addMsg(line.who, line.text, line.t);
          chatRef.current.scrollTop = chatRef.current.scrollHeight;
          await sleep(line.who === "them" ? 1300 : 1800);
        }
      }
      await sleep(2800);
    };
    (async () => { let i = 0; while (!cancelled) { await playScene(scenes[i]); i = (i + 1) % scenes.length; } })();
    return () => { cancelled = true; };
  }, []);

  const validateInvite = () => {
    const code = inviteCode.trim().toUpperCase();
    if (!code) return setInviteMsg(null);
    const data = invites[code];
    if (data) {
      setInviteMsg({ ok: true, code, ...data });
      try { window.gtag?.('event', 'invite_valid', { code }); window.fbq?.('track', 'Lead', { content_name: `Invite ${code}` }); } catch (_) {}
    } else {
      setInviteMsg({ ok: false });
    }
  };

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const appendTranscript = (cls, html) => {
    const d = document.createElement("div");
    d.className = "t-msg " + cls;
    d.innerHTML = html;
    transcriptRef.current?.appendChild(d);
    if (transcriptRef.current) transcriptRef.current.scrollTop = transcriptRef.current.scrollHeight;
    return d;
  };
  const appendTyping = () => {
    const d = document.createElement("div");
    d.className = "t-msg n";
    d.innerHTML = '<span style="display:inline-flex;gap:3px;align-items:center;vertical-align:middle"><span style="width:6px;height:6px;border-radius:50%;background:rgba(0,0,0,.4);animation:bounce 1.4s infinite"></span><span style="width:6px;height:6px;border-radius:50%;background:rgba(0,0,0,.4);animation:bounce 1.4s infinite .2s"></span><span style="width:6px;height:6px;border-radius:50%;background:rgba(0,0,0,.4);animation:bounce 1.4s infinite .4s"></span></span>';
    transcriptRef.current?.appendChild(d);
    if (transcriptRef.current) transcriptRef.current.scrollTop = transcriptRef.current.scrollHeight;
    return d;
  };
  const sendPrompt = async (text) => {
    if (turnsUsed >= MAX_TURNS) { setCtaOpen(true); return; }
    setTurnsUsed((n) => n + 1);
    appendTranscript("u", text.replace(/</g, "&lt;"));
    const tt = appendTyping();
    await sleep(700 + Math.random() * 900);
    tt.remove();
    appendTranscript("n", matchResponse(text));
    if (turnsUsed + 1 >= MAX_TURNS) setCtaOpen(true);
    try { window.gtag?.('event', 'naoise_demo_prompt'); } catch (_) {}
  };
  const resetDemo = () => {
    setTurnsUsed(0);
    setCtaOpen(false);
    if (transcriptRef.current) {
      transcriptRef.current.innerHTML = `<div class="t-msg sys">◆ Demo reset; responses simulated locally; no data leaves your browser</div><div class="t-msg n">Hey again. <em>I'm Naoise.</em><br/>Tap a task or type your own. 10 turns fresh.</div>`;
    }
  };

  // ROI calc
  const monthlyHours = hRange * 4.33;
  const monthlyValue = monthlyHours * rRange;
  const net = monthlyValue - plan;
  const multi = Math.round(monthlyValue / plan);
  const fmtRM = (v) => "RM " + Math.round(v).toLocaleString("en-MY");

  const addIdea = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements[0].value || "@anon";
    const idea = form.elements[2].value;
    if (!idea) return;
    const newIdea = { rating: "🤔", text: idea, who: `${name} · ${new Date().toLocaleDateString("en-MY", { month: "short", day: "numeric" })} · pending` };
    setIdeas([newIdea, ...ideas]);
    form.reset();
    setTimeout(() => setIdeas((prev) => [{ ...prev[0], rating: "🔥", who: prev[0].who.replace("pending", "rated by Naoise") }, ...prev.slice(1)]), 2400);
  };

  const turnsLeft = MAX_TURNS - turnsUsed;

  return (
    <div className="px-root">
      <style dangerouslySetInnerHTML={{__html:`
        @import url("https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;700&family=Instrument+Serif:ital@0;1&display=swap");
        .px-root{--black:#0b0d0e;--panel:#121518;--panel-2:#1a1e22;--panel-3:#232830;--line:rgba(127,255,183,.14);--line-bright:rgba(127,255,183,.3);--phos:#7affb1;--phos-dim:#3fa772;--phos-glow:rgba(122,255,177,.22);--amber:#ffb547;--pink:#ff5fa1;--off:#cfd2cf;--off-2:#a7b0ac;--mute:#6e7874;--mute-2:#4d5551;background:var(--black);color:var(--off);font-family:"JetBrains Mono",monospace;-webkit-font-smoothing:antialiased;overflow-x:hidden;min-height:100vh}
        .px-root a{color:inherit;text-decoration:none}
        .px-root .serif{font-family:"Instrument Serif",serif}
        .px-root::before{content:"";position:fixed;inset:0;pointer-events:none;z-index:100;background:repeating-linear-gradient(0deg,rgba(255,255,255,.02) 0,rgba(255,255,255,.02) 1px,transparent 1px,transparent 3px);mix-blend-mode:overlay}
        .px-root::after{content:"";position:fixed;inset:0;pointer-events:none;z-index:99;background:radial-gradient(circle at 50% 50%,transparent 40%,rgba(0,0,0,.7) 100%)}
        .px-wrap{max-width:1320px;margin:0 auto;padding:0 28px;position:relative;z-index:3}
        .px-sysbar{background:var(--panel);border-bottom:1px solid var(--line);padding:8px 0;font-size:11px;color:var(--phos);letter-spacing:.2em;text-transform:uppercase;position:relative;z-index:4}
        .px-sysbar .px-wrap{display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;align-items:center}
        .px-sysbar .live{display:inline-flex;gap:8px;align-items:center}
        .px-sysbar .live::before{content:"";width:8px;height:8px;background:var(--phos);border-radius:50%;box-shadow:0 0 8px var(--phos);animation:pxpulse 1.4s infinite}
        @keyframes pxpulse{0%,100%{opacity:1}50%{opacity:.3}}
        .px-sysbar a{color:var(--off);opacity:.85}.px-sysbar a:hover{color:var(--phos);opacity:1}
        .px-nav{position:sticky;top:0;z-index:30;background:rgba(11,13,14,.88);backdrop-filter:blur(10px);border-bottom:1px solid var(--line)}
        .px-nav .inner{padding:18px 28px;display:flex;align-items:center;justify-content:space-between;gap:20px;max-width:1320px;margin:0 auto;font-size:12px;letter-spacing:.12em}
        .px-brand{display:flex;align-items:center;gap:10px}
        .px-brand .logo{width:32px;height:32px;display:grid;place-items:center;background:var(--phos);color:var(--black);font-weight:700;font-size:20px;box-shadow:0 0 24px var(--phos-glow);border-radius:8px;font-family:"Instrument Serif",serif;font-style:italic}
        .px-brand strong{font-size:17px;color:var(--phos);letter-spacing:.02em;font-weight:500}
        .px-brand .beta{padding:3px 8px;border:1px solid var(--amber);color:var(--amber);font-size:10px;letter-spacing:.2em;text-transform:uppercase}
        .px-nav-links{display:flex;gap:22px;font-size:11px;letter-spacing:.18em;text-transform:uppercase}
        .px-nav-links a{color:var(--off);opacity:.7;transition:opacity .2s,color .2s}
        .px-nav-links a:hover{opacity:1;color:var(--phos)}
        .px-nav-links a.pa{color:var(--amber);opacity:.9}
        @media (max-width:1100px){.px-nav-links{display:none}}
        .px-btn{padding:13px 18px;font-size:11px;letter-spacing:.18em;text-transform:uppercase;font-weight:500;cursor:pointer;border:1px solid var(--phos);background:transparent;color:var(--phos);transition:all .2s;font-family:inherit;text-align:center;display:inline-flex;align-items:center;gap:8px;text-decoration:none}
        .px-btn:hover{background:var(--phos);color:var(--black);box-shadow:0 0 24px var(--phos-glow)}
        .px-btn.solid{background:var(--phos);color:var(--black)}
        .px-btn.solid:hover{background:var(--amber);color:var(--black);border-color:var(--amber)}
        .px-btn.amber{border-color:var(--amber);color:var(--amber)}
        .px-btn.amber:hover{background:var(--amber);color:var(--black)}
        .px-btn.ghost{border-color:var(--line-bright);color:var(--off)}
        .px-btn.ghost:hover{border-color:var(--phos);color:var(--phos)}
        .px-btn.wa{border-color:#25d366;color:#25d366}
        .px-btn.wa:hover{background:#25d366;color:var(--black)}
        .px-hero{padding:64px 0 48px;position:relative}
        .px-hero::before{content:"";position:absolute;top:0;left:0;right:0;height:300px;background:radial-gradient(ellipse 60% 100% at 30% 0%,rgba(122,255,177,.08),transparent 70%);pointer-events:none}
        .px-hero-grid{display:grid;grid-template-columns:1.15fr 1fr;gap:48px;align-items:center}
        @media (max-width:980px){.px-hero-grid{grid-template-columns:1fr;gap:40px}}
        .px-over{display:inline-flex;gap:10px;align-items:center;font-size:11px;letter-spacing:.22em;text-transform:uppercase;color:var(--phos);margin-bottom:20px}
        .px-over::before{content:">";color:var(--phos)}
        .px-h1{font-family:"JetBrains Mono",monospace;font-weight:700;font-size:clamp(48px,8.5vw,112px);line-height:.92;letter-spacing:-.04em;color:var(--off)}
        .px-h1 .sub-line{display:block;font-family:"Instrument Serif",serif;font-weight:400;font-style:italic;color:var(--phos);letter-spacing:-.02em;font-size:.92em}
        .px-h1 .cursor{display:inline-block;width:.55em;height:.82em;background:var(--phos);vertical-align:text-bottom;animation:pxblink 1s steps(2) infinite;margin-left:.12em;box-shadow:0 0 14px var(--phos)}
        @keyframes pxblink{50%{opacity:0}}
        .px-lede{font-size:17px;line-height:1.6;max-width:52ch;color:var(--off-2);margin-top:20px}
        .px-lede strong{color:var(--phos);font-weight:500}
        .px-hero-cta{margin-top:28px;display:flex;gap:10px;flex-wrap:wrap;align-items:center}
        .px-hero-meta{margin-top:36px;display:grid;grid-template-columns:repeat(3,1fr);gap:18px;font-size:10px;letter-spacing:.18em;text-transform:uppercase;color:var(--mute);max-width:520px}
        @media (max-width:600px){.px-hero-meta{grid-template-columns:1fr}}
        .px-hero-meta strong{display:block;color:var(--phos);font-size:16px;letter-spacing:0;text-transform:none;margin-top:4px;font-family:"Instrument Serif",serif;font-style:italic}
        .px-phone{background:var(--panel);border:1px solid var(--line);padding:16px 14px 18px;border-radius:26px;position:relative;box-shadow:0 40px 80px -20px rgba(122,255,177,.2),0 0 0 6px rgba(122,255,177,.04);max-width:400px;margin:0 auto}
        .px-phone::before{content:"";position:absolute;top:10px;left:50%;transform:translateX(-50%);width:90px;height:6px;background:var(--panel-2);border-radius:4px}
        .px-phone-head{padding:20px 12px 14px;display:flex;gap:12px;align-items:center;border-bottom:1px solid var(--line);margin-bottom:10px}
        .px-phone-head .av{width:40px;height:40px;border-radius:50%;background:var(--phos);display:grid;place-items:center;color:var(--black);font-weight:700;font-family:"Instrument Serif",serif;font-style:italic;font-size:20px;box-shadow:0 0 20px var(--phos-glow)}
        .px-phone-head .nm strong{display:block;font-size:13px;color:var(--off);font-weight:500}
        .px-phone-head .nm small{font-size:10px;color:var(--phos);letter-spacing:.08em}
        .px-phone-head .wa-ico{margin-left:auto;width:20px;height:20px;border-radius:50%;background:var(--phos);color:var(--black);display:grid;place-items:center;font-size:11px;font-weight:700}
        .chat{display:flex;flex-direction:column;gap:10px;padding:8px 6px 4px;min-height:420px;max-height:420px;overflow:hidden;position:relative}
        .chat::after{content:"";position:absolute;bottom:0;left:0;right:0;height:30px;background:linear-gradient(transparent,var(--panel));pointer-events:none}
        .msg{padding:10px 14px;border-radius:14px;font-size:13px;line-height:1.45;max-width:82%;font-family:"JetBrains Mono",monospace;opacity:0;transform:translateY(8px);animation:msgIn .3s ease-out forwards}
        @keyframes msgIn{to{opacity:1;transform:translateY(0)}}
        .msg.them{background:var(--panel-2);color:var(--off);align-self:flex-start;border-top-left-radius:4px}
        .msg.me{background:var(--phos);color:var(--black);align-self:flex-end;border-top-right-radius:4px;font-weight:500}
        .msg .time{display:block;font-size:9px;opacity:.55;margin-top:4px;letter-spacing:.1em}
        .typing{display:flex;gap:4px;padding:12px 16px;background:var(--panel-2);border-radius:14px;align-self:flex-start;border-top-left-radius:4px;animation:msgIn .3s ease-out forwards}
        .typing span{width:6px;height:6px;border-radius:50%;background:var(--phos);animation:bounce 1.4s infinite}
        .typing span:nth-child(2){animation-delay:.2s}
        .typing span:nth-child(3){animation-delay:.4s}
        @keyframes bounce{0%,60%,100%{transform:translateY(0);opacity:.5}30%{transform:translateY(-6px);opacity:1}}
        .scene-label{position:absolute;top:-10px;left:16px;right:16px;text-align:center;font-size:9px;letter-spacing:.32em;color:var(--phos);text-transform:uppercase;pointer-events:none}
        .px-invite-bar{margin-top:20px;padding:18px 20px;background:var(--panel);border:1px solid var(--line);border-radius:12px;display:grid;grid-template-columns:auto 1fr auto;gap:12px;align-items:center;max-width:540px}
        @media (max-width:600px){.px-invite-bar{grid-template-columns:1fr}}
        .px-invite-bar .lbl{font-size:10px;color:var(--mute);letter-spacing:.2em;text-transform:uppercase}
        .px-invite-bar input{background:transparent;border:1px solid var(--line-bright);color:var(--off);padding:10px 14px;font-family:inherit;font-size:13px;letter-spacing:.16em;text-transform:uppercase;border-radius:6px;width:100%}
        .px-invite-bar input:focus{outline:0;border-color:var(--phos)}
        .px-invite-bar input::placeholder{color:var(--mute)}
        .px-invite-msg{margin-top:12px;padding:14px 16px;background:var(--panel-2);border:1px solid var(--phos);border-radius:8px;font-size:13px;line-height:1.6;color:var(--phos);grid-column:1 / -1}
        .px-invite-msg.err{border-color:#ff5555;color:#ff8888}
        .px-invite-msg b{font-family:"Instrument Serif",serif;font-style:italic;font-size:16px;margin-right:6px}
        .px-invite-msg .wa-link{display:inline-flex;align-items:center;gap:6px;margin-top:8px;padding:6px 12px;background:#25d366;color:var(--black);border-radius:6px;font-size:11px;letter-spacing:.16em;text-transform:uppercase;font-weight:600}
        .px-root section{padding:110px 0;position:relative;z-index:3}
        .px-sec-h{display:grid;grid-template-columns:120px 1fr auto;gap:24px;align-items:baseline;padding-bottom:24px;border-bottom:1px solid var(--line);margin-bottom:48px}
        @media (max-width:780px){.px-sec-h{grid-template-columns:1fr}}
        .px-sec-h .tag{font-size:11px;letter-spacing:.22em;color:var(--phos);text-transform:uppercase}
        .px-sec-h h2{font-family:"Instrument Serif",serif;font-weight:400;font-style:italic;font-size:clamp(40px,6vw,88px);line-height:1;letter-spacing:-.02em;color:var(--off);margin:0}
        .px-sec-h h2 em{color:var(--phos);font-style:italic}
        .px-sec-h .r{font-size:11px;letter-spacing:.18em;color:var(--mute);text-transform:uppercase;text-align:right}
        .px-sec-h .r a{color:var(--phos);border-bottom:1px solid var(--phos);padding-bottom:2px}
        .px-lanes{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}
        @media (max-width:980px){.px-lanes{grid-template-columns:repeat(2,1fr)}}
        @media (max-width:560px){.px-lanes{grid-template-columns:1fr}}
        .px-lane{background:var(--panel);border:1px solid var(--line);padding:24px;position:relative;min-height:240px;display:flex;flex-direction:column;gap:12px;transition:all .25s}
        .px-lane:hover{border-color:var(--phos);box-shadow:0 0 30px rgba(122,255,177,.12);transform:translateY(-4px)}
        .px-lane .step{font-size:10px;color:var(--amber);letter-spacing:.22em;text-transform:uppercase}
        .px-lane h3{font-family:"Instrument Serif",serif;font-weight:400;font-style:italic;font-size:28px;line-height:1.05;color:var(--off);margin:0}
        .px-lane p{font-size:13px;line-height:1.55;color:var(--off-2);margin-top:auto}
        .px-lane .t{font-size:10px;color:var(--phos);padding-top:12px;border-top:1px dashed var(--line);letter-spacing:.16em;text-transform:uppercase}
        .px-reasons{display:grid;grid-template-columns:repeat(3,1fr);gap:0;border:1px solid var(--line)}
        @media (max-width:900px){.px-reasons{grid-template-columns:1fr}}
        .px-reason{padding:32px 26px;border-right:1px solid var(--line);border-bottom:1px solid var(--line);display:flex;flex-direction:column;min-height:260px;position:relative;transition:background .2s;cursor:pointer;background:var(--panel);color:var(--off);text-decoration:none}
        .px-reason:hover{background:var(--panel-2)}
        .px-reason:nth-child(3n){border-right:0}
        .px-reason:nth-last-child(-n+3){border-bottom:0}
        .px-reason .no{font-size:10px;letter-spacing:.3em;text-transform:uppercase;color:var(--mute)}
        .px-reason h4{font-family:"Instrument Serif",serif;font-style:italic;font-size:30px;margin:14px 0 10px;line-height:1.05;color:var(--off)}
        .px-reason p{font-size:13px;color:var(--off-2);line-height:1.6;flex:1}
        .px-reason .arrow{margin-top:12px;font-size:11px;letter-spacing:.22em;text-transform:uppercase;color:var(--phos)}
        .px-reason:hover .arrow{color:var(--amber)}
        .px-reason .icon{position:absolute;top:22px;right:22px;width:34px;height:34px;border:1px solid var(--line-bright);display:grid;place-items:center;font-family:"Instrument Serif",serif;font-style:italic;font-size:17px;color:var(--phos)}
        .px-markets{display:grid;grid-template-columns:repeat(5,1fr);gap:12px}
        @media (max-width:900px){.px-markets{grid-template-columns:repeat(2,1fr)}}
        @media (max-width:500px){.px-markets{grid-template-columns:1fr}}
        .px-market{padding:20px 22px;background:var(--panel);border:1px solid var(--line);transition:all .18s;display:flex;flex-direction:column;gap:8px;min-height:140px;color:var(--off);text-decoration:none}
        .px-market:hover{border-color:var(--phos);transform:translateY(-3px)}
        .px-market .ic{font-family:"Instrument Serif",serif;font-style:italic;font-size:28px;color:var(--amber);line-height:1}
        .px-market h5{font-family:"Instrument Serif",serif;font-style:italic;font-size:20px;color:var(--off);margin:6px 0 4px;letter-spacing:-.005em}
        .px-market p{font-size:12px;color:var(--off-2);line-height:1.45;flex:1}
        .px-market .stat{margin-top:10px;font-size:10px;letter-spacing:.22em;text-transform:uppercase;color:var(--phos)}
        .px-demo{border-top:1px solid var(--line);border-bottom:1px solid var(--line);background:linear-gradient(180deg,rgba(122,255,177,.04),transparent 60%)}
        .px-console{background:var(--panel);border:1px solid var(--phos);position:relative;box-shadow:0 0 50px rgba(122,255,177,.12);display:grid;grid-template-columns:300px 1fr;min-height:540px}
        @media (max-width:900px){.px-console{grid-template-columns:1fr;min-height:auto}}
        .px-sidebar{padding:24px;border-right:1px solid var(--line);background:var(--black);display:flex;flex-direction:column;gap:14px}
        @media (max-width:900px){.px-sidebar{border-right:0;border-bottom:1px solid var(--line)}}
        .px-sidebar .head{padding-bottom:16px;border-bottom:1px solid var(--line)}
        .px-sidebar .head .av{width:56px;height:56px;border-radius:50%;background:var(--phos);display:grid;place-items:center;color:var(--black);font-family:"Instrument Serif",serif;font-style:italic;font-size:30px;box-shadow:0 0 30px var(--phos-glow);margin-bottom:12px}
        .px-sidebar .head strong{font-family:"Instrument Serif",serif;font-style:italic;font-size:26px;color:var(--off);display:block}
        .px-sidebar .head small{color:var(--phos);font-size:11px;letter-spacing:.18em;text-transform:uppercase;margin-top:4px;display:block}
        .px-sidebar .lbl{font-size:10px;color:var(--mute);letter-spacing:.22em;text-transform:uppercase;margin-top:8px}
        .px-chips{display:flex;flex-direction:column;gap:8px}
        .px-chip{padding:10px 12px;background:var(--panel-2);border:1px solid var(--line);color:var(--off);font-size:12px;line-height:1.4;cursor:pointer;font-family:inherit;text-align:left;transition:all .18s}
        .px-chip:hover{border-color:var(--phos);color:var(--phos);background:var(--panel)}
        .px-chip small{display:block;font-size:9px;color:var(--mute);letter-spacing:.18em;text-transform:uppercase;margin-top:4px}
        .px-sidebar .meter{margin-top:auto;padding-top:14px;border-top:1px dashed var(--line);font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:var(--mute)}
        .px-sidebar .meter .bar{height:4px;background:var(--panel-2);margin-top:8px;position:relative;overflow:hidden}
        .px-sidebar .meter .fill{height:100%;background:var(--phos);transition:width .4s}
        .px-sidebar .meter .num{color:var(--phos);font-family:"Instrument Serif",serif;font-style:italic;font-size:18px;text-transform:none;letter-spacing:0;margin-top:6px;display:block}
        .px-main{display:flex;flex-direction:column;background:var(--panel)}
        .px-transcript{flex:1;padding:24px;overflow-y:auto;max-height:460px;min-height:380px;display:flex;flex-direction:column;gap:12px}
        .t-msg{padding:12px 16px;border-radius:14px;max-width:78%;font-size:14px;line-height:1.55;animation:msgIn .35s ease-out}
        .t-msg.u{background:var(--panel-2);color:var(--off);align-self:flex-end;border-top-right-radius:4px;font-family:"JetBrains Mono",monospace}
        .t-msg.n{background:var(--phos);color:var(--black);align-self:flex-start;border-top-left-radius:4px;font-weight:500;font-family:"JetBrains Mono",monospace}
        .t-msg.n em{font-family:"Instrument Serif",serif;font-style:italic;font-weight:400}
        .t-msg.sys{align-self:center;background:transparent;border:1px dashed var(--line-bright);color:var(--mute);font-size:11px;letter-spacing:.18em;text-transform:uppercase;padding:8px 14px;max-width:100%}
        .px-input-form{padding:20px 24px;border-top:1px solid var(--line);display:grid;grid-template-columns:1fr auto;gap:10px;align-items:center}
        .px-input-form input{flex:1;background:var(--black);border:1px solid var(--line);color:var(--off);padding:14px 16px;font-family:inherit;font-size:14px}
        .px-input-form input::placeholder{color:var(--mute)}
        .px-input-form input:focus{outline:0;border-color:var(--phos);box-shadow:0 0 12px rgba(122,255,177,.2)}
        .px-cta-overlay{position:absolute;inset:0;background:rgba(11,13,14,.96);backdrop-filter:blur(10px);display:flex;flex-direction:column;justify-content:center;align-items:center;gap:20px;padding:32px;text-align:center;z-index:2}
        .px-cta-overlay h4{font-family:"Instrument Serif",serif;font-style:italic;font-size:44px;color:var(--phos);line-height:1;margin:0}
        .px-cta-overlay p{color:var(--off-2);font-size:15px;max-width:380px;margin:0}
        .px-msg-naoise{background:linear-gradient(135deg,rgba(37,211,102,.08),rgba(122,255,177,.04));border:1px solid #25d366;padding:32px 36px;display:grid;grid-template-columns:1fr auto;gap:24px;align-items:center}
        @media (max-width:760px){.px-msg-naoise{grid-template-columns:1fr;padding:24px}}
        .px-msg-naoise .lbl{font-size:11px;letter-spacing:.22em;color:#25d366;text-transform:uppercase;margin-bottom:6px}
        .px-msg-naoise h3{font-family:"Instrument Serif",serif;font-style:italic;font-size:clamp(28px,3.6vw,44px);color:var(--off);margin:0 0 8px;line-height:1.1}
        .px-msg-naoise h3 em{color:var(--phos)}
        .px-msg-naoise p{color:var(--off-2);font-size:15px;line-height:1.6;margin:0;max-width:520px}
        .px-msg-naoise .num{font-family:"JetBrains Mono",monospace;font-size:13px;color:var(--phos);letter-spacing:.1em;padding:3px 8px;background:var(--black);border-radius:4px;border:1px solid var(--line-bright);margin-top:10px;display:inline-block}
        .px-case{display:grid;grid-template-columns:1fr 1.1fr;gap:48px;align-items:center}
        @media (max-width:900px){.px-case{grid-template-columns:1fr}}
        .px-case .stats{aspect-ratio:4/5;width:100%;max-width:420px;margin:0 auto;background:var(--panel);border:1px solid var(--line);position:relative;padding:28px;display:flex;flex-direction:column;gap:14px;overflow:hidden}
        .px-case .stats::before{content:"NAOISE · LIVE · WEEK 1";position:absolute;top:14px;right:14px;font-size:10px;letter-spacing:.22em;color:var(--phos);text-transform:uppercase}
        .px-case .stats::after{content:"";position:absolute;bottom:0;left:0;right:0;height:100px;background:linear-gradient(180deg,transparent,rgba(122,255,177,.08))}
        .px-case .stats .metric{padding:14px;border:1px solid var(--line);background:var(--black);position:relative;z-index:2}
        .px-case .stats .metric b{display:block;font-family:"Instrument Serif",serif;font-style:italic;font-size:40px;color:var(--phos);line-height:1}
        .px-case .stats .metric span{font-size:10px;color:var(--mute);letter-spacing:.22em;text-transform:uppercase;margin-top:4px;display:block}
        .px-case .stats .metric small{display:block;color:var(--amber);font-size:11px;margin-top:4px;letter-spacing:.05em}
        .px-case .copy h3{font-family:"Instrument Serif",serif;font-size:clamp(40px,5vw,72px);font-style:italic;letter-spacing:-.02em;margin:0 0 16px;line-height:.95;color:var(--off)}
        .px-case .copy h3 em{color:var(--phos)}
        .px-case .copy p{font-size:17px;color:var(--off-2);line-height:1.7}
        .px-case-caps{margin-top:22px;display:grid;grid-template-columns:1fr 1fr;gap:10px}
        .px-case-caps .cc{padding:10px 12px;border:1px solid var(--line);background:var(--panel);font-size:11px;color:var(--off-2);letter-spacing:.06em}
        .px-case-caps .cc b{color:var(--phos);display:block;font-family:"Instrument Serif",serif;font-style:italic;font-size:13px}
        .px-wall{background:var(--panel);border:1px solid var(--line);padding:28px 32px}
        .px-wall .wh{display:flex;justify-content:space-between;align-items:baseline;padding-bottom:14px;border-bottom:1px solid var(--line);margin-bottom:16px;flex-wrap:wrap;gap:12px}
        .px-wall .wh h4{font-family:"Instrument Serif",serif;font-style:italic;font-size:26px;color:var(--off);margin:0}
        .px-wall .wh .legend{font-size:10px;letter-spacing:.2em;text-transform:uppercase;color:var(--mute)}
        .px-wall .wh .legend span{color:var(--off);margin-left:8px}
        .px-wall-ideas{display:grid;grid-template-columns:1fr;gap:10px;max-height:320px;overflow-y:auto;padding-right:8px}
        .idea{padding:12px 14px;background:var(--panel-2);border:1px solid var(--line);display:grid;grid-template-columns:30px 1fr auto;gap:12px;align-items:center;font-size:13px;color:var(--off)}
        .idea .rating{font-size:18px;line-height:1}
        .idea .who{font-size:10px;color:var(--mute);letter-spacing:.14em;text-transform:uppercase;text-align:right}
        .px-wall-form{margin-top:14px;display:grid;grid-template-columns:1fr 1fr 2fr auto;gap:8px}
        @media (max-width:780px){.px-wall-form{grid-template-columns:1fr}}
        .px-wall-form input{background:var(--black);border:1px solid var(--line-bright);color:var(--off);padding:10px 12px;font-family:inherit;font-size:12px;border-radius:4px}
        .px-wall-form input:focus{outline:0;border-color:var(--phos)}
        .px-wall-form input::placeholder{color:var(--mute)}
        .px-costs{border:1px solid var(--line);background:var(--panel)}
        .px-costs .row{display:grid;grid-template-columns:.8fr 2fr 1fr;gap:24px;padding:22px 26px;border-bottom:1px solid var(--line);align-items:center}
        .px-costs .row:last-child{border-bottom:0}
        .px-costs .row.head{background:var(--black);color:var(--phos);font-size:11px;letter-spacing:.22em;text-transform:uppercase}
        .px-costs .row.featured{background:linear-gradient(90deg,rgba(122,255,177,.08),transparent);border-left:4px solid var(--phos)}
        .px-costs .row.featured .who{color:var(--phos)}
        .px-costs .row .who{font-family:"Instrument Serif",serif;font-style:italic;font-size:22px;letter-spacing:-.01em;color:var(--off)}
        .px-costs .row .detail{color:var(--off-2);font-size:14px}
        .px-costs .row .detail a{color:var(--phos);border-bottom:1px solid var(--phos)}
        .px-costs .row .hours{font-size:12px;letter-spacing:.16em;text-align:right;color:var(--mute)}
        .px-costs .row.featured .hours{color:var(--amber)}
        .px-cost-note{margin-top:22px;color:var(--off-2);font-size:15px;line-height:1.7;max-width:720px}
        .px-cost-note b{color:var(--phos)}
        .px-roi-live{margin-top:24px;padding:28px 32px;background:var(--black);border:1px solid var(--line);display:grid;grid-template-columns:1fr 1fr;gap:36px;align-items:center}
        @media (max-width:900px){.px-roi-live{grid-template-columns:1fr;padding:24px}}
        .px-roi-live .ctrl{display:flex;flex-direction:column;gap:16px}
        .px-roi-live .ctrl label{display:flex;justify-content:space-between;align-items:baseline;font-size:11px;color:var(--mute);letter-spacing:.18em;text-transform:uppercase}
        .px-roi-live .ctrl label b{color:var(--phos);font-family:"Instrument Serif",serif;font-style:italic;font-size:20px;text-transform:none;letter-spacing:0}
        .px-roi-live .ctrl input[type=range]{width:100%;accent-color:var(--phos)}
        .px-roi-live .out .big{font-family:"Instrument Serif",serif;font-style:italic;font-size:64px;color:var(--amber);line-height:1;letter-spacing:-.02em}
        .px-roi-live .out .lbl{font-size:11px;letter-spacing:.22em;text-transform:uppercase;color:var(--mute);margin-top:8px}
        .px-roi-live .out .grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:22px}
        .px-roi-live .out .grid .g{padding:12px;background:var(--panel);border:1px solid var(--line)}
        .px-roi-live .out .grid .g b{display:block;font-family:"Instrument Serif",serif;font-style:italic;font-size:22px;color:var(--phos)}
        .px-roi-live .out .grid .g span{font-size:10px;color:var(--mute);letter-spacing:.18em;text-transform:uppercase}
        .px-plans{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
        @media (max-width:900px){.px-plans{grid-template-columns:1fr}}
        .px-plan{background:var(--panel);border:1px solid var(--line);padding:36px 32px;display:flex;flex-direction:column;position:relative;min-height:480px}
        .px-plan.featured{background:linear-gradient(145deg,rgba(122,255,177,.14),rgba(122,255,177,.02));border-color:var(--phos);box-shadow:0 0 40px rgba(122,255,177,.1)}
        .px-plan.featured .tier-tag{color:var(--amber)}
        .px-plan .ribbon{position:absolute;top:-12px;left:24px;background:var(--amber);color:var(--black);padding:5px 12px;font-size:10px;letter-spacing:.22em;text-transform:uppercase;font-weight:700}
        .tier-tag{font-size:11px;letter-spacing:.22em;text-transform:uppercase;color:var(--phos)}
        .px-plan h3{font-family:"Instrument Serif",serif;font-style:italic;font-size:38px;margin:12px 0 6px;color:var(--off);letter-spacing:-.01em}
        .px-plan .price{font-family:"JetBrains Mono",monospace;font-size:56px;color:var(--phos);letter-spacing:-.03em;line-height:1}
        .px-plan .price sub{font-size:12px;color:var(--mute);margin-left:8px;font-weight:400;letter-spacing:.12em;text-transform:uppercase}
        .px-plan .setup{font-size:11px;color:var(--amber);margin-top:4px;letter-spacing:.08em}
        .px-plan .desc{font-size:14px;color:var(--off-2);margin:14px 0 18px;line-height:1.55}
        .px-plan ul{list-style:none;margin:0 0 22px;padding:0;flex:1}
        .px-plan li{font-size:13px;color:var(--off-2);padding:9px 0;border-bottom:1px dashed var(--line);display:flex;gap:10px}
        .px-plan li:last-child{border-bottom:0}
        .px-plan li::before{content:"▸";color:var(--phos);flex-shrink:0}
        .px-enterprise{margin-top:22px;background:var(--black);color:var(--off);padding:24px 28px;display:grid;grid-template-columns:1fr auto;gap:16px;align-items:center;border:1px solid var(--amber)}
        @media (max-width:700px){.px-enterprise{grid-template-columns:1fr}}
        .px-enterprise h4{font-family:"Instrument Serif",serif;font-style:italic;font-size:26px;margin:0;color:var(--off)}
        .px-enterprise p{color:var(--off-2);font-size:14px;margin:4px 0 0}
        .px-trial-bar{margin-top:22px;background:var(--panel);border:1px solid var(--line);padding:18px 22px;display:grid;grid-template-columns:auto 1fr auto;gap:16px;align-items:center}
        @media (max-width:700px){.px-trial-bar{grid-template-columns:1fr}}
        .px-trial-bar .lbl{font-size:10px;letter-spacing:.22em;text-transform:uppercase;color:var(--mute)}
        .px-trial-bar .track{height:5px;background:var(--panel-2);position:relative;border-radius:3px;overflow:hidden}
        .px-trial-bar .track::before{content:"";position:absolute;left:0;top:0;bottom:0;width:58%;background:var(--phos);border-radius:3px;box-shadow:0 0 10px var(--phos-glow)}
        .px-trial-bar .num{font-family:"Instrument Serif",serif;font-style:italic;font-size:20px;color:var(--amber)}
        .px-how-steps{display:grid;grid-template-columns:repeat(3,1fr);gap:0;border:1px solid var(--line)}
        @media (max-width:900px){.px-how-steps{grid-template-columns:1fr}}
        .px-hstep{padding:36px 30px;border-right:1px solid var(--line);background:var(--panel);position:relative}
        .px-hstep:last-child{border-right:0}
        .px-hstep .no{font-family:"Instrument Serif",serif;font-style:italic;font-size:72px;line-height:.9;color:var(--amber)}
        .px-hstep h4{font-family:"Instrument Serif",serif;font-style:italic;font-size:26px;margin:14px 0 10px;color:var(--off);letter-spacing:-.01em}
        .px-hstep p{font-size:13px;color:var(--off-2);line-height:1.6}
        .px-hstep .time{position:absolute;top:22px;right:22px;font-size:10px;letter-spacing:.22em;text-transform:uppercase;color:var(--mute)}
        .px-hstep .link{margin-top:14px;display:inline-block;font-size:10px;letter-spacing:.22em;text-transform:uppercase;color:var(--phos);border-bottom:1px solid var(--phos);padding-bottom:2px}
        .px-trust{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}
        @media (max-width:900px){.px-trust{grid-template-columns:repeat(2,1fr)}}
        .px-tb{padding:22px;background:var(--panel);border:1px solid var(--line);display:flex;gap:14px;align-items:center;font-size:13px;color:var(--off-2)}
        .px-tb .ic{width:32px;height:32px;border:1px solid var(--line-bright);display:grid;place-items:center;font-family:"Instrument Serif",serif;font-style:italic;color:var(--phos)}
        .px-faqs details{padding:22px 0;border-bottom:1px solid var(--line);cursor:pointer}
        .px-faqs details:first-child{border-top:1px solid var(--line)}
        .px-faqs summary{list-style:none;display:flex;justify-content:space-between;align-items:baseline;gap:16px;font-family:"Instrument Serif",serif;font-style:italic;font-size:26px;color:var(--off)}
        .px-faqs summary::-webkit-details-marker{display:none}
        .px-faqs summary::after{content:"+";color:var(--phos);font-family:"JetBrains Mono",monospace;font-size:22px;font-style:normal;transition:transform .2s}
        .px-faqs details[open] summary::after{transform:rotate(45deg)}
        .px-faqs .a{padding-top:12px;color:var(--off-2);font-size:15px;line-height:1.7;max-width:760px;font-family:"JetBrains Mono",monospace}
        .px-faqs .a a{color:var(--phos);border-bottom:1px solid var(--phos);padding-bottom:1px}
        .px-end{padding:140px 0;text-align:center;background:radial-gradient(ellipse at center,rgba(122,255,177,.1),transparent 60%);position:relative}
        .px-end h2{font-family:"Instrument Serif",serif;font-weight:400;font-style:italic;font-size:clamp(56px,10vw,140px);line-height:.92;letter-spacing:-.03em;color:var(--off);margin:0}
        .px-end h2 em{color:var(--phos)}
        .px-end p{margin:28px auto 0;max-width:560px;color:var(--off-2);font-size:17px;line-height:1.7}
        .px-end .actions{margin-top:40px;display:flex;gap:14px;justify-content:center;flex-wrap:wrap}
        .px-footer{padding:100px 0 40px;border-top:1px solid var(--line);background:var(--black)}
        .px-footer .grid{display:grid;grid-template-columns:1.4fr repeat(4,1fr);gap:32px}
        @media (max-width:1000px){.px-footer .grid{grid-template-columns:1fr 1fr}}
        .px-footer h5{font-size:11px;letter-spacing:.22em;text-transform:uppercase;color:var(--phos);margin:0 0 14px}
        .px-footer a{display:block;padding:6px 0;font-size:13px;color:var(--off-2)}
        .px-footer a:hover{color:var(--phos)}
        .px-footer .sig{font-family:"Instrument Serif",serif;font-style:italic;font-size:44px;color:var(--phos);line-height:1}
        .px-footer .address{font-size:11px;letter-spacing:.22em;text-transform:uppercase;color:var(--mute);margin-top:14px;max-width:280px;line-height:1.8}
        .px-footer .socials{margin-top:14px;display:flex;gap:8px;flex-wrap:wrap}
        .px-footer .socials a{padding:6px 10px;border:1px solid var(--line-bright);font-size:10px;letter-spacing:.2em;text-transform:uppercase;color:var(--off-2);display:inline-block}
        .px-footer .socials a:hover{border-color:var(--phos);color:var(--phos)}
        .px-footer .pa4pa{margin-top:20px;padding:12px 14px;border:1px dashed var(--line-bright);background:var(--panel);font-size:10px;letter-spacing:.22em;text-transform:uppercase;color:var(--mute)}
        .px-footer .pa4pa a{color:var(--amber);padding:0;display:inline}
        .px-footer .colophon{margin-top:44px;border-top:1px solid var(--line);padding-top:22px;display:flex;justify-content:space-between;font-size:11px;letter-spacing:.22em;text-transform:uppercase;color:var(--mute);flex-wrap:wrap;gap:12px}

        /* MOBILE */
        @media (max-width:780px){
          .px-root{overflow-x:hidden}
          .px-sysbar{padding:8px 0;font-size:9px;letter-spacing:.16em}
          .px-sysbar .px-wrap{gap:6px}
          .px-wrap{padding:0 18px}
          .px-nav .inner{padding:14px 18px;gap:8px}
          .px-brand{gap:6px}
          .px-brand strong{font-size:15px}
          .px-brand .beta{font-size:9px;padding:2px 6px;letter-spacing:.14em}
          .px-brand .logo{width:28px;height:28px;font-size:17px}
          .px-btn{padding:10px 12px;font-size:10px;letter-spacing:.14em;white-space:nowrap}
          .px-hero{padding:40px 0 32px}
          .px-hero-grid{gap:32px}
          .px-h1{font-size:clamp(44px,11vw,72px)}
          .px-lede{font-size:15px}
          .px-invite-bar{padding:14px 16px;gap:10px}
          .px-invite-bar input{font-size:12px;letter-spacing:.12em}
          .px-hero-cta{gap:8px}
          .px-hero-meta{grid-template-columns:1fr;gap:10px;font-size:10px}
          .px-hero-meta strong{font-size:14px}
          .px-phone{border-radius:20px;padding:14px 12px;max-width:100%}
          .chat{min-height:340px;max-height:340px}
          .msg{font-size:12px;padding:9px 12px}
          .px-root section{padding:60px 0}
          .px-sec-h{gap:10px;padding-bottom:16px;margin-bottom:28px}
          .px-sec-h h2{font-size:clamp(32px,10vw,56px)}
          .px-sec-h .r{text-align:left}
          .px-lane{padding:18px;min-height:0}
          .px-lane h3{font-size:22px}
          .px-reasons{grid-template-columns:1fr}
          .px-reason{padding:24px 20px;min-height:0}
          .px-reason h4{font-size:24px}
          .px-persona{padding:20px}
          .px-market{padding:16px 18px;min-height:0}
          .px-market h5{font-size:18px}
          .px-demo{padding:60px 0}
          .px-console{grid-template-columns:1fr}
          .px-sidebar{padding:16px}
          .px-sidebar .head .av{width:44px;height:44px;font-size:24px}
          .px-sidebar .head strong{font-size:22px}
          .px-transcript{padding:16px;min-height:300px;max-height:340px}
          .t-msg{font-size:13px;padding:10px 14px}
          .px-input-form{padding:14px 16px}
          .px-input-form input{padding:12px;font-size:13px}
          .px-cta-overlay{padding:20px;gap:12px}
          .px-cta-overlay h4{font-size:32px}
          .px-cta-overlay p{font-size:13px}
          .px-msg-naoise{padding:20px;gap:14px}
          .px-msg-naoise h3{font-size:24px}
          .px-case .stats{padding:20px}
          .px-case .stats .metric b{font-size:30px}
          .px-case .copy h3{font-size:32px}
          .px-case-caps{grid-template-columns:1fr}
          .px-wall{padding:18px 20px}
          .px-wall .wh{flex-direction:column;align-items:flex-start}
          .px-wall-ideas{max-height:280px}
          .idea{grid-template-columns:22px 1fr;gap:8px;font-size:12px}
          .idea .who{grid-column:1 / -1;text-align:left;padding-top:4px;border-top:1px dashed var(--line);margin-top:4px}
          .px-costs .row{grid-template-columns:1fr;gap:6px;padding:16px}
          .px-costs .row .hours{text-align:left}
          .px-roi-live{padding:20px;grid-template-columns:1fr}
          .px-roi-live .out .big{font-size:44px}
          .px-plan{padding:24px 20px;min-height:0}
          .px-plan .price{font-size:40px}
          .px-plan h3{font-size:30px}
          .px-enterprise{padding:18px 20px;grid-template-columns:1fr}
          .px-trial-bar{grid-template-columns:1fr;gap:10px;padding:14px 16px}
          .px-how-steps{grid-template-columns:1fr}
          .px-hstep{padding:24px 20px}
          .px-trust{grid-template-columns:1fr;gap:8px}
          .px-tb{padding:14px}
          .px-faqs summary{font-size:18px}
          .px-faqs .a{font-size:13px}
          .px-end{padding:72px 0}
          .px-end h2{font-size:clamp(40px,12vw,72px)}
          .px-end p{font-size:15px}
          .px-footer{padding:48px 0 24px}
          .px-footer .grid{grid-template-columns:1fr 1fr;gap:20px}
          .px-footer .sig{font-size:32px}
          .px-footer .colophon{flex-direction:column;gap:6px;text-align:left}
        }
      `}} />

      <div className="px-sysbar">
        <div className="px-wrap">
          <span className="live">System · online · Naoise + 2 operators · replying now</span>
          <span>Frontier-class AI · KL nodes · 12ms median · <a href="#naoise-demo">Try it →</a></span>
        </div>
      </div>

      {/* New-product announcement: Proxi Personas (bright, one message, one CTA) */}
      <a
        href="https://personas.proxi.my"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          padding: "9px 16px",
          fontSize: "13.5px",
          fontWeight: 600,
          color: "#fff",
          textDecoration: "none",
          background: "linear-gradient(90deg,#FF5C7A,#B026FF 45%,#2D6BFF)",
        }}
      >
        <span>◆ NEW · <b>Proxi Personas</b> — try on a voiced AI assistant and hear it talk, free</span>
        <span
          style={{
            background: "rgba(255,255,255,.16)",
            border: "1px solid rgba(255,255,255,.55)",
            borderRadius: "999px",
            padding: "3px 12px",
            fontWeight: 700,
          }}
        >
          Try it free →
        </span>
      </a>

      <nav className="px-nav">
        <div className="inner">
          <a className="px-brand" href="#top"><div className="logo">P</div><strong>Proxi.my</strong><span className="beta">Q2 · Beta</span></a>
          <div className="px-nav-links">
            <a href="/proxi-max">Proxi Max</a>
            <a href="/pricing">Pricing</a>
            <a href="#naoise">Case study</a>
            <a href="/blog">Blog</a>
            <a href="/human-pa">Human PAs</a>
            <a href="/pa4pa" className="pa">PA4PA</a>
          </div>
          <div style={{display:"flex",gap:"10px"}}>
            <a className="px-btn ghost" href="/waitlist">Waitlist</a>
            <a className="px-btn solid" href="/get-started">Get started →</a>
          </div>
        </div>
      </nav>

      <header className="px-hero" id="top">
        <div className="px-wrap px-hero-grid">
          <div>
            <div className="px-over">WA://operator.online · 47 seats remaining</div>
            <h1 className="px-h1">Your WhatsApp,<br /><span className="sub-line">answered.</span><span className="cursor" /></h1>
            <p className="px-lede">Proxi runs a dedicated AI operator on your WhatsApp. It triages, qualifies, books, drafts, follows up; <strong>like a senior associate who never misses a message</strong>. You keep the phone. You keep the brand. One subscription replaces a team.</p>
            <div className="px-invite-bar">
              <span className="lbl">Invite code</span>
              <input value={inviteCode} onChange={(e) => setInviteCode(e.target.value)} type="text" placeholder="FOUNDING5 · TRIPTANK · RAUL · TEST200" />
              <button className="px-btn solid" onClick={validateInvite}>Redeem →</button>
              {inviteMsg && (
                inviteMsg.ok ? (
                  <div className="px-invite-msg">
                    <b>✓ Code accepted.</b>Tier: <b style={{color:"var(--off)"}}>{inviteMsg.tier}</b> · Rate: <b style={{color:"var(--off)"}}>{inviteMsg.rate}</b> · Setup: <b style={{color:"var(--off)"}}>{inviteMsg.setup}</b><br />
                    <a className="wa-link" href={`https://wa.me/60127478227?text=ACTIVATE%20${inviteMsg.code}`} target="_blank" rel="noopener noreferrer">▸ Activate on WhatsApp · 48h window</a>
                  </div>
                ) : (
                  <div className="px-invite-msg err"><b>✕ Invalid code.</b>Try FOUNDING5, TRIPTANK, RAUL, or TEST200 for the demo. Or <a href="/waitlist" style={{color:"var(--phos)"}}>join the waitlist</a>.</div>
                )
              )}
            </div>
            <div className="px-hero-cta">
              <a className="px-btn" href="#naoise-demo">▸ Try Naoise live</a>
              <a className="px-btn wa" href="https://wa.me/60127478227?text=PROXI" target="_blank" rel="noopener noreferrer">▸ Message Naoise · WhatsApp</a>
              <a className="px-btn ghost" href="/waitlist">▸ Join waitlist</a>
            </div>
            <div className="px-hero-meta">
              <div>Uptime · 30d<strong>99.98%</strong></div>
              <div>Median reply<strong>3.4 sec</strong></div>
              <div>Languages<strong>BM · EN · 中文</strong></div>
            </div>
          </div>
          <div className="px-phone">
            <div className="scene-label" ref={sceneLabelRef}>◆ SCENE · F&amp;B BOOKING</div>
            <div className="px-phone-head">
              <div className="av" ref={avatarLetterRef}>C</div>
              <div className="nm"><strong ref={convNameRef}>Cliff Coffin KL</strong><small>● Proxi · online · 0:04 reply</small></div>
              <div className="wa-ico">w</div>
            </div>
            <div className="chat" ref={chatRef} />
          </div>
        </div>
      </header>

      <section id="pipeline" style={{borderTop:"1px solid var(--line)",borderBottom:"1px solid var(--line)"}}>
        <div className="px-wrap">
          <div className="px-sec-h">
            <span className="tag">/02 · Pipeline</span>
            <h2>How a message <em>moves.</em></h2>
            <div className="r">Every turn observable · every handoff logged</div>
          </div>
          <div className="px-lanes">
            <div className="px-lane"><span className="step">T + 0s</span><h3>Arrive</h3><p>Message hits your WhatsApp Business API. Proxi picks it up before your team sees the notification.</p><span className="t">▸ Receive</span></div>
            <div className="px-lane"><span className="step">T + 1s</span><h3>Classify</h3><p>Intent detection; reservation, quote, complaint, spam. Language detection; BM, English, Chinese, mixed.</p><span className="t">▸ Route</span></div>
            <div className="px-lane"><span className="step">T + 3s</span><h3>Act</h3><p>Pulls from your calendar, CRM, or menu. Replies in your voice, in the sender&apos;s language. Books or quotes.</p><span className="t">▸ Resolve</span></div>
            <div className="px-lane"><span className="step">T + ∞</span><h3>Escalate</h3><p>If uncertain, hands the thread to a human with a one-line brief. No cold starts. No &quot;let me check.&quot;</p><span className="t">▸ Handoff</span></div>
          </div>
        </div>
      </section>

      <section id="why">
        <div className="px-wrap">
          <div className="px-sec-h">
            <span className="tag">/03 · Why Proxi</span>
            <h2>Six reasons to <em>stop</em> doing it yourself.</h2>
            <div className="r">Each links to the full page →</div>
          </div>
          <div className="px-reasons">
            {[
              ["/reclaim","t","01 · Time","Reclaim","your time.","Twelve hours a week on admin. Fifty working days a year. Imagine what you&apos;d do with that time back.","/reclaim"],
              ["/proxi-max","w","02 · Workflow","Workflow","automation.","Not just admin; custom workflows, process orchestration, integrations, all designed and run by one operator.","/proxi-max"],
              ["/always-on","a","03 · Always on","168 hours","a week.","Your clients don&apos;t stop at 6pm. A Proxi operator works every hour. No overtime. No burnout.","/always-on"],
              ["/nothing-falls","f","04 · Nothing falls","Nothing falls","through.","Every follow-up tracked. Every commitment remembered. The compound effect of never dropping the ball.","/nothing-falls"],
              ["/not-a-chatbot","c","05 · Not a chatbot","Not a","chatbot.","Chatbots answer questions. Operators take initiative. Your PA knows your clients, your tone, your patterns.","/not-a-chatbot"],
              ["/discretion","d","06 · Discretion","Discretion","built in.","Your data is encrypted. Your PA doesn&apos;t gossip or change jobs. Confidentiality is the foundation.","/discretion"],
            ].map(([href,ic,no,h1,h2,p,slug]) => (
              <a className="px-reason" href={href} key={href}>
                <span className="icon">{ic}</span>
                <span className="no">{no}</span>
                <h4 dangerouslySetInnerHTML={{__html: `${h1}<br/>${h2}`}} />
                <p dangerouslySetInnerHTML={{__html:p}} />
                <span className="arrow">▸ {slug}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="markets">
        <div className="px-wrap">
          <div className="px-sec-h">
            <span className="tag">/05 · Markets</span>
            <h2>Built for the <em>independent</em> professional.</h2>
            <div className="r"><a href="/markets">Full market pages →</a></div>
          </div>
          <div className="px-markets">
            {[
              ["/markets/lawyers","§","Lawyers","Intake, conflicts, retainer follow-ups."],
              ["/markets/property","◧","Property","Listings, viewings, deposit chases."],
              ["/markets/business","∞","Business","Consultants, solo operators."],
              ["/markets/sme","▲","SME","Small teams scaling ops."],
              ["/markets/medical","✚","Medical","Clinics, specialists, follow-ups."],
              ["/markets/admin-bpo","◩","Admin / BPO","Back-office automation."],
              ["/markets/education","◉","Education","Tutors, schools, parent comms."],
              ["/markets/sales","✦","Sales","Lead qual, pipeline follow-through."],
              ["/markets/logistics","⇄","Logistics","Supplier coordination, ETAs."],
              ["/markets/construction","▩","Construction","Site coordination, invoicing."],
              ["/markets/insurance","⊞","Insurance","Claim intake, policy follow-ups."],
              ["/markets/events","♪","Events","RSVPs, vendor chase, briefings."],
              ["/markets/ecommerce","◎","E-commerce","Order support, returns triage."],
              ["/markets/accounting","Σ","Accounting","Client chases, doc intake."],
            ].map(([href,ic,h,p]) => (
              <a className="px-market" href={href} key={href}><span className="ic">{ic}</span><h5>{h}</h5><p>{p}</p><span className="stat">{href}</span></a>
            ))}
          </div>
        </div>
      </section>

      <section className="px-demo" id="naoise-demo">
        <div className="px-wrap">
          <div className="px-sec-h">
            <span className="tag">/06 · Live sandbox</span>
            <h2>Try <em>Naoise</em> yourself.</h2>
            <div className="r">No signup · 10 turns free · <a href="#naoise">Full case study →</a></div>
          </div>
          <div className="px-console">
            <div className="px-sidebar">
              <div className="head">
                <div className="av">N</div>
                <strong>Naoise</strong>
                <small>Demo sandbox · online</small>
              </div>
              <div className="lbl">Try one →</div>
              <div className="px-chips">
                {[
                  ["Clear my inbox","email triage","I have 23 unread emails. Help."],
                  ["Clear Tuesday afternoon","calendar","Clear my Tuesday afternoon."],
                  ["Follow up with Ahmad","drafting","Follow up with Ahmad; he hasn't replied on the proposal."],
                  ["Brief me on tomorrow","research","Brief me on tomorrow's calls."],
                  ["Draft invoice chaser","money work","Draft a polite invoice chaser for a RM 12,400 overdue invoice to Studio Kenari."],
                  ["Research AI tools","research","Research the best three AI video tools under RM 100/mo."],
                ].map(([label,sub,prompt]) => (
                  <button className="px-chip" key={label} onClick={() => sendPrompt(prompt)}>{label}<small>▸ {sub}</small></button>
                ))}
              </div>
              <div className="meter">
                Demo turns remaining
                <span className="num">{turnsLeft}</span>
                <div className="bar"><div className="fill" style={{width:`${(turnsUsed/MAX_TURNS)*100}%`}} /></div>
              </div>
            </div>
            <div className="px-main">
              <div className="px-transcript" ref={transcriptRef}>
                <div className="t-msg sys">◆ Demo mode · responses simulated locally · no data leaves your browser</div>
                <div className="t-msg n">Hey. <em>I&apos;m Naoise.</em><br />Tap a task on the left, or tell me what you need. In production I live on your WhatsApp with real calendar, real email, real follow-ups.</div>
              </div>
              <form className="px-input-form" onSubmit={(e) => { e.preventDefault(); const v = naoiseInput.trim(); if (!v) return; setNaoiseInput(""); sendPrompt(v); }}>
                <input type="text" value={naoiseInput} onChange={(e) => setNaoiseInput(e.target.value)} placeholder="Ask Naoise to handle something..." />
                <button type="submit" className="px-btn solid">▸ Send</button>
              </form>
              {ctaOpen && (
                <div className="px-cta-overlay">
                  <h4>Demo turns used.</h4>
                  <p>That was a simulated Naoise. <strong style={{color:"var(--phos)"}}>The real Naoise</strong> lives on WhatsApp, writes on your calendar, chases your follow-ups, speaks three languages, and never forgets.</p>
                  <div style={{display:"flex",gap:"12px",flexWrap:"wrap",justifyContent:"center"}}>
                    <a className="px-btn wa" href="https://wa.me/60127478227?text=PROXI" target="_blank" rel="noopener noreferrer">▸ Message real Naoise · WhatsApp</a>
                    <a className="px-btn solid" href="/get-started">▸ Get started</a>
                    <button className="px-btn ghost" onClick={resetDemo}>▸ Reset demo</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section style={{paddingTop:0}}>
        <div className="px-wrap">
          <div className="px-msg-naoise">
            <div>
              <div className="lbl">◆ Real Naoise · WhatsApp</div>
              <h3>Want to <em>actually</em> talk to her?</h3>
              <p>Message <b style={{color:"var(--phos)"}}>+60 12-747 8227</b> with the word <b>&quot;PROXI&quot;</b>. Naoise enters demo-operator mode and answers in real time; same brain that runs Axon Avenue. Ask anything.</p>
              <div className="num">+60 12-747 8227 · msg: PROXI</div>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
              <a className="px-btn wa" href="https://wa.me/60127478227?text=PROXI" target="_blank" rel="noopener noreferrer">▸ Message on WhatsApp</a>
              <a className="px-btn" href="https://instagram.com/asknaoise" target="_blank" rel="noopener noreferrer">▸ DM @asknaoise · Instagram</a>
              <a className="px-btn ghost" href="https://threads.net/@asknaoise" target="_blank" rel="noopener noreferrer">▸ Find on Threads</a>
            </div>
          </div>
        </div>
      </section>

      <section id="naoise">
        <div className="px-wrap">
          <div className="px-sec-h">
            <span className="tag">/07 · Case study</span>
            <h2>Meet <em>Naoise</em>. In production.</h2>
            <div className="r">Live since Feb 2026 · Week 1 data</div>
          </div>
          <div className="px-case">
            <div className="stats">
              <div className="metric"><b>28</b><span>posts published · week 1</span><small>▸ across 6 platforms</small></div>
              <div className="metric"><b>6</b><span>platforms managed</span><small>▸ IG · Threads · Blog · Twitter · LinkedIn · TikTok</small></div>
              <div className="metric"><b>24/7</b><span>always-on presence</span><small>▸ under 5min DM response</small></div>
              <div className="metric"><b>0</b><span>commitments dropped</span><small>▸ 90 days live</small></div>
            </div>
            <div className="copy">
              <h3>Our first <em>Digital Engagement Officer.</em></h3>
              <p>Naoise went live February 2026 as Axon Avenue&apos;s operator-in-chief. She runs our social presence, lead qualification, content calendar, scouting, inbound, and comms; across six platforms, 24/7. She&apos;s the team member who makes everyone else more effective.</p>
              <div className="px-case-caps">
                <div className="cc"><b>Social</b>6 platforms · 28 posts/wk</div>
                <div className="cc"><b>Content</b>Calendar · drafting · voice-matched</div>
                <div className="cc"><b>Scouting</b>Leads · partners · press</div>
                <div className="cc"><b>Inbound</b>Qualification · routing</div>
                <div className="cc"><b>Comms</b>WhatsApp · email · DMs</div>
                <div className="cc"><b>Presence</b>Under 5min DM response</div>
              </div>
              <div style={{marginTop:"28px",display:"flex",gap:"10px",flexWrap:"wrap"}}>
                <a className="px-btn solid" href="/naoise">▸ Full case study</a>
                <a className="px-btn wa" href="https://wa.me/60127478227?text=PROXI" target="_blank" rel="noopener noreferrer">▸ Talk to Naoise</a>
                <a className="px-btn" href="/pa4pa">▸ PA4PA training</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="get-started" style={{borderTop:"1px solid var(--line)"}}>
        <div className="px-wrap">
          <div className="px-sec-h">
            <span className="tag">/08 · Get started</span>
            <h2>What would you want <em>your PA</em> to do?</h2>
            <div className="r">Pitch Naoise · she rates every one</div>
          </div>
          <div className="px-wall">
            <div className="wh">
              <h4>The <em>Wall</em></h4>
              <div className="legend">Ratings:<span>🔥 brilliant</span><span>👍 solid</span><span>🤔 nuance</span><span>🚫 not-for-proxi</span></div>
            </div>
            <div className="px-wall-ideas">
              {ideas.map((idea, i) => (
                <div className="idea" key={i}>
                  <span className="rating">{idea.rating}</span>
                  <span>{idea.text}</span>
                  <span className="who">{idea.who}</span>
                </div>
              ))}
            </div>
            <form className="px-wall-form" onSubmit={addIdea}>
              <input type="text" name="name" placeholder="Your name or @handle" required />
              <input type="email" name="email" placeholder="Email" required />
              <input type="text" name="idea" placeholder="What should Proxi do? Pitch it in one sentence." required />
              <button type="submit" className="px-btn solid">▸ Pitch</button>
            </form>
            <p style={{marginTop:"12px",fontSize:"11px",letterSpacing:".18em",textTransform:"uppercase",color:"var(--mute)"}}>Naoise reviews every pitch within 24h. Top-rated ideas shape the roadmap.</p>
          </div>
        </div>
      </section>

      <section id="cost">
        <div className="px-wrap">
          <div className="px-sec-h">
            <span className="tag">/09 · The math</span>
            <h2>One subscription. <em>Not a team.</em></h2>
            <div className="r"><a href="/cost">Full cost breakdown →</a></div>
          </div>
          <div className="px-costs">
            <div className="row head"><div>Option</div><div>Detail</div><div style={{textAlign:"right"}}>Hours covered</div></div>
            <div className="row"><div className="who">Human PA</div><div className="detail">RM 3,000 to 5,000/mo + overhead · <a href="/human-pa">honest comparison →</a></div><div className="hours">40 hrs / week</div></div>
            <div className="row"><div className="who">Freelance team</div><div className="detail">RM 2,000 to 4,000/mo · needs your coordination</div><div className="hours">Variable</div></div>
            <div className="row"><div className="who">Content + social + VA</div><div className="detail">RM 4,500 to 8,000/mo · three people to manage</div><div className="hours">Variable</div></div>
            <div className="row featured"><div className="who">Proxi · one operator</div><div className="detail">One subscription · RM 199 to 499/mo · no overhead · <a href="/pricing">see plans →</a></div><div className="hours">168 hrs / week</div></div>
          </div>
          <p className="px-cost-note">If your hourly rate is RM 500 and you&apos;re spending 12 hours a week on admin, that&apos;s <b>RM 6,000 of your time wasted every week</b>. A PA that costs a fraction of that isn&apos;t an expense; it&apos;s the highest-ROI decision you&apos;ll make this year.</p>
          <div className="px-roi-live">
            <div className="ctrl">
              <label>Hours/week on admin <b>{hRange} hrs</b></label>
              <input type="range" min="2" max="40" value={hRange} onChange={(e) => setHRange(+e.target.value)} />
              <label>Your hourly rate <b>{fmtRM(rRange)}</b></label>
              <input type="range" min="50" max="1000" step="25" value={rRange} onChange={(e) => setRRange(+e.target.value)} />
              <label>Plan <b>{plan === 199 ? "Proxi · RM 199/mo" : "Proxi Max · RM 499/mo"}</b></label>
              <div style={{display:"flex",gap:"8px"}}>
                <button type="button" className={plan===199?"px-btn solid":"px-btn ghost"} onClick={() => setPlan(199)}>Proxi · 199</button>
                <button type="button" className={plan===499?"px-btn solid":"px-btn ghost"} onClick={() => setPlan(499)}>Max · 499</button>
              </div>
            </div>
            <div className="out">
              <div className="big">{fmtRM(net)}</div>
              <div className="lbl">Net value returned per month</div>
              <div className="grid">
                <div className="g"><b>{Math.round(monthlyHours)} hrs</b><span>Time saved / month</span></div>
                <div className="g"><b>{fmtRM(monthlyValue)}</b><span>Value · at your rate</span></div>
                <div className="g"><b>{fmtRM(plan)}</b><span>Proxi cost / month</span></div>
                <div className="g"><b>{multi}×</b><span>Return multiple</span></div>
              </div>
              <a className="px-btn solid" href="/roi" style={{marginTop:"18px",width:"100%",justifyContent:"center"}}>▸ Open full ROI page</a>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing">
        <div className="px-wrap">
          <div className="px-sec-h">
            <span className="tag">/10 · Plans</span>
            <h2>Simple plans. <em>Real</em> value.</h2>
            <div className="r">No lock-in · <a href="/pricing">Full comparison →</a></div>
          </div>
          <div className="px-plans">
            <div className="px-plan">
              <span className="tier-tag">00 · Free</span>
              <h3>OpenClaw</h3>
              <div className="price">RM0<sub>/month</sub></div>
              <div className="setup">Self-host · bring your own keys</div>
              <div className="desc">Build your own AI PA with our open-source framework. Same underlying operator kernel.</div>
              <ul>
                <li>OpenClaw kernel · MIT license</li>
                <li>Community Discord &amp; guides</li>
                <li>Self-hosted on your infra</li>
                <li>No support SLA</li>
              </ul>
              <a className="px-btn ghost" href="/pricing/free">▸ Explore OpenClaw</a>
            </div>
            <div className="px-plan">
              <span className="tier-tag">01 · Proxi</span>
              <h3>Proxi</h3>
              <div className="price">RM199<sub>/month</sub></div>
              <div className="setup">+ RM500 one-time setup</div>
              <div className="desc">Your personal operator on WhatsApp. Email, calendar, follow-ups, drafting, research.</div>
              <ul>
                <li>Dedicated operator, trained on you</li>
                <li>WhatsApp + email + Slack channels</li>
                <li>72h full Max trial on redemption</li>
                <li>7-day money-back guarantee</li>
                <li>3 to 5 day setup</li>
              </ul>
              <a className="px-btn solid" href="/pricing/proxi">▸ Get Proxi</a>
            </div>
            <div className="px-plan featured">
              <span className="ribbon">Most chosen</span>
              <span className="tier-tag">02 · Max</span>
              <h3>Proxi Max</h3>
              <div className="price">RM499<sub>/month</sub></div>
              <div className="setup">+ RM2,000 one-time setup · founding members waived</div>
              <div className="desc">Your operator on superhero mode. Admin + custom workflows + automation + integrations.</div>
              <ul>
                <li>Everything in Proxi</li>
                <li>Custom workflow design &amp; orchestration</li>
                <li>Deep integrations (Notion, Stripe, Linear, HubSpot)</li>
                <li>Priority operator · 2-min SLA during day</li>
                <li>Quarterly workflow audits</li>
                <li>5 to 10 day setup</li>
              </ul>
              <a className="px-btn amber" href="/proxi-max">▸ Go superhero</a>
            </div>
          </div>
          <div className="px-enterprise">
            <div>
              <h4>Enterprise · Concierge build</h4>
              <p>Custom AI operators for your team or firm. We design the agents, you run the business. Not SaaS; partnership.</p>
            </div>
            <a className="px-btn amber" href="/pricing/enterprise">▸ Let&apos;s talk</a>
          </div>
          <div className="px-trial-bar">
            <span className="lbl">72h Max trial · sample</span>
            <div className="track" />
            <span className="num">42h remaining <a href="/trial-upgrade" style={{fontSize:"11px",letterSpacing:".22em",textTransform:"uppercase",color:"var(--phos)",borderBottom:"1px solid var(--phos)",paddingBottom:"2px",marginLeft:"14px",fontFamily:"JetBrains Mono,monospace",fontStyle:"normal"}}>▸ Upgrade now</a></span>
          </div>
        </div>
      </section>

      <section id="how">
        <div className="px-wrap">
          <div className="px-sec-h">
            <span className="tag">/11 · Getting started</span>
            <h2>Ten minutes. <em>No apps</em> to install.</h2>
            <div className="r">Setup · 24 to 48h from redemption</div>
          </div>
          <div className="px-how-steps">
            <div className="px-hstep"><span className="time">~ 3 min</span><div className="no">I.</div><h4>Tell us about you.</h4><p>A quick chat so we understand your work, preferences, what you need help with, what your voice sounds like.</p><a className="link" href="/get-started">▸ /get-started</a></div>
            <div className="px-hstep"><span className="time">~ 24 to 48h</span><div className="no">II.</div><h4>We configure your PA.</h4><p>Matched to your tone, your schedule, your priorities. Not a generic bot; a dedicated operator onboarded by a human.</p><a className="link" href="/setup">▸ /setup</a></div>
            <div className="px-hstep"><span className="time">instant</span><div className="no">III.</div><h4>Start talking.</h4><p>Message your PA however you want. That&apos;s it. No dashboards, no learning curve, no plugins, no training prompts.</p><a className="link" href="/always-on">▸ /always-on</a></div>
          </div>
        </div>
      </section>

      <section style={{paddingTop:0}}>
        <div className="px-wrap">
          <div className="px-trust">
            <div className="px-tb"><span className="ic">e</span>End-to-end encrypted · <a href="/discretion" style={{color:"var(--phos)",borderBottom:"1px solid var(--phos)",paddingBottom:"1px"}}>pledge →</a></div>
            <div className="px-tb"><span className="ic">p</span>Your data is never used for training</div>
            <div className="px-tb"><span className="ic">x</span>Cancel any time · no contracts</div>
            <div className="px-tb"><span className="ic">g</span>7-day money-back guarantee</div>
          </div>
        </div>
      </section>

      <section id="faq">
        <div className="px-wrap">
          <div className="px-sec-h">
            <span className="tag">/13 · FAQ</span>
            <h2>Things <em>worth</em> asking.</h2>
          </div>
          <div className="px-faqs">
            <details open><summary>Do I need to install any app?</summary><div className="a">No. Your Proxi operator meets you where you already work; WhatsApp, email, Slack, iMessage, whatever you use. See <a href="/always-on">/always-on</a>.</div></details>
            <details><summary>How is this different from ChatGPT or Siri?</summary><div className="a">Those are tools you operate. Proxi is an operator that works for you. It knows your clients, remembers your preferences, takes initiative, gets better every week. Full argument at <a href="/not-a-chatbot">/not-a-chatbot</a>.</div></details>
            <details><summary>What AI powers Proxi? Can you name the models?</summary><div className="a">We run a <b>frontier-class, multi-model operator core</b>; always on the best-available reasoning model for the task at hand. We deliberately don&apos;t tie our name to any single AI vendor: when a better model ships, your Naoise gets smarter overnight without you doing a thing.</div></details>
            <details><summary>Is my information safe?</summary><div className="a">Absolutely. All data is encrypted at rest and in transit, never shared, never sold, never used for training. NDAs on request. Audit logs on Max. See our <a href="/discretion">Discretion pledge</a>.</div></details>
            <details><summary>What tasks can Proxi handle?</summary><div className="a">Email, calendar, follow-ups, drafting, research, workflow automation, process orchestration, client coordination. Try it live at <a href="#naoise-demo">the Naoise sandbox ↑</a>. Industries at <a href="/markets">/markets</a>.</div></details>
            <details><summary>Can I talk to Naoise directly before committing?</summary><div className="a">Yes; message <b>+60 12-747 8227</b> on WhatsApp with the word <b>&quot;PROXI&quot;</b>. Naoise enters demo-operator mode and answers in real time. Or DM <a href="https://instagram.com/asknaoise" target="_blank" rel="noopener noreferrer">@asknaoise on Instagram</a>.</div></details>
            <details><summary>Can I try before committing?</summary><div className="a">Yes. Every invitation code unlocks 72 hours of full Proxi Max access. No credit card required. After 72 hours, you decide. See <a href="/trial-upgrade">trial upgrade terms</a>.</div></details>
            <details><summary>What if I want to cancel?</summary><div className="a">Cancel any time. No contracts, no penalties, no retention calls. 7-day money-back guarantee. See <a href="/terms">Terms</a>.</div></details>
            <details><summary>Do you offer something for people who already have a human PA?</summary><div className="a">Yes; <a href="/pa4pa">PA4PA (PA for PA)</a>. A 4-week intensive that trains your human PA to use AI tools so they deliver 5× the output. RM 75/mo (reduced from RM 499).</div></details>
            <details><summary>Do you support BM and mixed language?</summary><div className="a">Yes; BM, English, Chinese, and mixed. Naoise detects the sender&apos;s language and responds in kind, in your voice. Tested against real Malaysian conversations.</div></details>
          </div>
        </div>
      </section>

      <section className="px-end" id="cta-final">
        <div className="px-wrap">
          <div className="px-over" style={{justifyContent:"center"}}>End transmission</div>
          <h2>Never miss a <em>message.</em><br />Never miss a <em>customer.</em></h2>
          <p>Stop doing work that isn&apos;t yours. Proxi handles it, discreetly, every hour of the week. Invitations are rolling; the current cohort closes when full.</p>
          <div className="actions">
            <a className="px-btn solid" href="#top">▸ I have an invite code</a>
            <a className="px-btn wa" href="https://wa.me/60127478227?text=PROXI" target="_blank" rel="noopener noreferrer">▸ Talk to Naoise · WhatsApp</a>
            <a className="px-btn ghost" href="/waitlist">▸ Join the waitlist</a>
          </div>
          <p style={{marginTop:"28px",color:"var(--mute)",fontSize:"10px",letterSpacing:".24em",textTransform:"uppercase"}}>Setup 24 to 48h · 7-day money-back · Cancel any time · No credit card to try</p>
        </div>
      </section>

      <footer className="px-footer">
        <div className="px-wrap">
          <div className="grid">
            <div>
              <div className="sig">; Proxi.</div>
              <div className="address">By Axon Avenue PLT · LLP0035183-LGN<br />Kuala Lumpur · Malaysia<br />WhatsApp · +60 12-747 8227<br />Trigger: &quot;PROXI&quot;</div>
              <div className="socials">
                <a href="https://wa.me/60127478227?text=PROXI" target="_blank" rel="noopener noreferrer">▸ WA</a>
                <a href="https://instagram.com/asknaoise" target="_blank" rel="noopener noreferrer">▸ IG</a>
                <a href="https://threads.net/@asknaoise" target="_blank" rel="noopener noreferrer">▸ Threads</a>
                <a href="https://naoise-blog.vercel.app" target="_blank" rel="noopener noreferrer">▸ Blog</a>
              </div>
              <div className="pa4pa">Already have a human PA? → <a href="/pa4pa">Proxi for the PA</a></div>
            </div>
            <div>
              <h5>Product</h5>
              <a href="#why">Why Proxi</a>
              <a href="/reclaim">Reclaim time</a>
              <a href="/always-on">Always on</a>
              <a href="/nothing-falls">Nothing falls</a>
              <a href="/not-a-chatbot">Not a chatbot</a>
              <a href="/discretion">Discretion</a>
              <a href="/presence">Presence</a>
            </div>
            <div>
              <h5>Plans &amp; setup</h5>
              <a href="/pricing">Pricing overview</a>
              <a href="/pricing/free">Free · OpenClaw</a>
              <a href="/pricing/proxi">Proxi · RM 199</a>
              <a href="/proxi-max">Proxi Max · RM 499</a>
              <a href="/pricing/enterprise">Enterprise</a>
              <a href="/setup">Setup process</a>
              <a href="/trial-upgrade">Trial upgrade</a>
              <a href="/roi">ROI calculator</a>
            </div>
            <div>
              <h5>Stories &amp; ideas</h5>
              <a href="/naoise">Case study · Naoise</a>
              <a href="/markets">All 14 markets</a>
              <a href="/blog">Blog · 12 posts</a>
              <a href="/get-started">The Wall · ideas</a>
              <a href="/cost">Cost breakdown</a>
              <a href="/human-pa">AI vs Human PA</a>
              <a href="/pa4pa">PA4PA training</a>
            </div>
            <div>
              <h5>Access</h5>
              <a href="/invite">Redeem invite</a>
              <a href="/waitlist">Join waitlist</a>
              <a href="/get-started">Pitch an idea</a>
              <a href="https://wa.me/60127478227?text=PROXI" target="_blank" rel="noopener noreferrer">Message Naoise</a>
              <a href="/terms">Terms</a>
            </div>
          </div>
          <div className="colophon">
            <span>© 2026 Axon Avenue PLT · LLP0035183-LGN</span>
            <span>Built in KL · Powered by frontier-class intelligence</span>
            <span>Status · ● operational</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
