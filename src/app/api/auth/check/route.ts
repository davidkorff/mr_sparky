import { NextResponse } from 'next/server'
import { verify } from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

export async function GET(request: Request) {
  try {
    // Get the token from cookies
    const token = request.headers.get('cookie')?.split(';')
      .find(c => c.trim().startsWith('auth_token='))
      ?.split('=')[1]
    
    if (!token) {
      return NextResponse.json(
        { authenticated: false, message: 'No token found' },
        { status: 401 }
      )
    }

    try {
      // Verify the token
      verify(token, JWT_SECRET)
      return NextResponse.json({ authenticated: true })
    } catch (error) {
      return NextResponse.json(
        { authenticated: false, message: 'Invalid token' },
        { status: 401 }
      )
    }
  } catch (error) {
    return NextResponse.json(
      { authenticated: false, message: 'Server error' },
      { status: 500 }
    )
  }
} 