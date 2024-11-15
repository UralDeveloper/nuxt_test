<script setup lang="ts">
import { computed } from 'vue'

// Определяем пропсы
const props = defineProps({
    project: {
        type: Object,
        required: true
    }
})

// Рекомендовано использовать computed для вычисления ссылок
const projectLink = computed(() => `/projects/${props.project.slug}`)

// Функция для сокращения текста без сохранения HTML-тегов
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
            <!-- Проверяем существование og_image -->
            <img v-if="project.yoast_head_json?.og_image?.[0]?.url" 
                 :src="project.yoast_head_json.og_image[0].url" alt="">
        </div>
        <div class="projects-item__text">
            <h3 class="projects-item__title">
                <a :href="projectLink" v-html="project.title.rendered"></a>
            </h3>
        </div>
        <div class="projects-item__footer">
            <a :href="projectLink" class="projects-item__link">Подробнее</a>
        </div>
    </div>
</template>
