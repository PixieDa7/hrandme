'use client'

import { useEffect } from 'react'
import type { Metadata } from 'next'
import { Mail, Phone, MapPin, Sparkles, MessageSquare } from 'lucide-react'
import { motion } from 'framer-motion'

declare global {
  interface Window {
    jotformEmbedHandler: (selector: string, url: string) => void
  }
}

export default function ContactPage() {
  useEffect(() => {
    // Load JotForm embed handler script
    const script = document.createElement('script')
    script.src = 'https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js'
    script.async = true
    document.body.appendChild(script)

    script.onload = () => {
      if (window.jotformEmbedHandler) {
        window.jotformEmbedHandler("iframe[id='JotFormIFrame-260255498238061']", "https://form.jotform.com/")
      }
    }

    return () => {
      document.body.removeChild(script)
    }
  }, [])

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
          <div className="text-center mb-8 lg:mb-8">
            <motion.div
              className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-6 py-3 rounded-full mb-6 mt-4 lg:mt-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <MessageSquare className="w-5 h-5" />
              <span className="text-sm font-semibold">Try Demo</span>
            </motion.div>
            <motion.h1 
              className="text-5xl lg:text-6xl font-bold text-neutral-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Let's talk about your HR needs
            </motion.h1>
            <motion.p 
              className="text-xl text-neutral-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Get in touch with our team to learn how HRandME can transform your HR operations
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <iframe
                  id="JotFormIFrame-260255498238061"
                  title="Try Demo or Get in Touch"
                  onLoad={() => window.parent.scrollTo(0,0)}
                  allowTransparency={true}
                  allow="geolocation; microphone; camera; fullscreen; payment"
                  src="https://form.jotform.com/260255498238061"
                  style={{ minWidth: '100%', maxWidth: '100%', height: '539px', border: 'none' }}
                  scrolling="no"
                />
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl shadow-xl p-8 border border-teal-200">
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                  Why Choose HRandME?
                </h3>
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  Stop wasting time on clunky HR software. Get AI-driven enterprise power with consumer simplicity—built by Canadian HR pros who actually understand your challenges.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-1">AI-Powered</h4>
                      <p className="text-neutral-600">AI guides you through workflows, setups, and provides live analytics</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-1">24/7 Support from Our Canadian Team</h4>
                      <p className="text-neutral-600">Canadian HR and Payroll experts available around the clock</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-1">Located in Canada</h4>
                      <p className="text-neutral-600">Team of Canadian HR and Payroll experts who understand your needs</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-teal-600 via-emerald-600 to-teal-700 rounded-2xl shadow-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">
                  Why Choose HRandME?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <span className="text-2xl">✓</span>
                    <span>AI-Powered Workflows - AI talks you through complex setups</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-2xl">✓</span>
                    <span>Live Data Analytics & Dashboards for executive teams</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-2xl">✓</span>
                    <span>Easy to Use - Built by HR professionals for HR teams</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-2xl">✓</span>
                    <span>Canadian Team of HR & Payroll experts</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-2xl">✓</span>
                    <span>Enterprise-grade security & seamless integrations</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-2xl">✓</span>
                    <span>Free implementation & ongoing updates</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
