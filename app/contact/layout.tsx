import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Try a Demo | HRandME',
  description: 'Book a free demo of HRandME and see how AI-guided HR software can transform your small HR team. Get started today.',
  alternates: {
    canonical: 'https://hrandme.com/contact',
  },
  openGraph: {
    title: 'Try a Demo | HRandME',
    description: 'Book a free demo of HRandME and see how AI-guided HR software can transform your small HR team.',
    url: 'https://hrandme.com/contact',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
