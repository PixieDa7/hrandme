import { Users, Sparkles, Link2, Shield, HeadphonesIcon, Clock } from 'lucide-react'

const pillars = [
  {
    icon: Users,
    title: 'Built for <strong>Small</strong> HR Teams',
    description: 'Designed for teams of 1-2 people—powerful tools without the complexity.',
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-50 to-cyan-50',
  },
  {
    icon: Sparkles,
    title: 'AI That Guides Change',
    description: 'AI supports HR by guiding system updates, explaining impact, and reducing risk.',
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-50 to-pink-50',
  },
  {
    icon: Link2,
    title: 'Integrates With Payroll & Benefits',
    description: 'Seamlessly connects to your existing payroll and benefits providers.',
    gradient: 'from-emerald-500 to-teal-500',
    bgGradient: 'from-emerald-50 to-teal-50',
  },
  {
    icon: Shield,
    title: 'Enterprise-Grade Security',
    description: 'Your data remains yours—secure, private, and protected.',
    gradient: 'from-orange-500 to-red-500',
    bgGradient: 'from-orange-50 to-red-50',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Human Support',
    description: 'Always-on access to HRIS experts when it matters most.',
    gradient: 'from-indigo-500 to-purple-500',
    bgGradient: 'from-indigo-50 to-purple-50',
  },
  {
    icon: Clock,
    title: 'Robust Time & Attendance',
    description: 'Geofencing locations, easy-to-use system that flows seamlessly over to payroll.',
    gradient: 'from-amber-500 to-yellow-500',
    bgGradient: 'from-amber-50 to-yellow-50',
  },
]

export default function ValuePillars() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-neutral-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            Why Choose <span className="gradient-text">HRandME</span>?
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Stop settling for HR software that's either too complex or too basic. HRandME delivers enterprise-grade power with the intuitive experience <strong>small</strong> HR teams deserve. Perfect for teams of just 1-2 people. Built by HR professionals who understand your challenges, designed for Canadian businesses who demand better.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className={`group p-8 rounded-2xl border-2 border-transparent bg-gradient-to-br ${pillar.bgGradient} hover:shadow-2xl transition-all duration-300 hover:-translate-y-1`}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${pillar.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all shadow-lg`}>
                <pillar.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3" dangerouslySetInnerHTML={{ __html: pillar.title }} />
              <p className="text-neutral-700 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
