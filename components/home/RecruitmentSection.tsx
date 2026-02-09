'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { UserPlus, Search, CheckCircle, ArrowRight, Briefcase, Users, Target } from 'lucide-react'

export default function RecruitmentSection() {
  return (
    <section className="hidden lg:block py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Workflow Diagram - Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1 max-w-lg mx-auto"
          >
            <div className="relative rounded-2xl p-8 bg-gradient-to-br from-blue-100 to-cyan-100 shadow-2xl min-h-[400px] flex items-center justify-center">
              {/* Hiring Workflow Diagram */}
              <div className="w-full space-y-3">
                {[
                  { icon: Briefcase, label: 'Job Posting', sublabel: 'LinkedIn & Indeed', delay: 0 },
                  { icon: Search, label: 'AI Screening', sublabel: 'Applicant Review', delay: 0.2 },
                  { icon: Users, label: 'Interview Scheduling', sublabel: 'Automated Booking', delay: 0.4 },
                  { icon: CheckCircle, label: 'Reference Checks', sublabel: 'Verification', delay: 0.6 },
                  { icon: Target, label: 'Offer Letter', sublabel: 'Digital Signing', delay: 0.8 },
                  { icon: UserPlus, label: 'Onboarding', sublabel: 'Day 1 Ready', delay: 1.0 }
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-md"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: step.delay }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-neutral-900">{step.label}</p>
                      <p className="text-sm text-neutral-600">{step.sublabel}</p>
                    </div>
                    <motion.div
                      className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: step.delay + 0.3 }}
                    >
                      <ArrowRight className="w-4 h-4 text-white" />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Stats Badge */}
            <motion.div 
              className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-6"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="text-center">
                <p className="text-sm font-bold text-blue-600">Automate &gt;50% in hiring</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side - Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <motion.div 
              className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Briefcase className="w-4 h-4" />
              <span className="text-sm font-semibold">Recruitment</span>
            </motion.div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Hire the right people, faster
            </h2>
            
            <p className="text-xl text-neutral-600 mb-8">
              <span className="hidden md:inline">Streamline your entire hiring process from job posting to offer letter. Our recruitment tools help small HR teams compete for top talent without the enterprise overhead.</span>
              <span className="md:hidden">Streamline hiring from job posting to offer letter.</span>
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Search className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-neutral-900 mb-1">AI-Powered Candidate Matching</h3>
                  <p className="text-neutral-600">
                    <span className="hidden md:inline">Automatically rank and filter candidates based on job requirements and cultural fit.</span>
                    <span className="md:hidden">Rank candidates by fit and requirements.</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <UserPlus className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-neutral-900 mb-1">Collaborative Hiring</h3>
                  <p className="text-neutral-600">
                    <span className="hidden md:inline">Share candidate profiles, collect feedback, and make hiring decisions as a team.</span>
                    <span className="md:hidden">Team-based hiring decisions.</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-neutral-900 mb-1">Seamless Onboarding</h3>
                  <p className="text-neutral-600">
                    <span className="hidden md:inline">Convert accepted candidates to employees with automated onboarding workflows.</span>
                    <span className="md:hidden">Automated onboarding workflows.</span>
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/product/recruitment"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all group"
            >
              Explore Recruitment Tools
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
