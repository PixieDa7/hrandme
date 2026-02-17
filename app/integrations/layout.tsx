import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Integrations | HRandME',
  description: 'Connect HRandME with the tools you already use—ADP Run, Ceridian Powerpay, Manulife, Sun Life, Microsoft Office Suite, and more.',
  alternates: {
    canonical: 'https://hrandme.com/integrations',
  },
  openGraph: {
    title: 'Integrations | HRandME',
    description: 'Connect HRandME with ADP, Ceridian, Manulife, Sun Life, Microsoft Office, and more.',
    url: 'https://hrandme.com/integrations',
  },
}

export default function IntegrationsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
