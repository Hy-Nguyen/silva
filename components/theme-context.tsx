'use client'

import React, { createContext, useContext, useState, useCallback, useEffect } from 'react'
import { DEFAULT_CONFIG } from "@/config/archetypes";
import { FONT_PAIRS, getTokenVars, type SiteConfig } from "@/config/design.config";

type ConfigKey = keyof SiteConfig;

interface ThemeContextValue {
  config: SiteConfig
  setConfig: <K extends ConfigKey>(key: K, value: SiteConfig[K]) => void
  tokenVars: Record<string, string>
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [config, setConfigState] = useState<SiteConfig>(DEFAULT_CONFIG)

  const setConfig = useCallback(<K extends ConfigKey>(key: K, value: SiteConfig[K]) => {
    setConfigState((prev) => ({ ...prev, [key]: value }))
  }, [])

  // Dynamically inject Google Font link when font pair changes
  useEffect(() => {
    const href = FONT_PAIRS[config.fontPair].googleHref
    if (!href) return
    const id = 'dynamic-gfonts'
    let link = document.getElementById(id) as HTMLLinkElement | null
    if (!link) {
      link = document.createElement('link')
      link.id = id
      link.rel = 'stylesheet'
      document.head.appendChild(link)
    }
    if (link.href !== href) link.href = href
  }, [config.fontPair])

  const tokenVars = getTokenVars(config)

  return (
    <ThemeContext.Provider value={{ config, setConfig, tokenVars }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
