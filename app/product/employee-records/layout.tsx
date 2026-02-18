import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Employee Record Management | HRandME',
  description: 'Centralize and manage all employee records securely. Digital files, document management, and compliance tracking for small HR teams.',
  alternates: { canonical: 'https://hrandme.com/product/employee-records' },
  openGraph: { title: 'Employee Record Management | HRandME', url: 'https://hrandme.com/product/employee-records' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
