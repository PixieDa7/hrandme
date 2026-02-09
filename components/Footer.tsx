import Link from 'next/link'
import { Mail, Linkedin, Twitter } from 'lucide-react'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="text-white" style={{ backgroundColor: '#210949' }}>
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <div className="mb-4">
              <Logo className="h-12 w-auto mb-4" variant="white" />
            </div>
            <p className="text-white mb-4 opacity-90">
              HR expertise, without unnecessary complexity. Built by HR professionals for <strong>small</strong> HR teams—even just 1-2 people.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:info@hrandme.com"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/hrandme"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/hrandme_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/product/core-hr" className="text-white opacity-80 hover:opacity-100 transition-opacity">
                  Core HR
                </Link>
              </li>
              <li>
                <Link href="/product/leave-management" className="text-white opacity-80 hover:opacity-100 transition-opacity">
                  Leave Management
                </Link>
              </li>
              <li>
                <Link href="/product/time-attendance" className="text-white opacity-80 hover:opacity-100 transition-opacity">
                  Time & Attendance
                </Link>
              </li>
              <li>
                <Link href="/product/performance" className="text-white opacity-80 hover:opacity-100 transition-opacity">
                  Performance
                </Link>
              </li>
              <li>
                <Link href="/product/compensation" className="text-white opacity-80 hover:opacity-100 transition-opacity">
                  Compensation
                </Link>
              </li>
              <li>
                <Link href="/product/ai-intelligence" className="text-white opacity-80 hover:opacity-100 transition-opacity">
                  AI Intelligence
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-white opacity-80 hover:opacity-100 transition-opacity">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-white opacity-80 hover:opacity-100 transition-opacity">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/integrations" className="text-white opacity-80 hover:opacity-100 transition-opacity">
                  Integrations
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white opacity-80 hover:opacity-100 transition-opacity">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/security" className="text-white opacity-80 hover:opacity-100 transition-opacity">
                  Security
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-white opacity-80 hover:opacity-100 transition-opacity">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-white opacity-80 hover:opacity-100 transition-opacity">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white opacity-80 hover:opacity-100 transition-opacity">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center text-white text-sm opacity-80">
              &copy; 2026 HRandME. All rights reserved.
            </div>
            <div className="flex items-center gap-2 text-white text-sm opacity-80">
              <span className="text-xl">🍁</span>
              <span>Proudly Canadian</span>
            </div>
            <p className="text-white text-sm opacity-80">
              Built by HR professionals, for HR professionals.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
