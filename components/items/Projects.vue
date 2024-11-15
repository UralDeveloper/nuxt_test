<script setup lang="ts">
const props = defineProps({
    project: {
        type: Object,
        required: true
    }
})

// const projectLink = computed(() => `/projects/${props.project.slug}`)
const projectLink = computed(() => ref(`/projects/${props.project.slug}`))

function truncateText(html: string, limit: number): string {
    const div = document.createElement('div')
    div.innerHTML = html
    const text = div.innerText || div.textContent || ''
    return text.length > limit ? text.slice(0, limit) + '...' : text
}


// Сокращаем content до 120 символов
const truncatedContent = computed(() => {
    return truncateText(props.project.content.rendered, 120)
})
</script>

<template>
    <div class="projects-item">
        <div class="projects-item__img">
            <img v-if="project.yoast_head_json?.og_image?.[0]?.url" 
                 :src="project.yoast_head_json.og_image[0].url" alt="">
        </div>
        <div class="projects-item__text">
            <h3 class="projects-item__title">
                 <NuxtLink :to="projectLink">
                    <span v-html="project.title.rendered"></span>
                </NuxtLink>
            </h3>
        </div>
        <div class="projects-item__footer">
            <span class="projects-item__link">Подробнее</span>
        </div>
    </div>
</template>
