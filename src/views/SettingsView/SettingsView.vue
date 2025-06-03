<script setup lang="ts">
import { t } from 'i18next';
import { useSettingsStore } from '@/stores';
import './locales';
import ShowResponse from './partials/ShowResponse/ShowResponse.vue';

// stores
const settingsStore = useSettingsStore();

// methods
const loadSettings = async () => {
  await settingsStore.setSettings();
};
</script>
<template>
  <div>
    <h1>{{ t('settingsView:title') }}</h1>
    <h2>{{ t('settingsView:description') }}</h2>
    <br>
    <VButton @click="loadSettings" :loading="$loading.value">
      Loading settings
    </VButton>
    <br />
    <ShowResponse />
  </div>
</template>
