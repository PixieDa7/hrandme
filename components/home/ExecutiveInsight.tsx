import { TrendingUp, Users, Target, BarChart3 } from 'lucide-react'

const metrics = [
  { icon: Users, label: 'Headcount & Growth', value: 'Real-time' },
  { icon: TrendingUp, label: 'Turnover & Retention', value: 'Live Data' },
  { icon: Target, label: 'Performance Distribution', value: 'Instant' },
  { icon: BarChart3, label: 'Compensation Trends', value: 'Updated' },
]

export default function ExecutiveInsight() {
  return (
    <section className="py-20 lg:py-28 bg-neutral-900 text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-6">
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className="p-6 bg-neutral-800 rounded-xl border border-neutral-700 hover:border-primary-500 transition-all hover:shadow-lg hover:shadow-primary-500/20"
                >
                  <metric.icon className="w-8 h-8 text-primary-400 mb-4" />
                  <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                  <div className="text-sm text-neutral-400">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Live HR intelligence for leadership.
            </h2>
            <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
              Provide executives with real-time access to workforce KPIs, trends, and insights—without manual reporting or data exports.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span className="text-neutral-300">Automated executive dashboards</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span className="text-neutral-300">Customizable KPI tracking</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span className="text-neutral-300">Trend analysis and forecasting</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span className="text-neutral-300">Secure, role-based access</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
