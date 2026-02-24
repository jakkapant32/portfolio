import { ScrollReveal } from './ScrollReveal'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'

export function Creative() {
  const { language } = useLanguage()
  const t = translations[language].creative
  const links = t.links

  return (
    <section id="creative" className="py-[112px] px-6 md:px-[72px] bg-[var(--bg)]">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="sec-label">
            <span className="sec-num">06</span>
            <div className="sec-dash" />
            <span className="sec-name">{t.secName}</span>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <h2 className="section-heading text-[clamp(2rem,4vw,3rem)] font-bold text-[var(--navy)] leading-tight tracking-tight mb-16">
            {t.title} <span className="section-heading-accent text-[var(--blue)] font-light italic">{t.titleHighlight}</span>
          </h2>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <ScrollReveal>
            <a
              href={links.tiktok.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 rounded-[20px] border border-[var(--border)] bg-[var(--white)] hover:shadow-[0_10px_32px_rgba(27,45,94,0.08)] hover:-translate-y-0.5 transition-all no-underline text-[var(--navy)]"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--pale)] flex items-center justify-center text-[20px]">♪</div>
              <div>
                <span className="text-[11px] font-semibold text-[var(--sky)] tracking-widest uppercase">{t.video}</span>
                <div className="value-card-title text-[15px] font-semibold mt-0.5">{links.tiktok.label}</div>
              </div>
              <svg className="w-4 h-4 ml-auto text-[var(--muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
          </ScrollReveal>
          <ScrollReveal>
            <a
              href={links.youtube.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 rounded-[20px] border border-[var(--border)] bg-[var(--white)] hover:shadow-[0_10px_32px_rgba(27,45,94,0.08)] hover:-translate-y-0.5 transition-all no-underline text-[var(--navy)]"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--pale)] flex items-center justify-center text-[20px]">▶</div>
              <div>
                <span className="text-[11px] font-semibold text-[var(--sky)] tracking-widest uppercase">{t.video}</span>
                <div className="value-card-title text-[15px] font-semibold mt-0.5">{links.youtube.label}</div>
              </div>
              <svg className="w-4 h-4 ml-auto text-[var(--muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
          </ScrollReveal>
          <ScrollReveal>
            <a
              href={links.catalog.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 rounded-[20px] border border-[var(--border)] bg-[var(--white)] hover:shadow-[0_10px_32px_rgba(27,45,94,0.08)] hover:-translate-y-0.5 transition-all no-underline text-[var(--navy)] sm:col-span-2 lg:col-span-1"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--pale)] flex items-center justify-center text-[20px]">📄</div>
              <div className="min-w-0">
                <span className="text-[11px] font-semibold text-[var(--sky)] tracking-widest uppercase">{t.catalog}</span>
                <div className="value-card-title text-[15px] font-semibold mt-0.5">{links.catalog.label}</div>
              </div>
              <svg className="w-4 h-4 ml-auto flex-shrink-0 text-[var(--muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
