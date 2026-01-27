'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import Logo from './Logo'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isProductOpen, setIsProductOpen] = useState(false)
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const productLinks = [
    { 
      name: 'Core HR', 
      href: '/product/core-hr',
      subLinks: [
        { name: 'Employee Record Management', href: '/product/employee-records' },
        { name: 'Leave Management', href: '/product/leave-management' },
        { name: 'Time & Attendance', href: '/product/time-attendance' },
        { name: 'Payroll Integration', href: '/product/payroll' },
        { name: 'AI Intelligence', href: '/product/ai-intelligence' },
        { name: 'Analytics', href: '/product/analytics' },
        { name: 'Mobile App', href: '/product/mobile-app' },
      ]
    },
    { name: 'Recruitment', href: '/product/recruitment' },
    { name: 'Performance', href: '/product/performance' },
    { name: 'Compensation', href: '/product/compensation' },
  ]

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-md"
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <Logo className="h-12 w-auto" />
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            <div 
              className="relative"
              onMouseEnter={() => setIsProductOpen(true)}
              onMouseLeave={() => setIsProductOpen(false)}
            >
              <button
                className="flex items-center space-x-1 text-neutral-700 hover:text-primary-600 transition-colors font-medium py-2"
                onClick={() => setIsProductOpen(!isProductOpen)}
              >
                <span>Product</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isProductOpen ? 'rotate-180' : ''}`} />
              </button>
              {isProductOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-screen max-w-3xl"
                  style={{ left: '50%', transform: 'translateX(-50%)' }}
                >
                  <div className="glass-effect rounded-2xl shadow-2xl p-8 border border-neutral-200">
                    <div className="grid grid-cols-2 gap-12">
                      {/* Core HR Column */}
                      <div className="space-y-3">
                        <Link
                          href="/product/core-hr"
                          className="block text-lg font-bold gradient-text hover:opacity-80 transition-opacity mb-4"
                        >
                          Core HR
                        </Link>
                        <div className="space-y-2">
                          <Link href="/product/employee-records" className="block text-sm text-neutral-600 hover:text-primary-600 transition-colors py-1">
                            Employee Record Management
                          </Link>
                          <Link href="/product/leave-management" className="block text-sm text-neutral-600 hover:text-primary-600 transition-colors py-1">
                            Leave Management
                          </Link>
                          <Link href="/product/time-attendance" className="block text-sm text-neutral-600 hover:text-primary-600 transition-colors py-1">
                            Time & Attendance
                          </Link>
                          <Link href="/product/payroll" className="block text-sm text-neutral-600 hover:text-primary-600 transition-colors py-1">
                            Payroll Integration
                          </Link>
                          <Link href="/product/ai-intelligence" className="block text-sm text-neutral-600 hover:text-primary-600 transition-colors py-1">
                            AI Intelligence
                          </Link>
                          <Link href="/product/analytics" className="block text-sm text-neutral-600 hover:text-primary-600 transition-colors py-1">
                            Analytics
                          </Link>
                          <Link href="/product/mobile-app" className="block text-sm text-neutral-600 hover:text-primary-600 transition-colors py-1">
                            Mobile App
                          </Link>
                        </div>
                      </div>

                      {/* Other Products Column */}
                      <div className="space-y-6">
                        <div>
                          <Link
                            href="/product/recruitment"
                            className="block text-lg font-bold gradient-text hover:opacity-80 transition-opacity mb-2"
                            onClick={() => setIsProductOpen(false)}
                          >
                            Recruitment
                          </Link>
                          <p className="text-sm text-neutral-600">Streamline hiring with AI-powered applicant tracking and candidate management.</p>
                        </div>
                        <div>
                          <Link
                            href="/product/performance"
                            className="block text-lg font-bold gradient-text hover:opacity-80 transition-opacity mb-2"
                            onClick={() => setIsProductOpen(false)}
                          >
                            Performance
                          </Link>
                          <p className="text-sm text-neutral-600">Drive employee growth with continuous feedback and goal tracking.</p>
                        </div>
                        <div>
                          <Link
                            href="/product/compensation"
                            className="block text-lg font-bold gradient-text hover:opacity-80 transition-opacity mb-2"
                            onClick={() => setIsProductOpen(false)}
                          >
                            Compensation
                          </Link>
                          <p className="text-sm text-neutral-600">Manage pay equity and compensation planning with data-driven insights.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <Link
              href="/integrations"
              className="text-neutral-700 hover:text-primary-600 transition-colors font-medium"
              onClick={() => setIsProductOpen(false)}
            >
              Integrations
            </Link>
            <Link
              href="/solutions"
              className="text-neutral-700 hover:text-primary-600 transition-colors font-medium"
              onClick={() => setIsProductOpen(false)}
            >
              Solutions
            </Link>
            <Link
              href="/about"
              className="text-neutral-700 hover:text-primary-600 transition-colors font-medium"
              onClick={() => setIsProductOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-neutral-700 hover:text-primary-600 transition-colors font-medium"
              onClick={() => setIsProductOpen(false)}
            >
              Contact
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-3">
            <Link
              href="/contact"
              className="px-4 py-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors text-sm"
            >
              Talk to an Expert
            </Link>
            <Link
              href="/contact?type=demo"
              className="px-5 py-2 gradient-primary text-white rounded-lg hover:shadow-lg transition-all font-semibold text-sm"
            >
              Book a Demo
            </Link>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-neutral-200">
            <div className="flex flex-col space-y-4">
              <div className="space-y-2">
                <div className="font-semibold text-neutral-900 px-4">Product</div>
                {productLinks.map((link) => (
                  <div key={link.href}>
                    <Link
                      href={link.href}
                      className="block px-8 py-2 text-neutral-700 hover:bg-primary-50 hover:text-primary-600 transition-colors font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                    {link.subLinks && (
                      <div className="ml-4">
                        {link.subLinks.map((subLink) => (
                          <Link
                            key={subLink.href}
                            href={subLink.href}
                            className="block px-12 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subLink.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <Link
                href="/integrations"
                className="px-4 py-2 text-neutral-700 hover:text-primary-600 transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Integrations
              </Link>
              <Link
                href="/solutions"
                className="px-4 py-2 text-neutral-700 hover:text-primary-600 transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Solutions
              </Link>
              <Link
                href="/about"
                className="px-4 py-2 text-neutral-700 hover:text-primary-600 transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="px-4 py-2 text-neutral-700 hover:text-primary-600 transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="px-4 pt-4 space-y-3 border-t border-neutral-200">
                <Link
                  href="/contact"
                  className="block w-full px-6 py-2.5 text-center text-primary-600 border-2 border-primary-600 rounded-lg hover:bg-primary-50 font-semibold transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Talk to an Expert
                </Link>
                <Link
                  href="/contact?type=demo"
                  className="block w-full px-6 py-2.5 text-center gradient-primary text-white rounded-lg font-semibold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book a Demo
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
