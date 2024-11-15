<script setup lang="ts">
    import ProjectsItem from '../items/Projects.vue'

    // Fetch data '*/wp-json/wp/v2/posts'
    const { data: projects } = await useFetch( '/api/projects', { server : false } )

</script>

<template>
    <section class="projects-wrapper">
        <div class="projects-container container">
            <div class="titleBlock projects-titleBlock">
                <h2 class="title projects-title"># Проекты</h2>
                <a href="/projects" class="projects-link">Все проекты</a>
            </div>
            <div class="projects-list">
                <ProjectsItem v-for="project in projects.slice(0, 12)" :key="project.id" :project="project" />
            </div>
        </div>
    </section>
</template>