import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params
    const { status } = await request.json()

    // Validate status value
    if (!['pending', 'read', 'archived'].includes(status)) {
      return NextResponse.json(
        { error: 'Invalid status value' },
        { status: 400 }
      )
    }

    // Update the message
    const updatedMessage = await prisma.contact.update({
      where: { id },
      data: { status }
    })

    return NextResponse.json(updatedMessage)
  } catch (error) {
    console.error('Error updating message:', error)
    return NextResponse.json(
      { error: 'Failed to update message' },
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
  }
} 