import { useEffect, useState } from 'react';
import { getContactPage, getSiteSettings } from '../contentful';
import SEO from './SEO';
import Footer from './Footer';
import Robot from './Robot';

export default function Contact() {
  const [contact, setContact] = useState(null);
  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getContactPage(), getSiteSettings()])
      .then(([contactData, settingsData]) => {
        setContact(contactData);
        setSettings(settingsData);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading || !contact || !settings) {
    return (
      <section className="hero">
        <div className="hero-content">
          <div className="skeleton-line skeleton-title"></div>
          <div className="skeleton-line"></div>
        </div>
      </section>
    );
  }

  return (
    <>
      <SEO
        title={contact.seoTitle}
        description={contact.introText}
      />
      <div className="container">
        <section className="hero">
          <div className="hero-content">
            <h1>{contact.pageTitle}<span className="hero-cursor"></span></h1>
            <p>{contact.introText}</p>
          </div>
          <div className="hero-decoration" style={{ opacity: 0.3 }}>
            <Robot emotion="thinking" size={140} />
          </div>
        </section>
      </div>

      {/* VARIATION 1: Minimal underline - clean line that grows on hover */}
      <div className="container">
        <h3 style={{ color: 'var(--accent)', marginBottom: '16px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px' }}>1. minimal underline</h3>
        <div className="contact-links-v1">
          <a href={`mailto:${settings.contactEmail}`} className="contact-link-v1">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            <span>{settings.contactEmail}</span>
          </a>
          <a href={settings.githubUrl} target="_blank" rel="noopener noreferrer" className="contact-link-v1">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
            <span>GitHub</span>
          </a>
          <a href={settings.linkedinUrl} target="_blank" rel="noopener noreferrer" className="contact-link-v1">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
            <span>LinkedIn</span>
          </a>
        </div>
      </div>

      {/* VARIATION 2: Ghost buttons - subtle bg that appears on hover */}
      <div className="container">
        <h3 style={{ color: 'var(--accent)', marginBottom: '16px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px' }}>2. ghost buttons</h3>
        <div className="contact-links-v2">
          <a href={`mailto:${settings.contactEmail}`} className="contact-link-v2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            <span>{settings.contactEmail}</span>
          </a>
          <a href={settings.githubUrl} target="_blank" rel="noopener noreferrer" className="contact-link-v2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
            <span>GitHub</span>
          </a>
          <a href={settings.linkedinUrl} target="_blank" rel="noopener noreferrer" className="contact-link-v2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
            <span>LinkedIn</span>
          </a>
        </div>
      </div>

      {/* VARIATION 3: Arrow slide - arrow appears and slides in on hover */}
      <div className="container">
        <h3 style={{ color: 'var(--accent)', marginBottom: '16px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px' }}>3. arrow slide</h3>
        <div className="contact-links-v3">
          <a href={`mailto:${settings.contactEmail}`} className="contact-link-v3">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            <span>{settings.contactEmail}</span>
            <span className="arrow">→</span>
          </a>
          <a href={settings.githubUrl} target="_blank" rel="noopener noreferrer" className="contact-link-v3">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
            <span>GitHub</span>
            <span className="arrow">→</span>
          </a>
          <a href={settings.linkedinUrl} target="_blank" rel="noopener noreferrer" className="contact-link-v3">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
            <span>LinkedIn</span>
            <span className="arrow">→</span>
          </a>
        </div>
      </div>

      {/* VARIATION 4: Inline chips - horizontal compact layout */}
      <div className="container">
        <h3 style={{ color: 'var(--accent)', marginBottom: '16px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px' }}>4. inline chips</h3>
        <div className="contact-links-v4">
          <a href={`mailto:${settings.contactEmail}`} className="contact-link-v4">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            <span>{settings.contactEmail}</span>
          </a>
          <a href={settings.githubUrl} target="_blank" rel="noopener noreferrer" className="contact-link-v4">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
            <span>GitHub</span>
          </a>
          <a href={settings.linkedinUrl} target="_blank" rel="noopener noreferrer" className="contact-link-v4">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
            <span>LinkedIn</span>
          </a>
        </div>
      </div>

      {/* VARIATION 5: Icon only with tooltip feel - just icons, text fades in */}
      <div className="container">
        <h3 style={{ color: 'var(--accent)', marginBottom: '16px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px' }}>5. icon expand</h3>
        <div className="contact-links-v5">
          <a href={`mailto:${settings.contactEmail}`} className="contact-link-v5">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            <span>{settings.contactEmail}</span>
          </a>
          <a href={settings.githubUrl} target="_blank" rel="noopener noreferrer" className="contact-link-v5">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
            <span>GitHub</span>
          </a>
          <a href={settings.linkedinUrl} target="_blank" rel="noopener noreferrer" className="contact-link-v5">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
            <span>LinkedIn</span>
          </a>
        </div>
      </div>

      {/* VARIATION 6: Left accent bar - colored bar on left that pulses */}
      <div className="container">
        <h3 style={{ color: 'var(--accent)', marginBottom: '16px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px' }}>6. left accent bar</h3>
        <div className="contact-links-v6">
          <a href={`mailto:${settings.contactEmail}`} className="contact-link-v6">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            <span>{settings.contactEmail}</span>
          </a>
          <a href={settings.githubUrl} target="_blank" rel="noopener noreferrer" className="contact-link-v6">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
            <span>GitHub</span>
          </a>
          <a href={settings.linkedinUrl} target="_blank" rel="noopener noreferrer" className="contact-link-v6">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
            <span>LinkedIn</span>
          </a>
        </div>
      </div>

      {/* VARIATION 7: Glow effect - subtle glow on hover */}
      <div className="container">
        <h3 style={{ color: 'var(--accent)', marginBottom: '16px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px' }}>7. glow effect</h3>
        <div className="contact-links-v7">
          <a href={`mailto:${settings.contactEmail}`} className="contact-link-v7">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            <span>{settings.contactEmail}</span>
          </a>
          <a href={settings.githubUrl} target="_blank" rel="noopener noreferrer" className="contact-link-v7">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
            <span>GitHub</span>
          </a>
          <a href={settings.linkedinUrl} target="_blank" rel="noopener noreferrer" className="contact-link-v7">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
            <span>LinkedIn</span>
          </a>
        </div>
      </div>

      {/* VARIATION 8: Terminal style - monospace with prompt character */}
      <div className="container">
        <h3 style={{ color: 'var(--accent)', marginBottom: '16px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px' }}>8. terminal style</h3>
        <div className="contact-links-v8">
          <a href={`mailto:${settings.contactEmail}`} className="contact-link-v8">
            <span className="prompt">$</span>
            <span>mail {settings.contactEmail}</span>
          </a>
          <a href={settings.githubUrl} target="_blank" rel="noopener noreferrer" className="contact-link-v8">
            <span className="prompt">$</span>
            <span>open github</span>
          </a>
          <a href={settings.linkedinUrl} target="_blank" rel="noopener noreferrer" className="contact-link-v8">
            <span className="prompt">$</span>
            <span>open linkedin</span>
          </a>
        </div>
      </div>

      {/* VARIATION 9: Stacked cards - larger touch targets, vertical stack */}
      <div className="container">
        <h3 style={{ color: 'var(--accent)', marginBottom: '16px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px' }}>9. stacked cards</h3>
        <div className="contact-links-v9">
          <a href={`mailto:${settings.contactEmail}`} className="contact-link-v9">
            <div className="card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <div className="card-content">
              <span className="card-label">email</span>
              <span className="card-value">{settings.contactEmail}</span>
            </div>
          </a>
          <a href={settings.githubUrl} target="_blank" rel="noopener noreferrer" className="contact-link-v9">
            <div className="card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
            </div>
            <div className="card-content">
              <span className="card-label">github</span>
              <span className="card-value">@jonesopolis</span>
            </div>
          </a>
          <a href={settings.linkedinUrl} target="_blank" rel="noopener noreferrer" className="contact-link-v9">
            <div className="card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </div>
            <div className="card-content">
              <span className="card-label">linkedin</span>
              <span className="card-value">/in/davidarector</span>
            </div>
          </a>
        </div>
      </div>

      {/* VARIATION 10: Dot leader - classic print style with dots */}
      <div className="container">
        <h3 style={{ color: 'var(--accent)', marginBottom: '16px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px' }}>10. dot leader</h3>
        <div className="contact-links-v10">
          <a href={`mailto:${settings.contactEmail}`} className="contact-link-v10">
            <span className="label">email</span>
            <span className="dots"></span>
            <span className="value">{settings.contactEmail}</span>
          </a>
          <a href={settings.githubUrl} target="_blank" rel="noopener noreferrer" className="contact-link-v10">
            <span className="label">github</span>
            <span className="dots"></span>
            <span className="value">jonesopolis</span>
          </a>
          <a href={settings.linkedinUrl} target="_blank" rel="noopener noreferrer" className="contact-link-v10">
            <span className="label">linkedin</span>
            <span className="dots"></span>
            <span className="value">davidarector</span>
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}
