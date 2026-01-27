import { CheckCircle } from 'lucide-react'

const integrations = [
  'ADP Run',
  'Ceridian Powerpay',
  'Manulife',
  'Sun Life',
  'Microsoft Office Suite',
  'Open API',
]

export default function PlatformOverview() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-primary-50 to-accent-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              A single HR system. Fully integrated.
            </h2>
            <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
              HRandME integrates seamlessly with your existing payroll, benefits, and productivity tools—so you can maintain a single source of truth without duplication.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">Core HR & Employee Records</h4>
                  <p className="text-neutral-600">Centralized, secure employee data management</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">Performance & Compensation</h4>
                  <p className="text-neutral-600">Structured tools for meaningful evaluations</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">AI-Guided Intelligence</h4>
                  <p className="text-neutral-600">AI guides workflows, provides employee support, and delivers smart insights for better decisions</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">Analytics & Reporting</h4>
                  <p className="text-neutral-600">Real-time dashboards for HR and executives</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass-effect rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">
              Integration Highlights
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {integrations.map((integration, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 bg-white rounded-lg border border-neutral-200 hover:border-primary-500 transition-colors"
                >
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span className="font-medium text-neutral-900">{integration}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-neutral-600">
              Connect seamlessly with your existing tools and workflows
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
