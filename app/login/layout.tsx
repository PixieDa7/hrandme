import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login | HRandME',
  description: 'Log in to your HRandME account to access your HR dashboard, payroll, performance tools, and more.',
  alternates: {
    canonical: 'https://hrandme.com/login',
  },
  openGraph: {
    title: 'Login | HRandME',
    description: 'Log in to your HRandME account.',
    url: 'https://hrandme.com/login',
  },
}

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
