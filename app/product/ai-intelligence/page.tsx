'use client'

import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle, Sparkles, Brain, TrendingUp, AlertCircle, Zap, ArrowRight, LineChart } from 'lucide-react'
import { motion } from 'framer-motion'

export default function AIIntelligencePage() {
  const features = [
    {
      icon: Brain,
      title: 'Predictive Analytics',
      description: 'AI-powered predictions for turnover risk, performance trends, and workforce planning needs.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: AlertCircle,
      title: 'Turnover Risk Detection',
      description: 'Identify at-risk employees before they leave with machine learning algorithms.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: TrendingUp,
      title: 'Talent Recommendations',
      description: 'AI-driven suggestions for promotions, development opportunities, and succession planning.',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: LineChart,
      title: 'Workforce Forecasting',
      description: 'Predict future hiring needs based on growth patterns, seasonality, and business objectives.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: CheckCircle,
      title: 'Smart Matching',
      description: 'Match candidates to roles and employees to projects using AI-powered skill analysis.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Zap,
      title: 'Automated Insights',
      description: 'Daily AI-generated insights delivered to your dashboard highlighting trends and anomalies.',
      color: 'from-teal-500 to-emerald-500'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <section className="relative py-20 lg:py-24 bg-gradient-to-br from-indigo-50 to-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"
            animate={{
              x: [0, -60, 0],
              y: [0, 60, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 left-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"
            animate={{
              x: [0, 60, 0],
              y: [0, -60, 0],
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
          className="absolute top-32 right-20 bg-white rounded-xl shadow-lg p-4 border border-purple-200 hidden lg:block"
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
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-sm font-semibold text-neutral-900">AI Insights</div>
              <div className="text-lg font-bold text-purple-600">23 New</div>
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
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-sm font-semibold text-neutral-900">Turnover Risk</div>
              <div className="flex items-center space-x-1 mt-1">
                <div className="w-20 h-2 bg-neutral-200 rounded-full overflow-hidden">
                  <div className="h-full w-1/4 bg-emerald-500 rounded-full" />
                </div>
                <span className="text-xs text-emerald-600 font-semibold">Low</span>
              </div>
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
            <Sparkles className="w-5 h-5 text-purple-600" />
            <span className="text-sm font-semibold text-neutral-900">AI Powered</span>
          </div>
        </motion.div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full mb-6 mt-8 lg:mt-12">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">AI Intelligence</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
              AI-Powered <span className="gradient-text">People Intelligence</span>
            </h1>
            <p className="text-xl text-neutral-600 mb-10 max-w-3xl mx-auto">
              Transform your HR data into actionable insights with advanced AI and machine learning. Make smarter decisions faster.
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
              AI That Works For Your HR Team
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Cutting-edge AI capabilities designed specifically for human resources.
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
                AI-Powered Insights
              </h2>
              <p className="text-xl text-neutral-600 mb-6">
                Harness the power of artificial intelligence to predict trends, identify risks, and make smarter people decisions.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-neutral-700">Predictive turnover analytics</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-neutral-700">Automated talent recommendations</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-neutral-700">Real-time workforce insights</span>
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
                src="/images/pexels-darlene-alderson-7971170.jpg"
                alt="AI and data analytics in HR"
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
              Ready to unlock AI-powered insights?
            </h2>
            <p className="text-xl mb-10 opacity-90">
              See how HRandME's AI can transform your people data into strategic advantage.
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
