'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle, Link2 } from 'lucide-react'
import { motion } from 'framer-motion'

const integrationCategories = [
  {
    name: 'Payroll Providers',
    description: 'Seamless data synchronization with leading payroll platforms',
    integrations: [
      { name: 'ADP Run', description: 'Full employee data sync' },
      { name: 'Ceridian Powerpay', description: 'Real-time payroll integration' },
      { name: 'Paychex', description: 'Automated payroll processing' },
      { name: 'Gusto', description: 'Complete payroll sync' },
    ],
  },
  {
    name: 'Benefits & RRSP',
    description: 'Connect your benefits and retirement providers',
    integrations: [
      { name: 'Manulife', description: 'Benefits enrollment and management' },
      { name: 'Sun Life', description: 'Group benefits integration' },
      { name: 'Great-West Life', description: 'Benefits and RRSP sync' },
      { name: 'Canada Life', description: 'Comprehensive benefits integration' },
    ],
  },
  {
    name: 'Productivity Tools',
    description: 'Work seamlessly with your existing tools',
    integrations: [
      { name: 'Microsoft Office 365', description: 'Full suite integration' },
      { name: 'Google Workspace', description: 'Calendar and email sync' },
      { name: 'Slack', description: 'Team communication integration' },
      { name: 'Microsoft Teams', description: 'Collaboration platform sync' },
    ],
  },
  {
    name: 'Time & Attendance',
    description: 'Connect time tracking and scheduling tools',
    integrations: [
      { name: 'Deputy', description: 'Scheduling and time tracking' },
      { name: 'When I Work', description: 'Employee scheduling' },
      { name: 'TSheets', description: 'Time tracking integration' },
      { name: 'Kronos', description: 'Workforce management' },
    ],
  },
]

