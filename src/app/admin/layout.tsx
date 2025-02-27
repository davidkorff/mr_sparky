'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const navigation = [
  { name: 'Dashboard', href: '/admin' },
  { name: 'Messages', href: '/admin/messages' },
  { name: 'Services', href: '/admin/services' },
  { name: 'Content', href: '/admin/content' },
]

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    // Check authentication status
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/auth/check')
        if (!response.ok) {
          router.push('/admin/login')
        } else {
          setIsAuthenticated(true)
        }
      } catch (error) {
        router.push('/admin/login')
      }
    }

    checkAuth()
  }, [router])

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <div className="flex">
              <div className="flex flex-shrink-0 items-center">
                <Link href="/admin" className="text-xl font-bold text-blue-600">
                  Miller Lights Admin
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-blue-600"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex items-center">
              <button
                onClick={async () => {
                  await fetch('/api/auth/logout', { method: 'POST' })
                  router.push('/admin/login')
                }}
                className="text-sm font-medium text-gray-500 hover:text-gray-900"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="py-10">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    </div>
  )
} 