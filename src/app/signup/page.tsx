'use client';

import React, { useState, useTransition } from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, Loader2, Building, Users, Mail, User, MessageSquare, HelpCircle } from 'lucide-react';
import SoftAurora from '@/components/SoftAurora';
import { submitContactForm } from '@/actions/contact';

export default function SignupPage() {
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    company: '',
    teamSize: '1-10',
    purpose: 'Get Started',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formValues.name || !formValues.email) {
      setError('Name and email are required.');
      return;
    }

    startTransition(async () => {
      const formData = new FormData();
      formData.append('name', formValues.name);
      formData.append('email', formValues.email);
      formData.append('company', formValues.company);
      formData.append('teamSize', formValues.teamSize);
      formData.append('purpose', formValues.purpose);
      formData.append('message', formValues.message);

      const result = await submitContactForm(formData);
      if (result.success) {
        setSuccess(true);
      } else {
        setError(result.error || 'Something went wrong. Please try again.');
      }
    });
  };

  return (
    <main className="min-h-screen bg-background relative overflow-hidden flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Background SoftAurora */}
      <div className="absolute inset-0 z-0">
        <SoftAurora
          speed={0.4}
          scale={1.3}
          brightness={1.0}
          color1="#4f4f5a" 
          color2="#08080a" 
          enableMouseInteraction={true}
          mouseInfluence={0.3}
          bandSpread={1.5}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90" />
      </div>

      <div className="relative z-10 max-w-xl w-full mx-auto space-y-8">
        {/* Back Button */}
        <div>
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground/60 hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
        </div>

        {/* Content Card */}
        <div className="bg-surface/40 backdrop-blur-xl border border-border/80 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient glow */}
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-accent/15 blur-3xl rounded-full" />
          
          <div className="relative z-10">
            {!success ? (
              <>
                <div className="text-center mb-8">
                  <h1 className="text-3xl font-bold tracking-tight text-foreground mb-2">Connect with Karobaar</h1>
                  <p className="text-sm text-foreground/60">
                    Tell us about your team and we&apos;ll get you set up in no time.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="bg-destructive/15 border border-destructive/30 text-destructive text-sm rounded-lg p-3 font-medium">
                      {error}
                    </div>
                  )}

                  {/* Name field */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-foreground/60 block">
                      Full Name *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-foreground/40">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formValues.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full pl-10 pr-4 py-3 bg-background/50 border border-border/80 rounded-xl focus:border-accent focus:ring-1 focus:ring-accent outline-none text-foreground text-sm transition-all"
                      />
                    </div>
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-foreground/60 block">
                      Work Email *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-foreground/40">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formValues.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full pl-10 pr-4 py-3 bg-background/50 border border-border/80 rounded-xl focus:border-accent focus:ring-1 focus:ring-accent outline-none text-foreground text-sm transition-all"
                      />
                    </div>
                  </div>

                  {/* Grid for Company & Team Size */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Company field */}
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-xs font-semibold uppercase tracking-wider text-foreground/60 block">
                        Company Name
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-foreground/40">
                          <Building className="w-4 h-4" />
                        </div>
                        <input
                          type="text"
                          name="company"
                          id="company"
                          value={formValues.company}
                          onChange={handleChange}
                          placeholder="Acme Corp"
                          className="w-full pl-10 pr-4 py-3 bg-background/50 border border-border/80 rounded-xl focus:border-accent focus:ring-1 focus:ring-accent outline-none text-foreground text-sm transition-all"
                        />
                      </div>
                    </div>

                    {/* Team Size */}
                    <div className="space-y-2">
                      <label htmlFor="teamSize" className="text-xs font-semibold uppercase tracking-wider text-foreground/60 block">
                        Team Size
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-foreground/40">
                          <Users className="w-4 h-4" />
                        </div>
                        <select
                          name="teamSize"
                          id="teamSize"
                          value={formValues.teamSize}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 bg-background/50 border border-border/80 rounded-xl focus:border-accent focus:ring-1 focus:ring-accent outline-none text-foreground text-sm transition-all appearance-none"
                        >
                          <option value="1-10">1-10 employees</option>
                          <option value="11-50">11-50 employees</option>
                          <option value="51-200">51-200 employees</option>
                          <option value="200+">200+ employees</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Purpose Selection */}
                  <div className="space-y-2">
                    <label htmlFor="purpose" className="text-xs font-semibold uppercase tracking-wider text-foreground/60 block">
                      I want to...
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-foreground/40">
                        <HelpCircle className="w-4 h-4" />
                      </div>
                      <select
                        name="purpose"
                        id="purpose"
                        value={formValues.purpose}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 bg-background/50 border border-border/80 rounded-xl focus:border-accent focus:ring-1 focus:ring-accent outline-none text-foreground text-sm transition-all appearance-none"
                      >
                        <option value="Get Started">Get Started / Start Free Trial</option>
                        <option value="Book a Demo">Book a Personalized Demo</option>
                        <option value="Contact Us">Send a General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  {/* Message field */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-foreground/60 block">
                      Requirements or Message
                    </label>
                    <div className="relative">
                      <div className="absolute top-3 left-3.5 text-foreground/40">
                        <MessageSquare className="w-4 h-4" />
                      </div>
                      <textarea
                        name="message"
                        id="message"
                        rows={4}
                        value={formValues.message}
                        onChange={handleChange}
                        placeholder="Tell us about your sales workflow or specific requirements..."
                        className="w-full pl-10 pr-4 py-3 bg-background/50 border border-border/80 rounded-xl focus:border-accent focus:ring-1 focus:ring-accent outline-none text-foreground text-sm transition-all resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isPending}
                    className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground py-3.5 px-4 rounded-xl text-base font-semibold transition-all shadow-lg active:scale-[0.98] disabled:opacity-50"
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Submit Request"
                    )}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-8 space-y-6">
                <div className="flex justify-center">
                  <CheckCircle className="w-16 h-16 text-green-500 animate-bounce" />
                </div>
                <div className="space-y-2">
                  <h1 className="text-2xl font-bold tracking-tight text-foreground">Inquiry Received!</h1>
                  <p className="text-sm text-foreground/60 max-w-md mx-auto">
                    Thank you for reaching out. We have sent your details to our team, and we will get back to you within 24 business hours.
                  </p>
                </div>
                <div className="pt-4">
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground py-3 px-6 rounded-xl text-sm font-semibold transition-all shadow-md"
                  >
                    Return to Homepage
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
