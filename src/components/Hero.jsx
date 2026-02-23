import { ScrollReveal } from './ScrollReveal'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'

export function Hero() {
  const { language } = useLanguage()
  const t = translations[language].hero

  return (
    <section id="home" className="min-h-screen flex flex-col md:flex-row md:items-center px-6 md:px-[72px] pt-[120px] pb-20 relative">
      <div className="absolute top-[10%] right-[8%] w-[320px] md:w-[520px] h-[320px] md:h-[520px] rounded-full bg-[radial-gradient(circle,rgba(91,141,232,0.12)_0%,transparent_70%)] pointer-events-none" />
      <div className="max-w-[680px] relative z-10">
        <ScrollReveal>
          <div className="hero-badge inline-flex items-center gap-2 bg-[var(--white)] border border-[var(--border)] rounded-[100px] py-1.5 pl-2.5 pr-4 mb-10 text-xs font-medium text-[var(--mid)] shadow-[0_2px_12px_rgba(27,45,94,0.06)]">
            <span className="relative flex h-[7px] w-[7px]">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--green)] opacity-75" />
              <span className="relative inline-flex rounded-full h-[7px] w-[7px] bg-[var(--green)]" />
            </span>
            {t.available}
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <h1 className="hero-title text-[clamp(2.5rem,5vw,4rem)] font-bold text-[var(--navy)] leading-tight tracking-tight mb-6">
            Jakkapan
            <br />
            <span className="hero-title-accent font-light text-[var(--sky)] italic">Chinsopa</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal>
          <p className="text-[13px] font-medium text-[var(--muted)] tracking-[0.12em] uppercase mb-7">
            {t.role}
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <p className="text-base font-light text-[var(--mid)] leading-relaxed max-w-[540px] mb-12">
            {t.desc}
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <div className="flex flex-wrap gap-3 mb-12 md:mb-0">
            <a href="/resume.pdf" download className="btn-pill btn-navy">
              {t.downloadResume}
            </a>
            <a href="#contact" className="btn-pill btn-outline">
              {t.contactMe}
            </a>
          </div>
        </ScrollReveal>
      </div>
      <ScrollReveal className="relative z-10 md:absolute md:right-[72px] md:top-1/2 md:-translate-y-1/2 flex flex-row flex-wrap md:flex-col gap-4 mt-10 md:mt-0">
        <div className="bg-[var(--white)] border border-[var(--border)] rounded-2xl p-5 min-w-[140px] shadow-[0_4px_20px_rgba(27,45,94,0.07)] hover:shadow-[0_10px_30px_rgba(27,45,94,0.12)] hover:-translate-y-0.5 transition-all">
          <div className="hero-stat-value text-[32px] font-bold text-[var(--navy)] leading-none mb-1 tracking-tight">3<span className="text-[var(--sky)] font-normal text-xl">.95</span></div>
          <div className="hero-stat-label text-[11px] text-[var(--muted)]">{t.statGpa}</div>
        </div>
        <div className="bg-[var(--white)] border border-[var(--border)] rounded-2xl p-5 min-w-[140px] shadow-[0_4px_20px_rgba(27,45,94,0.07)] hover:shadow-[0_10px_30px_rgba(27,45,94,0.12)] hover:-translate-y-0.5 transition-all">
          <div className="hero-stat-value text-[32px] font-bold text-[var(--navy)] leading-none mb-1 tracking-tight">100<span className="text-[var(--sky)] font-normal text-xl">+</span></div>
          <div className="hero-stat-label text-[11px] text-[var(--muted)]">{t.statClients}</div>
        </div>
        <div className="bg-[var(--white)] border border-[var(--border)] rounded-2xl p-5 min-w-[140px] shadow-[0_4px_20px_rgba(27,45,94,0.07)] hover:shadow-[0_10px_30px_rgba(27,45,94,0.12)] hover:-translate-y-0.5 transition-all">
          <div className="hero-stat-value text-[32px] font-bold text-[var(--navy)] leading-none mb-1 tracking-tight">3<span className="text-[var(--sky)] font-normal text-xl">+</span></div>
          <div className="hero-stat-label text-[11px] text-[var(--muted)]">{t.statYears}</div>
        </div>
      </ScrollReveal>
      {/* ข้อความเติมพื้นที่กลาง - แสดงบน desktop */}
      <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0" aria-hidden="true">
        <p className="text-[var(--muted)]/40 text-sm font-medium tracking-[0.2em] uppercase whitespace-nowrap">
          {language === 'th' ? 'พัฒนาเว็บ · CRM · ธุรกิจ' : 'Web · CRM · Business'}
        </p>
      </div>
    </section>
  )
}
