<script setup lang="ts">
    import ProjectsItem from '../items/Projects.vue'
    const { data: projects } = await useFetch('/api/wp-json/wp/v2/projects?per_page=6')
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
        </div>
    </section>
</template>