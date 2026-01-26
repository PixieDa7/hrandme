'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MessageCircle, Book, Video, Mail, Search, Shield, Clock, CheckCircle, ArrowRight, Sparkles, Phone, FileText, HelpCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function SupportPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoggedIn(true)
  }

  const supportResources = [
    {
      icon: Book,
      title: 'Knowledge Base',
      description: 'Browse our comprehensive documentation and guides',
      link: '#',
      color: 'from-teal-500 to-emerald-500'
    },
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Watch step-by-step video guides for common tasks',
      link: '#',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: FileText,
      title: 'API Documentation',
      description: 'Technical documentation for developers',
      link: '#',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: HelpCircle,
      title: 'FAQs',
      description: 'Quick answers to frequently asked questions',
      link: '#',
      color: 'from-blue-500 to-cyan-500'
    }
  ]

  const supportChannels = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team in real-time',
      availability: 'Available 24/7',
      action: 'Start Chat',
      color: 'from-teal-500 to-emerald-500'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with a Canadian HR expert',
      availability: 'Mon-Fri 9AM-5PM EST',
      action: 'Call Now',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us a detailed message',
      availability: 'Response within 24 hours',
      action: 'Send Email',
      color: 'from-orange-500 to-red-500'
    }
  ]

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-emerald-50 pt-20">
        <section className="py-20">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <motion.div 
                className="text-center mb-16"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <h1 className="text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
                  How can we <span className="gradient-text">help you</span>?
                </h1>
                <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                  Get 24/7 support from our Canadian team of HR and Payroll experts
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="bg-white rounded-2xl shadow-2xl p-8 border border-neutral-200">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-xl flex items-center justify-center">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-neutral-900">Customer Login</h2>
                    </div>
                    <p className="text-neutral-600 mb-6">
                      Sign in to access live chat, submit tickets, and view your support history
                    </p>
                    <form onSubmit={handleLogin} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                          placeholder="you@company.com"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-2">
                          Password
                        </label>
                        <input
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                          placeholder="••••••••"
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full px-6 py-3 bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-lg hover:shadow-xl transition-all font-semibold flex items-center justify-center space-x-2 group"
                      >
                        <span>Sign In to Support Portal</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </form>
                    <div className="mt-4 text-center">
                      <a href="#" className="text-sm text-teal-600 hover:text-teal-700 font-medium">
                        Forgot your password?
                      </a>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="space-y-6"
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="bg-gradient-to-br from-teal-600 via-emerald-600 to-teal-700 rounded-2xl shadow-xl p-8 text-white">
                    <h3 className="text-2xl font-bold mb-4">Why Sign In?</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                        <span>Access live chat with our support team</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                        <span>Submit and track support tickets</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                        <span>View your complete support history</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                        <span>Get personalized help based on your account</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                        <span>Access premium support features</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-2xl shadow-xl p-6 border border-neutral-200">
                    <div className="flex items-center space-x-3 mb-4">
                      <Sparkles className="w-6 h-6 text-teal-600" />
                      <h3 className="text-lg font-bold text-neutral-900">Not a customer yet?</h3>
                    </div>
                    <p className="text-neutral-600 mb-4">
                      Experience AI-powered HR management with our free demo
                    </p>
                    <Link
                      href="/contact?type=demo"
                      className="inline-flex items-center space-x-2 text-teal-600 hover:text-teal-700 font-semibold"
                    >
                      <span>Request a Demo</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-neutral-900 mb-4">
                  Self-Service Resources
                </h2>
                <p className="text-xl text-neutral-600">
                  Find answers quickly with our comprehensive help resources
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {supportResources.map((resource, index) => (
                  <motion.a
                    key={index}
                    href={resource.link}
                    className="group p-6 bg-white rounded-2xl border-2 border-neutral-200 hover:border-teal-500 hover:shadow-xl transition-all"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${resource.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <resource.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900 mb-2">{resource.title}</h3>
                    <p className="text-neutral-600 text-sm">{resource.description}</p>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-emerald-50 pt-20">
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
                  Welcome back! 👋
                </h1>
                <p className="text-xl text-neutral-600">
                  How can we help you today?
                </p>
              </div>
              <button
                onClick={() => setIsLoggedIn(false)}
                className="px-6 py-3 border-2 border-neutral-300 text-neutral-700 rounded-lg hover:border-teal-500 hover:text-teal-600 transition-all font-semibold"
              >
                Sign Out
              </button>
            </div>

            <div className="mb-12">
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for help articles, guides, or ask a question..."
                  className="w-full pl-12 pr-4 py-4 border-2 border-neutral-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent text-lg"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {supportChannels.map((channel, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl shadow-xl p-6 border border-neutral-200 hover:shadow-2xl transition-all"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`w-14 h-14 bg-gradient-to-r ${channel.color} rounded-xl flex items-center justify-center mb-4`}>
                    <channel.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">{channel.title}</h3>
                  <p className="text-neutral-600 mb-3">{channel.description}</p>
                  <div className="flex items-center space-x-2 text-sm text-teal-600 mb-4">
                    <Clock className="w-4 h-4" />
                    <span>{channel.availability}</span>
                  </div>
                  <button className="w-full px-4 py-3 bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-lg hover:shadow-xl transition-all font-semibold">
                    {channel.action}
                  </button>
                </motion.div>
              ))}
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-neutral-200">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">Recent Support Tickets</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors cursor-pointer">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-lg flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900">Question about payroll integration</h4>
                      <p className="text-sm text-neutral-600">Ticket #12345 • Opened 2 hours ago</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">
                    In Progress
                  </span>
                </div>
                <div className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors cursor-pointer">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900">Help with leave management setup</h4>
                      <p className="text-sm text-neutral-600">Ticket #12344 • Opened yesterday</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    Resolved
                  </span>
                </div>
              </div>
              <button className="mt-6 text-teal-600 hover:text-teal-700 font-semibold flex items-center space-x-2">
                <span>View All Tickets</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-neutral-900 mb-4">
                Browse Help Resources
              </h2>
              <p className="text-xl text-neutral-600">
                Find answers in our comprehensive knowledge base
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportResources.map((resource, index) => (
                <motion.a
                  key={index}
                  href={resource.link}
                  className="group p-6 bg-white rounded-2xl border-2 border-neutral-200 hover:border-teal-500 hover:shadow-xl transition-all"
                  whileHover={{ y: -5 }}
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${resource.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <resource.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">{resource.title}</h3>
                  <p className="text-neutral-600 text-sm">{resource.description}</p>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
