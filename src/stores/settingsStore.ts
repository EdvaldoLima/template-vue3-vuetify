import { settingsService } from '@/services'
import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settings', {
  state: () => ({
    settings: {}
  }),
  getters: {
    getSettings: (state) => state.settings,
  },
  actions: {
    async setSettings() {
      const settings = await settingsService.fetchSettings()
      this.settings = settings.data
    }
  },
})