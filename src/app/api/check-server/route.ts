import BACKEND_URL from '@/constants/backend';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const response = await fetch(`${BACKEND_URL}`);

    if (response.ok) {
      return NextResponse.json({ status: 'running' });
    } else {
      return NextResponse.json({ status: 'stopped' }, { status: 503 });
    }
  } catch (error) {
    return NextResponse.json({ status: 'stopped' }, { status: 503 });
  }
}