<script setup lang="ts">
import { computed, markRaw, defineAsyncComponent } from "vue";
import { useRoute } from "vue-router";
const SimpleLayout = defineAsyncComponent(() => import("@/layouts/SimpleLayout.vue"));

const route = useRoute();
const useLayout = computed(() =>
	route.meta.layout ? markRaw(route.meta.layout) : markRaw(SimpleLayout),
);
</script>

<template>
  <component :is="useLayout" />
</template>

<style scoped></style>
