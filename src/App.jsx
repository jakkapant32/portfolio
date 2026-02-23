import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { WhatICanDo } from './components/WhatICanDo'
import { Contact } from './components/Contact'
import { useLanguage } from './context/LanguageContext'
import { translations } from './translations'

function App() {
  const { language } = useLanguage()
  const footerRole = translations[language].footer.role

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <WhatICanDo />
        <Contact />
      </main>
      <footer className="py-7 px-6 md:px-[72px] flex flex-col md:flex-row justify-between items-center gap-2 bg-[#111a36]">
        <span className="text-sm font-semibold text-white/40">Jakkapan Chinsopa</span>
        <span className="text-[11px] text-[var(--sky)] tracking-widest">{footerRole}</span>
        <span className="text-[11px] text-white/20">© {new Date().getFullYear()}</span>
      </footer>
    </>
  )
}

export default App
