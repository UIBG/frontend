// app/api/auth/route.ts
import { NextResponse } from 'next/server';

const API_URL = "backend-production-fd6d.up.railway.app/api/v1/auth/register";

export async function POST(request: Request) {
  const { username, email, password, type } = await request.json();

  let apiEndpoint = `${API_URL}/register`;

  const response = await fetch(apiEndpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, email, password }),
  });

  const data = await response.json();

  if (response.ok) {
    return NextResponse.json(data);
  } else {
    return NextResponse.json(data, { status: response.status });
  }
}
