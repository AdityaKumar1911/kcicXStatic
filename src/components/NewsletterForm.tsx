import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Mail, CheckCircle2, AlertCircle, Send } from 'lucide-react';

interface NewsletterFormProps {
  source?: string;
  variant?: 'inline' | 'card' | 'compact';
}

export function NewsletterForm({ source = 'footer', variant = 'inline' }: NewsletterFormProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setStatus('error');
      setMessage('Please enter a valid email');
      return;
    }
    setStatus('loading');
    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([{ email, source, status: 'active' }]);
      if (error) {
        if (error.code === '23505') {
          setStatus('error');
          setMessage('Already subscribed');
        } else throw error;
      } else {
        setStatus('success');
        setMessage('Subscribed!');
        setEmail('');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch {
      setStatus('error');
      setMessage('Failed. Try again.');
    }
  };

  if (variant === 'card') {
    return (
      <div className="bg-gradient-to-br from-[#0B1B3A] to-[#1a2942] rounded-lg p-8 text-white">

        <div className="flex items-center gap-3 mb-4">
          <Mail className="h-8 w-8 text-[#B99750]" />
          <h3 className="text-2xl font-bold">Stay Updated</h3>
        </div>
        <p className="mb-6 text-gray-200">Get the latest news about programs and opportunities</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="email" placeholder="Enter your email" value={email}
            onChange={(e) => setEmail(e.target.value)} disabled={status === 'loading'}
            className="w-full px-4 py-2 rounded bg-white text-gray-900" />
          <button type="submit" disabled={status === 'loading'}
            className="w-full px-4 py-2 bg-[#B99750] hover:bg-[#A88640] text-white rounded font-medium">
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </button>
          {status !== 'idle' && (
            <p className={`text-sm flex items-center gap-1 ${status === 'success' ? 'text-green-300' : 'text-red-300'}`}>
              {status === 'success' ? <CheckCircle2 className="h-3 w-3" /> : <AlertCircle className="h-3 w-3" />}
              {message}
            </p>
          )}
        </form>
      </div>
    );
  }

  // Compact variant for footer - minimal and clean
  return (
    <form onSubmit={handleSubmit} className="mt-1">
      <div className="flex items-center">
        <input type="email" placeholder="Your email" value={email}
          onChange={(e) => setEmail(e.target.value)} disabled={status === 'loading'}
          className="flex-1 min-w-0 px-2 py-1 text-xs bg-[#FAF3E0]/10 border border-[#FAF3E0]/20 rounded-l text-[#FAF3E0] placeholder:text-[#FAF3E0]/50 focus:outline-none focus:border-[#B99750]" />
        <button type="submit" disabled={status === 'loading'}
          className="px-2 py-1 bg-[#B99750] hover:bg-[#A88640] text-white rounded-r text-xs font-medium transition-colors flex items-center gap-1">
          <Send className="w-3 h-3" />
        </button>
      </div>
      {status !== 'idle' && (
        <p className={`text-[10px] mt-1 flex items-center gap-1 ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}>
          {status === 'success' ? <CheckCircle2 className="h-2.5 w-2.5" /> : <AlertCircle className="h-2.5 w-2.5" />}
          {message}
        </p>
      )}
    </form>
  );
}
