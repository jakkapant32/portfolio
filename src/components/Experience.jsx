import { ScrollReveal } from './ScrollReveal'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'

export function Experience() {
  const { language } = useLanguage()
  const t = translations[language].experience
  const exp = t.exp

  return (
    <section id="experience" className="py-[112px] px-6 md:px-[72px] bg-[var(--bg)]">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="sec-label">
            <span className="sec-num">02</span>
            <div className="sec-dash" />
            <span className="sec-name">{t.secName}</span>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-[var(--navy)] leading-tight tracking-tight mb-16">
            {t.title} <span className="text-[var(--blue)] font-light italic">{t.titleHighlight}</span>
          </h2>
        </ScrollReveal>
        <div className="flex flex-col gap-12">
          {exp.map((item, i) => (
            <ScrollReveal key={item.period}>
              <div className={`grid md:grid-cols-[200px_1fr] md:gap-14 ${i > 0 ? 'pt-12 border-t border-[var(--border)]' : ''}`}>
                <div className="pb-2">
                  <div className="text-xs font-semibold text-[var(--sky)] tracking-wide mb-2">{item.period}</div>
                  <span className="inline-block bg-[var(--pale)] text-[var(--blue)] text-[10px] font-semibold tracking-widest uppercase py-1 px-3 rounded-[100px]">
                    {item.tag}
                  </span>
                </div>
                <div>
                  <div className="text-[22px] font-bold text-[var(--navy)] tracking-tight mb-1">{item.title}</div>
                  <div className="text-xs font-semibold text-[var(--blue)] tracking-widest uppercase mb-4">{item.company}</div>
                  <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
                    {item.points.map((point) => (
                      <li key={point} className="text-sm text-[var(--mid)] pl-4 relative leading-relaxed before:content-[''] before:absolute before:left-0 before:top-[11px] before:w-1.5 before:h-1.5 before:bg-[var(--sky)] before:rounded-full">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
