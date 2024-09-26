import { NextResponse } from 'next/server';

export async function GET() {
  const apiUrl = 'https://jsonplaceholder.typicode.com/posts'; 
  try {
    const res = await fetch(apiUrl);
    const data = await res.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error:'Failed to fetch data' }, { status: 500 });
  }
}
