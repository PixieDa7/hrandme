'use client'

import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle, Users, FileText, Shield, Database, Zap, ArrowRight, Building2, Globe, Clock, Calendar, DollarSign, Brain, BarChart3, Smartphone } from 'lucide-react'
import { motion } from 'framer-motion'

export default function CoreHRPage() {
  const features = [
    {
      icon: Users,
      title: 'Employee Records Management',
      description: 'Centralized employee database with complete profile management, document storage, and organizational hierarchy tracking.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FileText,
      title: 'Onboarding & Offboarding',
      description: 'Automated workflows for seamless employee lifecycle management from hire to retire.',
      color: 'from-teal-500 to-emerald-500'
    },
    {
      icon: Shield,
      title: 'Compliance Management',
      description: 'Stay compliant with automated tracking of certifications, licenses, and regulatory requirements.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Database,
      title: 'Self-Service Portal',
      description: 'Empower employees to update personal information, access documents, and manage their HR needs.',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Globe,
      title: 'Multi-Location Support',
      description: 'Manage employees across multiple locations, departments, and legal entities with ease.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Clock,
      title: 'Audit Trail & History',
      description: 'Complete audit logs and historical tracking for all employee data changes and transactions.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Building2,
      title: 'Organization Chart',
      description: 'Visual org charts that update automatically, showing reporting relationships and team structures.',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Zap,
      title: 'Workflow Automation',
      description: 'Automate repetitive HR tasks with customizable workflows for approvals, notifications, and updates.',
      color: 'from-pink-500 to-purple-500'
    },
    {
      icon: FileText,
      title: 'Document Management',
      description: 'Secure storage for employee documents, contracts, and policies with version control and e-signatures.',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Users,
      title: 'Employee Directory',
      description: 'Searchable company directory with contact information, skills, and department details.',
      color: 'from-teal-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'Role-Based Access',
      description: 'Granular permissions and security controls to protect sensitive employee information.',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Globe,
      title: 'Custom Fields & Forms',
      description: 'Flexible data collection with custom fields, forms, and workflows tailored to your organization.',
      color: 'from-emerald-500 to-green-500'
    }
  ]

  const benefits = [
    'Reduce administrative time by up to 40%',
    'Eliminate data silos with single source of truth',
    'Improve employee experience with self-service',
    'Ensure compliance with automated tracking',
    'Scale effortlessly as your organization grows',
    'Integrate seamlessly with payroll and benefits'
  ]

  const useCases = [
    {
      title: 'New Hire Onboarding',
      description: 'Automate paperwork, assign training, and ensure new employees are productive from day one.'
    },
    {
      title: 'Organizational Planning',
      description: 'Visualize org charts, plan headcount, and manage reporting structures effectively.'
    },
    {
      title: 'Canadian Compliance Reporting',
      description: 'Generate Employment Equity reports, ROE (Record of Employment), and other Canadian compliance reports with a single click.'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-24 bg-gradient-to-br from-indigo-50 to-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"
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
            className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"
            animate={{
              x: [0, -100, 0],
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
          className="absolute top-32 right-20 bg-white rounded-xl shadow-lg p-4 border border-teal-200 hidden lg:block"
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
            <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-sm font-semibold text-neutral-900">Active Employees</div>
              <div className="text-2xl font-bold text-teal-600">1,247</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-40 left-20 bg-white rounded-xl shadow-lg p-4 border border-indigo-200 hidden lg:block"
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
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-sm font-semibold text-neutral-900">Documents Stored</div>
              <div className="text-2xl font-bold text-indigo-600">8,432</div>
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
            <CheckCircle className="w-5 h-5 text-emerald-600" />
            <span className="text-sm font-semibold text-neutral-900">100% Compliant</span>
          </div>
        </motion.div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full mb-6 mt-8 lg:mt-12">
              <Building2 className="w-4 h-4" />
              <span className="text-sm font-semibold">Core HR Platform</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
              Your Foundation for <span className="gradient-text">People Management</span>
            </h1>
            <p className="text-xl text-neutral-600 mb-10 max-w-3xl mx-auto">
              Centralize employee data, automate workflows, and ensure compliance with our comprehensive Core HR platform. Built for <strong>small</strong> HR teams (even just 1-2 people) who need powerful tools without the complexity.
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

      {/* Features Grid */}
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
              <div className="hidden md:block w-12 h-12 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/favicon.svg"
                  alt="HRandME"
                  width={48}
                  height={48}
                  className="w-full h-full"
                />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900">
                Everything You Need in Core HR
              </h2>
            </motion.div>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Powerful features designed to streamline your HR operations and improve employee experience.
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

      {/* Core HR Modules Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-indigo-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Core HR Includes These Powerful Modules
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Each module is designed to work seamlessly together, giving you a complete HR solution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Link
              href="/product/leave-management"
              className="group bg-white border-2 border-neutral-200 rounded-2xl p-8 hover:border-teal-500 hover:shadow-2xl transition-all"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-3 group-hover:text-teal-600 transition-colors">
                Leave Management
              </h3>
              <p className="text-neutral-600 mb-4">
                Automated PTO tracking, policy management, and Canadian compliance built-in.
              </p>
              <div className="flex items-center text-teal-600 font-semibold group-hover:translate-x-2 transition-transform">
                <span>Explore Module</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </div>
            </Link>

            <Link
              href="/product/time-attendance"
              className="group bg-white border-2 border-neutral-200 rounded-2xl p-8 hover:border-cyan-500 hover:shadow-2xl transition-all"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-3 group-hover:text-cyan-600 transition-colors">
                Time & Attendance
              </h3>
              <p className="text-neutral-600 mb-4">
                Accurate time tracking, shift scheduling, and automated overtime calculations.
              </p>
              <div className="flex items-center text-cyan-600 font-semibold group-hover:translate-x-2 transition-transform">
                <span>Explore Module</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </div>
            </Link>

            <Link
              href="/product/payroll"
              className="group bg-white border-2 border-neutral-200 rounded-2xl p-8 hover:border-emerald-500 hover:shadow-2xl transition-all"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-3 group-hover:text-emerald-600 transition-colors">
                Payroll Integration
              </h3>
              <p className="text-neutral-600 mb-4">
                Seamless data flow to your payroll provider—timesheets and employee data sync automatically.
              </p>
              <div className="flex items-center text-emerald-600 font-semibold group-hover:translate-x-2 transition-transform">
                <span>Explore Module</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </div>
            </Link>

            <Link
              href="/product/ai-intelligence"
              className="group bg-white border-2 border-neutral-200 rounded-2xl p-8 hover:border-purple-500 hover:shadow-2xl transition-all"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-3 group-hover:text-purple-600 transition-colors">
                AI Intelligence
              </h3>
              <p className="text-neutral-600 mb-4">
                Predictive analytics, turnover risk detection, and AI-powered workforce insights.
              </p>
              <div className="flex items-center text-purple-600 font-semibold group-hover:translate-x-2 transition-transform">
                <span>Explore Module</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </div>
            </Link>

            <Link
              href="/product/analytics"
              className="group bg-white border-2 border-neutral-200 rounded-2xl p-8 hover:border-blue-500 hover:shadow-2xl transition-all"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-3 group-hover:text-blue-600 transition-colors">
                Analytics & Reporting
              </h3>
              <p className="text-neutral-600 mb-4">
                Real-time dashboards, custom reports, and data-driven insights for better decisions.
              </p>
              <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
                <span>Explore Module</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </div>
            </Link>

            <Link
              href="/product/employee-records"
              className="group bg-white border-2 border-neutral-200 rounded-2xl p-8 hover:border-indigo-500 hover:shadow-2xl transition-all"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-3 group-hover:text-indigo-600 transition-colors">
                Employee Record Management
              </h3>
              <p className="text-neutral-600 mb-4">
                Centralized employee database with complete profile management, document storage, and organizational hierarchy.
              </p>
              <div className="flex items-center text-indigo-600 font-semibold group-hover:translate-x-2 transition-transform">
                <span>Explore Module</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </div>
            </Link>
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
                src="/images/pexels-divinetechygirl-1181395.jpg"
                alt="HR professional managing employee data"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={75}
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
                Your Single Source of Truth
              </h2>
              <p className="text-xl text-neutral-600 mb-6">
                Centralize all employee data in one secure, accessible platform that grows with your organization.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
                Take Core HR Mobile
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Empower your workforce with full mobile access. Clock in, request time off, view schedules, and stay connected—anytime, anywhere.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-12 text-white">
                  <Smartphone className="w-16 h-16 mb-6" />
                  <h3 className="text-3xl font-bold mb-4">HRandME Mobile App</h3>
                  <p className="text-lg mb-6 opacity-90">
                    Full-featured iOS and Android app included with Core HR. Give your team the flexibility they need.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                      <span>Mobile time tracking with GPS</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                      <span>Leave requests & approvals</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                      <span>Push notifications & alerts</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                      <span>Team directory & schedules</span>
                    </li>
                  </ul>
                  <Link
                    href="/product/mobile-app"
                    className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-neutral-100 transition-all space-x-2"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-6"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-blue-200">
                  <div className="text-4xl font-bold text-blue-600 mb-2">89%</div>
                  <div className="text-neutral-900 font-semibold mb-1">Mobile Adoption</div>
                  <div className="text-sm text-neutral-600">Employees prefer mobile</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-cyan-200">
                  <div className="text-4xl font-bold text-cyan-600 mb-2">3 sec</div>
                  <div className="text-neutral-900 font-semibold mb-1">Clock-In Time</div>
                  <div className="text-sm text-neutral-600">Average mobile clock-in</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-emerald-200">
                  <div className="text-4xl font-bold text-emerald-600 mb-2">24/7</div>
                  <div className="text-neutral-900 font-semibold mb-1">Access</div>
                  <div className="text-sm text-neutral-600">Anytime, anywhere</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-purple-200">
                  <div className="text-4xl font-bold text-purple-600 mb-2">iOS & Android</div>
                  <div className="text-neutral-900 font-semibold mb-1">Both Platforms</div>
                  <div className="text-sm text-neutral-600">Full feature parity</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
                Transform Your HR Operations
              </h2>
              <p className="text-xl text-neutral-600 mb-8">
                Our Core HR platform delivers measurable results that impact your bottom line and employee satisfaction.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-neutral-200">
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-neutral-900">Employee Directory</div>
                      <div className="text-sm text-neutral-500">247 active employees</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-4 border border-indigo-200">
                    <div className="text-sm text-indigo-700 mb-1">Onboarding in Progress</div>
                    <div className="text-2xl font-bold text-indigo-900">8</div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200">
                    <div className="text-sm text-blue-700 mb-1">Documents Pending Review</div>
                    <div className="text-2xl font-bold text-blue-900">12</div>
                  </div>
                  <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-4 border border-slate-200">
                    <div className="text-sm text-slate-700 mb-1">Compliance Items Due</div>
                    <div className="text-2xl font-bold text-slate-900">3</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 lg:py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Built for Real-World Scenarios
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              See how Core HR solves your daily challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-indigo-50/30 border border-indigo-100 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                  {useCase.title}
                </h3>
                <p className="text-neutral-600 text-lg">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-neutral-800 to-neutral-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to modernize your Core HR?
            </h2>
            <p className="text-xl mb-10 opacity-90">
              Join <strong>small</strong> HR teams who trust HRandME to manage their people operations efficiently—even with just 1-2 people.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact?type=demo"
                className="w-full sm:w-auto px-8 py-4 gradient-primary text-white rounded-lg hover:shadow-xl transition-all font-semibold text-lg flex items-center justify-center space-x-2 group"
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
