import Link from 'next/link'
import { Mail, Linkedin, Twitter } from 'lucide-react'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <div className="mb-4">
              <Logo className="h-12 w-auto mb-4" variant="white" />
            </div>
            <p className="text-neutral-400 mb-4">
              HR expertise, without unnecessary complexity. Built by HR professionals for <strong>small</strong> HR teams—even just 1-2 people.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:info@hrandme.com"
                className="w-10 h-10 bg-neutral-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/hrandme"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-neutral-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/hrandme_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-neutral-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/product/core-hr" className="text-neutral-400 hover:text-white transition-colors">
                  Core HR
                </Link>
              </li>
              <li>
                <Link href="/product/leave-management" className="text-neutral-400 hover:text-white transition-colors">
                  Leave Management
                </Link>
              </li>
              <li>
                <Link href="/product/time-attendance" className="text-neutral-400 hover:text-white transition-colors">
                  Time & Attendance
                </Link>
              </li>
              <li>
                <Link href="/product/performance" className="text-neutral-400 hover:text-white transition-colors">
                  Performance
                </Link>
              </li>
              <li>
                <Link href="/product/compensation" className="text-neutral-400 hover:text-white transition-colors">
                  Compensation
                </Link>
              </li>
              <li>
                <Link href="/product/ai-intelligence" className="text-neutral-400 hover:text-white transition-colors">
                  AI Intelligence
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-neutral-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-neutral-400 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/integrations" className="text-neutral-400 hover:text-white transition-colors">
                  Integrations
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/security" className="text-neutral-400 hover:text-white transition-colors">
                  Security
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-neutral-400 hover:text-white transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-neutral-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-neutral-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center text-neutral-500 text-sm">
              &copy; 2026 HRandME. All rights reserved.
            </div>
            <div className="flex items-center gap-2 text-neutral-400 text-sm">
              <span className="text-xl">🍁</span>
              <span>Proudly Canadian</span>
            </div>
            <p className="text-neutral-400 text-sm">
              Built by HR professionals, for HR professionals.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
