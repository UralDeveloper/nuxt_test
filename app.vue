<script setup lang="ts">
  import { SpeedInsights } from "@vercel/speed-insights/nuxt"
</script>
<template>
  <div class="app">
    <NuxtLayout name="default">
      <SpeedInsights/>
      <LayoutHeader />
      <NuxtLoadingIndicator />
      <NuxtRouteAnnouncer />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>