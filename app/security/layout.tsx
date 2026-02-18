import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Security | HRandME',
  description: 'HRandME is built with enterprise-grade security. Learn about our data protection, encryption, and compliance standards.',
  alternates: { canonical: 'https://hrandme.com/security' },
  openGraph: { title: 'Security | HRandME', url: 'https://hrandme.com/security' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
