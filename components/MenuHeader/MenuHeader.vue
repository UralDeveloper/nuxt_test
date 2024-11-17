<script setup lang="ts">
import { useAsyncData } from '#app'

const { data: menuData, pending, error } = await useAsyncData('menu', () =>
  $fetch(`/api/wp-json/custom/v1/menu/124`)
)
</script>

<template>
  <ul class="navbar-nav">
    <li v-if="pending" class="nav-item">
      <span class="nav-link">Загрузка...</span>
    </li>
    <li v-else-if="error" class="nav-item">
      <span class="nav-link text-danger">Ошибка загрузки меню</span>
    </li>
    <!-- Рендерим элементы меню -->
    <li v-else v-for="item in menuData" :key="item.ID" class="nav-item">
      <NuxtLink
        class="nav-link"
        :href="item.url"
        rel="noopener noreferrer"
      >
        {{ item.title }}
      </NuxtLink>
    </li>
  </ul>
</template>
