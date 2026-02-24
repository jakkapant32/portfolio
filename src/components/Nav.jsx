import { useState } from 'react'
import { ThemeToggle } from './ThemeToggle'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'

const LINK_IDS = ['about', 'experience', 'skills', 'projects', 'value', 'creative', 'contact']

export function Nav() {
  const [open, setOpen] = useState(false)
  const { language, setLanguage } = useLanguage()
  const t = translations[language].nav

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-[60px] px-6 md:px-[72px] bg-[rgba(247,249,254,0.92)] backdrop-blur-[16px] border-b border-[var(--border)]">
      <a href="#home" className="flex items-center gap-2.5 no-underline">
        <div className="w-2 h-2 rounded-full bg-[var(--blue)]" />
        <span className="text-sm font-semibold text-[var(--navy)] tracking-wide">Jakkapan Chinsopa</span>
      </a>
      <ul className="hidden md:flex items-center gap-10 list-none m-0 p-0">
        {LINK_IDS.map((id) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className="text-[13px] font-normal text-[var(--muted)] no-underline transition-colors hover:text-[var(--navy)]"
            >
              {t[id]}
            </a>
          </li>
        ))}
        <li className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setLanguage('th')}
            className={`text-[12px] font-medium px-2 py-1 rounded transition-colors ${language === 'th' ? 'bg-[var(--navy)] text-white' : 'text-[var(--muted)] hover:text-[var(--navy)]'}`}
            aria-label="ไทย"
          >
            TH
          </button>
          <span className="text-[var(--muted)]">|</span>
          <button
            type="button"
            onClick={() => setLanguage('en')}
            className={`text-[12px] font-medium px-2 py-1 rounded transition-colors ${language === 'en' ? 'bg-[var(--navy)] text-white' : 'text-[var(--muted)] hover:text-[var(--navy)]'}`}
            aria-label="English"
          >
            EN
          </button>
        </li>
        <li>
          <a
            href="#contact"
            className="inline-block bg-[var(--navy)] text-white py-2 px-5 rounded-[100px] font-medium text-[13px] no-underline transition-colors hover:bg-[var(--blue)]"
          >
            {t.hireMe}
          </a>
        </li>
        <li><ThemeToggle /></li>
      </ul>
      <div className="flex items-center gap-2 md:hidden">
        <button
          type="button"
          onClick={() => setLanguage(language === 'th' ? 'en' : 'th')}
          className="text-[12px] font-medium text-[var(--navy)]"
        >
          {language === 'th' ? 'EN' : 'TH'}
        </button>
        <ThemeToggle />
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="p-2 rounded-lg border border-[var(--border)]"
          aria-label={t.menu}
        >
          <svg className="w-5 h-5 text-[var(--navy)]" fill="currentColor" viewBox="0 0 20 20">
            {open ? (
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            ) : (
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            )}
          </svg>
        </button>
      </div>
      {open && (
        <div className="absolute top-[60px] left-0 right-0 md:hidden bg-[var(--white)] border-b border-[var(--border)] px-6 py-4 flex flex-col gap-1">
          {LINK_IDS.map((id) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="text-[var(--muted)] hover:text-[var(--navy)] py-2 text-[13px]">
              {t[id]}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="text-[var(--blue)] font-medium py-2 text-[13px]">
            {t.hireMe}
          </a>
        </div>
      )}
    </nav>
  )
}
