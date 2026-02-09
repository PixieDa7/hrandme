'use client'

import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle, Smartphone, Clock, Bell, MapPin, Calendar, Users, ArrowRight, Zap, Shield, Download } from 'lucide-react'
import { motion } from 'framer-motion'

export default function MobileAppPage() {
  const features = [
    {
      icon: Clock,
      title: 'Mobile Time Tracking',
      description: 'Clock in and out from anywhere with GPS verification and photo capture for added security.',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Calendar,
      title: 'Leave Requests',
      description: 'Submit time-off requests, check balances, and view team calendars—all from your phone.',
      color: 'from-teal-500 to-emerald-500'
    },
    {
      icon: Bell,
      title: 'Push Notifications',
      description: 'Stay informed with real-time alerts for approvals, schedule changes, and important updates.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Team Directory',
      description: 'Access employee contact information, org charts, and team details on the go.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: MapPin,
      title: 'Geofencing',
      description: 'Ensure employees clock in from approved locations with automatic GPS-based verification.',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Shield,
      title: 'Secure Access',
      description: 'Biometric authentication and encrypted data ensure your information stays protected.',
      color: 'from-orange-500 to-red-500'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <section className="relative py-20 lg:py-24 bg-gradient-to-br from-blue-50 to-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"
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
            className="absolute bottom-20 left-10 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"
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
          className="absolute top-32 right-20 bg-white rounded-xl shadow-lg p-4 border border-blue-200 hidden lg:block"
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
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <Smartphone className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-sm font-semibold text-neutral-900">Mobile Users</div>
              <div className="text-2xl font-bold text-blue-600">89%</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-40 left-20 bg-white rounded-xl shadow-lg p-4 border border-emerald-200 hidden lg:block"
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
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-sm font-semibold text-neutral-900">Avg. Clock-in Time</div>
              <div className="text-2xl font-bold text-emerald-600">3 sec</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute top-1/2 right-10 bg-white rounded-xl shadow-lg p-3 border border-purple-200 hidden lg:block"
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
            <Download className="w-5 h-5 text-purple-600" />
            <span className="text-sm font-semibold text-neutral-900">iOS & Android</span>
          </div>
        </motion.div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6 mt-8 lg:mt-12">
              <Smartphone className="w-4 h-4" />
              <span className="text-sm font-semibold">Mobile App</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
              Your HR Platform <span className="gradient-text">In Your Pocket</span>
            </h1>
            <p className="text-xl text-neutral-600 mb-10 max-w-3xl mx-auto">
              Empower your workforce with mobile access to HR tools. Clock in, request time off, view schedules, and stay connected—anytime, anywhere.
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
                Everything Your Team Needs On Mobile
              </h2>
            </motion.div>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Full-featured mobile app for iOS and Android with all the tools your employees need.
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

      <section className="py-16 lg:py-20 bg-gradient-to-br from-neutral-800 to-neutral-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to go mobile?
            </h2>
            <p className="text-xl mb-10 opacity-90">
              Give your team the flexibility they need with HRandME's mobile app.
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
