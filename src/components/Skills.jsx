import { ScrollReveal } from './ScrollReveal'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'

/* ไอคอน SVG สไตล์มืออาชีพ โทน navy ใช้ stroke outline */
const IconTechnical = () => (
  <svg className="w-5 h-5 text-[var(--navy)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1v3M12 20v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M1 12h3M20 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
  </svg>
)
const IconBusiness = () => (
  <svg className="w-5 h-5 text-[var(--navy)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
)
const IconSoft = () => (
  <svg className="w-5 h-5 text-[var(--navy)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21h6M12 3a6 6 0 0 1 4.5 10H7.5A6 6 0 0 1 12 3z" />
    <path d="M12 13v4M10 17h4" opacity="0.8" />
  </svg>
)

const SKILL_ICONS = {
  technical: IconTechnical,
  business: IconBusiness,
  soft: IconSoft,
}

function SkillBar({ label, width }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-[13px] text-[var(--mid)]">{label}</span>
      <div className="flex-1 max-w-[100px] h-1 bg-[var(--pale)] rounded overflow-hidden">
        <div
          className="h-full rounded bg-gradient-to-r from-[var(--navy)] to-[var(--sky)] transition-all duration-[0.9s] ease-out origin-left sk-fill"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  )
}

export function Skills() {
  const { language } = useLanguage()
  const t = translations[language].skills
  const groups = [
    { key: 'technical', heading: t.technical, items: t.items.technical },
    { key: 'business', heading: t.business, items: t.items.business },
    { key: 'soft', heading: t.soft, items: t.items.soft },
  ]

  return (
    <section id="skills" className="py-[112px] px-6 md:px-[72px] bg-[var(--white)]">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="sec-label">
            <span className="sec-num">03</span>
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
          {groups.map((group) => {
            const Icon = SKILL_ICONS[group.key]
            return (
            <ScrollReveal key={group.key}>
              <div className="bg-[var(--white)] border border-[var(--border)] rounded-[20px] p-8 hover:shadow-[0_12px_40px_rgba(27,45,94,0.1)] hover:-translate-y-1 transition-all">
                <div className="flex items-center gap-3 mb-7 pb-5 border-b border-[var(--border)]">
                  <div className="w-[38px] h-[38px] bg-[var(--pale)] rounded-[10px] flex items-center justify-center shrink-0">
                    <Icon />
                  </div>
                  <span className="text-[13px] font-semibold text-[var(--navy)] tracking-wide">{group.heading}</span>
                </div>
                <div className="flex flex-col gap-3">
                  {group.items.map((item) => (
                    <SkillBar key={item.label} label={item.label} width={item.width} />
                  ))}
                </div>
              </div>
            </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  )
}
