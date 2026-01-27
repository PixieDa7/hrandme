# Email Notification Setup Guide

The chatbot is configured to send email notifications to **strettenmarial@gmail.com** when users share their contact information.

## Quick Setup (5 minutes)

### Step 1: Get a Resend API Key

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account (no credit card required)
3. Verify your email address
4. Go to **API Keys** section
5. Click **Create API Key**
6. Copy the API key (starts with `re_`)

### Step 2: Add API Key to Your Project

1. Create a file named `.env.local` in the root of your project (if it doesn't exist)
2. Add this line:
   ```
   RESEND_API_KEY=re_your_actual_api_key_here
   ```
3. Save the file

### Step 3: Restart Your Development Server

```bash
# Stop the current server (Ctrl+C)
# Then restart it
npm run dev
```

### Step 4: Test It!

1. Open your website at `localhost:3000`
2. Open the chatbot
3. Type: "My email is test@example.com"
4. Check strettenmarial@gmail.com for the notification email!

## What Gets Sent

When a user shares their contact info, you'll receive an email with:
- User's name (if they provided it)
- Contact type (email or phone)
- The actual contact information
- Timestamp of when it was shared

## Using a Custom Domain (Optional)

By default, emails come from `onboarding@resend.dev`. To use your own domain:

1. In Resend dashboard, go to **Domains**
2. Click **Add Domain**
3. Add your domain (e.g., hrandme.com)
4. Follow DNS verification steps
5. Update the `from` field in `/app/api/contact-notification/route.ts`:
   ```typescript
   from: 'chatbot@hrandme.com'
   ```

## Troubleshooting

**Not receiving emails?**
- Check your spam folder
- Verify the API key is correct in `.env.local`
- Make sure you restarted the dev server after adding the API key
- Check the terminal for error messages

**Still not working?**
- Check the terminal logs - you'll see console messages about email status
- Verify your Resend account is active
- Try sending a test email from the Resend dashboard

## Free Tier Limits

Resend free tier includes:
- 3,000 emails per month
- 100 emails per day
- Perfect for chatbot notifications!

---

Need help? The API route is at: `/app/api/contact-notification/route.ts`
