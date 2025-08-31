import React from 'react';
import { Mail, Settings, Code, CheckCircle, ExternalLink } from 'lucide-react';
import GlassmorphicCard from './GlassmorphicCard';

const EmailSetupGuide = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-rajdhani">
          📧 EmailJS Setup Guide
        </h1>
        <p className="text-gray-300 font-inter">
          Follow these steps to enable real-time email delivery from your contact form
        </p>
      </div>

      <div className="space-y-8">
        {/* Step 1 */}
        <GlassmorphicCard className="p-6 sm:p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
              1
            </div>
            <h2 className="text-2xl font-bold text-gray-300 font-rajdhani">Create EmailJS Account</h2>
          </div>
          <div className="space-y-4 text-gray-200 font-inter">
            <p>Visit <a href="https://emailjs.com" target="_blank" className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-1">emailjs.com <ExternalLink className="w-4 h-4" /></a> and create a free account</p>
            <p>EmailJS allows you to send emails directly from client-side JavaScript without a backend server.</p>
          </div>
        </GlassmorphicCard>

        {/* Step 2 */}
        <GlassmorphicCard className="p-6 sm:p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
              2
            </div>
            <h2 className="text-2xl font-bold text-gray-300 font-rajdhani">Setup Email Service</h2>
          </div>
          <div className="space-y-4 text-gray-200 font-inter">
            <p>In your EmailJS dashboard:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Go to "Email Services"</li>
              <li>Click "Add New Service"</li>
              <li>Choose Gmail, Outlook, or your preferred email provider</li>
              <li>Follow the authentication steps</li>
              <li>Note down your <strong>Service ID</strong></li>
            </ul>
          </div>
        </GlassmorphicCard>

        {/* Step 3 */}
        <GlassmorphicCard className="p-6 sm:p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
              3
            </div>
            <h2 className="text-2xl font-bold text-gray-300 font-rajdhani">Create Email Template</h2>
          </div>
          <div className="space-y-4 text-gray-200 font-inter">
            <p>Create a new email template with these variables:</p>
            <div className="bg-black/50 p-4 rounded-lg border border-gray-600/30 font-mono text-sm">
              <p>Subject: New Contact from VALAXIA Website - {`{{subject}}`}</p>
              <br />
              <p>From: {`{{from_name}}`} ({`{{from_email}}`})</p>
              <p>Subject: {`{{subject}}`}</p>
              <p>Message: {`{{message}}`}</p>
              <p>Timestamp: {`{{timestamp}}`}</p>
            </div>
            <p>Note down your <strong>Template ID</strong></p>
          </div>
        </GlassmorphicCard>

        {/* Step 4 */}
        <GlassmorphicCard className="p-6 sm:p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold">
              4
            </div>
            <h2 className="text-2xl font-bold text-gray-300 font-rajdhani">Update Configuration</h2>
          </div>
          <div className="space-y-4 text-gray-200 font-inter">
            <p>In your Contact.tsx file, update these constants:</p>
            <div className="bg-black/50 p-4 rounded-lg border border-gray-600/30 font-mono text-sm">
              <p className="text-green-400">const EMAILJS_SERVICE_ID = 'your_service_id';</p>
              <p className="text-blue-400">const EMAILJS_TEMPLATE_ID = 'your_template_id';</p>
              <p className="text-purple-400">const EMAILJS_PUBLIC_KEY = 'your_public_key';</p>
            </div>
            <p>You can find your Public Key in the EmailJS dashboard under "Account" → "General"</p>
          </div>
        </GlassmorphicCard>

        {/* Step 5 */}
        <GlassmorphicCard className="p-6 sm:p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-300 font-rajdhani">Test & Deploy</h2>
          </div>
          <div className="space-y-4 text-gray-200 font-inter">
            <p>Once configured:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Test the contact form locally</li>
              <li>Check your email inbox for test messages</li>
              <li>Deploy your updated site</li>
              <li>Verify the form works in production</li>
            </ul>
            <div className="bg-green-500/20 border border-green-500/30 p-4 rounded-lg">
              <p className="text-green-300 text-sm">
                ✅ Your contact form will now deliver messages directly to valxgalaxy@gmail.com in real-time!
              </p>
            </div>
          </div>
        </GlassmorphicCard>
      </div>
    </div>
  );
};

export default EmailSetupGuide;