import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Solutions | HRandME',
  description: 'HR solutions designed for small HR teams. From onboarding to offboarding, HRandME covers every stage of the employee lifecycle.',
  alternates: { canonical: 'https://hrandme.com/solutions' },
  openGraph: { title: 'Solutions | HRandME', url: 'https://hrandme.com/solutions' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