export default function IntegrationsPage() {
  return (
    <div className="pt-20">
      <section className="py-8 lg:py-12 bg-gradient-to-br from-neutral-50 via-white to-blue-50 relative overflow-hidden">
        <div className="container-custom relative z-10">
          {/* Floating Integration Logos */}
          <div className="absolute inset-0 pointer-events-none hidden lg:block">
            {/* Top Left */}
            <motion.div
              className="absolute top-16 left-[8%]"
              initial={{ opacity: 0, x: -100, y: -50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                animate={{ rotate: [-2, 2, -2] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image src="/integrationlogos/Icon.jpeg" alt="Integration" width={56} height={56} className="w-14 h-14 rounded-2xl object-cover" style={{ boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 8px 10px -6px rgba(0, 0, 0, 0.15)' }} />
              </motion.div>
            </motion.div>

            {/* Top Center Left - Moved up higher */}
            <motion.div
              className="absolute top-0 left-[20%]"
              initial={{ opacity: 0, y: -60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                animate={{ rotate: [2, -2, 2] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image src="/integrationlogos/Icon (1).jpeg" alt="Integration" width={56} height={56} className="w-14 h-14 rounded-2xl object-cover" style={{ boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 8px 10px -6px rgba(0, 0, 0, 0.15)' }} />
              </motion.div>
            </motion.div>

            {/* Top Center Right - Moved up higher */}
            <motion.div
              className="absolute top-0 right-[20%]"
              initial={{ opacity: 0, y: -60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.div
                animate={{ rotate: [-1.5, 1.5, -1.5] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center p-2"
                style={{ boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 8px 10px -6px rgba(0, 0, 0, 0.15)' }}
              >
                <Image src="/integrationlogos/google1.png" alt="Integration" width={40} height={40} className="w-10 h-10 object-contain" />
              </motion.div>
            </motion.div>

            {/* Top Right */}
            <motion.div
              className="absolute top-16 right-[8%]"
              initial={{ opacity: 0, x: 100, y: -50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.div
                animate={{ rotate: [1.5, -1.5, 1.5] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image src="/integrationlogos/idXh7XGVZQ_logos.jpeg" alt="Integration" width={56} height={56} className="w-14 h-14 rounded-2xl object-cover" style={{ boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 8px 10px -6px rgba(0, 0, 0, 0.15)' }} />
              </motion.div>
            </motion.div>

            {/* Middle Left */}
            <motion.div
              className="absolute top-[42%] left-[4%]"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.div
                animate={{ rotate: [-2, 2, -2] }}
                transition={{ duration: 3.3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image src="/integrationlogos/id_WGMClIW_1768872787954.jpeg" alt="Integration" width={56} height={56} className="w-14 h-14 rounded-2xl object-cover" style={{ boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 8px 10px -6px rgba(0, 0, 0, 0.15)' }} />
              </motion.div>
            </motion.div>

            {/* Middle Right */}
            <motion.div
              className="absolute top-[42%] right-[4%]"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                animate={{ rotate: [2, -2, 2] }}
                transition={{ duration: 2.9, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image src="/integrationlogos/idbSMOAo8S_1768875209138.png" alt="Integration" width={56} height={56} className="w-14 h-14 rounded-2xl object-cover" style={{ boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 8px 10px -6px rgba(0, 0, 0, 0.15)' }} />
              </motion.div>
            </motion.div>

            {/* Bottom Left */}
            <motion.div
              className="absolute bottom-20 left-[8%]"
              initial={{ opacity: 0, x: -100, y: 50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <motion.div
                animate={{ rotate: [-1.5, 1.5, -1.5] }}
                transition={{ duration: 3.1, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image src="/integrationlogos/ideKlVPBuW_1768873552500.jpeg" alt="Integration" width={56} height={56} className="w-14 h-14 rounded-2xl object-cover" style={{ boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 8px 10px -6px rgba(0, 0, 0, 0.15)' }} />
              </motion.div>
            </motion.div>

            {/* Bottom Center Left */}
            <motion.div
              className="absolute bottom-12 left-[20%]"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                animate={{ rotate: [1.5, -1.5, 1.5] }}
                transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image src="/integrationlogos/idqAOB0CHy_logos.png" alt="Integration" width={56} height={56} className="w-14 h-14 rounded-2xl object-cover" style={{ boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 8px 10px -6px rgba(0, 0, 0, 0.15)' }} />
              </motion.div>
            </motion.div>

            {/* Bottom Center Right */}
            <motion.div
              className="absolute bottom-12 right-[20%]"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              viewport={{ once: true }}
            >
              <motion.div
                animate={{ rotate: [-2, 2, -2] }}
                transition={{ duration: 2.7, repeat: Infinity, ease: "easeInOut" }}
                className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center p-2"
                style={{ boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 8px 10px -6px rgba(0, 0, 0, 0.15)' }}
              >
                <Image src="/integrationlogos/google-drive.png" alt="Integration" width={40} height={40} className="w-10 h-10 object-contain" />
              </motion.div>
            </motion.div>

            {/* Bottom Right */}
            <motion.div
              className="absolute bottom-20 right-[8%]"
              initial={{ opacity: 0, x: 100, y: 50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              viewport={{ once: true }}
            >
              <motion.div
                animate={{ rotate: [2, -2, 2] }}
                transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image src="/integrationlogos/linkedin.png" alt="Integration" width={56} height={56} className="w-14 h-14 rounded-2xl object-cover" style={{ boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 8px 10px -6px rgba(0, 0, 0, 0.15)' }} />
              </motion.div>
            </motion.div>
          </div>

          {/* Center Content */}
          <div className="max-w-4xl mx-auto text-center relative z-20">
            <motion.div
              className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-6 py-3 rounded-full mb-6 mt-4 lg:mt-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link2 className="w-5 h-5" />
              <span className="text-sm font-semibold">500+ Integrations</span>
            </motion.div>
            <motion.h1 
              className="text-5xl lg:text-6xl font-bold text-neutral-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Seamless integrations<br />
              <span className="gradient-text">with your entire tech stack</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-neutral-600 mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              HRandMe connects seamlessly with your existing payroll, benefits, and productivity platforms—so you can maintain a single source of truth without duplication.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <Link
                href="#integrations"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-teal-700 text-white rounded-lg hover:bg-teal-800 transition-all font-semibold shadow-lg group"
              >
                <span>See all integrations</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Stats Section Below */}
        <div className="container-custom mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div 
              className="bg-white rounded-xl p-6 shadow-lg border-2 border-blue-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-neutral-900 font-semibold mb-1">Integrations</div>
              <div className="text-sm text-neutral-600">Pre-built connections ready to use</div>
            </motion.div>
            <motion.div 
              className="bg-white rounded-xl p-6 shadow-lg border-2 border-blue-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">API</div>
              <div className="text-neutral-900 font-semibold mb-1">Open Access</div>
              <div className="text-sm text-neutral-600">Build custom integrations</div>
            </motion.div>
            <motion.div 
              className="bg-white rounded-xl p-6 shadow-lg border-2 border-blue-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-neutral-900 font-semibold mb-1">Sync Support</div>
              <div className="text-sm text-neutral-600">Always-on data synchronization</div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="integrations" className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto space-y-16">
            {integrationCategories.map((category, index) => (
              <div key={index}>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-neutral-900 mb-3">
                    {category.name}
                  </h2>
                  <p className="text-lg text-neutral-600">
                    {category.description}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.integrations.map((integration, intIndex) => (
                    <motion.div
                      key={intIndex}
                      className="bg-white border-2 border-neutral-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all"
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: intIndex * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -4 }}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-neutral-900">
                          {integration.name}
                        </h3>
                        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                      </div>
                      <p className="text-neutral-600">{integration.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-neutral-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  Need a custom integration?
                </h2>
                <p className="text-xl text-neutral-300 mb-8">
                  Our open API and dedicated integration team can help you connect HRandME to any system in your tech stack.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary-400 flex-shrink-0 mt-1" />
                    <span className="text-neutral-300">RESTful API with comprehensive documentation</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary-400 flex-shrink-0 mt-1" />
                    <span className="text-neutral-300">Webhook support for real-time updates</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary-400 flex-shrink-0 mt-1" />
                    <span className="text-neutral-300">Dedicated integration support team</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary-400 flex-shrink-0 mt-1" />
                    <span className="text-neutral-300">Custom integration development available</span>
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all font-semibold group"
                >
                  <span>Talk to Integration Team</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="bg-neutral-800 rounded-2xl p-8 border border-neutral-700">
                <h3 className="text-2xl font-bold mb-6">Integration Benefits</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold mb-1">No Double Entry</div>
                      <div className="text-sm text-neutral-400">Data flows automatically between systems</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold mb-1">Real-Time Sync</div>
                      <div className="text-sm text-neutral-400">Changes update instantly across platforms</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold mb-1">Secure Transfer</div>
                      <div className="text-sm text-neutral-400">Enterprise-grade encryption for all data</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold mb-1">Error Prevention</div>
                      <div className="text-sm text-neutral-400">Automated validation reduces mistakes</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
