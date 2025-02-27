import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  try {
    // Get unread messages count
    const unreadMessages = await prisma.contact.count({
      where: {
        status: 'pending'
      }
    })

    // Get services count
    const servicesCount = await prisma.service.count()

    // Get content blocks count
    const contentCount = await prisma.content.count()

    return NextResponse.json({
      messages: unreadMessages,
      services: servicesCount,
      content: contentCount
    })
  } catch (error) {
    console.error('Error fetching admin stats:', error)
    return NextResponse.json(
      { error: 'Failed to fetch stats' },
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
  }
} 