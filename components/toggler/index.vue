<template>
  <ad-button
    class="nuc-dark-mode-toggler"
    :icon="isDark ? 'prime:moon' : 'prime:sun'"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
    severity="secondary"
    text
    rounded
    @click="toggleDarkMode()"
  />
</template>

<script setup lang="ts">
import { useDarkMode } from '../../utils'

const { isDark, toggleDarkMode } = useDarkMode()
</script>

<style lang="scss">
@import 'index';
</style>