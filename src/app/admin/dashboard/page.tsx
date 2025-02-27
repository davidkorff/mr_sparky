'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { 
  UserIcon, 
  EnvelopeIcon, 
  BoltIcon, 
  PencilSquareIcon 
} from '@heroicons/react/24/outline'

type StatType = {
  id: string
  name: string
  value: number | string
  icon: React.ReactNode
  href: string
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<StatType[]>([
    {
      id: 'messages',
      name: 'Unread Messages',
      value: '...',
      icon: <EnvelopeIcon className="h-6 w-6 text-blue-600" />,
      href: '/admin/messages'
    },
    {
      id: 'services',
      name: 'Services',
      value: '...',
      icon: <BoltIcon className="h-6 w-6 text-blue-600" />,
      href: '/admin/services'
    },
    {
      id: 'content',
      name: 'Content Blocks',
      value: '...',
      icon: <PencilSquareIcon className="h-6 w-6 text-blue-600" />,
      href: '/admin/content'
    },
  ])

  useEffect(() => {
    // Fetch dashboard stats
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/admin/stats')
        if (response.ok) {
          const data = await response.json()
          
          // Update stats with real data
          setStats(prevStats => 
            prevStats.map(stat => {
              if (data[stat.id] !== undefined) {
                return { ...stat, value: data[stat.id] }
              }
              return stat
            })
          )
        }
      } catch (error) {
        console.error('Error fetching dashboard stats:', error)
      }
    }

    fetchStats()
  }, [])

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900">Admin Dashboard</h1>
      <p className="mt-2 text-sm text-gray-700">
        Welcome to the Miller Lights admin panel. Manage your website content, services, and customer messages.
      </p>

      <div className="mt-8">
        <h2 className="text-lg font-medium text-gray-900">Overview</h2>
        <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"
            >
              <Link href={stat.href}>
                <div className="truncate text-sm font-medium text-gray-500">
                  <div className="flex items-center space-x-2">
                    {stat.icon}
                    <span>{stat.name}</span>
                  </div>
                </div>
                <div className="mt-4 text-3xl font-semibold tracking-tight text-gray-900">
                  {stat.value}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-medium text-gray-900">Quick Actions</h2>
        <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <Link 
            href="/admin/messages"
            className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            View Messages
          </Link>
          <Link 
            href="/admin/services/new"
            className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            Add Service
          </Link>
          <Link 
            href="/admin/content"
            className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            Edit Content
          </Link>
          <Link 
            href="/" 
            target="_blank" 
            className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            View Website
          </Link>
        </div>
      </div>
    </div>
  )
} 