import { NextResponse } from 'next/server'
import { Resend } from 'resend'

// Initialize Resend only if API key is available
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { type, value, userName, timestamp } = body

    // Format the timestamp nicely
    const formattedTime = new Date(timestamp).toLocaleString('en-US', {
      dateStyle: 'full',
      timeStyle: 'short'
    })

    // Send email notification using Resend
    if (resend && process.env.RESEND_API_KEY) {
      try {
        await resend.emails.send({
          from: 'HRandME Chatbot <onboarding@resend.dev>', // Use Resend's test domain or your verified domain
          to: 'strettenmarial@gmail.com',
          subject: `🤖 New ${type} from HRandME Chatbot`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #4F46E5;">New Contact Information from Chatbot</h2>
              <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p style="margin: 10px 0;"><strong>User Name:</strong> ${userName || 'Anonymous'}</p>
                <p style="margin: 10px 0;"><strong>Contact Type:</strong> ${type.charAt(0).toUpperCase() + type.slice(1)}</p>
                <p style="margin: 10px 0;"><strong>${type === 'email' ? 'Email Address' : 'Phone Number'}:</strong> ${value}</p>
                <p style="margin: 10px 0;"><strong>Time:</strong> ${formattedTime}</p>
              </div>
              <p style="color: #6b7280; font-size: 14px;">This notification was sent from the HRandME website chatbot.</p>
            </div>
          `
        })

        console.log('✅ Email sent successfully to strettenmarial@gmail.com')
      } catch (emailError) {
        console.error('❌ Failed to send email:', emailError)
        // Still log to console as fallback
        console.log('📧 Contact notification (email failed):', {
          type,
          value,
          userName: userName || 'Anonymous',
          timestamp
        })
      }
    } else {
      // No API key configured, just log
      console.log('⚠️ RESEND_API_KEY not configured. Contact info:', {
        type,
        value,
        userName: userName || 'Anonymous',
        timestamp
      })
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Contact information received' 
    })
  } catch (error) {
    console.error('Error processing contact notification:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to process notification' },
      { status: 500 }
    )
  }
}
