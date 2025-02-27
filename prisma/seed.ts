import { PrismaClient } from '@prisma/client'
import * as crypto from 'crypto'

const prisma = new PrismaClient()

// Simple password hashing for demonstration purposes
// In production, use a proper hashing library like bcrypt
function hashPassword(password: string): string {
  return crypto.createHash('sha256').update(password).digest('hex')
}

async function main() {
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@millerlights.com'
  const adminPassword = process.env.ADMIN_PASSWORD || 'admin123'

  // Create admin user if it doesn't exist
  const existingAdmin = await prisma.user.findUnique({
    where: { email: adminEmail }
  })

  if (!existingAdmin) {
    console.log(`Creating admin user: ${adminEmail}`)
    await prisma.user.create({
      data: {
        email: adminEmail,
        password: hashPassword(adminPassword),
        role: 'admin'
      }
    })
  }

  // Create initial services
  const serviceCount = await prisma.service.count()
  if (serviceCount === 0) {
    console.log('Creating initial services')
    await prisma.service.createMany({
      data: [
        {
          title: 'Residential Electrical Services',
          description: 'Complete electrical solutions for your home, from repairs to installations.',
          price: 99.99
        },
        {
          title: 'Commercial Electrical Services',
          description: 'Professional electrical services for businesses and commercial properties.',
          price: 199.99
        },
        {
          title: 'Emergency Electrical Services',
          description: '24/7 emergency electrical services for both residential and commercial clients.',
          price: 149.99
        }
      ]
    })
  }

  // Create initial content
  const contentCount = await prisma.content.count()
  if (contentCount === 0) {
    console.log('Creating initial content')
    await prisma.content.createMany({
      data: [
        {
          key: 'homepage_hero_title',
          value: 'Your Trusted Electrical Service Provider'
        },
        {
          key: 'homepage_hero_description',
          value: 'Miller Lights provides professional electrical services for residential and commercial properties. With years of experience, we ensure safety, reliability, and excellence in every project.'
        },
        {
          key: 'about_company',
          value: 'Miller Lights has been providing professional electrical services to residential and commercial clients for over a decade. Our commitment to quality, safety, and customer satisfaction has made us a trusted name in the electrical industry.'
        },
        {
          key: 'contact_info_phone',
          value: '(555) 123-4567'
        },
        {
          key: 'contact_info_email',
          value: 'contact@millerlights.com'
        },
        {
          key: 'contact_info_address',
          value: '123 Main Street, Anytown, USA 12345'
        }
      ]
    })
  }

  console.log('Database seeding completed')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 