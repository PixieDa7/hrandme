'use client'
import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Bot } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

const knowledgeBase = {
  greetings: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening'],
  pricing: {
    keywords: ['price', 'pricing', 'cost', 'how much', 'payment', 'plan', 'package'],
    response: "HRandME offers three solution packages: Basic HR, Core HR, and Enterprise/Modular. We provide custom pricing tailored to your organization's needs. <a href='https://www.hrandme.com/contact' target='_blank' rel='noopener noreferrer' class='text-primary-600 hover:text-primary-700 underline font-semibold'>Click here</a> to contact us."
  },
  features: {
    keywords: ['feature', 'what does', 'capabilities', 'can it', 'does it have', 'functionality'],
    response: "HRandME is an AI-guided HRIS platform with comprehensive features including: Employee Records Management, Leave & PTO Management, Time & Attendance, Payroll Integration, AI Intelligence & Insights, Analytics & Reporting, Performance Management, Recruitment, Compensation Management, and Mobile App access. Our AI guides you through every workflow and provides instant support."
  },
  ai: {
    keywords: ['ai', 'artificial intelligence', 'smart', 'intelligent', 'automation', 'guide'],
    response: "HRandME is built AI-first! Our AI guides you through workflows, provides instant employee support, explains system changes, and acts as a custom AI agent for your entire team. AI is integrated throughout the platform to make enterprise-grade HR simple for small teams."
  },
  smallTeams: {
    keywords: ['small team', 'team size', 'how many people', 'sme', 'small business'],
    response: "HRandME is specifically designed for small HR teams of 1-4 people managing small to medium-sized businesses. Our platform can be fully managed by just 1-2 HR professionals—no IT department required. Big solutions for small teams!"
  },
  integrations: {
    keywords: ['integrate', 'integration', 'connect', 'payroll', 'adp', 'ceridian', 'benefits'],
    response: "HRandME integrates seamlessly with major payroll and benefits providers including ADP Run, Ceridian Powerpay, Manulife, Sun Life, Microsoft Office Suite, and more. We also offer an Open API for custom integrations."
  },
  canadian: {
    keywords: ['canada', 'canadian', 'location', 'where'],
    response: "HRandME is proudly Canadian! 🍁 We're built by Canadian HR leaders who understand the unique needs of Canadian businesses. Our platform is designed specifically for Canadian compliance and regulations."
  },
  demo: {
    keywords: ['demo', 'trial', 'test', 'try', 'see it'],
    response: "We'd love to show you HRandME in action! <a href='https://www.hrandme.com/contact' target='_blank' rel='noopener noreferrer' class='text-primary-600 hover:text-primary-700 underline font-semibold'>Click here</a> to get started."
  },
  support: {
    keywords: ['support', 'help', 'assistance', 'customer service', '24/7'],
    response: "HRandME provides 24/7 human support with always-on access to HRIS experts when it matters most. Our team is here to help you succeed. <a href='https://www.hrandme.com/contact' target='_blank' rel='noopener noreferrer' class='text-primary-600 hover:text-primary-700 underline font-semibold'>Click here</a> to contact us."
  },
  products: {
    keywords: ['product', 'module', 'core hr', 'recruitment', 'performance', 'compensation', 'tell me about core hr', 'tell me about performance', 'tell me about recruitment', 'tell me about compensation'],
    response: "HRandME offers Core HR (Employee Records, Leave Management, Time & Attendance, Payroll Integration, AI Intelligence, Analytics, Mobile App) and optional add-on modules for Recruitment, Performance Management, and Compensation."
  },
  aboutUs: {
    keywords: ['about', 'who are you', 'tell me about hrandme', 'company', 'who built'],
    response: "HRandME is proudly Canadian 🍁 and built by HR professionals for small HR teams. We're an AI-guided HRIS platform designed specifically for teams of 1-4 people managing small to medium-sized businesses. Our mission is to deliver enterprise-grade HR capability with clarity, control, and confidence—without unnecessary complexity."
  }
}

