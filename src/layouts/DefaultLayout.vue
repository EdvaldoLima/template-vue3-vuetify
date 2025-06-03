<script setup lang="ts">
import { t } from "i18next";
import { ref } from "vue";

const drawer = ref(true);

const menuItems = [
  {
    title: t("global:settings"),
    icon: "mdi-cog",
    to: "/",
  },
];
</script>

<template>
  <v-app>
    <v-app-bar density="compact">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>My app</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" expand-on-hover>
      <v-list>
        <v-list-item
        color="primary"
        :prepend-icon="item.icon"
        v-for="(item, index) in menuItems" 
        :title="item.title"
        :to="item.to"
        :key="index" />
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>
