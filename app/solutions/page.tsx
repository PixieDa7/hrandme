import type { Metadata } from 'next'
import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export const metadata: Metadata = {
  title: 'Solutions - HRandME | HR Solutions for Every Team',
  description: 'Discover HRandME solutions that fit your organization. From Basic HR to Enterprise packages, we have the right solution for your needs.',
  keywords: 'HRIS solutions, HR software packages, HR system solutions, employee management solutions',
}

const solutionTiers = [
  {
    name: 'Basic HR',
    description: 'Essential HR foundation',
    price: 'Contact Us',
    priceUnit: 'for pricing details',
    features: [
      'Employee Record Management',
      'Leave & PTO Management',
      'Payroll Integration',
      'Employee Self-Service Portal',
      'Document Storage',
      '24/7 Support',
    ],
    cta: 'Contact Us',
    popular: false,
  },
  {
    name: 'Core HR',
    description: 'Complete HR platform',
    price: 'Contact Us',
    priceUnit: 'for pricing details',
    features: [
      'Everything in Basic HR',
      'Time & Attendance',
      'AI Intelligence & Insights',
      'Analytics & Reporting',
      'Advanced Workflows',
      'Mobile App',
      '24/7 Support',
    ],
    cta: 'Contact Us',
    popular: true,
  },
  {
    name: 'Enterprise/Modular',
    description: 'Pay Only for What You Use',
    price: 'Contact Us',
    priceUnit: 'for custom pricing',
    features: [
      'Everything in Core HR',
      'Recruitment Module (optional)',
      'Performance Management (optional)',
      'Compensation Management (optional)',
      'Custom Integrations & API',
      'Dedicated Account Manager',
      '24/7 Premium Support',
      'Advanced Security & Compliance',
      'Custom Workflows & Training',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
]

export default function SolutionsPage() {
  return (
    <div className="pt-20">
      <section className="relative py-8 lg:py-12 bg-gradient-to-br from-neutral-50 via-white to-primary-50 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden hidden lg:block">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-40 right-10 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
            animate={{
              x: [0, -100, 0],
              y: [0, 100, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute -bottom-20 left-1/3 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
            animate={{
              x: [0, 50, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full mb-4 mt-4 lg:mt-6">
              <span className="text-sm font-semibold">Recommended Packages</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
              Solutions designed to scale with you
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Choose from our recommended HR solutions designed to fit your organization's needs. Contact us for pricing details.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {solutionTiers.map((tier, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-8 ${
                  tier.popular
                    ? 'bg-gradient-to-br from-primary-600 to-accent-600 text-white shadow-2xl scale-105'
                    : 'bg-white border-2 border-neutral-200 hover:border-primary-500 hover:shadow-xl'
                } transition-all duration-300`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-accent-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className={`text-2xl font-bold mb-2 ${tier.popular ? 'text-white' : 'text-neutral-900'}`}>
                    {tier.name}
                  </h3>
                  <p className={`text-sm mb-6 ${tier.popular ? 'text-white/90' : 'text-neutral-600'}`}>
                    {tier.description}
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${tier.popular ? 'text-white' : 'text-primary-600'}`} />
                      <span className={tier.popular ? 'text-white' : 'text-neutral-700'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/contact?solution=${tier.name.toLowerCase()}`}
                  className={`block w-full py-3 px-6 rounded-lg font-semibold text-center transition-all ${
                    tier.popular
                      ? 'bg-white text-primary-600 hover:bg-neutral-100'
                      : 'bg-primary-600 text-white hover:bg-primary-700'
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-neutral-600 mb-4">
              All plans include free implementation and ongoing system updates
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-semibold"
            >
              <span>Need help choosing? Talk to our team</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  How does modular pricing work?
                </h3>
                <p className="text-neutral-600">
                  Choose from three foundation tiers: Basic HR (Employee Records, Time & Attendance, Payroll Integration), Core HR (adds Leave Management, AI Intelligence, Analytics), or Enterprise (full suite with optional add-ons). Within each tier, select only the modules you need. Add Recruitment, Performance Management, or Compensation as your organization grows. Pricing is based on employee count and selected modules.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  Can I customize my package?
                </h3>
                <p className="text-neutral-600">
                  Absolutely. Every component is modular and optional. Start with Basic HR for essential employee management, add Core HR features individually (Leave Management, AI Intelligence, Analytics), or build a custom solution. Our flexible architecture ensures you only pay for the capabilities you actually use.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  Do you offer custom pricing?
                </h3>
                <p className="text-neutral-600">
                  Yes. We understand every organization has unique needs. Our team works with you to create a tailored package that fits your requirements and budget. Contact us for a personalized quote based on your specific use case, employee count, and desired modules.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  Is there a setup fee?
                </h3>
                <p className="text-neutral-600">
                  No. Implementation support and onboarding are included with all plans at no additional cost.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  Can I switch plans later?
                </h3>
                <p className="text-neutral-600">
                  Yes. You can upgrade or adjust your plan as your organization grows. Our team will help you transition smoothly.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  What integrations are included?
                </h3>
                <p className="text-neutral-600">
                  All plans include standard integrations with major payroll providers (ADP Run, Ceridian Powerpay), benefits providers (Manulife, Sun Life), and Microsoft Office Suite. Enterprise plans include custom integrations and API access.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  What kind of support do you offer?
                </h3>
                <p className="text-neutral-600">
                  All plans include access to our HRIS expert support team. Professional and Enterprise plans receive priority and 24/7 support respectively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
