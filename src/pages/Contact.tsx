import { type FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, ReceiptText, User } from 'lucide-react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { HeroSection } from '../components/HeroSection';
import { Input } from '../components/Input';

type ContactForm = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export function Contact() {
  const headshotSrc = '/contact-headshot.jpg';
  const [headshotOk, setHeadshotOk] = useState(true);

  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [website, setWebsite] = useState('');

  const [form, setForm] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === 'sending') return;

    setStatus('sending');
    setStatusMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, website })
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error || 'Failed to send message');
      }

      setForm({ name: '', email: '', phone: '', message: '' });
      setWebsite('');
      setStatus('sent');
      setStatusMessage('Message sent. We will get back to you shortly.');
    } catch (err) {
      setStatus('error');
      setStatusMessage(err instanceof Error ? err.message : 'Failed to send message');
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      <HeroSection className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6 backdrop-blur-sm border border-white/15">
              <Mail className="w-4 h-4 text-white" strokeWidth={2.5} />
              <span className="text-sm font-semibold text-white">Contact Us</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Let's Talk
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Questions about credit repair, funding eligibility, or an invoice? Reach out and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </HeroSection>

      <section className="py-12 -mt-16 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="border-2 border-gray-200 shadow-2xl" padding="lg">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0E2A47]">Send a Message</h2>
                <p className="text-sm text-gray-600 mt-2">
                  Submit this form and we'll email your message to our team.
                </p>

                {statusMessage && (
                  <div
                    className={
                      status === 'sent'
                        ? 'mt-4 rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-gray-800'
                        : status === 'error'
                          ? 'mt-4 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-gray-800'
                          : 'mt-4 rounded-xl border border-gray-200 bg-gray-50 p-4 text-sm text-gray-800'
                    }
                  >
                    {statusMessage}
                  </div>
                )}

                <form onSubmit={submit} className="mt-6 space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Input
                      label="Name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      required
                    />
                    <Input
                      label="Email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@example.com"
                      required
                    />
                  </div>

                  <Input
                    label="Phone (Optional)"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="(555) 123-4567"
                  />

                  {/* honeypot */}
                  <input
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                    aria-hidden="true"
                  />

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#28C76F] focus:border-transparent transition-all min-h-[140px]"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="How can we help?"
                      required
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                    <Button
                      type="submit"
                      size="lg"
                      className="bg-black text-white hover:bg-gray-900 w-full sm:w-auto"
                      disabled={status === 'sending'}
                    >
                      <Mail className="mr-2 w-5 h-5" strokeWidth={2.5} />
                      {status === 'sending' ? 'Sending…' : 'Send Message'}
                    </Button>

                    <Link to="/funding" className="text-sm font-semibold text-gray-700 hover:text-black">
                      Prefer? Complete the funding eligibility form
                    </Link>
                  </div>
                </form>
              </Card>
            </div>

            <div>
              <Card className="border border-gray-200 shadow-xl" padding="lg">
                <div className="rounded-2xl overflow-hidden border border-gray-200 bg-gray-50">
                  {headshotOk ? (
                    <img
                      src={headshotSrc}
                      alt="Contact headshot"
                      className="w-full aspect-[4/5] object-cover object-[center_35%]"
                      loading="eager"
                      decoding="async"
                      onError={() => setHeadshotOk(false)}
                    />
                  ) : (
                    <div className="w-full aspect-[4/5] flex items-center justify-center text-gray-400">
                      <User className="w-16 h-16" strokeWidth={1.5} />
                    </div>
                  )}
                </div>

                <div className="mt-4">
                  <div className="text-lg font-bold text-[#0E2A47]">Bryce Welch</div>
                  <div className="text-sm font-semibold text-gray-600">Credit Specialist</div>
                </div>

                <h3 className="text-lg font-bold text-[#0E2A47] mt-6">Quick Links</h3>
                <div className="mt-4 space-y-3">
                  <a
                    href="https://link.fastpaydirect.com/payment-link/697105da223b983c44328f67"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-800 hover:border-gray-300"
                  >
                    <span className="flex items-center gap-2">
                      <ReceiptText className="w-5 h-5" strokeWidth={2.5} />
                      Pay Invoice
                    </span>
                    <span className="text-gray-400">&rarr;</span>
                  </a>

                  <Link
                    to="/funding"
                    className="flex items-center justify-between rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-800 hover:border-gray-300"
                  >
                    <span className="flex items-center gap-2">
                      <Mail className="w-5 h-5" strokeWidth={2.5} />
                      Funding Eligibility
                    </span>
                    <span className="text-gray-400">&rarr;</span>
                  </Link>

                  <Link
                    to="/credit-repair"
                    className="flex items-center justify-between rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-800 hover:border-gray-300"
                  >
                    <span className="flex items-center gap-2">
                      <Phone className="w-5 h-5" strokeWidth={2.5} />
                      Credit Repair
                    </span>
                    <span className="text-gray-400">&rarr;</span>
                  </Link>
                </div>

              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
