'use client'

import { useState, useEffect } from 'react'
import { format } from 'date-fns'

type Message = {
  id: string
  name: string
  email: string
  phone: string
  message: string
  createdAt: string
  status: 'pending' | 'read' | 'archived'
}

export default function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<'all' | 'pending' | 'read' | 'archived'>('all')

  useEffect(() => {
    fetchMessages()
  }, [])

  const fetchMessages = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/admin/messages')
      if (response.ok) {
        const data = await response.json()
        setMessages(data)
      }
    } catch (error) {
      console.error('Error fetching messages:', error)
    } finally {
      setLoading(false)
    }
  }

  const updateMessageStatus = async (id: string, status: 'pending' | 'read' | 'archived') => {
    try {
      const response = await fetch(`/api/admin/messages/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      })

      if (response.ok) {
        // Update local state
        setMessages(messages.map(msg => 
          msg.id === id ? { ...msg, status } : msg
        ))
      }
    } catch (error) {
      console.error('Error updating message status:', error)
    }
  }

  const filteredMessages = filter === 'all' 
    ? messages 
    : messages.filter(msg => msg.status === filter)

  return (
    <div>
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold text-gray-900">Messages</h1>
          <p className="mt-2 text-sm text-gray-700">
            View and manage contact form submissions from your website visitors.
          </p>
        </div>
      </div>

      <div className="mt-4 flex space-x-2">
        <button
          onClick={() => setFilter('all')}
          className={`px-3 py-2 text-sm font-medium rounded-md ${
            filter === 'all' 
              ? 'bg-blue-600 text-white' 
              : 'bg-white text-gray-700 border border-gray-300'
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter('pending')}
          className={`px-3 py-2 text-sm font-medium rounded-md ${
            filter === 'pending' 
              ? 'bg-blue-600 text-white' 
              : 'bg-white text-gray-700 border border-gray-300'
          }`}
        >
          Pending
        </button>
        <button
          onClick={() => setFilter('read')}
          className={`px-3 py-2 text-sm font-medium rounded-md ${
            filter === 'read' 
              ? 'bg-blue-600 text-white' 
              : 'bg-white text-gray-700 border border-gray-300'
          }`}
        >
          Read
        </button>
        <button
          onClick={() => setFilter('archived')}
          className={`px-3 py-2 text-sm font-medium rounded-md ${
            filter === 'archived' 
              ? 'bg-blue-600 text-white' 
              : 'bg-white text-gray-700 border border-gray-300'
          }`}
        >
          Archived
        </button>
      </div>

      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              {loading ? (
                <div className="py-16 text-center">
                  <p>Loading messages...</p>
                </div>
              ) : filteredMessages.length === 0 ? (
                <div className="py-16 text-center">
                  <p>No messages found.</p>
                </div>
              ) : (
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Name
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Email
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Phone
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Date
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Status
                      </th>
                      <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                        <span className="sr-only">Actions</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {filteredMessages.map((message) => (
                      <tr key={message.id}>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">{message.name}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">{message.email}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">{message.phone}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {format(new Date(message.createdAt), 'MMM d, yyyy')}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm">
                          <span
                            className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                              message.status === 'pending'
                                ? 'bg-yellow-100 text-yellow-800'
                                : message.status === 'read'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-gray-100 text-gray-800'
                            }`}
                          >
                            {message.status}
                          </span>
                        </td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                          {message.status === 'pending' && (
                            <button
                              onClick={() => updateMessageStatus(message.id, 'read')}
                              className="text-blue-600 hover:text-blue-900 mr-4"
                            >
                              Mark as Read
                            </button>
                          )}
                          {message.status !== 'archived' && (
                            <button
                              onClick={() => updateMessageStatus(message.id, 'archived')}
                              className="text-red-600 hover:text-red-900"
                            >
                              Archive
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 