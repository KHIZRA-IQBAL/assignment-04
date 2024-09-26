// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token');

  // Redirect to login if no token is found and trying to access the dashboard
  if (!token && request.nextUrl.pathname === '/dashboard') {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

// Protect only the dashboard route
export const config = {
  matcher: '/dashboard',
};
