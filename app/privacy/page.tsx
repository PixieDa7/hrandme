'use client'

import Link from 'next/link'
import { Shield, Mail, MapPin, FileText, CheckCircle, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function PrivacyPage() {
  const sections = [
    { id: 'overview', title: '1. Overview' },
    { id: 'about', title: '2. About Us' },
    { id: 'service-provider', title: '3. HRandME as a Service Provider / Processor' },
    { id: 'principles', title: '4. Privacy Principles' },
    { id: 'information', title: '5. What Information We Collect' },
    { id: 'cookies', title: '6. Cookies and Similar Technologies' },
    { id: 'use', title: '7. How We Use Personal Information' },
    { id: 'sharing', title: '8. How We Share Personal Information' },
    { id: 'links', title: '9. Links to Third-Party Websites' },
    { id: 'security', title: '10. Information Security' },
    { id: 'social', title: '11. Social Media Features' },
    { id: 'rights', title: '12. Your Privacy Rights' },
    { id: 'canadian', title: '13. Canadian Privacy Rights' },
    { id: 'contact', title: '14. How to Contact Us' },
    { id: 'retention', title: '15. Data Retention' },
    { id: 'minors', title: '16. Information About Minors' },
    { id: 'updates', title: '17. Updates to This Privacy Policy' },
    { id: 'transfers', title: '18. International Data Transfers' }
  ]

  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="py-20 bg-gradient-to-br from-teal-50 via-white to-emerald-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="inline-flex items-center space-x-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full mb-6"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">Last Updated: January 19, 2026</span>
            </motion.div>
            <motion.h1 
              className="text-5xl lg:text-6xl font-bold text-neutral-900 mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              Privacy Policy
            </motion.h1>
            <motion.p 
              className="text-xl text-neutral-600 leading-relaxed"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Your privacy matters to us. This policy explains how HRandME collects, uses, and protects your personal information.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-b border-neutral-200 sticky top-20 z-40">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center space-x-4 overflow-x-auto pb-2">
              <span className="text-sm font-semibold text-neutral-700 whitespace-nowrap">Jump to:</span>
              <div className="flex space-x-2">
                {sections.slice(0, 6).map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="px-3 py-1 text-sm text-neutral-600 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors whitespace-nowrap"
                  >
                    {section.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div id="overview" className="mb-16 scroll-mt-32">
                <h2 className="text-3xl font-bold text-neutral-900 mb-6">1. Overview</h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  HRandME Inc. (<strong>"HRandME," "we," "us," or "our"</strong>) is committed to protecting privacy and handling Personal Information responsibly and transparently. This Privacy Policy explains how we collect, use, disclose, retain, and protect Personal Information, and how individuals may exercise their privacy rights.
                </p>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  This Privacy Policy applies to Personal Information we collect in the ordinary course of our business, including when you:
                </p>
                <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl p-6 mb-6 border border-teal-200">
                  <ul className="space-y-3 text-neutral-700">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                      <span>Visit our websites (including <a href="https://hrandme.com" className="text-teal-600 hover:text-teal-700 font-medium">https://hrandme.com</a>), interact with our social media pages, or receive marketing or informational communications from us (<strong>"Visitors"</strong>)</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                      <span>Register for, access, or use the HRandME platform and related services as an applicant, employee, contractor, or authorized user of one of our customers (<strong>"Users"</strong>), where HRandME acts as a data controller</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                      <span>Register for or attend HRandME events, webinars, demonstrations, tutorials, or promotions</span>
                    </li>
                  </ul>
                </div>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  "You" may be a Visitor or a User depending on the context.
                </p>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  This Privacy Policy does <strong>not</strong> apply to Personal Information collected in connection with HRandME's own employment, recruitment, or internal HR activities, which are governed by separate privacy notices.
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  For purposes of this Privacy Policy, <strong>"Personal Information"</strong> means information about an identified or identifiable individual as defined under applicable privacy and data protection laws, including Canada's <em>Personal Information Protection and Electronic Documents Act</em> (PIPEDA), applicable provincial legislation, and international data protection laws.
                </p>
              </div>

              <div id="about" className="mb-16 scroll-mt-32">
                <h2 className="text-3xl font-bold text-neutral-900 mb-6">2. About HRandME</h2>
                <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl p-8 mb-6 border border-teal-200">
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    HRandME Inc. is a Canadian company headquartered in Canada. We provide a cloud-based human resources information system (<strong>HRIS</strong>) designed to help organizations manage employee records, performance, compensation, time and attendance, analytics, and workforce operations globally (the <strong>"Services"</strong>).
                  </p>
                  <p className="text-neutral-700 leading-relaxed">
                    Our platform is designed as a system of record for HR teams, integrates with payroll, benefits, and enterprise tools, and incorporates AI-guided features to support—but not replace—human decision-making.
                  </p>
                </div>
                <p className="text-neutral-700 leading-relaxed">
                  Where required by law, HRandME acts as a data controller for Personal Information processed under this Privacy Policy.
                </p>
              </div>

              <div id="service-provider" className="mb-16 scroll-mt-32">
                <h2 className="text-3xl font-bold text-neutral-900 mb-6">3. HRandME as Service Provider / Processor</h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  HRandME customers (<strong>"Customers"</strong>) use the Services to process Personal Information relating to their applicants, employees, contractors, and other personnel (<strong>"End User Data"</strong>).
                </p>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  When HRandME processes Personal Information on behalf of a Customer:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="p-4 bg-teal-50 rounded-lg border border-teal-200">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                      <p className="text-neutral-700">HRandME acts solely as a service provider or data processor</p>
                    </div>
                  </div>
                  <div className="p-4 bg-teal-50 rounded-lg border border-teal-200">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                      <p className="text-neutral-700">Processing is governed by the applicable customer agreement and data processing addendum</p>
                    </div>
                  </div>
                  <div className="p-4 bg-teal-50 rounded-lg border border-teal-200">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                      <p className="text-neutral-700">This Privacy Policy does <strong>not</strong> apply to such processing</p>
                    </div>
                  </div>
                  <div className="p-4 bg-teal-50 rounded-lg border border-teal-200">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                      <p className="text-neutral-700">Requests must be directed to the applicable Customer (e.g., your employer)</p>
                    </div>
                  </div>
                </div>
                <p className="text-neutral-700 leading-relaxed">
                  Customers are responsible for complying with their own privacy obligations, providing required notices, and obtaining necessary consents. Their privacy practices may differ from those described in this Privacy Policy.
                </p>
              </div>

              <div id="principles" className="mb-16 scroll-mt-32">
                <h2 className="text-3xl font-bold text-neutral-900 mb-6">4. Privacy Principles</h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  HRandME follows these privacy principles:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="p-4 bg-teal-50 rounded-lg border border-teal-200">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                      <p className="text-neutral-700">We collect only Personal Information that is reasonably necessary to provide our Services or conduct our business</p>
                    </div>
                  </div>
                  <div className="p-4 bg-teal-50 rounded-lg border border-teal-200">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                      <p className="text-neutral-700">We use Personal Information only for the purposes described in this Privacy Policy or otherwise disclosed to you</p>
                    </div>
                  </div>
                  <div className="p-4 bg-teal-50 rounded-lg border border-teal-200">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                      <p className="text-neutral-700">We retain Personal Information only for as long as necessary</p>
                    </div>
                  </div>
                  <div className="p-4 bg-teal-50 rounded-lg border border-teal-200">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                      <p className="text-neutral-700">We do not sell Personal Information and do not share it except as described in this Privacy Policy</p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="information" className="mb-16 scroll-mt-32">
                <h2 className="text-3xl font-bold text-neutral-900 mb-6">5. Personal Information We Collect</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  The categories of Personal Information we collect depend on how you interact with HRandME, the Services used, and applicable law.
                </p>

                <h3 className="text-2xl font-bold text-neutral-900 mb-4">A. Information You Provide to Us</h3>
                
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 mb-6 border border-indigo-200">
                  <h4 className="text-xl font-semibold text-neutral-900 mb-3">Visitors</h4>
                  <p className="text-neutral-700 leading-relaxed mb-3">Visitors may provide:</p>
                  <ul className="space-y-2 text-neutral-700">
                    <li className="flex items-start space-x-2">
                      <span className="text-indigo-600 mt-1">•</span>
                      <span>Identifiers (name, business email address, phone number)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-indigo-600 mt-1">•</span>
                      <span>Professional or employment-related information (company name, role, title)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-indigo-600 mt-1">•</span>
                      <span>Marketing preferences and inferred interests</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-indigo-600 mt-1">•</span>
                      <span>Information submitted through forms, surveys, or communications</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-indigo-600 mt-1">•</span>
                      <span>Event-related information (such as accessibility needs or dietary preferences, where applicable)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl p-6 mb-6 border border-teal-200">
                  <h4 className="text-xl font-semibold text-neutral-900 mb-3">Users</h4>
                  <p className="text-neutral-700 leading-relaxed mb-3">Users may provide:</p>
                  <ul className="space-y-2 text-neutral-700">
                    <li className="flex items-start space-x-2">
                      <span className="text-teal-600 mt-1">•</span>
                      <span>Business contact details (name, title, email address, phone number, country)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-teal-600 mt-1">•</span>
                      <span>Account credentials and unique user identifiers</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-teal-600 mt-1">•</span>
                      <span>Employment-related information submitted directly by you (where HRandME acts as controller)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-teal-600 mt-1">•</span>
                      <span>Communications with support or implementation teams</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-teal-600 mt-1">•</span>
                      <span>Billing or payment information, where applicable</span>
                    </li>
                  </ul>
                  <p className="text-neutral-700 leading-relaxed mt-4 text-sm italic">
                    Providing certain Personal Information may be required to access specific features.
                  </p>
                </div>

                <h3 className="text-2xl font-bold text-neutral-900 mb-4">B. Information Collected Automatically</h3>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  We may automatically collect:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <p className="text-neutral-700">IP address and approximate location</p>
                  </div>
                  <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <p className="text-neutral-700">Device, browser, and operating system information</p>
                  </div>
                  <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <p className="text-neutral-700">Log files, usage metrics, and diagnostic data</p>
                  </div>
                  <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <p className="text-neutral-700">Security and audit logs</p>
                  </div>
                </div>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  This information is used for security, service operation, analytics, and improvement.
                </p>

                <h3 className="text-2xl font-bold text-neutral-900 mb-4">C. Information from Third Parties</h3>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  We may receive Personal Information from:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-neutral-700 mb-4">
                  <li>Public or professional sources</li>
                  <li>Marketing, sales, and analytics partners</li>
                  <li>Social media platforms</li>
                  <li>Event co-sponsors or referral partners</li>
                </ul>
              </div>

              <div id="cookies" className="mb-16 scroll-mt-32">
                <h2 className="text-3xl font-bold text-neutral-900 mb-6">6. Cookies and Similar Technologies</h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  HRandME uses cookies and similar technologies to:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="p-4 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-lg border border-teal-200">
                    <p className="text-neutral-700 font-semibold">Enable core website and Service functionality</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg border border-indigo-200">
                    <p className="text-neutral-700 font-semibold">Analyze performance and usage</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-orange-50 to-red-50 rounded-lg border border-orange-200">
                    <p className="text-neutral-700 font-semibold">Support marketing and advertising activities</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
                    <p className="text-neutral-700 font-semibold">Maintain security and session integrity</p>
                  </div>
                </div>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  You can manage cookies through browser settings. Disabling cookies may impact functionality. Where required by law, we honor Global Privacy Control (GPC) signals and consent preferences.
                </p>
              </div>

              <div id="use" className="mb-16 scroll-mt-32">
                <h2 className="text-3xl font-bold text-neutral-900 mb-6">7. How We Use Personal Information</h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  We use Personal Information for purposes including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-neutral-700 mb-4">
                  <li>Operating, maintaining, and securing the Services</li>
                  <li>Communicating with you regarding accounts, updates, or support</li>
                  <li>Providing customer and technical support</li>
                  <li>Managing billing and transactions</li>
                  <li>Hosting and administering events</li>
                  <li>Improving and developing products and features, including AI-guided functionality</li>
                  <li>Conducting analytics and internal reporting</li>
                  <li>Marketing and promotional communications (subject to preferences and law)</li>
                  <li>Preventing fraud and enforcing agreements</li>
                  <li>Meeting legal and regulatory obligations</li>
                </ul>
                <p className="text-neutral-700 leading-relaxed">
                  Where required by law, processing is based on consent. Otherwise, we rely on contractual necessity, legitimate interests, or legal obligations.
                </p>
              </div>

              <div id="sharing" className="mb-16 scroll-mt-32">
                <h2 className="text-3xl font-bold text-neutral-900 mb-6">8. How We Share Personal Information</h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  We may disclose Personal Information to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-neutral-700 mb-4">
                  <li>Service providers and subprocessors supporting hosting, security, analytics, support, and payment processing</li>
                  <li>Professional advisors (legal, accounting, audit)</li>
                  <li>Event or marketing partners, where applicable</li>
                  <li>Government authorities where required by law</li>
                  <li>Successors in the event of a corporate transaction</li>
                </ul>
                <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl p-6 border border-teal-200">
                  <p className="text-neutral-900 leading-relaxed font-bold text-lg">
                    We do <span className="text-teal-600">not</span> sell Personal Information.
                  </p>
                </div>
              </div>

              <div id="ai" className="mb-16 scroll-mt-32">
                <h2 className="text-3xl font-bold text-neutral-900 mb-6">9. AI and Automated Features</h2>
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-8 mb-6 border border-indigo-200">
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    HRandME may use AI-assisted or automated features to support HR workflows, analytics, and system guidance. These features:
                  </p>
                  <ul className="space-y-3 text-neutral-700">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                      <span>Are designed to assist human decision-making, not replace it</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                      <span>Do not make autonomous employment decisions</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                      <span>Operate subject to customer configuration and oversight</span>
                    </li>
                  </ul>
                </div>
                <p className="text-neutral-700 leading-relaxed">
                  Customers remain responsible for decisions made using the Services.
                </p>
              </div>

              <div id="security" className="mb-16 scroll-mt-32">
                <h2 className="text-3xl font-bold text-neutral-900 mb-6">10. Information Security</h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  HRandME maintains administrative, technical, and organizational safeguards designed to protect Personal Information, including encryption, access controls, and monitoring. No system is completely secure, and we cannot guarantee absolute security.
                </p>
                <Link href="/security" className="inline-flex items-center space-x-2 text-teal-600 hover:text-teal-700 font-semibold">
                  <span>Learn more about our security practices</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div id="social" className="mb-16 scroll-mt-32">
                <h2 className="text-3xl font-bold text-neutral-900 mb-6">11. Social Media and Third-Party Features</h2>
                <p className="text-neutral-700 leading-relaxed">
                  Our websites may include social media features or links to third-party sites. Their privacy practices are governed by their own policies, not this Privacy Policy.
                </p>
              </div>

              <div id="rights" className="mb-16 scroll-mt-32">
                <h2 className="text-3xl font-bold text-neutral-900 mb-6">12. Your Privacy Rights</h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Depending on your location, you may have rights to:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="p-4 bg-teal-50 rounded-lg border border-teal-200">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                      <p className="text-neutral-700">Access Personal Information</p>
                    </div>
                  </div>
                  <div className="p-4 bg-teal-50 rounded-lg border border-teal-200">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                      <p className="text-neutral-700">Request correction or deletion</p>
                    </div>
                  </div>
                  <div className="p-4 bg-teal-50 rounded-lg border border-teal-200">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                      <p className="text-neutral-700">Restrict or object to processing</p>
                    </div>
                  </div>
                  <div className="p-4 bg-teal-50 rounded-lg border border-teal-200">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                      <p className="text-neutral-700">Request data portability</p>
                    </div>
                  </div>
                  <div className="p-4 bg-teal-50 rounded-lg border border-teal-200">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                      <p className="text-neutral-700">Withdraw consent</p>
                    </div>
                  </div>
                  <div className="p-4 bg-teal-50 rounded-lg border border-teal-200">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                      <p className="text-neutral-700">Lodge complaints with a regulator</p>
                    </div>
                  </div>
                </div>
                <p className="text-neutral-700 leading-relaxed">
                  Where HRandME processes Personal Information on behalf of a Customer, requests must be directed to that Customer.
                </p>
              </div>

              <div id="canadian" className="mb-16 scroll-mt-32">
                <h2 className="text-3xl font-bold text-neutral-900 mb-6">13. Canadian Privacy Rights</h2>
                <p className="text-neutral-700 leading-relaxed">
                  Canadian residents have rights under PIPEDA and applicable provincial laws, including rights of access and correction, subject to legal limitations.
                </p>
              </div>

              <div id="contact" className="mb-16 scroll-mt-32">
                <h2 className="text-3xl font-bold text-neutral-900 mb-6">14. How to Contact Us</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  For questions about this Privacy Policy or to exercise your rights, contact us at:
                </p>
                <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-8 border border-teal-200">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-neutral-900 mb-1">Email</h4>
                        <a href="mailto:privacy@hrandme.com" className="text-teal-600 hover:text-teal-700 font-medium">
                          privacy@hrandme.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-neutral-900 mb-1">Mailing Address</h4>
                        <p className="text-neutral-700">
                          HRandME Inc.<br />
                          67 Manley Ave.<br />
                          Stouffville, ON L4A 0C4<br />
                          Canada
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="transfers" className="mb-16 scroll-mt-32">
                <h2 className="text-3xl font-bold text-neutral-900 mb-6">14. International Data Transfers</h2>
                <p className="text-neutral-700 leading-relaxed">
                  Personal Information may be transferred to and processed in jurisdictions outside your country of residence, including Canada and the United States. We use contractual and organizational safeguards to protect such transfers in accordance with applicable law.
                </p>
              </div>

              <div id="retention" className="mb-16 scroll-mt-32">
                <h2 className="text-3xl font-bold text-neutral-900 mb-6">15. Data Retention</h2>
                <p className="text-neutral-700 leading-relaxed">
                  We retain Personal Information only for as long as necessary to fulfill identified purposes, comply with legal obligations, resolve disputes, and enforce agreements.
                </p>
              </div>

              <div id="minors" className="mb-16 scroll-mt-32">
                <h2 className="text-3xl font-bold text-neutral-900 mb-6">16. Children's Information</h2>
                <p className="text-neutral-700 leading-relaxed">
                  The Services are not intended for individuals under 16 years of age. HRandME does not knowingly collect Personal Information from children.
                </p>
              </div>

              <div id="updates" className="mb-16 scroll-mt-32">
                <h2 className="text-3xl font-bold text-neutral-900 mb-6">17. Changes to This Privacy Policy</h2>
                <p className="text-neutral-700 leading-relaxed">
                  We may update this Privacy Policy from time to time. Material changes will be communicated by posting an updated version and, where appropriate, providing additional notice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-teal-600 via-emerald-600 to-teal-700 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Questions About Privacy?
            </h2>
            <p className="text-xl mb-10 opacity-90">
              Our privacy team is here to help answer any questions you may have.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:privacy@hrandme.com"
                className="w-full sm:w-auto px-8 py-4 bg-white text-teal-600 rounded-lg hover:shadow-xl transition-all font-semibold flex items-center justify-center space-x-2 group"
              >
                <Mail className="w-5 h-5" />
                <span>Email Privacy Team</span>
              </a>
              <Link
                href="/security"
                className="w-full sm:w-auto px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg hover:bg-white/10 transition-all font-semibold"
              >
                View Security Page
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
