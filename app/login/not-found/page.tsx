'use client'
import Link from 'next/link'
import { AlertCircle, ArrowLeft, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

export default function LoginNotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-50 via-white to-primary-50 pt-20">
      <div className="container-custom py-12">
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Error Icon */}
            <div className="mb-6 flex justify-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center">
                <AlertCircle className="w-10 h-10 text-red-600" />
              </div>
            </div>

            {/* Error Message */}
            <h1 className="text-3xl font-bold text-neutral-900 mb-4">
              Domain Not Found
            </h1>
            <p className="text-lg text-neutral-600 mb-8">
              We couldn't find an account associated with that domain. Please check your domain and try again, or contact us for assistance.
            </p>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Link
                href="/login"
                className="w-full px-6 py-3 gradient-primary text-white rounded-lg hover:shadow-xl transition-all font-semibold text-base flex items-center justify-center space-x-2 group"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <span>Try Again</span>
              </Link>

              <Link
                href="/contact"
                className="w-full px-6 py-3 bg-white border-2 border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-all font-semibold text-base flex items-center justify-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Contact Support</span>
              </Link>
            </div>

            {/* Additional Help */}
            <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-200">
              <h3 className="font-semibold text-neutral-900 mb-2">Need Help?</h3>
              <p className="text-sm text-neutral-600 mb-4">
                If you're a new customer or need assistance setting up your account, our team is here to help.
              </p>
              <Link
                href="/contact?type=demo"
                className="text-sm text-primary-600 hover:text-primary-700 font-semibold"
              >
                Schedule a demo →
              </Link>
            </div>

            {/* Back to Home */}
            <div className="mt-6">
              <Link
                href="/"
                className="text-sm text-neutral-600 hover:text-neutral-900 font-medium"
              >
                ← Back to home
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
