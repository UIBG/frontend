// app/api/auth/route.ts
import { NextResponse } from 'next/server';

const API_URL = 'http://localhost:8080/api/v1/auth';

export async function POST(request: Request) {
    const { username, password, type } = await request.json();

    let apiEndpoint = `${API_URL}/authenticate`;

    const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (response.ok) {
        return NextResponse.json(data);
    } else {
        return NextResponse.json(data, { status: response.status });
    }
}
