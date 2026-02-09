'use client'

import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle, BarChart3, PieChart, TrendingUp, TrendingDown, Download, Share2, Filter, ArrowRight, LineChart } from 'lucide-react'
import { motion } from 'framer-motion'

export default function AnalyticsPage() {
  const features = [
    {
      icon: BarChart3,
      title: 'Real-Time Dashboards',
      description: 'Live dashboards showing key HR metrics including headcount, turnover, time-to-fill, and more.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: PieChart,
      title: 'Custom Reports',
      description: 'Build custom reports with drag-and-drop simplicity. No SQL or technical skills required.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: TrendingUp,
      title: 'Trend Analysis',
      description: 'Identify patterns and trends across time periods, departments, and demographics.',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Filter,
      title: 'Advanced Filtering',
      description: 'Slice and dice your data by any dimension: location, department, tenure, and more.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Download,
      title: 'Export & Schedule',
      description: 'Export reports to Excel, PDF, or CSV. Schedule automated delivery to stakeholders.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Share2,
      title: 'Collaborative Analytics',
      description: 'Share dashboards and reports with managers and executives with role-based access.',
      color: 'from-teal-500 to-emerald-500'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <section className="relative py-20 lg:py-24 bg-gradient-to-br from-blue-50 to-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 right-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-15"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, -30, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-15"
            animate={{
              scale: [1, 1.1, 1],
              y: [0, -40, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Floating animated chart cards */}
        <motion.div
          className="absolute top-24 right-16 bg-white rounded-xl shadow-lg p-4 border border-blue-200 hidden lg:block"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 2, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <LineChart className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-sm font-semibold text-neutral-900">Turnover Rate</div>
              <div className="flex items-center space-x-2 mt-1">
                <div className="text-2xl font-bold text-blue-600">8.2%</div>
                <TrendingDown className="w-4 h-4 text-emerald-600" />
                <span className="text-xs text-emerald-600 font-semibold">2.1%</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-32 left-16 bg-white rounded-xl shadow-lg p-4 border border-cyan-200 hidden lg:block"
          animate={{
            y: [0, 15, 0],
            rotate: [0, -2, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
              <PieChart className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-sm font-semibold text-neutral-900">Headcount</div>
              <div className="text-2xl font-bold text-cyan-600">1,247</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute top-1/2 right-8 bg-white rounded-xl shadow-lg p-3 border border-blue-200 hidden lg:block"
          animate={{
            x: [0, -10, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-5 h-5 text-emerald-600" />
            <span className="text-sm font-semibold text-neutral-900">+15% Growth</span>
          </div>
        </motion.div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6 mt-8 lg:mt-12">
              <BarChart3 className="w-4 h-4" />
              <span className="text-sm font-semibold">Analytics & Reporting</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
              Data-Driven <span className="gradient-text">HR Decisions</span>
            </h1>
            <p className="text-xl text-neutral-600 mb-10 max-w-3xl mx-auto">
              Transform your HR data into strategic insights with powerful analytics, beautiful visualizations, and customizable reporting.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact?type=demo"
                className="px-8 py-4 gradient-primary text-white rounded-lg hover:shadow-xl transition-all font-semibold text-lg flex items-center space-x-2 group"
              >
                <span>Try Demo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/solutions"
                className="px-8 py-4 bg-white text-primary-600 border-2 border-primary-600 rounded-lg hover:bg-primary-50 transition-all font-semibold text-lg"
              >
                View Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-3 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-12 h-12 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/favicon.svg"
                  alt="HRandME"
                  width={48}
                  height={48}
                  className="w-full h-full"
                />
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900">
                Enterprise-Grade Analytics
              </h2>
            </motion.div>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Everything you need to measure, analyze, and optimize your people operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white border border-neutral-200 rounded-2xl p-8 hover:shadow-xl transition-all hover:border-primary-200 group"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-neutral-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] ring-1 ring-neutral-200/50"
              initial={{ opacity: 0, x: -20, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -4, transition: { duration: 0.3 } }}
            >
              <Image
                src="/images/pexels-mikhail-nilov-8847154.jpg"
                alt="Data analytics and reporting dashboard"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                quality={65}
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/AAAA/9k="
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
                Turn Data Into Decisions
              </h2>
              <p className="text-xl text-neutral-600 mb-6">
                Beautiful visualizations and powerful analytics that make complex HR data easy to understand and act on.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-neutral-700">Customizable dashboards and reports</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-neutral-700">Real-time data visualization</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-neutral-700">Export to Excel, PDF, or CSV</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-gradient-to-br from-neutral-800 to-neutral-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to unlock your HR data?
            </h2>
            <p className="text-xl mb-10 opacity-90">
              See how HRandME's analytics can transform your people data into strategic insights.
            </p>
            <Link
              href="/contact?type=demo"
              className="inline-flex items-center px-8 py-4 gradient-primary text-white rounded-lg hover:shadow-xl transition-all font-semibold text-lg space-x-2 group"
            >
              <span>Try Demo</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
