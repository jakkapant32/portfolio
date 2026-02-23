import { useState } from 'react'
import { ScrollReveal } from './ScrollReveal'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'

const EMAIL = 'jakkapant32@gmail.com'

const LINK_KEYS = ['linkPhone', 'linkEmail', 'linkGitHub', 'linkFacebook', 'linkLinkedIn', 'linkFastwork', 'linkLine']

const linkMeta = [
  { href: 'tel:0645238150', icon: 'phone', isExternal: false },
  { href: `mailto:${EMAIL}`, icon: 'mail', isExternal: false },
  { href: 'https://github.com/jakkapant32', icon: 'github', isExternal: true },
  { href: 'https://www.facebook.com/jjakkapan.cchinsopa/', icon: 'facebook', isExternal: true },
  { href: 'https://www.linkedin.com/in/jakkapan-chinsopa-83991a3b2/', icon: 'linkedin', isExternal: true },
  { href: 'https://fastwork.co/user/admin16?source=web_marketplace_profile-menu_profile', icon: 'fastwork', isExternal: true },
  { href: 'https://line.me/ti/p/-851Md3MsY', icon: 'line', isExternal: true },
]

/* ไอคอน Contact แบบ SVG โทนมืออาชีพ ใช้บนพื้น navy */
const icons = {
  phone: (
    <svg className="w-5 h-5 text-[var(--sky)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  mail: (
    <svg className="w-5 h-5 text-[var(--sky)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <path d="M22 6l-10 7L2 6" />
    </svg>
  ),
  github: (
    <svg className="w-5 h-5 text-[var(--sky)]" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  ),
  facebook: (
    <svg className="w-5 h-5 text-[var(--sky)]" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  ),
  linkedin: (
    <svg className="w-5 h-5 text-[var(--sky)]" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  fastwork: (
    <svg className="w-5 h-5 text-[var(--sky)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
  line: (
    <svg className="w-5 h-5 text-[var(--sky)]" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
    </svg>
  ),
}

function getContactDisplayValue(linkKey, t) {
  if (linkKey === 'linkPhone') return '064-523-8150'
  if (linkKey === 'linkEmail') return EMAIL
  return t.clickToOpen
}

export function Contact() {
  const { language } = useLanguage()
  const t = translations[language].contact
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = (e) => {
    e.preventDefault()
    e.stopPropagation()
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <section id="contact" className="py-[112px] px-6 md:px-[72px] bg-[var(--navy)]">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="sec-label">
            <span className="sec-num text-white/30">06</span>
            <div className="sec-dash bg-white/10" />
            <span className="sec-name text-white/25">{t.secName}</span>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-white leading-tight tracking-tight mb-4">
            {t.title} <span className="text-[var(--sky)] font-light italic">{t.titleHighlight}</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal>
          <p className="text-[15px] text-white/45 leading-relaxed max-w-[360px] mb-12">
            {t.subtitle}
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row flex-wrap gap-5">
            {LINK_KEYS.map((linkKey, i) => {
              const meta = linkMeta[i]
              const label = t[linkKey]
              const isEmail = meta.icon === 'mail'
              const handleEmailOpen = (e) => {
                if (isEmail) {
                  e.preventDefault()
                  window.location.href = `mailto:${EMAIL}`
                }
              }
              return (
                <a
                  key={linkKey}
                  href={meta.href}
                  target={meta.isExternal ? '_blank' : undefined}
                  rel={meta.isExternal ? 'noopener noreferrer' : undefined}
                  onClick={isEmail ? handleEmailOpen : undefined}
                  className="flex items-center gap-4 w-full sm:w-auto min-w-[200px] p-4 rounded-xl bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 hover:border-[var(--sky)]/50 hover:text-white transition-all relative"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    {icons[meta.icon]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] font-semibold text-[var(--sky)] tracking-widest mb-0.5">{label}</div>
                    <div className="text-[13px] text-white/65">
                      {getContactDisplayValue(linkKey, t)}
                    </div>
                  </div>
                  {isEmail && (
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="shrink-0 text-[10px] font-medium text-[var(--sky)] hover:text-white py-1 px-2 rounded border border-white/20 hover:border-[var(--sky)]/50 transition-colors"
                      title={t.copyEmail}
                    >
                      {copied ? t.copied : t.copyEmail}
                    </button>
                  )}
                </a>
              )
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
