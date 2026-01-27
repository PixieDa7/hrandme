import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-neutral-800 to-neutral-900">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            See how HRandME can transform your HR operations with clarity, control, and confidence.
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Join <strong>small</strong> HR teams (even just 1-2 people) who trust HRandME for enterprise-grade capability without unnecessary complexity.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact?type=demo"
              className="w-full sm:w-auto px-8 py-4 gradient-primary text-white rounded-lg hover:shadow-xl transition-all font-semibold text-lg flex items-center justify-center space-x-2 group"
            >
              <span>Try Demo</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/solutions"
              className="w-full sm:w-auto px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg hover:bg-white/10 transition-all font-semibold text-lg"
            >
              View Solutions
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
