'use client'

import Link from 'next/link'
import { Shield, Lock, Eye, Server, CheckCircle, FileCheck, Users, Globe, ArrowRight, Sparkles, Key, Database, AlertCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function SecurityPage() {
  const securityFeatures = [
    {
      icon: Lock,
      title: 'End-to-End Encryption',
      description: 'All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption',
      color: 'from-teal-500 to-emerald-500'
    },
    {
      icon: Key,
      title: 'Multi-Factor Authentication',
      description: 'Secure your account with MFA, including SMS, authenticator apps, and biometric options',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Database,
      title: 'Data Residency',
      description: 'Your data stays in Canada with secure backup and disaster recovery protocols',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Eye,
      title: 'Access Controls',
      description: 'Role-based access control (RBAC) ensures users only see what they need',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Server,
      title: 'Infrastructure Security',
      description: 'Hosted on enterprise-grade infrastructure with 24/7 monitoring and DDoS protection',
      color: 'from-teal-500 to-emerald-500'
    },
    {
      icon: FileCheck,
      title: 'Regular Audits',
      description: 'Third-party security audits and penetration testing conducted quarterly',
      color: 'from-indigo-500 to-purple-500'
    }
  ]

  const compliance = [
    {
      title: 'HRPA CHRP Certified',
      description: 'Founded by HRPA certified HR professionals who deeply understand HR'
    },
    {
      title: 'PIPEDA Compliant',
      description: 'Full compliance with Canadian privacy legislation'
    },
    {
      title: 'GDPR Ready',
      description: 'Meets European data protection requirements'
    },
    {
      title: 'Canadian Built',
      description: 'Designed and operated in Canada for Canadian businesses'
    }
  ]

  const dataProtection = [
    {
      icon: Shield,
      title: 'Your Data is Yours',
      description: 'We never sell your data. You maintain full ownership and control of all your information.'
    },
    {
      icon: Users,
      title: 'Privacy by Design',
      description: 'Privacy and security are built into every feature from the ground up, not added as an afterthought.'
    },
    {
      icon: Globe,
      title: 'Transparent Practices',
      description: 'Clear documentation of our security practices and data handling procedures.'
    },
    {
      icon: AlertCircle,
      title: 'Incident Response',
      description: '24/7 security monitoring with rapid incident response and customer notification protocols.'
    }
  ]

  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="py-20 lg:py-32 bg-gradient-to-br from-teal-50 via-white to-emerald-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-teal-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-300 rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="inline-flex items-center space-x-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full mb-6"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">Enterprise-Grade Security</span>
            </motion.div>
            <motion.h1 
              className="text-5xl lg:text-6xl font-bold text-neutral-900 mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              Your Data is <span className="gradient-text">Safe & Secure</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-neutral-600 leading-relaxed mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              HRandME is built on a foundation of security, privacy, and compliance. We protect your sensitive HR data with industry-leading security measures and transparent practices.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-lg hover:shadow-xl transition-all font-semibold flex items-center space-x-2 group"
              >
                <span>Talk to Security Team</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/privacy"
                className="px-8 py-4 border-2 border-neutral-300 text-neutral-700 rounded-lg hover:border-teal-500 hover:text-teal-600 transition-all font-semibold"
              >
                View Privacy Policy
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
                Security Features
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Multi-layered security architecture protecting your data at every level
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="p-8 bg-white rounded-2xl border-2 border-neutral-200 hover:border-teal-500 hover:shadow-xl transition-all group"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-neutral-50 to-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
                Built by HR Professionals
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Founded by HRPA certified members who understand HR inside and out, meeting the highest standards for security and privacy
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {compliance.map((item, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-white rounded-2xl border-2 border-neutral-200 hover:shadow-xl transition-all text-center"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-600">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
                Our Commitment to Data Protection
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Transparency and trust are at the core of everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {dataProtection.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-6 p-8 bg-gradient-to-br from-neutral-50 to-white rounded-2xl border border-neutral-200 hover:shadow-xl transition-all"
                  initial={{ x: index % 2 === 0 ? -20 : 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-14 h-14 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-teal-600 via-emerald-600 to-teal-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Security Questions?
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Our security team is here to answer any questions about our practices, certifications, or compliance requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <Sparkles className="w-8 h-8 mb-4" />
                <h3 className="text-lg font-bold mb-2">Security Documentation</h3>
                <p className="text-sm opacity-90 mb-4">Access our security whitepaper and compliance reports</p>
                <a href="#" className="text-sm font-semibold hover:underline">
                  Download Resources →
                </a>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <Users className="w-8 h-8 mb-4" />
                <h3 className="text-lg font-bold mb-2">Talk to Security Team</h3>
                <p className="text-sm opacity-90 mb-4">Schedule a call with our security experts</p>
                <Link href="/contact" className="text-sm font-semibold hover:underline">
                  Contact Us →
                </Link>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <AlertCircle className="w-8 h-8 mb-4" />
                <h3 className="text-lg font-bold mb-2">Report a Vulnerability</h3>
                <p className="text-sm opacity-90 mb-4">Responsible disclosure program for security researchers</p>
                <a href="mailto:security@hrandme.com" className="text-sm font-semibold hover:underline">
                  Report Issue →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
