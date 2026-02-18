import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Performance Management | HRandME',
  description: 'Drive employee growth with continuous feedback, goal tracking, and performance reviews—built for small HR teams.',
  alternates: { canonical: 'https://hrandme.com/product/performance' },
  openGraph: { title: 'Performance Management | HRandME', url: 'https://hrandme.com/product/performance' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
