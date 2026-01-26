'use client'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Users, Target, Heart, Zap, Award, TrendingUp, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <div className="pt-20">
      <section className="py-20 lg:py-32 bg-gradient-to-br from-teal-50 via-white to-emerald-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-teal-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-300 rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div
              className="inline-flex items-center space-x-2 bg-red-100 text-red-700 px-4 py-2 rounded-full mb-6"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-semibold">Proudly Canadian</span>
            </motion.div>
            <motion.h1 
              className="text-5xl lg:text-6xl font-bold text-neutral-900 mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              Built by <span className="gradient-text">HR Professionals</span> for HR Teams
            </motion.h1>
            <motion.p 
              className="text-xl text-neutral-600 leading-relaxed"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              HRandME was created by Canadian HR leaders who wanted a system that respected their expertise while removing unnecessary complexity from HR technology. We understand the unique needs of Canadian businesses.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Built for Small Teams Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
                Built for <span className="gradient-text">Small HR Teams</span> & Small to Medium Sized Businesses
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                HRandME is designed to be managed by just <strong>1-2 HR people</strong>, making it perfect for small to medium-sized companies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-200 hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl font-bold text-blue-600 mb-3">1-2</div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">People to Manage</h3>
                <p className="text-neutral-600">
                  Our platform is designed to be fully managed by just 1-2 HR professionals—no IT department required.
                </p>
              </motion.div>

              <motion.div
                className="bg-white rounded-2xl p-8 shadow-lg border-2 border-emerald-200 hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl font-bold text-emerald-600 mb-3">1-4</div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">Person HR Teams</h3>
                <p className="text-neutral-600">
                  Perfect for small HR teams of 1-4 people who need enterprise-grade tools without the complexity.
                </p>
              </motion.div>

              <motion.div
                className="bg-white rounded-2xl p-8 shadow-lg border-2 border-purple-200 hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-3">
                  <Zap className="w-12 h-12 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">Simple to Use</h3>
                <p className="text-neutral-600">
                  Built to be simple to use and maintain for small to medium-sized companies—no technical expertise needed.
                </p>
              </motion.div>
            </div>

            <div className="mt-12 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Why Small Teams Love HRandME</h3>
              <p className="text-lg mb-6 opacity-90 max-w-3xl mx-auto">
                We understand that small HR teams wear many hats. That's why HRandME is designed to be intuitive, automated, and easy to maintain—so you can focus on your people, not your software.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span>No IT support required</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span>Automated workflows save time</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span>Intuitive interface, minimal training</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span>24/7 Canadian support when you need it</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
              <div className="hidden md:block">
                <h2 className="text-3xl font-bold text-neutral-900 mb-6">Our Story</h2>
                <p className="text-neutral-600 mb-4 leading-relaxed">
                  HRandME was born from a simple observation: most HRIS platforms are built by engineers for engineers, not by HR professionals for HR professionals. And none were truly built with Canadian businesses in mind.
                </p>
                <p className="text-neutral-600 mb-4 leading-relaxed">
                  After years of working with bloated, overly complex systems that required constant IT support and didn't understand Canadian labour laws, our founding team decided to build something different—a platform that combines enterprise-grade capability with genuine usability, designed specifically for the Canadian market.
                </p>
                <p className="text-neutral-600 mb-4 leading-relaxed">
                  We're based in Canada, we understand Canadian employment standards, and we're committed to helping Canadian businesses thrive.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  Today, HRandME serves Canadian organizations of all sizes, helping HR teams focus on what matters most: their people.
                </p>
              </div>
              <div className="bg-gradient-to-br from-teal-600 via-emerald-600 to-teal-700 rounded-2xl p-8 text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
                <p className="text-lg leading-relaxed mb-6">
                  To empower Canadian HR professionals with technology that enhances their expertise rather than replacing it—delivering clarity, control, and confidence in every decision while respecting the unique needs of Canadian businesses.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Respect HR expertise</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Remove unnecessary complexity</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Deliver enterprise capability</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div 
                className="text-center p-6 bg-white rounded-2xl border border-neutral-200 hover:shadow-xl transition-all group"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">People First</h3>
                <p className="text-neutral-600">
                  We build for the humans using our platform, not just the data they manage.
                </p>
              </motion.div>
              <motion.div 
                className="text-center p-6 bg-white rounded-2xl border border-neutral-200 hover:shadow-xl transition-all group"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">Purpose Driven</h3>
                <p className="text-neutral-600">
                  Every feature exists to solve a real HR challenge, not just to check a box.
                </p>
              </motion.div>
              <motion.div 
                className="text-center p-6 bg-white rounded-2xl border border-neutral-200 hover:shadow-xl transition-all group"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">Canadian Support</h3>
                <p className="text-neutral-600">
                  Our Canadian team is always here to help, with real experts who understand Canadian HR.
                </p>
              </motion.div>
              <motion.div 
                className="text-center p-6 bg-white rounded-2xl border border-neutral-200 hover:shadow-xl transition-all group"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">AI Innovation</h3>
                <p className="text-neutral-600">
                  We leverage AI and modern technology to enhance, not replace, HR expertise.
                </p>
              </motion.div>
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
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to experience the difference?
            </h2>
            <p className="text-xl mb-10 opacity-90">
              Join HR teams who have found a better way to manage their people operations.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact?type=demo"
                className="w-full sm:w-auto px-8 py-4 bg-white text-primary-600 rounded-lg hover:shadow-xl transition-all font-semibold text-lg flex items-center justify-center space-x-2 group"
              >
                <span>Try Demo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg hover:bg-white/10 transition-all font-semibold text-lg"
              >
                Talk to Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
