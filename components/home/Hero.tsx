'use client'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Sparkles, Users, TrendingUp, DollarSign, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-slate-50 to-indigo-50/40 pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-15"
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
          className="absolute top-40 right-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-15"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-8 left-1/2 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-12"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center space-x-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full mb-6 mt-8 lg:mt-12"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">AI-Guided HRIS Platform</span>
            </motion.div>

            <motion.h1
              className="text-5xl lg:text-7xl font-bold text-neutral-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              HR expertise,<br />
              <span className="gradient-text">without unnecessary complexity</span>
            </motion.h1>

            <motion.p
              className="text-xl text-neutral-600 mb-10 max-w-2xl lg:mx-0 mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              HRandME is an AI-guided HRIS for <strong>small</strong> HR teams—delivering enterprise-grade capability with clarity, control, and confidence.
            </motion.p>

            <motion.div
              className="flex items-center gap-2 text-sm text-neutral-500 mb-5 lg:justify-start justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <span className="text-lg">🍁</span>
              <span>Proudly Canadian</span>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <Link
                href="/contact?type=demo"
                className="w-full sm:w-auto px-8 py-4 gradient-primary text-white rounded-lg hover:shadow-xl transition-all font-semibold text-lg flex items-center justify-center space-x-2 group"
              >
                <span>Try Demo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-white text-primary-600 border-2 border-primary-600 rounded-lg hover:bg-primary-50 transition-all font-semibold text-lg"
              >
                Talk to a Software Specialist
              </Link>
            </motion.div>

            <motion.div
              className="flex flex-wrap items-center lg:justify-start justify-center gap-8 text-sm text-neutral-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-primary-500" />
                <span>Free implementation</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-primary-500" />
                <span>24/7 expert support</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right column - Visual elements */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <div className="relative">
              {/* Main dashboard mockup - HRIS Analytics Overview */}
              <motion.div
                className="bg-white rounded-2xl shadow-2xl p-8 border border-neutral-200"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-neutral-900">HRIS Analytics Overview</div>
                        <div className="text-sm text-neutral-500">Organization-wide workforce & payroll insights</div>
                      </div>
                    </div>
                  </div>

                  {/* Primary KPI tiles */}
                  <div className="grid grid-cols-2 gap-4">
                    <motion.div
                      className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-4 border border-teal-200"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="text-2xl font-bold text-teal-900">247</div>
                      <div className="text-sm text-teal-700 mb-1">Employees</div>
                      <div className="flex items-center text-xs text-teal-600">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        <span>+3% vs last quarter</span>
                      </div>
                    </motion.div>
                    
                    <motion.div
                      className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-4 border border-emerald-200"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="text-2xl font-bold text-emerald-900">$3.4M</div>
                      <div className="text-sm text-emerald-700 mb-1">Payroll / month</div>
                      <div className="flex items-center text-xs text-emerald-600">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        <span>↑ 5% QoQ</span>
                      </div>
                    </motion.div>
                    
                    <motion.div
                      className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 border border-orange-200"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="text-2xl font-bold text-orange-900">14.2%</div>
                      <div className="text-sm text-orange-700 mb-1">Turnover Rate</div>
                      <div className="text-xs text-orange-600">Rolling 12 months</div>
                    </motion.div>
                    
                    <motion.div
                      className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-4 border border-indigo-200"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="text-2xl font-bold text-indigo-900">42</div>
                      <div className="text-sm text-indigo-700 mb-1">Time to Fill (days)</div>
                      <div className="text-xs text-indigo-600">Avg. across all roles</div>
                    </motion.div>
                  </div>

                  {/* Secondary analytics */}
                  <div className="space-y-3 pt-2">
                    <div className="space-y-2 mb-3">
                      <div className="flex justify-between text-xs">
                        <span className="text-neutral-600">Onboarding Progress</span>
                        <span className="text-teal-600 font-semibold">78%</span>
                      </div>
                      <div className="w-full bg-neutral-200 rounded-full h-1.5">
                        <div className="bg-gradient-to-r from-teal-500 to-emerald-500 h-1.5 rounded-full" style={{ width: '78%' }}></div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-neutral-600">Benefits Enrollment</span>
                        <span className="text-emerald-600 font-semibold">92%</span>
                      </div>
                      <div className="w-full bg-neutral-200 rounded-full h-1.5">
                        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-1.5 rounded-full" style={{ width: '92%' }}></div>
                      </div>
                    </div>
                  </div>

                  {/* AI Insights Panel */}
                  <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
                    <div className="flex items-start space-x-2">
                      <Sparkles className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                      <div className="text-xs text-neutral-700 space-y-1">
                        <div>• Payroll costs increased due to headcount growth in Engineering.</div>
                        <div>• Time to fill improved by 8 days after role standardization.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4 border border-indigo-200"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="flex items-center space-x-2">
                  <DollarSign className="w-5 h-5 text-emerald-600" />
                  <span className="text-sm font-semibold text-neutral-900">Next Pay Run in 3 Days</span>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg px-3 py-2 border border-indigo-200"
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="flex items-center space-x-1.5">
                  <Zap className="w-4 h-4 text-indigo-600" />
                  <span className="text-xs font-semibold text-neutral-700">AI Decision Support</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
