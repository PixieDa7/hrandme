import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Compensation Management | HRandME',
  description: 'Manage pay equity and compensation planning with data-driven insights. Built for small HR teams.',
  alternates: { canonical: 'https://hrandme.com/product/compensation' },
  openGraph: { title: 'Compensation Management | HRandME', url: 'https://hrandme.com/product/compensation' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
