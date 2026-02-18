import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Recruitment | HRandME',
  description: 'Streamline hiring with AI-powered applicant tracking and candidate management. Post jobs, screen applicants, and onboard faster.',
  alternates: { canonical: 'https://hrandme.com/product/recruitment' },
  openGraph: { title: 'Recruitment | HRandME', url: 'https://hrandme.com/product/recruitment' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
