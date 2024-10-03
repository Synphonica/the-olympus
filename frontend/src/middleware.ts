// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const token = req.cookies.get('token');
  const role = req.cookies.get('userRole');

  const { pathname } = req.nextUrl;

  if (pathname.startsWith('/admin') && role !== 'ADMIN' && role !== 'SUPERADMIN') {
    return NextResponse.redirect('/auth/login');
  }

  if (pathname.startsWith('/superadmin') && role !== 'SUPERADMIN') {
    return NextResponse.redirect('/auth/login');
  }

  return NextResponse.next();
}
