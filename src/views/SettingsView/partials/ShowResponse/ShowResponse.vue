<script setup lang="ts">
import { computed } from 'vue';
import { useSettingsStore } from '@/stores';

// stores
const settingsStore = useSettingsStore();

// computed
const response = computed(() => settingsStore.getSettings);
</script>
<template>
  <v-col>
    <v-row>
      <code>
        {{ response }}
      </code>
    </v-row>
  </v-col>
</template>
<style>
code {
  font-family: Consolas, "courier new";
  color: crimson;
  background-color: #f1f1f1;
  padding: 2px;
  font-size: 105%;
  margin: 10px 0;
}
</style>