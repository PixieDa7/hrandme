'use client'

import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle, Users, FileText, Database, Shield, Zap, ArrowRight, FolderOpen, Search, Lock } from 'lucide-react'
import { motion } from 'framer-motion'

export default function EmployeeRecordsPage() {
  const features = [
    {
      icon: Users,
      title: 'Complete Employee Profiles',
      description: 'Comprehensive employee records with personal information, contact details, emergency contacts, and custom fields.',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: FileText,
      title: 'Document Management',
      description: 'Securely store and organize employee documents, contracts, certifications, and performance reviews.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Database,
      title: 'Organizational Hierarchy',
      description: 'Visual org charts showing reporting relationships, departments, and team structures that update automatically.',
      color: 'from-cyan-500 to-teal-500'
    },
    {
      icon: Search,
      title: 'Advanced Search',
      description: 'Quickly find employees by name, department, position, skills, or any custom field you\'ve configured.',
      color: 'from-teal-500 to-emerald-500'
    },
    {
      icon: Lock,
      title: 'Role-Based Access',
      description: 'Granular permissions ensure employees and managers only see the information they\'re authorized to access.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Automated Updates',
      description: 'Employee changes flow automatically to payroll, benefits, and other integrated systems.',
      color: 'from-orange-500 to-red-500'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <section className="relative py-20 lg:py-24 bg-gradient-to-br from-indigo-50 to-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 right-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"
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
            className="absolute bottom-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"
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
          className="absolute top-32 right-20 bg-white rounded-xl shadow-lg p-4 border border-indigo-200 hidden lg:block"
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
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-sm font-semibold text-neutral-900">Active Employees</div>
              <div className="text-2xl font-bold text-indigo-600">1,247</div>
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
              <FolderOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-sm font-semibold text-neutral-900">Documents Stored</div>
              <div className="text-2xl font-bold text-blue-600">8,432</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute top-1/2 right-10 bg-white rounded-xl shadow-lg p-3 border border-teal-200 hidden lg:block"
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
            <CheckCircle className="w-5 h-5 text-teal-600" />
            <span className="text-sm font-semibold text-neutral-900">Secure & Compliant</span>
          </div>
        </motion.div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full mb-6 mt-8 lg:mt-12">
              <Users className="w-4 h-4" />
              <span className="text-sm font-semibold">Employee Record Management</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
              Your Single Source of <span className="gradient-text">Employee Truth</span>
            </h1>
            <p className="text-xl text-neutral-600 mb-10 max-w-3xl mx-auto">
              Centralize all employee information in one secure, accessible platform. From hire to retire, maintain complete, accurate records with ease.
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
                Complete Employee Record Management
              </h2>
            </motion.div>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Everything you need to manage employee data securely, efficiently, and compliantly.
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
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
                Centralized Employee Data
              </h2>
              <p className="text-xl text-neutral-600 mb-6">
                One platform for all employee information—accessible, secure, and always up-to-date.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-neutral-700">Complete employee profiles with custom fields</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-neutral-700">Secure document storage with version control</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-neutral-700">Automated org charts and reporting structures</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] ring-1 ring-neutral-200/50"
              initial={{ opacity: 0, x: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -4, transition: { duration: 0.3 } }}
            >
              <Image
                src="/images/pexels-divinetechygirl-1181395.jpg"
                alt="Employee record management system"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                quality={65}
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/AAAA/9k="
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-gradient-to-br from-neutral-800 to-neutral-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to centralize your employee data?
            </h2>
            <p className="text-xl mb-10 opacity-90">
              See how HRandME's Employee Record Management can transform your HR operations.
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
