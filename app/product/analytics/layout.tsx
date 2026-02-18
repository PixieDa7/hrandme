import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HR Analytics | HRandME',
  description: 'Turn HR data into actionable insights. Track headcount, turnover, engagement, and more with HRandME Analytics.',
  alternates: { canonical: 'https://hrandme.com/product/analytics' },
  openGraph: { title: 'HR Analytics | HRandME', url: 'https://hrandme.com/product/analytics' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
