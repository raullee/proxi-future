import { NextResponse } from 'next/server';
import { kv } from '@vercel/kv';

export async function GET() {
  try {
    const ideas = await kv.lrange('ideas', 0, -1);
    return NextResponse.json({ ideas: ideas || [] });
  } catch (e) {
    return NextResponse.json({ ideas: [], error: 'KV not configured' });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, idea } = body;

    if (!idea || !idea.trim()) {
      return NextResponse.json({ error: 'Idea is required' }, { status: 400 });
    }

    const entry = {
      id: Date.now().toString(),
      name: name?.trim() || 'Anonymous',
      email: email?.trim() || '',
      idea: idea.trim(),
      rating: null,
      tier: null,
      submittedAt: new Date().toISOString(),
    };

    try {
      await kv.lpush('ideas', entry);
    } catch (e) {
      // Fallback: if KV not set up, just accept silently
    }

    return NextResponse.json({ success: true, id: entry.id });
  } catch (e) {
    return NextResponse.json({ error: 'Failed to submit' }, { status: 500 });
  }
}
