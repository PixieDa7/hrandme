import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import ValuePillars from '@/components/home/ValuePillars'
import PlatformOverview from '@/components/home/PlatformOverview'
import AIGuidedWorkflow from '@/components/home/AIGuidedWorkflow'
import PerformanceManagement from '@/components/home/PerformanceManagement'
import RecruitmentSection from '@/components/home/RecruitmentSection'
import ExecutiveInsight from '@/components/home/ExecutiveInsight'
import CTASection from '@/components/home/CTASection'

export const metadata: Metadata = {
  title: 'HRandME | AI-Guided HR Software for Small HR Teams',
  description: 'HRandME is the all-in-one HR platform built for small HR teams. Automate payroll, recruitment, performance, and more—powered by AI, supported by real experts.',
  alternates: {
    canonical: 'https://hrandme.com',
  },
  openGraph: {
    title: 'HRandME | AI-Guided HR Software for Small HR Teams',
    description: 'HRandME is the all-in-one HR platform built for small HR teams. Automate payroll, recruitment, performance, and more—powered by AI, supported by real experts.',
    url: 'https://hrandme.com',
    siteName: 'HRandME',
    type: 'website',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'HRandME',
  url: 'https://hrandme.com',
  logo: 'https://hrandme.com/favicon.svg',
  description: 'AI-guided HR software for small HR teams—delivering enterprise-grade capability with clarity, control, and confidence.',
  sameAs: [],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    url: 'https://hrandme.com/contact?type=demo',
  },
  potentialAction: [
    {
      '@type': 'ViewAction',
      name: 'Login',
      target: 'https://hrandme.com/login',
    },
    {
      '@type': 'ViewAction',
      name: 'Core HR',
      target: 'https://hrandme.com/product/core-hr',
    },
    {
      '@type': 'ViewAction',
      name: 'About',
      target: 'https://hrandme.com/about',
    },
    {
      '@type': 'ViewAction',
      name: 'Integrations',
      target: 'https://hrandme.com/integrations',
    },
    {
      '@type': 'ViewAction',
      name: 'Try Demo',
      target: 'https://hrandme.com/contact?type=demo',
    },
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <ValuePillars />
      <PlatformOverview />
      <AIGuidedWorkflow />
      <PerformanceManagement />
      <RecruitmentSection />
      <ExecutiveInsight />
      <CTASection />
    </>
  )
}
