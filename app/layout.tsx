import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Chatbot from '@/components/Chatbot'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  metadataBase: new URL('https://hrandme.com'),
  title: 'HRandME - HR Expertise Without Unnecessary Complexity',
  description: 'HRandME is an AI-guided HCM for small HR teams—delivering enterprise-grade capability with clarity, control, and confidence. Built for teams of 1-2 people. Built by HR. Guided by AI. Supported 24/7 by real experts.',
  keywords: 'HCM, HR software, human resources, payroll integration, performance management, AI-guided HR, employee management, HR analytics, workforce management',
  authors: [{ name: 'HRandME' }],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'HRandME - HR Expertise Without Unnecessary Complexity',
    description: 'AI-guided HCM for small HR teams with enterprise-grade capability—perfect for 1-2 person teams',
    url: 'https://hrandme.com',
    siteName: 'HRandME',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/logolarge.png',
        width: 1200,
        height: 630,
        alt: 'HRandME Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HRandME - HR Expertise Without Unnecessary Complexity',
    description: 'AI-guided HCM for small HR teams with enterprise-grade capability—perfect for 1-2 person teams',
    images: ['/logolarge.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: 'https://hrandme.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-white text-neutral-900`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  )
}
