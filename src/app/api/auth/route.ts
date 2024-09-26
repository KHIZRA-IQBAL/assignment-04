// app/api/auth/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { username, password } = await request.json();

  // Simple hardcoded authentication
  if (username === 'admin' && password === 'password') {
    return NextResponse.json({ token: 'fake-token' });
  } else {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }
}
