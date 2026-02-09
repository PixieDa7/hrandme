'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Target, TrendingUp, Award, ArrowRight, Users } from 'lucide-react'

export default function PerformanceManagement() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Side - Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Target className="w-4 h-4" />
              <span className="text-sm font-semibold">Performance & Growth</span>
            </motion.div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Meaningful performance reviews that drive growth
            </h2>
            
            <p className="text-xl text-neutral-600 mb-8">
              <span className="hidden md:inline">Move beyond annual reviews. Our performance management system helps you build a culture of continuous feedback, goal alignment, and employee development.</span>
              <span className="md:hidden">Build a culture of continuous feedback and employee development.</span>
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-neutral-900 mb-1">Goal Tracking & OKRs</h3>
                  <p className="text-neutral-600">
                    <span className="hidden md:inline">Set, track, and measure individual and team goals with real-time progress updates.</span>
                    <span className="md:hidden">Track goals with real-time updates.</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-neutral-900 mb-1">360° Feedback</h3>
                  <p className="text-neutral-600">
                    <span className="hidden md:inline">Gather comprehensive feedback from peers, managers, and direct reports for holistic reviews.</span>
                    <span className="md:hidden">Comprehensive feedback for holistic reviews.</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-neutral-900 mb-1">1-on-1 Meeting Tools</h3>
                  <p className="text-neutral-600">
                    <span className="hidden md:inline">Structured templates and AI-suggested talking points for productive manager-employee conversations.</span>
                    <span className="md:hidden">Templates for productive conversations.</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/product/performance"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all group"
              >
                Learn About Performance
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/product/compensation"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-neutral-200 text-neutral-900 rounded-lg font-semibold hover:border-emerald-600 hover:text-emerald-600 transition-all"
              >
                View Compensation Tools
              </Link>
            </div>
          </motion.div>

          {/* Image Side - Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block relative max-w-md mx-auto"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/pexels-fauxels-3184287.jpg"
                alt="Performance management and team collaboration"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/8 to-transparent"></div>
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
                <p className="text-xs text-neutral-600">Performance Tools</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
