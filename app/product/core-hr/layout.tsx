import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Core HR | HRandME',
  description: 'Manage your entire employee lifecycle with HRandME Core HR—onboarding, records, org charts, and compliance tools built for small HR teams.',
  alternates: {
    canonical: 'https://hrandme.com/product/core-hr',
  },
  openGraph: {
    title: 'Core HR | HRandME',
    description: 'Manage your entire employee lifecycle with HRandME Core HR.',
    url: 'https://hrandme.com/product/core-hr',
  },
}

export default function CoreHRLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