function findBestResponse(userMessage: string): string {
  const lowerMessage = userMessage.toLowerCase()
  
  // Check for greetings
  if (knowledgeBase.greetings.some(greeting => lowerMessage.includes(greeting))) {
    return "Hello! 👋 I'm the HRandME AI assistant. I'm here to help answer questions about our AI-guided HRIS platform. What would you like to know?"
  }
  
  // Check each knowledge category
  for (const [category, data] of Object.entries(knowledgeBase)) {
    if (category === 'greetings') continue
    
    const { keywords, response } = data as { keywords: string[], response: string }
    if (keywords.some(keyword => lowerMessage.includes(keyword))) {
      return response
    }
  }
  
  // Default response
  return "I'd be happy to help! I can answer questions about HRandME's features, pricing, AI capabilities, integrations, and more. <a href='https://www.hrandme.com/contact' target='_blank' rel='noopener noreferrer' class='text-primary-600 hover:text-primary-700 underline font-semibold'>Click here</a> to book a demo, talk to a software specialist, or talk to sales."
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm the HRandME AI assistant. What would you like to learn more about?",
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [currentPrompts, setCurrentPrompts] = useState<Array<{ label: string, query: string }>>([
    { label: 'Core HR', query: 'Tell me about Core HR' },
    { label: 'Performance', query: 'Tell me about Performance Management' },
    { label: 'Recruitment', query: 'Tell me about Recruitment' },
    { label: 'Compensation', query: 'Tell me about Compensation' },
    { label: 'Pricing', query: 'What are your prices?' },
    { label: 'About Us', query: 'Tell me about HRandME' },
  ])
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const getFollowUpPrompts = (userQuery: string): Array<{ label: string, query: string }> => {
    const lowerQuery = userQuery.toLowerCase()
    
    // After Core HR questions
    if (lowerQuery.includes('core hr') || lowerQuery.includes('employee record') || lowerQuery.includes('leave')) {
      return [
        { label: 'AI Features', query: 'How does AI help?' },
        { label: 'Integrations', query: 'What integrations do you have?' },
        { label: 'Pricing', query: 'What are your prices?' },
        { label: 'Get Demo', query: 'How do I get a demo?' },
      ]
    }
    
    // After Performance/Recruitment/Compensation questions
    if (lowerQuery.includes('performance') || lowerQuery.includes('recruitment') || lowerQuery.includes('compensation')) {
      return [
        { label: 'Core HR', query: 'Tell me about Core HR' },
        { label: 'Small Teams', query: 'Is this for small teams?' },
        { label: 'Pricing', query: 'What are your prices?' },
        { label: 'Get Demo', query: 'How do I get a demo?' },
      ]
    }
    
    // After pricing questions
    if (lowerQuery.includes('price') || lowerQuery.includes('cost') || lowerQuery.includes('payment')) {
      return [
        { label: 'Core HR', query: 'Tell me about Core HR' },
        { label: 'Features', query: 'What features do you have?' },
        { label: 'Get Demo', query: 'How do I get a demo?' },
        { label: 'About Us', query: 'Tell me about HRandME' },
      ]
    }
    
    // After AI questions
    if (lowerQuery.includes('ai') || lowerQuery.includes('intelligent') || lowerQuery.includes('automation')) {
      return [
        { label: 'Core HR', query: 'Tell me about Core HR' },
        { label: 'Small Teams', query: 'Is this for small teams?' },
        { label: 'Support', query: 'What support do you offer?' },
        { label: 'Get Demo', query: 'How do I get a demo?' },
      ]
    }
    
    // After integrations questions
    if (lowerQuery.includes('integrat') || lowerQuery.includes('payroll') || lowerQuery.includes('adp')) {
      return [
        { label: 'Core HR', query: 'Tell me about Core HR' },
        { label: 'Pricing', query: 'What are your prices?' },
        { label: 'Get Demo', query: 'How do I get a demo?' },
        { label: 'Support', query: 'What support do you offer?' },
      ]
    }
    
    // After about/company questions
    if (lowerQuery.includes('about') || lowerQuery.includes('company') || lowerQuery.includes('canadian')) {
      return [
        { label: 'Core HR', query: 'Tell me about Core HR' },
        { label: 'AI Features', query: 'How does AI help?' },
        { label: 'Pricing', query: 'What are your prices?' },
        { label: 'Get Demo', query: 'How do I get a demo?' },
      ]
    }
    
    // After small teams questions
    if (lowerQuery.includes('small team') || lowerQuery.includes('team size') || lowerQuery.includes('sme')) {
      return [
        { label: 'Features', query: 'What features do you have?' },
        { label: 'AI Features', query: 'How does AI help?' },
        { label: 'Pricing', query: 'What are your prices?' },
        { label: 'Get Demo', query: 'How do I get a demo?' },
      ]
    }
    
    // After demo/support questions
    if (lowerQuery.includes('demo') || lowerQuery.includes('support') || lowerQuery.includes('help')) {
      return [
        { label: 'Core HR', query: 'Tell me about Core HR' },
        { label: 'Pricing', query: 'What are your prices?' },
        { label: 'About Us', query: 'Tell me about HRandME' },
        { label: 'Features', query: 'What features do you have?' },
      ]
    }
    
    // Default follow-ups
    return [
      { label: 'Core HR', query: 'Tell me about Core HR' },
      { label: 'Pricing', query: 'What are your prices?' },
      { label: 'Get Demo', query: 'How do I get a demo?' },
      { label: 'About Us', query: 'Tell me about HRandME' },
    ]
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = (messageText?: string) => {
    const textToSend = messageText || inputValue
    if (!textToSend.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: textToSend,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: findBestResponse(textToSend),
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botResponse])
      
      // Update suggested prompts based on the user's question
      setCurrentPrompts(getFollowUpPrompts(textToSend))
    }, 800)
  }

  const handlePromptClick = (query: string) => {
    handleSend(query)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all flex items-center justify-center group"
          >
            <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-neutral-200"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-600 to-accent-600 text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold">HRandME Assistant</h3>
                  <p className="text-xs opacity-90">AI-powered support</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/20 p-2 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-neutral-50">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white'
                        : 'bg-white text-neutral-900 border border-neutral-200'
                    }`}
                  >
                    <p className="text-sm" dangerouslySetInnerHTML={{ __html: message.text }} />
                    <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-white/70' : 'text-neutral-500'}`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Prompts */}
            <div className="px-4 py-3 bg-neutral-50 border-t border-neutral-200">
              <p className="text-xs text-neutral-600 mb-2 font-semibold">
                {messages.length === 1 ? 'Quick topics:' : 'What else would you like to know?'}
              </p>
              <div className="grid grid-cols-2 gap-2">
                {currentPrompts.map((prompt, index) => (
                  <button
                    key={index}
                    onClick={() => handlePromptClick(prompt.query)}
                    className="px-3 py-2 bg-white border border-neutral-300 rounded-lg text-xs text-neutral-700 hover:bg-primary-50 hover:border-primary-500 hover:text-primary-700 transition-all font-medium text-left"
                  >
                    {prompt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-neutral-200">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything..."
                  className="flex-1 px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm"
                />
                <button
                  onClick={() => handleSend()}
                  disabled={!inputValue.trim()}
                  className="p-2 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
