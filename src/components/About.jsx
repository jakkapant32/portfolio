import { ScrollReveal } from './ScrollReveal'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'

export function About() {
  const { language } = useLanguage()
  const t = translations[language].about

  const profileRows = [
    { key: t.fullName, val: t.fullNameVal },
    { key: t.location, val: t.locationVal },
    { key: t.phone, val: '064-523-8150' },
    { key: t.email, val: 'jakkapant32@gmail.com' },
    { key: t.education, val: t.educationVal },
  ]

  return (
    <section id="about" className="py-[112px] px-6 md:px-[72px] bg-[var(--white)]">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="sec-label">
            <span className="sec-num">01</span>
            <div className="sec-dash" />
            <span className="sec-name">{t.secName}</span>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-[var(--navy)] leading-tight tracking-tight mb-16">
            {t.title} <span className="text-[var(--blue)] font-light italic">{t.titleHighlight}</span>
          </h2>
        </ScrollReveal>
        <div className="grid md:grid-cols-[1fr_360px] gap-12 md:gap-20 items-start">
          <div className="about-body">
            <ScrollReveal>
              <p className="text-[15px] text-[var(--mid)] leading-relaxed mb-5">
                <strong className="text-[var(--ink)] font-semibold">{t.belief}</strong> "{t.quote}"
                {t.para1}
              </p>
              <p className="text-[15px] text-[var(--mid)] leading-relaxed mb-5">
                {t.para2}
              </p>
            </ScrollReveal>
          </div>
          <ScrollReveal>
            <div className="bg-[var(--white)] border border-[var(--border)] rounded-[20px] overflow-hidden shadow-[0_8px_40px_rgba(27,45,94,0.08)]">
              <div className="bg-[var(--navy)] px-7 py-6 flex justify-between items-center">
                <span className="text-xs font-medium text-white/50 tracking-widest">{t.profile}</span>
                <span className="bg-[rgba(62,207,142,0.15)] border border-[rgba(62,207,142,0.35)] text-[var(--green)] text-[10px] font-semibold tracking-widest py-1 px-3 rounded-[100px]">
                  {t.openToWork}
                </span>
              </div>
              <div className="divide-y divide-[var(--border)]">
                {profileRows.map((row) => (
                  <div key={row.key} className="px-7 py-4 flex flex-col gap-0.5">
                    <span className="text-[10px] text-[var(--muted)] font-medium tracking-widest">{row.key}</span>
                    <span className="text-[13px] text-[var(--ink)]">{row.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
