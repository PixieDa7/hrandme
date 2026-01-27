'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowRight, Building2 } from 'lucide-react'
import { motion } from 'framer-motion'

export default function LoginPage() {
  const [domain, setDomain] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Since we have no users yet, redirect to not-found page
    router.push('/login/not-found')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-50 via-white to-primary-50 pt-20">
      <div className="container-custom py-12">
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Logo/Header */}
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-neutral-900 mb-2">
                Log in to <span className="gradient-text">HRandME</span>
              </h1>
              <p className="text-neutral-600">
                Enter your company domain to continue
              </p>
            </div>

            {/* Login Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-neutral-200">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="domain" className="sr-only">
                    Company Domain
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Building2 className="h-5 w-5 text-neutral-400" />
                    </div>
                    <input
                      type="text"
                      id="domain"
                      value={domain}
                      onChange={(e) => setDomain(e.target.value)}
                      placeholder="your-company-domain"
                      className="block w-full pl-12 pr-32 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-neutral-900 placeholder-neutral-400"
                      required
                    />
                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                      <span className="text-neutral-500 text-sm">.hrandme.com</span>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 gradient-primary text-white rounded-lg hover:shadow-xl transition-all font-semibold text-base flex items-center justify-center space-x-2 group"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>

              <div className="mt-6 text-center">
                <Link
                  href="/contact"
                  className="text-sm text-primary-600 hover:text-primary-700 font-medium"
                >
                  Having trouble logging in? Contact us →
                </Link>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-200">
                <p className="text-center text-sm text-neutral-600 mb-4">OR</p>
                <div className="grid grid-cols-2 gap-3">
                  <Link
                    href="/contact?type=demo"
                    className="px-4 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-lg transition-colors text-sm font-medium text-center flex items-center justify-center space-x-2"
                  >
                    <span>Request a demo</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="px-4 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-lg transition-colors text-sm font-medium text-center flex items-center justify-center space-x-2"
                  >
                    <span>Take a free tour</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-6 text-center">
              <p className="text-sm text-neutral-600">
                Don't have an account?{' '}
                <Link href="/contact" className="text-primary-600 hover:text-primary-700 font-semibold">
                  Get started with HRandME
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
