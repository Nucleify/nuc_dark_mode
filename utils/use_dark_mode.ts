import { useCookie } from 'nuxt/app'
import type { Ref } from 'vue'
import { watch } from 'vue'

import type { UseDarkModeInterface } from '../types'
import { applyDarkMode } from './apply_dark_mode'

const COOKIE_KEY = 'nuc-dark-mode'
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365

let clientWatchRegistered = false

export function useDarkMode(): UseDarkModeInterface {
  const isDark = useCookie<boolean>(COOKIE_KEY, {
    default: () => false,
    maxAge: COOKIE_MAX_AGE,
    path: '/',
    sameSite: 'lax',
  }) as unknown as Ref<boolean>

  if (import.meta.client) {
    applyDarkMode(isDark.value)

    if (!clientWatchRegistered) {
      watch(isDark, (value) => {
        applyDarkMode(value)
      })
      clientWatchRegistered = true
    }
  }

  function toggleDarkMode(): void {
    isDark.value = !isDark.value
  }

  return { isDark, toggleDarkMode }
}
