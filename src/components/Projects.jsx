import { ScrollReveal } from './ScrollReveal'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'

export function Projects() {
  const { language } = useLanguage()
  const t = translations[language].projects
  const list = t.list

  return (
    <section id="projects" className="py-[112px] px-6 md:px-[72px] bg-[var(--bg)]">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="sec-label">
            <span className="sec-num">04</span>
            <div className="sec-dash" />
            <span className="sec-name">{t.secName}</span>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-[var(--navy)] leading-tight tracking-tight mb-16">
            {t.title} <span className="text-[var(--blue)] font-light italic">{t.titleHighlight}</span>
          </h2>
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-5">
          {list.map((proj) => (
            <ScrollReveal key={proj.num}>
              <article className="bg-[var(--white)] border border-[var(--border)] rounded-[20px] overflow-hidden hover:shadow-[0_16px_48px_rgba(27,45,94,0.12)] hover:-translate-y-1 transition-all flex flex-col">
                <div className="bg-[var(--navy)] px-7 py-6 relative overflow-hidden">
                  <div className="absolute -bottom-10 -right-10 w-[120px] h-[120px] rounded-full bg-white/5" />
                  <div className="text-[11px] font-semibold text-[var(--sky)] tracking-[0.12em] mb-2">PROJECT {proj.num}</div>
                  <div className="text-[19px] font-bold text-white leading-snug tracking-tight relative">{proj.name}</div>
                </div>
                <div className="p-7 flex-1 flex flex-col">
                  <p className="text-[13px] text-[var(--mid)] leading-relaxed mb-5">{proj.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {proj.tags.map((tag) => (
                      <span key={tag} className="bg-[var(--pale)] text-[var(--blue)] text-[11px] font-medium py-1 px-3 rounded-[100px]">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {proj.url && (
                    <a
                      href={proj.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center gap-1.5 text-[12px] font-medium text-[var(--blue)] hover:text-[var(--sky)] transition-colors"
                    >
                      {t.viewSite}
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </a>
                  )}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
