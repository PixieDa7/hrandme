'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Plug, ArrowRight, Shield, Zap } from 'lucide-react'

export default function IntegrationsShowcase() {
  const integrations = [
    { name: 'ADP Run', logo: '/integrationlogos/idqAOB0CHy_logos.png' },
    { name: 'Ceridian', logo: '/integrationlogos/idbSMOAo8S_1768875209138.png' },
    { name: 'Microsoft 365', logo: '/integrationlogos/Icon (1).jpeg' },
    { name: 'LinkedIn', logo: '/integrationlogos/linkedin.png' },
    { name: 'Google Drive', logo: '/integrationlogos/google-drive.png' },
    { name: 'Slack', logo: '/integrationlogos/ideKlVPBuW_1768873552500.jpeg' },
  ]

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-900 to-neutral-900 text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Plug className="w-4 h-4" />
              <span className="text-sm font-semibold">Integrations</span>
            </motion.div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Connect with the tools you already use
            </h2>
            
            <p className="text-xl text-neutral-300 mb-8">
              HRandME seamlessly integrates with your existing payroll, benefits, and productivity tools. No data duplication, no manual exports—just one unified HR system.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Real-Time Sync</h3>
                  <p className="text-neutral-300">Employee data, payroll, and benefits stay synchronized across all your systems automatically.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Secure & Compliant</h3>
                  <p className="text-neutral-300">Enterprise-grade security with SOC 2 compliance and encrypted data transfers.</p>
                </div>
              </div>
            </div>

            {/* Integration Logos */}
            <div className="mb-8">
              <p className="text-sm text-neutral-400 mb-4">TRUSTED INTEGRATIONS</p>
              <div className="grid grid-cols-6 gap-2.5 max-w-[420px]">
                {integrations.map((integration, index) => (
                  <motion.div
                    key={integration.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    className="rounded-lg cursor-pointer overflow-hidden aspect-square"
                    style={{ border: '3px solid rgba(156, 163, 175, 0.3)' }}
                  >
                    <motion.div
                      animate={{ rotate: [-1, 1, -1] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Image
                        src={integration.logo}
                        alt={integration.name}
                        width={40}
                        height={40}
                        className="w-full h-full object-cover opacity-90"
                      />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>

            <Link
              href="/integrations"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-neutral-900 rounded-lg font-semibold hover:shadow-lg transition-all group"
            >
              View All Integrations
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/pexels-darlene-alderson-7971170.jpg"
                alt="System integrations and data connectivity"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
