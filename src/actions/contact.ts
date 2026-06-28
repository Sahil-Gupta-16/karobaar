'use server'
import React from 'react';
import { Resend } from 'resend';
import { ContactEmailTemplate } from '@/components/emails/contact-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(formData: FormData) {
  const email = formData.get('email') as string;
  const name = formData.get('name') as string;
  const message = formData.get('message') as string;

  if (!email || !name) {
    return { success: false, error: 'Name and email are required.' };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // Update to verified domain in prod
      to: ['your-sales-team@karobaar.com'],
      subject: `New Demo Request from ${name}`,
      react: ContactEmailTemplate({ name, email, message: message || 'No message provided.' }) as React.ReactElement,
    });

    if (error) {
      return { success: false, error: error.message };
    }
    
    return { success: true, data };
  } catch {
    return { success: false, error: 'Failed to send email' };
  }
}
