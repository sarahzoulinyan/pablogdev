import { useState, useEffect, useCallback } from 'react'
import { translations, type Language, type TranslationKey } from '../data/translations'

export function useLanguage() {
  const [lang, setLang] = useState<Language>(() => {
    localStorage.setItem('lang', 'en')
    return 'en'
  })

  useEffect(() => {
    localStorage.setItem('lang', lang)
  }, [lang])

  const t = useCallback(
    (key: TranslationKey): string => {
      return translations[lang]?.[key] || translations.en[key] || key
    },
    [lang]
  )

  const setLanguage = useCallback((newLang: Language) => {
    setLang(newLang)
  }, [])

  return { lang, t, setLanguage }
}