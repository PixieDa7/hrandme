'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Sparkles, ArrowRight, MessageSquare, Zap, Brain } from 'lucide-react'

export default function AIGuidedWorkflow() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/pexels-divinetechygirl-1181406.jpg"
                alt="AI-powered HR workflow"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 to-transparent"></div>
            </div>
            {/* Floating badge */}
            <motion.div 
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-neutral-900">AI-Powered</p>
                  <p className="text-sm text-neutral-600">Instant Support</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Brain className="w-4 h-4" />
              <span className="text-sm font-semibold">AI Intelligence</span>
            </motion.div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              AI that guides you through every workflow
            </h2>
            
            <p className="text-xl text-neutral-600 mb-8">
              Our AI doesn't just automate—it teaches, guides, and supports your team at every step. From onboarding to performance reviews, get instant answers and smart recommendations.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-neutral-900 mb-1">Instant Employee Support</h3>
                  <p className="text-neutral-600">Employees get 24/7 AI assistance for HR questions, policy clarifications, and workflow guidance.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-neutral-900 mb-1">Smart Workflow Automation</h3>
                  <p className="text-neutral-600">AI predicts what you need next, automates repetitive tasks, and keeps your team on track.</p>
                </div>
              </div>
            </div>

            <Link
              href="/product/ai-intelligence"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all group"
            >
              Explore AI Intelligence
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
