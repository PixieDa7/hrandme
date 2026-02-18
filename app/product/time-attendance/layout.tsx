import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Time & Attendance | HRandME',
  description: 'Track employee hours, shifts, and attendance automatically. Reduce manual timekeeping errors with HRandME Time & Attendance.',
  alternates: { canonical: 'https://hrandme.com/product/time-attendance' },
  openGraph: { title: 'Time & Attendance | HRandME', url: 'https://hrandme.com/product/time-attendance' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
