import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mobile App | HRandME',
  description: 'Manage HR on the go with the HRandME mobile app. Approve requests, view dashboards, and stay connected with your team anywhere.',
  alternates: { canonical: 'https://hrandme.com/product/mobile-app' },
  openGraph: { title: 'Mobile App | HRandME', url: 'https://hrandme.com/product/mobile-app' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
