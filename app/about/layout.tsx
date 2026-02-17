import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About HRandME | Built by HR, Guided by AI',
  description: 'Learn about HRandME—proudly Canadian HR software built for small HR teams. Our mission is to deliver enterprise-grade HR capability without the complexity.',
  alternates: {
    canonical: 'https://hrandme.com/about',
  },
  openGraph: {
    title: 'About HRandME | Built by HR, Guided by AI',
    description: 'Learn about HRandME—proudly Canadian HR software built for small HR teams.',
    url: 'https://hrandme.com/about',
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
