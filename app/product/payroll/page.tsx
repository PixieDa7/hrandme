'use client'

import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle, DollarSign, RefreshCw, FileText, Clock, Shield, ArrowRight, Zap, Database, TrendingUp, Calendar, Users } from 'lucide-react'
import { motion } from 'framer-motion'

export default function PayrollPage() {
  const features = [
    {
      icon: RefreshCw,
      title: 'Seamless Integration',
      description: 'Timesheets and employee data flow automatically to your payroll processing software—no manual entry required.',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Clock,
      title: 'Automated Timesheet Sync',
      description: 'Time tracking data syncs in real-time with your payroll provider for accurate, effortless payroll processing.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Database,
      title: 'Employee Data Flow',
      description: 'New hires, terminations, and employee changes automatically update in your payroll system.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Shield,
      title: 'Compliance Tracking',
      description: 'Ensure payroll compliance with Canadian tax laws, CPP, EI, and provincial requirements.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: FileText,
      title: 'Pay Stub Access',
      description: 'Employees can access pay stubs, T4s, and tax documents anytime through the self-service portal.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: TrendingUp,
      title: 'Payroll Analytics',
      description: 'Real-time insights into labor costs, overtime trends, and payroll expenses by department.',
      color: 'from-teal-500 to-emerald-500'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <section className="relative py-20 lg:py-24 bg-gradient-to-br from-emerald-50 to-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 right-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"
            animate={{
              x: [0, -50, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 left-10 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"
            animate={{
              x: [0, 50, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Floating animated cards */}
        <motion.div
          className="absolute top-32 right-20 bg-white rounded-xl shadow-lg p-4 border border-emerald-200 hidden lg:block"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-sm font-semibold text-neutral-900">Payroll Synced</div>
              <div className="flex items-center space-x-1 mt-1">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span className="text-xs text-emerald-600 font-semibold">Real-time</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-40 left-20 bg-white rounded-xl shadow-lg p-4 border border-blue-200 hidden lg:block"
          animate={{
            y: [0, 20, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-sm font-semibold text-neutral-900">Employees Paid</div>
              <div className="text-2xl font-bold text-blue-600">1,247</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute top-1/2 right-10 bg-white rounded-xl shadow-lg p-3 border border-emerald-200 hidden lg:block"
          animate={{
            x: [0, -15, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="flex items-center space-x-2">
            <Zap className="w-5 h-5 text-emerald-600" />
            <span className="text-sm font-semibold text-neutral-900">Auto-Sync</span>
          </div>
        </motion.div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full mb-6 mt-8 lg:mt-12">
              <DollarSign className="w-4 h-4" />
              <span className="text-sm font-semibold">Payroll Integration</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
              Payroll Integration <span className="gradient-text">Made Seamless</span>
            </h1>
            <p className="text-xl text-neutral-600 mb-10 max-w-3xl mx-auto">
              Connect your time tracking and employee data directly to your payroll provider. Eliminate manual entry and reduce errors.
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
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Effortless Payroll Integration
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Your time tracking and HR data flows seamlessly to your payroll software—saving time and eliminating errors.
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
                src="/images/pexels-cowomen-1058097-2041386.jpg"
                alt="Payroll processing and integration"
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
                Automated Data Flow
              </h2>
              <p className="text-xl text-neutral-600 mb-6">
                Stop double-entering data. Your timesheets, employee changes, and HR information sync automatically with your payroll provider.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-neutral-700">Real-time timesheet synchronization</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-neutral-700">Automatic employee data updates</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-neutral-700">Integrated with major Canadian payroll providers</span>
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
              Ready to streamline payroll?
            </h2>
            <p className="text-xl mb-10 opacity-90">
              See how HRandME's payroll integration can save you hours every pay period.
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
