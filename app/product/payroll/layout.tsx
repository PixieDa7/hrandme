import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Payroll Integration | HRandME',
  description: 'Seamlessly integrate payroll with ADP Run, Ceridian Powerpay, and more. Accurate, automated payroll for small HR teams.',
  alternates: { canonical: 'https://hrandme.com/product/payroll' },
  openGraph: { title: 'Payroll Integration | HRandME', url: 'https://hrandme.com/product/payroll' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
