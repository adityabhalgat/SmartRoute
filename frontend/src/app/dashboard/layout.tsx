'use client'

import Navigation from '@/components/Navigation'
import NotificationToast from '@/components/NotificationToast'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      <NotificationToast />
    </div>
  )
} 