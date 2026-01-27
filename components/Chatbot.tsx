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

function findBestResponse(userMessage: string, userName?: string): string {
  const lowerMessage = userMessage.toLowerCase()
  const greeting = userName ? `Hello, ${userName}! 👋` : "Hello! 👋"
  
  // Check for greetings
  if (knowledgeBase.greetings.some(greeting => lowerMessage.includes(greeting))) {
    return `${greeting} I'm the HRandME AI assistant. I'm here to help answer questions about our AI-guided HRIS platform. What would you like to know?`
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
  const namePrefix = userName ? `${userName}, I'd` : "I'd"
  return `${namePrefix} be happy to help! I can answer questions about HRandME's features, pricing, AI capabilities, integrations, and more. <a href='https://www.hrandme.com/contact' target='_blank' rel='noopener noreferrer' class='text-primary-600 hover:text-primary-700 underline font-semibold'>Click here</a> to book a demo, talk to a software specialist, or talk to sales.`
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm the HRandME AI assistant. 👋 Before we get started, I'd love to know your name. What should I call you?",
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [userName, setUserName] = useState<string>('')
  const [userEmail, setUserEmail] = useState<string>('')
  const [userPhone, setUserPhone] = useState<string>('')
  const [onboardingStep, setOnboardingStep] = useState<'name' | 'email' | 'phone' | 'complete'>('name')
  const [nameAttempts, setNameAttempts] = useState(0)
  const [currentPrompts, setCurrentPrompts] = useState<Array<{ label: string, query: string }>>([])
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const isValidName = (text: string): boolean => {
    const trimmed = text.trim()
    const words = trimmed.split(/\s+/)
    
    // Reject if more than 2 words
    if (words.length > 2) return false
    
    // Reject if it looks like a sentence (contains common sentence indicators)
    const sentenceIndicators = /[.!?]|^(i am|my name is|this is|i'm|hello|hi|hey|what|how|why|when|where)/i
    if (sentenceIndicators.test(trimmed)) return false
    
    // Reject if too long (likely a sentence)
    if (trimmed.length > 30) return false
    
    // Must have at least one letter
    if (!/[a-zA-Z]/.test(trimmed)) return false
    
    return true
  }

  const detectName = (message: string): string | null => {
    const lowerMessage = message.toLowerCase()
    
    // Common patterns for name introduction
    const patterns = [
      /(?:my name is|i'm|i am|this is|call me)\s+([a-z]+)/i,
      /^([a-z]+)$/i, // Single word responses (likely a name)
    ]
    
    for (const pattern of patterns) {
      const match = message.match(pattern)
      if (match && match[1]) {
        const name = match[1]
        // Capitalize first letter
        return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
      }
    }
    
    return null
  }

  const detectEmail = (message: string): string | null => {
    const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/
    const match = message.match(emailPattern)
    return match ? match[0] : null
  }

  const detectPhone = (message: string): string | null => {
    // Extract all digits from the message
    const digits = message.replace(/\D/g, '')
    
    // Accept exactly 10 digits (North American format)
    if (digits.length === 10) {
      return digits
    }
    
    // Accept 11 digits if it starts with 1 (country code)
    if (digits.length === 11 && digits.startsWith('1')) {
      return digits.substring(1) // Remove the leading 1
    }
    
    return null
  }

  const formatPhoneNumber = (phone: string): string => {
    // Remove all non-digits
    const digits = phone.replace(/\D/g, '')
    
    // Format as XXX-XXX-XXXX
    if (digits.length === 10) {
      return `${digits.substring(0, 3)}-${digits.substring(3, 6)}-${digits.substring(6, 10)}`
    }
    
    return phone // Return original if not 10 digits
  }

  const sendContactNotification = async (type: 'email' | 'phone', value: string, userName?: string) => {
    try {
      await fetch('/api/contact-notification', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          type, 
          value, 
          userName: userName || 'Anonymous', 
          timestamp: new Date().toISOString() 
        })
      })
    } catch (error) {
      console.error('Failed to send notification:', error)
    }
  }

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
      let responseText: string
      
      // Handle onboarding flow
      if (onboardingStep === 'name') {
        const trimmedInput = textToSend.trim()
        
        // Check if user wants to skip
        if (nameAttempts >= 2 && /^(skip|no|pass|next|continue)$/i.test(trimmedInput)) {
          setUserName('Friend')
          setOnboardingStep('complete')
          responseText = `No problem, Friend! Let's get started. What would you like to learn about HRandME?`
          setCurrentPrompts([
            { label: 'Core HR', query: 'Tell me about Core HR' },
            { label: 'Performance', query: 'Tell me about Performance Management' },
            { label: 'Recruitment', query: 'Tell me about Recruitment' },
            { label: 'Compensation', query: 'Tell me about Compensation' },
            { label: 'Pricing', query: 'What are your prices?' },
            { label: 'About Us', query: 'Tell me about HRandME' },
          ])
        }
        // Validate name
        else if (isValidName(trimmedInput)) {
          const detectedName = detectName(trimmedInput) || trimmedInput
          setUserName(detectedName)
          setOnboardingStep('email')
          setNameAttempts(0)
          responseText = `Nice to meet you, ${detectedName}! 😊 Could you please share your email address so we can follow up with you?`
        }
        // Invalid name - ask again
        else {
          setNameAttempts(prev => prev + 1)
          if (nameAttempts >= 1) {
            responseText = `I'm looking for just your first name or first and last name (e.g., "Sarah" or "John Smith"). If you'd prefer not to share, just type "skip" to continue.`
          } else {
            responseText = `That looks like a sentence rather than a name. Could you please share just your first name or first and last name? (e.g., "Sarah" or "John Smith")`
          }
        }
      }
      else if (onboardingStep === 'email') {
        const detectedEmail = detectEmail(textToSend)
        if (detectedEmail) {
          setUserEmail(detectedEmail)
          setOnboardingStep('phone')
          responseText = `Great! And what's the best phone number to reach you at?`
        } else {
          responseText = `I didn't catch a valid email address. Could you please provide your email? (e.g., name@example.com)`
        }
      }
      else if (onboardingStep === 'phone') {
        const detectedPhone = detectPhone(textToSend)
        if (detectedPhone) {
          const formattedPhone = formatPhoneNumber(detectedPhone)
          setUserPhone(formattedPhone)
          setOnboardingStep('complete')
          
          // Send notification with all collected info
          sendContactNotification('email', userEmail, userName)
          sendContactNotification('phone', formattedPhone, userName)
          
          responseText = `Perfect! I've got your number as ${formattedPhone}. Thank you, ${userName}! 🙏 Our team will reach out to you shortly. Now, what would you like to learn about HRandME?`
          
          // Show topic prompts now that onboarding is complete
          setCurrentPrompts([
            { label: 'Core HR', query: 'Tell me about Core HR' },
            { label: 'Performance', query: 'Tell me about Performance Management' },
            { label: 'Recruitment', query: 'Tell me about Recruitment' },
            { label: 'Compensation', query: 'Tell me about Compensation' },
            { label: 'Pricing', query: 'What are your prices?' },
            { label: 'About Us', query: 'Tell me about HRandME' },
          ])
        } else {
          responseText = `I didn't catch a valid 10-digit phone number. Please provide your phone number in any format (e.g., 9055912651 or 905-591-2651)`
        }
      }
      // Normal conversation after onboarding
      else {
        responseText = findBestResponse(textToSend, userName)
        setCurrentPrompts(getFollowUpPrompts(textToSend))
      }
      
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botResponse])
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

            {/* Suggested Prompts - Only show after onboarding */}
            {onboardingStep === 'complete' && currentPrompts.length > 0 && (
              <div className="px-4 py-3 bg-neutral-50 border-t border-neutral-200">
                <p className="text-xs text-neutral-600 mb-2 font-semibold">
                  What else would you like to know?
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
            )}

            {/* Input */}
            <div className="p-4 bg-white border-t border-neutral-200">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => {
                    const value = e.target.value
                    
                    // If we're collecting phone number, format it as they type
                    if (onboardingStep === 'phone') {
                      // Remove all non-digits
                      const digits = value.replace(/\D/g, '')
                      
                      // Format as (XXX) XXX-XXXX
                      let formatted = ''
                      if (digits.length > 0) {
                        formatted = '(' + digits.substring(0, 3)
                        if (digits.length > 3) {
                          formatted += ') ' + digits.substring(3, 6)
                          if (digits.length > 6) {
                            formatted += '-' + digits.substring(6, 10)
                          }
                        }
                      }
                      
                      setInputValue(formatted)
                    } else {
                      setInputValue(value)
                    }
                  }}
                  onKeyPress={handleKeyPress}
                  placeholder={
                    onboardingStep === 'name' ? 'Your name...' :
                    onboardingStep === 'email' ? 'name@example.com' :
                    onboardingStep === 'phone' && !inputValue ? '(___) ___-____' :
                    onboardingStep === 'phone' && inputValue ? '' :
                    'Ask me anything...'
                  }
                  maxLength={onboardingStep === 'phone' ? 14 : undefined}
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
              <p className="text-[10px] text-neutral-500 mt-2 leading-tight">
                By continuing, you agree to our <a href="/terms" target="_blank" className="underline hover:text-primary-600">Terms of Service</a> and <a href="/privacy" target="_blank" className="underline hover:text-primary-600">Privacy Policy</a>. You consent to being contacted by email and/or SMS about updates, services, etc. You may unsubscribe at any time.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
