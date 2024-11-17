<script lang="ts" setup>
import { ref } from 'vue';
import ProjectsItem from '@/components/items/Projects.vue';

// Переменные состояния
const projects = ref([]);
const currentPage = ref(1);
const hasMoreProjects = ref(true);
const loading = ref(false);

// Функция для загрузки проектов
const loadProjects = async (page: number) => {
  try {
    const { data, error } = await useFetch(`/api/wp-json/wp/v2/projects?page=${page}&per_page=9`);
    if (error.value) throw new Error(error.value.message);

    // Если данные есть, добавляем их в массив проектов
    if (data.value && data.value.length > 0) {
      projects.value.push(...data.value);
    } else {
      // Если данных больше нет, блокируем кнопку
      hasMoreProjects.value = false;
    }
  } catch (e) {
    console.error('Ошибка при загрузке проектов:', e);
    hasMoreProjects.value = false;
  }
};

// Загрузка первой страницы при загрузке компонента
await loadProjects(currentPage.value);

// Функция загрузки следующей страницы
const loadMoreProjects = async () => {
  if (loading.value || !hasMoreProjects.value) return;

  loading.value = true;
  currentPage.value += 1;
  await loadProjects(currentPage.value);
  loading.value = false;
};
</script>

<template>
  <section class="projects-wrapper">
    <div class="projects-container container">
      <div class="titleBlock projects-titleBlock">
        <h2 class="title projects-title"># Проекты</h2>
        <NuxtLink href="/projects" class="projects-link">Все проекты</NuxtLink>
      </div>
      <div class="projects-list">
        <ProjectsItem v-for="project in projects" :key="project.id" :project="project" />
      </div>
      <div class="projects-pagination">
        <button 
          v-if="hasMoreProjects" 
          @click="loadMoreProjects" 
          :disabled="loading" 
          class="load-more">
          {{ loading ? 'Загрузка...' : 'Загрузить ещё' }}
        </button>
      </div>
    </div>
  </section>
</template>
