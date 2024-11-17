<template>
  <div class="app">
    <NuxtLayout name="default">
      <LayoutHeader />
      <NuxtLoadingIndicator />
      <NuxtRouteAnnouncer />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>


<script>
import { onMounted } from 'vue';

export default {
  setup() {
    onMounted(() => {
      const scripts = [
        '/assets/js/bootstrap.min.js',
        '/assets/js/fancybox.umd.js',
        '/assets/js/swiper-bundle.min.js',
        '/assets/js/script.js'
      ];

      scripts.forEach((src) => {
        if (!document.querySelector(`script[src="${src}"]`)) {
          const script = document.createElement('script');
          script.src = src;
          script.async = true;
          // script.onload = () => console.log(`${src} подключен`);
          // script.onerror = () => console.error(`Ошибка загрузки ${src}`);
          document.body.appendChild(script);
        }
      });
    });
  }
};
</script>