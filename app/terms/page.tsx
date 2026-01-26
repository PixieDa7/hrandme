'use client'

import Link from 'next/link'
import { Shield, FileText, CheckCircle, ArrowRight, AlertCircle, Scale } from 'lucide-react'
import { motion } from 'framer-motion'

export default function TermsPage() {
  const sections = [
    { id: 'access', title: '1. Access to and Use of the Service' },
    { id: 'data', title: '2. Data, Privacy, and Security' },
    { id: 'ownership', title: '3. Ownership and Intellectual Property' },
    { id: 'term', title: '4. Term, Termination, and Suspension' },
    { id: 'responsibilities', title: '5. Customer Responsibilities and Restrictions' },
    { id: 'fees', title: '6. Fees, Billing, and Taxes' },
    { id: 'warranties', title: '7. Warranties and Disclaimers' },
    { id: 'indemnification', title: '8. Indemnification' },
    { id: 'liability', title: '9. Limitation of Liability' },
    { id: 'governing', title: '10. Governing Law and Dispute Resolution' },
    { id: 'general', title: '11. General' }
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
              <Scale className="w-4 h-4" />
              <span className="text-sm font-semibold">Last Updated: January 19, 2026</span>
            </motion.div>
            <motion.h1 
              className="text-5xl lg:text-6xl font-bold text-neutral-900 mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              Terms of Service
            </motion.h1>
            <motion.p 
              className="text-xl text-neutral-600 leading-relaxed"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              These Terms govern your access to and use of the HRandME platform and services.
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
            <div className="bg-gradient-to-br from-orange-50 to-red-50 border-l-4 border-orange-500 rounded-lg p-6 mb-12">
              <div className="flex items-start space-x-4">
                <AlertCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">Important Notice</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    These Terms of Service, together with any applicable order form or subscription agreement, form a legally binding agreement between you and HRandME Inc. If you are entering into these Terms on behalf of an entity, you represent that you have authority to bind that entity.
                  </p>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <div id="access" className="mb-16 scroll-mt-32">
                <h2 className="text-3xl font-bold text-neutral-900 mb-6">1. Access to and Use of the Service</h2>
                
                <div className="bg-teal-50 border-l-4 border-teal-500 rounded-lg p-4 mb-6">
                  <p className="text-neutral-700 font-semibold">
                    <strong>No Right to Continued Availability.</strong> You acknowledge that access to the Service is not a property right and is provided subject to the Customer Agreement and these Terms.
                  </p>
                </div>

                <h3 className="text-2xl font-bold text-neutral-900 mb-4">1.1 Subscription and License</h3>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  Subject to these Terms and any applicable Order Form, HRandME grants you a limited, non-exclusive, non-transferable, non-sublicensable right during the Term to access and use the Service solely for your internal business purposes, in accordance with the documentation, user guides, and policies made available by HRandME (<strong>"Documentation"</strong>).
                </p>

                <h3 className="text-2xl font-bold text-neutral-900 mb-4">1.2 Affiliates</h3>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  Your affiliates may use the Service provided that (a) such use is for your internal business purposes, and (b) you remain fully responsible for all acts and omissions of your affiliates under these Terms. <strong>"Affiliate"</strong> means an entity that directly or indirectly controls, is controlled by, or is under common control with a party.
                </p>

                <h3 className="text-2xl font-bold text-neutral-900 mb-4">1.3 Accounts and Administrative Users</h3>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  You must designate at least one administrative user. You are responsible for maintaining accurate account information and for all activity occurring under your account. Credentials may not be shared. You must promptly notify HRandME of any unauthorized access or security incident.
                </p>

                <h3 className="text-2xl font-bold text-neutral-900 mb-4">1.4 Authorized Users</h3>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  Only your employees, contractors, or other individuals expressly authorized by you (<strong>"Authorized Users"</strong>) may access the Service. You are responsible for ensuring Authorized Users comply with these Terms.
                </p>

                <h3 className="text-2xl font-bold text-neutral-900 mb-4">1.5 Availability, Support, and Service Levels</h3>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  The availability of the Service, support obligations, uptime commitments, response times, and any service level agreements ("SLAs") are governed solely by the applicable written agreement or Order Form entered into between you and HRandME (the <strong>"Customer Agreement"</strong>). To the extent any SLA or support term is referenced outside of a Customer Agreement, such reference is informational only and non-binding.
                </p>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  In the event of any conflict between these Terms and a Customer Agreement regarding service levels, support, availability, or remedies, the Customer Agreement will control.
                </p>

                <h3 className="text-2xl font-bold text-neutral-900 mb-4">1.6 Updates and Modifications</h3>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  We may modify, update, or enhance the Service from time to time. We may suspend access where reasonably necessary for security, maintenance, or legal compliance.
                </p>

                <h3 className="text-2xl font-bold text-neutral-900 mb-4">1.7 Third-Party Services</h3>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  The Service may integrate with or enable access to third-party products or services. HRandME does not control and is not responsible for third-party services, their availability, security, functionality, or compliance with law. Your use of third-party services is solely at your own risk and governed by separate terms between you and the third party. HRandME disclaims all liability arising from third-party services, integrations, or data exchanges.
                </p>
              </div>

              <div id="data" className="mb-16 scroll-mt-32">
                <h2 className="text-3xl font-bold text-neutral-900 mb-6">2. Data, Privacy, and Security</h2>
                
                <div className="bg-teal-50 border-l-4 border-teal-500 rounded-lg p-4 mb-6">
                  <p className="text-neutral-700 font-semibold">
                    <strong>No Sensitive Data Obligation.</strong> Unless expressly agreed in writing, the Service is not intended to store or process protected health information, highly sensitive personal data, or regulated data subject to sector-specific laws.
                  </p>
                </div>

                <h3 className="text-2xl font-bold text-neutral-900 mb-4">2.1 Customer Content</h3>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  You retain ownership of all data, content, and information submitted to the Service (<strong>"Customer Content"</strong>). You grant HRandME a worldwide, royalty-free license to host, process, transmit, and display Customer Content solely as necessary to provide the Service.
                </p>

                <h3 className="text-2xl font-bold text-neutral-900 mb-4">2.2 Responsibility for Customer Content</h3>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  You represent and warrant that you have all rights, lawful bases, notices, and consents required to collect, use, disclose, and transfer Customer Content (including employee and candidate personal data) to HRandME and to process such data using the Service. You remain the data controller or equivalent under applicable law and are solely responsible for compliance with employment, labor, and privacy laws.
                </p>

                <h3 className="text-2xl font-bold text-neutral-900 mb-4">2.3 Privacy and Data Protection</h3>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  Each party will comply with applicable data protection and privacy laws, including, as applicable, Canadian federal and provincial privacy laws (including PIPEDA), the GDPR, UK GDPR, and other applicable international privacy regulations. HRandME's processing of personal data is governed by its <Link href="/privacy" className="text-teal-600 hover:text-teal-700 font-semibold">Privacy Policy</Link> and Data Processing Addendum (if applicable), which are incorporated by reference.
                </p>

                <h3 className="text-2xl font-bold text-neutral-900 mb-4">2.4 Information Security</h3>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  HRandME maintains administrative, technical, and organizational safeguards designed to protect Customer Content against unauthorized access, disclosure, or loss. <Link href="/security" className="text-teal-600 hover:text-teal-700 font-semibold">Learn more about our security practices</Link>.
                </p>

                <h3 className="text-2xl font-bold text-neutral-900 mb-4">2.5 Aggregated and Anonymized Data</h3>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  HRandME may generate and use aggregated and anonymized data derived from use of the Service for analytics, benchmarking, and service improvement, provided such data does not identify you or any individual.
                </p>
              </div>

              <div id="ownership" className="mb-16 scroll-mt-32">
                <h2 className="text-3xl font-bold text-neutral-900 mb-6">3. Ownership and Intellectual Property</h2>
                
                <div className="bg-teal-50 border-l-4 border-teal-500 rounded-lg p-4 mb-6">
                  <p className="text-neutral-700 font-semibold">
                    <strong>No Implied Licenses.</strong> Except as expressly stated, no licenses or rights are granted by implication, estoppel, or otherwise.
                  </p>
                </div>

                <h3 className="text-2xl font-bold text-neutral-900 mb-4">3.1 HRandME Property</h3>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  The Service, Documentation, and all related intellectual property rights are and remain the exclusive property of HRandME and its licensors. No rights are granted except as expressly stated in these Terms.
                </p>

                <h3 className="text-2xl font-bold text-neutral-900 mb-4">3.2 Feedback</h3>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  You grant HRandME a perpetual, irrevocable, royalty-free license to use any feedback or suggestions you provide regarding the Service.
                </p>
              </div>

              <div id="term" className="mb-16 scroll-mt-32">
                <h2 className="text-3xl font-bold text-neutral-900 mb-6">4. Term, Termination, and Suspension</h2>

                <h3 className="text-2xl font-bold text-neutral-900 mb-4">4.1 Term</h3>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  The term of your right to access and use the Service is governed exclusively by the applicable Customer Agreement.
                </p>

                <h3 className="text-2xl font-bold text-neutral-900 mb-4">4.2 Termination and Suspension</h3>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  Any rights relating to termination, non-renewal, suspension of access, refunds, or wind-down of the Service are governed solely by the Customer Agreement. These Terms do not independently grant either party termination rights except as expressly required by applicable law.
                </p>

                <h3 className="text-2xl font-bold text-neutral-900 mb-4">4.3 Effect of Termination</h3>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  Upon termination or expiration as governed by the Customer Agreement, your access to the Service will cease in accordance with that agreement.
                </p>

                <h3 className="text-2xl font-bold text-neutral-900 mb-4">4.4 Data Return and Deletion</h3>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  Customer Content return, retention, and deletion obligations are governed by the Customer Agreement and HRandME's data retention policies, subject to applicable law.
                </p>
              </div>

              <div id="responsibilities" className="mb-16 scroll-mt-32">
                <h2 className="text-3xl font-bold text-neutral-900 mb-6">5. Customer Responsibilities and Restrictions</h2>
                
                <div className="bg-orange-50 border-l-4 border-orange-500 rounded-lg p-4 mb-6">
                  <p className="text-neutral-700 font-semibold">
                    <strong>Acceptable Use.</strong> HRandME may suspend or restrict access to the Service without liability if your use poses a security, legal, or reputational risk to HRandME or its customers.
                  </p>
                </div>

                <p className="text-neutral-700 leading-relaxed mb-4">
                  You will not (and will not permit others to):
                </p>
                <ul className="list-disc pl-6 space-y-2 text-neutral-700 mb-6">
                  <li>Use the Service in violation of applicable law</li>
                  <li>Reverse engineer, copy, or create derivative works of the Service</li>
                  <li>Provide access to unauthorized users</li>
                  <li>Use the Service to build or benchmark a competing product</li>
                  <li>Upload malicious code or unlawful, infringing, or discriminatory content</li>
                </ul>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  You acknowledge that HRandME does not make employment, compensation, or human resources decisions and is not responsible for actions you take based on information provided by the Service.
                </p>
              </div>

              <div id="fees" className="mb-16 scroll-mt-32">
                <h2 className="text-3xl font-bold text-neutral-900 mb-6">6. Fees, Billing, and Taxes</h2>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  All fees, billing terms, payment schedules, credits, refunds, price changes, late payment remedies, and tax treatment are governed exclusively by the applicable Customer Agreement. In the event of any inconsistency between these Terms and a Customer Agreement relating to fees or payment obligations, the Customer Agreement will prevail.
                </p>
              </div>

              <div id="warranties" className="mb-16 scroll-mt-32">
                <h2 className="text-3xl font-bold text-neutral-900 mb-6">7. Warranties and Disclaimers</h2>
                
                <div className="bg-orange-50 border-l-4 border-orange-500 rounded-lg p-4 mb-6">
                  <p className="text-neutral-700 font-semibold">
                    <strong>High-Risk Use Disclaimer.</strong> The Service is not designed for mission-critical, life-safety, or emergency use, and HRandME disclaims liability arising from such use.
                  </p>
                </div>

                <h3 className="text-2xl font-bold text-neutral-900 mb-4">7.1 Mutual Warranties</h3>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  Each party represents that it has authority to enter into these Terms.
                </p>

                <h3 className="text-2xl font-bold text-neutral-900 mb-4">7.2 Disclaimer</h3>
                <p className="text-neutral-700 leading-relaxed mb-4 uppercase font-semibold">
                  EXCEPT AS EXPRESSLY PROVIDED, THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE." TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, HRANDME DISCLAIMS ALL IMPLIED WARRANTIES, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                </p>
                <p className="text-neutral-700 leading-relaxed mb-6 uppercase font-semibold">
                  HRANDME DOES NOT PROVIDE LEGAL, TAX, OR EMPLOYMENT ADVICE.
                </p>
              </div>

              <div id="indemnification" className="mb-16 scroll-mt-32">
                <h2 className="text-3xl font-bold text-neutral-900 mb-6">8. Indemnification</h2>
                
                <div className="bg-teal-50 border-l-4 border-teal-500 rounded-lg p-4 mb-6">
                  <p className="text-neutral-700 font-semibold">
                    <strong>Scope Clarification.</strong> Indemnification obligations are subject to the limitations and exclusions set forth in the Customer Agreement and applicable law.
                  </p>
                </div>

                <h3 className="text-2xl font-bold text-neutral-900 mb-4">8.1 By HRandME</h3>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  HRandME will indemnify you against third-party claims alleging that the Service infringes intellectual property rights, subject to customary exclusions.
                </p>

                <h3 className="text-2xl font-bold text-neutral-900 mb-4">8.2 By You</h3>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  You will indemnify HRandME against claims arising from your Customer Content, use of the Service in violation of these Terms, or your employment-related decisions.
                </p>
              </div>

              <div id="liability" className="mb-16 scroll-mt-32">
                <h2 className="text-3xl font-bold text-neutral-900 mb-6">9. Limitation of Liability</h2>
                
                <div className="bg-orange-50 border-l-4 border-orange-500 rounded-lg p-4 mb-6">
                  <p className="text-neutral-700 font-semibold">
                    <strong>Essential Basis.</strong> The limitations in this section form an essential basis of the bargain between the parties and apply even if a remedy fails of its essential purpose.
                  </p>
                </div>

                <p className="text-neutral-700 leading-relaxed mb-4 uppercase font-semibold">
                  TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, NEITHER PARTY WILL BE LIABLE FOR INDIRECT, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.
                </p>
                <p className="text-neutral-700 leading-relaxed mb-6 uppercase font-semibold">
                  EACH PARTY'S TOTAL LIABILITY WILL NOT EXCEED THE FEES PAID OR PAYABLE BY YOU TO HRANDME IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
                </p>
              </div>

              <div id="governing" className="mb-16 scroll-mt-32">
                <h2 className="text-3xl font-bold text-neutral-900 mb-6">10. Governing Law and Dispute Resolution</h2>
                
                <div className="bg-teal-50 border-l-4 border-teal-500 rounded-lg p-4 mb-6">
                  <p className="text-neutral-700 font-semibold">
                    <strong>Exclusive Forum.</strong> To the maximum extent permitted by law, any disputes must be brought exclusively in the courts of Ontario, Canada.
                  </p>
                </div>

                <h3 className="text-2xl font-bold text-neutral-900 mb-4">10.1 Governing Law</h3>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  These Terms are governed by the laws of the Province of Ontario and the federal laws of Canada applicable therein, without regard to conflict of laws principles.
                </p>

                <h3 className="text-2xl font-bold text-neutral-900 mb-4">10.2 Venue</h3>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  Subject to applicable law, the courts located in Ontario, Canada will have exclusive jurisdiction. Nothing prevents HRandME from seeking injunctive relief in any jurisdiction.
                </p>
              </div>

              <div id="general" className="mb-16 scroll-mt-32">
                <h2 className="text-3xl font-bold text-neutral-900 mb-6">11. General</h2>

                <h3 className="text-2xl font-bold text-neutral-900 mb-4">11.1 Assignment</h3>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  Neither party may assign these Terms without consent, except in connection with a merger or sale of substantially all assets.
                </p>

                <h3 className="text-2xl font-bold text-neutral-900 mb-4">11.2 Force Majeure</h3>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  Neither party is liable for failure to perform due to events beyond reasonable control.
                </p>

                <h3 className="text-2xl font-bold text-neutral-900 mb-4">11.3 Severability</h3>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  If any provision is unenforceable, it will be modified to the minimum extent necessary to be enforceable.
                </p>

                <h3 className="text-2xl font-bold text-neutral-900 mb-4">11.4 Entire Agreement</h3>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  These Terms and all Order Forms constitute the entire agreement between the parties.
                </p>

                <h3 className="text-2xl font-bold text-neutral-900 mb-4">11.5 Order of Precedence</h3>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  In the event of a conflict between these Terms and any Customer Agreement, Order Form, statement of work, or other written agreement executed between you and HRandME, the terms of the Customer Agreement will control.
                </p>

                <h3 className="text-2xl font-bold text-neutral-900 mb-4">11.6 Amendments</h3>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  HRandME may update these Terms from time to time with notice. Updated Terms will not retroactively modify any executed Customer Agreement unless expressly agreed in writing by both parties.
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
              Questions About Our Terms?
            </h2>
            <p className="text-xl mb-10 opacity-90">
              Our team is here to help clarify any questions you may have about our Terms of Service.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-white text-teal-600 rounded-lg hover:shadow-xl transition-all font-semibold flex items-center justify-center space-x-2 group"
              >
                <span>Contact Our Team</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/privacy"
                className="w-full sm:w-auto px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg hover:bg-white/10 transition-all font-semibold"
              >
                View Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
