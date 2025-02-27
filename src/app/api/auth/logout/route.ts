import { NextResponse } from 'next/server'

export async function POST() {
  // Create a response
  const response = NextResponse.json({ success: true })
  
  // Clear the auth cookie
  response.cookies.set({
    name: 'auth_token',
    value: '',
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    expires: new Date(0), // Set expiration to the past
    path: '/',
  })

  return response
} 