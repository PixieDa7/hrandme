import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Leave Management | HRandME',
  description: 'Automate leave requests, approvals, and tracking. Manage vacation, sick days, and custom leave policies with ease.',
  alternates: { canonical: 'https://hrandme.com/product/leave-management' },
  openGraph: { title: 'Leave Management | HRandME', url: 'https://hrandme.com/product/leave-management' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
