import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Intelligence | HRandME',
  description: 'Leverage AI-guided insights to make smarter HR decisions. Automate workflows, predict trends, and reduce manual work.',
  alternates: { canonical: 'https://hrandme.com/product/ai-intelligence' },
  openGraph: { title: 'AI Intelligence | HRandME', url: 'https://hrandme.com/product/ai-intelligence' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
