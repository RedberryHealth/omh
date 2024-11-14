// src/app/api/hello/route.ts
// Hello API Route (src/app/api/hello/route.ts):

import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'Hello from API!' });
}
