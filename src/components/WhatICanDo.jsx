import { ScrollReveal } from './ScrollReveal'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'

export function WhatICanDo() {
  const { language } = useLanguage()
  const t = translations[language].value

  return (
    <section id="value" className="py-[112px] px-6 md:px-[72px] bg-[var(--white)]">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="sec-label">
            <span className="sec-num">05</span>
            <div className="sec-dash" />
            <span className="sec-name">{t.secName}</span>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <h2 className="section-heading text-[clamp(2rem,4vw,3rem)] font-bold text-[var(--navy)] leading-tight tracking-tight mb-16">
            {t.title}
          </h2>
        </ScrollReveal>
        <div className="grid sm:grid-cols-3 gap-5">
          {t.items.map((item) => (
            <ScrollReveal key={item.title}>
              <div className="p-6 rounded-[20px] border border-[var(--border)] bg-[var(--bg)] hover:shadow-[0_10px_32px_rgba(27,45,94,0.08)] hover:-translate-y-0.5 transition-all">
                <h3 className="value-card-title text-[15px] font-semibold text-[var(--navy)] mb-2">{item.title}</h3>
                <p className="value-card-desc text-[13px] text-[var(--mid)]">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
