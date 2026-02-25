import { defineNuxtPlugin } from 'nuxt/app'
import type { App } from 'vue'

import { NucDarkModeToggler } from '.'

import { darkModeServerPlugin } from './plugins'

export function registerNucDarkMode(app: App<Element>): void {
  app
    .component('nuc-dark-mode-toggler', NucDarkModeToggler)
    .use(darkModeServerPlugin as typeof defineNuxtPlugin)
}
