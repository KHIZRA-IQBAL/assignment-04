import { NextResponse } from 'next/server';

export async function GET() {
  const apiUrl = 'https://jsonplaceholder.typicode.com/posts'; 
  
    const res = await fetch(apiUrl);
    const data = await res.json();

    return NextResponse.json(data);
  
}
