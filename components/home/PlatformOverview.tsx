'use client'

import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle, Zap, Link2, Shield } from 'lucide-react'
import { motion } from 'framer-motion'

const integrations = [
  { name: 'ADP Run', icon: Link2, color: 'from-blue-500 to-blue-600' },
  { name: 'Ceridian Powerpay', icon: Zap, color: 'from-purple-500 to-purple-600' },
  { name: 'Manulife', icon: Shield, color: 'from-emerald-500 to-emerald-600' },
  { name: 'Sun Life', icon: Shield, color: 'from-amber-500 to-amber-600' },
  { name: 'Microsoft Office Suite', icon: Link2, color: 'from-indigo-500 to-indigo-600' },
  { name: 'Open API', icon: Zap, color: 'from-pink-500 to-pink-600' },
]

export default function PlatformOverview() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-primary-50 to-accent-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              A single HR system. Fully integrated.
            </h2>
            <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
              HRandME integrates seamlessly with your existing payroll, benefits, and productivity tools—so you can maintain a single source of truth without duplication.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">Core HR & Employee Records</h4>
                  <p className="text-neutral-600">Centralized, secure employee data management</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">Performance & Compensation</h4>
                  <p className="text-neutral-600">Structured tools for meaningful evaluations</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">AI-Guided Intelligence</h4>
                  <p className="text-neutral-600">AI guides workflows, provides employee support, and delivers smart insights for better decisions</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">Analytics & Reporting</h4>
                  <p className="text-neutral-600">Real-time dashboards for HR and executives</p>
                </div>
              </div>
            </div>
          </div>
          
          <motion.div 
            className="hidden lg:block glass-effect rounded-2xl p-8 shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden">
                <Image
                  src="/favicon.svg"
                  alt="HRandME"
                  width={40}
                  height={40}
                  className="w-full h-full"
                />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900">
                Integration Highlights
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {integrations.map((integration, index) => {
                const Icon = integration.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="group relative flex items-center space-x-3 pl-3 pr-4 py-4 bg-white rounded-xl border-2 border-neutral-200 hover:border-transparent hover:shadow-xl transition-all cursor-pointer overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity" style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }} />
                    <motion.div 
                      className={`w-8 h-8 bg-gradient-to-br ${integration.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-4 h-4 text-white" />
                    </motion.div>
                    <span className="font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors">{integration.name}</span>
                    <motion.div
                      className="absolute top-2 right-2 w-2 h-2 bg-primary-500 rounded-full"
                      animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </motion.div>
                )
              })}
            </div>
            <motion.p 
              className="mt-6 text-sm text-neutral-600 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              Connect seamlessly with your existing tools and workflows
            </motion.p>
            
            {/* Stats and CTA */}
            <motion.div
              className="mt-8 space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 text-center border border-blue-100">
                  <p className="text-2xl font-bold text-blue-600">50+</p>
                  <p className="text-xs text-neutral-600 mt-1">Integrations</p>
                </div>
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg p-4 text-center border border-emerald-100">
                  <p className="text-2xl font-bold text-emerald-600">100%</p>
                  <p className="text-xs text-neutral-600 mt-1">Data Sync</p>
                </div>
              </div>
              
              <Link
                href="/integrations"
                className="block w-full text-center px-4 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                View All Integrations
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
