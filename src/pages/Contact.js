import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BroadsheetShell from '../components/BroadsheetShell';

export default function Contact() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | done | error

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '5b1d6eca-0c7c-42d5-8d86-d16264e6d08e',
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `New message from ${form.name} via juanbracho.com`,
        }),
      });
      const data = await res.json();
      setStatus(data.success ? 'done' : 'error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <BroadsheetShell pageTitle="Place Your Notice">
      <div className="bs-shead" style={{ marginTop: 20 }}>
        <h2>Place Your Notice</h2>
        <span className="bs-no">Classified · correspondence</span>
      </div>

      {status === 'done' ? (
        <div style={{ maxWidth: 560 }}>
          <p style={{ fontSize: 18 }}>Sent. I'll write back soon. — Juan</p>
          <button className="bs-el" onClick={() => navigate('/home')} style={{ fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--ink)', background: 'none', border: '2px solid var(--ink)', padding: '10px 22px', cursor: 'pointer' }}>
            Back home →
          </button>
        </div>
      ) : (
        <form className="bs-form" onSubmit={handleSubmit}>
          <div>
            <label>My name is</label>
            <input name="name" value={form.name} onChange={handleChange} required placeholder="Your name" />
          </div>
          <div>
            <label>You can reach me at</label>
            <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" />
          </div>
          <div>
            <label>I wanted to say</label>
            <textarea name="message" value={form.message} onChange={handleChange} required rows={7} placeholder="Write your message here..." />
          </div>
          <button type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Submit →'}
          </button>
          {status === 'error' && (
            <p style={{ color: 'var(--red)' }}>Something went wrong. Try emailing me directly at juanbracho16@gmail.com</p>
          )}
        </form>
      )}
    </BroadsheetShell>
  );
}
