import { NextResponse } from 'next/server';

export function middleware(request) {
  const auth = request.headers.get('authorization');

  if (auth) {
    const [scheme, encoded] = auth.split(' ');
    if (scheme === 'Basic') {
      const decoded = atob(encoded);
      const [user, pass] = decoded.split(':');
      if (user === 'proxi' && pass === 'future2026') {
        return NextResponse.next();
      }
    }
  }

  return new NextResponse('Authentication required', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="Proxi Future Preview"' },
  });
}

export const config = { matcher: ['/((?!_next|favicon.ico).*)'] };
