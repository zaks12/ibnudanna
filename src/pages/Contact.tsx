import { useState, type FormEvent } from 'react';
import {
  ArrowRight,
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  CheckCircle2,
} from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import Container from '@/components/ui/Container';

const heroImage =
  'https://images.pexels.com/photos/8486896/pexels-photo-8486896.jpeg?auto=compress&cs=tinysrgb&w=1920';

const phoneNumbers = [
  { display: '+234 806 375 2574', tel: '+2348063752574' },
  { display: '+234 802 961 6463', tel: '+2348029616463' },
];

const whatsappNumber = '2348063752574';
const whatsappLink = `https://wa.me/${whatsappNumber}`;

const projectTypes = [
  'Building Construction',
  'Civil Engineering',
  'Infrastructure',
  'Renovation',
  'Other',
];

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}

const initialForm: FormState = {
  fullName: '',
  email: '',
  phone: '',
  projectType: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.fullName.trim()) next.fullName = 'Please enter your full name.';
    if (!form.email.trim()) {
      next.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Please enter a valid email address.';
    }
    if (!form.phone.trim()) next.phone = 'Please enter your phone number.';
    if (!form.projectType) next.projectType = 'Please select a project type.';
    if (!form.message.trim()) next.message = 'Please tell us about your project.';
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  }

  function updateField<K extends keyof FormState>(key: K, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  const inputClass =
    'w-full rounded-lg border bg-white px-4 py-3 text-base text-navy-800 placeholder:text-navy-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400';
  const borderClass = (hasError?: string) =>
    hasError ? 'border-red-400 focus:ring-red-400 focus:border-red-400' : 'border-border';

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[520px] items-center overflow-hidden sm:min-h-[600px]">
        <img
          src={heroImage}
          alt="Construction workers in safety gear shaking hands at a building site"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-navy-800/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-800/70 to-transparent" />

        <Container className="relative z-10 py-20 sm:py-28">
          <div className="max-w-2xl">
            <div
              style={{
                animation: 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards',
                opacity: 0,
              }}
            >
              <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
                Contact Us
              </span>
            </div>
            <h1
              className="mt-6 text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl"
              style={{
                animation: 'fadeInUp 0.7s cubic-bezier(0.4, 0, 0.2, 1) 0.15s forwards',
                opacity: 0,
              }}
            >
              Let&apos;s Build Something That Matters.
            </h1>
            <p
              className="mt-6 max-w-xl text-lg leading-relaxed text-navy-100"
              style={{
                animation: 'fadeInUp 0.7s cubic-bezier(0.4, 0, 0.2, 1) 0.3s forwards',
                opacity: 0,
              }}
            >
              Have a construction or engineering project in mind? Tell us what you are looking to
              achieve and let&apos;s start the conversation.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Intro */}
      <section className="py-section sm:py-section-sm lg:py-section">
        <Container>
          <Reveal>
            <div className="max-w-3xl">
              <span className="text-sm font-semibold uppercase tracking-[0.15em] text-sky-600">
                Get in Touch
              </span>
              <h2 className="mt-2 text-3xl font-bold leading-tight text-navy-800 sm:text-4xl">
                Let&apos;s Talk About Your Project.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-ink-muted">
                Whether you are planning a new development, construction project, infrastructure
                work or an existing project that needs attention, we welcome the opportunity to
                understand your requirements.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Contact Info + Form */}
      <section className="bg-cream py-section sm:py-section-sm lg:py-section">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Contact Information */}
            <Reveal>
              <div>
                <h3 className="text-2xl font-bold text-navy-800">Contact Information</h3>
                <p className="mt-3 text-base leading-relaxed text-ink-muted">
                  Reach us by phone, WhatsApp, or the enquiry form. We look forward to hearing
                  about your project.
                </p>

                <div className="mt-8 space-y-5">
                  {/* Phone */}
                  <div className="rounded-xl border border-border bg-white p-6 shadow-card">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-sky-50">
                        <Phone className="h-5 w-5 text-sky-600" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-navy-800">
                          Phone
                        </h4>
                        <div className="mt-2 space-y-1">
                          {phoneNumbers.map((num) => (
                            <a
                              key={num.tel}
                              href={`tel:${num.tel}`}
                              className="block text-base font-semibold text-navy-700 transition-colors hover:text-sky-600"
                            >
                              {num.display}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="rounded-xl border border-border bg-white p-6 shadow-card">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-sky-50">
                        <MessageCircle className="h-5 w-5 text-sky-600" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-navy-800">
                          WhatsApp
                        </h4>
                        <a
                          href={whatsappLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 block text-base font-semibold text-navy-700 transition-colors hover:text-sky-600"
                        >
                          Chat on WhatsApp
                        </a>
                        <p className="mt-1 text-sm text-ink-muted">
                          Using +234 806 375 2574
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="rounded-xl border border-border bg-white p-6 shadow-card">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-sky-50">
                        <Mail className="h-5 w-5 text-sky-600" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-navy-800">
                          Email
                        </h4>
                        <p className="mt-2 text-base text-ink-muted">
                          Email address to be confirmed
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="rounded-xl border border-border bg-white p-6 shadow-card">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-sky-50">
                        <MapPin className="h-5 w-5 text-sky-600" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-navy-800">
                          Address
                        </h4>
                        <p className="mt-2 text-base text-ink-muted">
                          Office address to be confirmed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Enquiry Form + WhatsApp CTA */}
            <Reveal delay={150}>
              <div>
                {/* Form */}
                <div className="rounded-2xl border border-border bg-white p-6 shadow-card sm:p-8">
                  <h3 className="text-2xl font-bold text-navy-800">Project Enquiry</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    Fill in the form below and we will get back to you to discuss your project.
                  </p>

                  {submitted ? (
                    <div className="mt-8 flex flex-col items-center justify-center rounded-xl border border-sky-200 bg-sky-50 p-8 text-center">
                      <CheckCircle2 className="h-12 w-12 text-sky-600" />
                      <h4 className="mt-4 text-lg font-bold text-navy-800">
                        Inquiry Submitted
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                        Thank you for your enquiry. This is a frontend form demonstration — no
                        message has been sent. Please contact us directly by phone or WhatsApp to
                        discuss your project.
                      </p>
                      <button
                        onClick={() => {
                          setForm(initialForm);
                          setSubmitted(false);
                        }}
                        className="mt-6 inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-semibold text-navy-800 transition-colors hover:border-sky-400 hover:text-sky-600"
                      >
                        Submit Another Enquiry
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="mt-6 space-y-5" noValidate>
                      {/* Full Name */}
                      <div>
                        <label htmlFor="fullName" className="block text-sm font-semibold text-navy-800">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="fullName"
                          type="text"
                          value={form.fullName}
                          onChange={(e) => updateField('fullName', e.target.value)}
                          className={`mt-2 ${inputClass} ${borderClass(errors.fullName)}`}
                          placeholder="Enter your full name"
                        />
                        {errors.fullName && (
                          <p className="mt-1.5 text-sm text-red-500">{errors.fullName}</p>
                        )}
                      </div>

                      {/* Email + Phone */}
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label htmlFor="email" className="block text-sm font-semibold text-navy-800">
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="email"
                            type="email"
                            value={form.email}
                            onChange={(e) => updateField('email', e.target.value)}
                            className={`mt-2 ${inputClass} ${borderClass(errors.email)}`}
                            placeholder="you@example.com"
                          />
                          {errors.email && (
                            <p className="mt-1.5 text-sm text-red-500">{errors.email}</p>
                          )}
                        </div>

                        <div>
                          <label htmlFor="phone" className="block text-sm font-semibold text-navy-800">
                            Phone Number <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="phone"
                            type="tel"
                            value={form.phone}
                            onChange={(e) => updateField('phone', e.target.value)}
                            className={`mt-2 ${inputClass} ${borderClass(errors.phone)}`}
                            placeholder="+234 ..."
                          />
                          {errors.phone && (
                            <p className="mt-1.5 text-sm text-red-500">{errors.phone}</p>
                          )}
                        </div>
                      </div>

                      {/* Project Type */}
                      <div>
                        <label htmlFor="projectType" className="block text-sm font-semibold text-navy-800">
                          Project Type <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="projectType"
                          value={form.projectType}
                          onChange={(e) => updateField('projectType', e.target.value)}
                          className={`mt-2 ${inputClass} ${borderClass(errors.projectType)}`}
                        >
                          <option value="">Select a project type</option>
                          {projectTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                        {errors.projectType && (
                          <p className="mt-1.5 text-sm text-red-500">{errors.projectType}</p>
                        )}
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-navy-800">
                          Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="message"
                          rows={5}
                          value={form.message}
                          onChange={(e) => updateField('message', e.target.value)}
                          className={`mt-2 ${inputClass} resize-none ${borderClass(errors.message)}`}
                          placeholder="Tell us about your project, timeline, and what you are looking to achieve."
                        />
                        {errors.message && (
                          <p className="mt-1.5 text-sm text-red-500">{errors.message}</p>
                        )}
                      </div>

                      <button
                        type="submit"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-navy-800 px-6 py-4 text-base font-semibold text-white transition-colors duration-200 ease-smooth hover:bg-navy-900 sm:w-auto"
                      >
                        Send Project Inquiry
                        <ArrowRight className="h-5 w-5" />
                      </button>
                    </form>
                  )}
                </div>

                {/* WhatsApp CTA */}
                <div className="mt-6 rounded-2xl border border-border bg-navy-800 p-6 sm:p-8">
                  <h3 className="text-xl font-bold text-white">
                    Prefer a Quick Conversation?
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy-100">
                    Reach us directly by phone or WhatsApp to discuss your project requirements.
                  </p>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-lg bg-sky-500 px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 ease-smooth hover:bg-sky-600"
                  >
                    Chat on WhatsApp
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="bg-sky-500 py-section sm:py-section-sm lg:py-section">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Ready to Start the Conversation?
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white/90">
                Tell us about your project and let&apos;s explore the next step together.
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-2 rounded-lg bg-navy-800 px-8 py-4 text-base font-semibold text-white transition-colors duration-200 ease-smooth hover:bg-navy-900"
              >
                Start a Project
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
