import { createContext, useContext, useState, useEffect } from 'react'

const STORAGE_KEY = 'portfolio-lang'

const LanguageContext = createContext({ language: 'en', setLanguage: () => {} })

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    if (typeof window === 'undefined') return 'en'
    return (localStorage.getItem(STORAGE_KEY) || 'en')
  })

  const setLanguage = (lang) => {
    setLanguageState(lang)
    if (typeof window !== 'undefined') localStorage.setItem(STORAGE_KEY, lang)
  }

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language === 'th' ? 'th' : 'en'
    }
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider')
  return ctx
}
