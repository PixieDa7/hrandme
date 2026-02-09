'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { UserPlus, Search, CheckCircle, ArrowRight, Briefcase, Users, Target, FileText, Calendar, Shield, Sparkles } from 'lucide-react'

export default function RecruitmentSection() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side - Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1 max-w-lg mx-auto"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/pexels-darlene-alderson-7971170.jpg"
                alt="Recruitment and hiring process"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/8 to-transparent"></div>
            </div>
            {/* Floating favicon badge */}
            <motion.div 
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src="/favicon.svg"
                  alt="HRandME"
                  width={40}
                  height={40}
                  className="w-full h-full"
                />
              </div>
              <div>
                <p className="font-bold text-neutral-900 text-sm">HRandME</p>
                <p className="text-xs text-neutral-600">Recruitment</p>
              </div>
            </motion.div>
            {/* Stats Badge */}
            <motion.div 
              className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-6"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">50%</p>
                <p className="text-sm text-neutral-600">Faster Hiring</p>
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
              Streamline your entire hiring process from job posting to offer letter. Our recruitment tools help small HR teams compete for top talent without the enterprise overhead.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Search className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-neutral-900 mb-1">AI-Powered Candidate Matching</h3>
                  <p className="text-neutral-600">Automatically rank and filter candidates based on job requirements and cultural fit.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <UserPlus className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-neutral-900 mb-1">Collaborative Hiring</h3>
                  <p className="text-neutral-600">Share candidate profiles, collect feedback, and make hiring decisions as a team.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-neutral-900 mb-1">Seamless Onboarding</h3>
                  <p className="text-neutral-600">Convert accepted candidates to employees with automated onboarding workflows.</p>
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
