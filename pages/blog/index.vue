<script setup lang="ts">
import { ref, onMounted, watchEffect } from 'vue'
import PostsItem from '@/components/items/Posts.vue'

const posts = ref([]) // Хранит все записи
const visiblePosts = ref([]) // Хранит записи, которые будут видны на странице
const postsPerPage = 3 // Количество постов на один "пакет"
let currentPage = 1 // Текущая страница

// Загрузка данных из API
const { data } = await useFetch('/api/wp-json/posts')

// Добавляем записи в основной массив и отображаем первые 3
if (data.value) {
    posts.value = data.value
    loadMorePosts()
}

// Функция для загрузки следующей "страницы" (следующих 3 постов)
function loadMorePosts() {
    const start = (currentPage - 1) * postsPerPage
    const end = currentPage * postsPerPage
    visiblePosts.value = visiblePosts.value.concat(posts.value.slice(start, end))
    currentPage++
}

// Функция для отслеживания прокрутки
function handleScroll() {
    const scrollPosition = window.innerHeight + window.scrollY
    const documentHeight = document.documentElement.scrollHeight

    // Когда пользователь прокручивает до конца страницы, загружаем новые посты
    if (scrollPosition >= documentHeight - 100) {
        loadMorePosts()
    }
}

// Отслеживание события прокрутки
onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

// Убираем обработчик события при размонтировании компонента
watchEffect(() => {
    return () => {
        window.removeEventListener('scroll', handleScroll)
    }
})
</script>

<template>
    <section class="posts-wrapper">
        <div class="posts-container container">
            <div class="titleBlock posts-titleBlock">
                <h1 class="title posts-title">#Записи</h1>
            </div>
            <div class="posts-list">
                <!-- Отображаем только видимые записи -->
                <PostsItem v-for="post in visiblePosts" :key="post.id" :post="post" />
            </div>
            <div class="loading" v-if="visiblePosts.length < posts.length">
                <p>Загружается...</p>
            </div>
            <div class="posts-sidebar">
                <ul>
                    <li><a href="#">Начинающим</a></li>
                    <li><a href="#">Средним</a></li>
                    <li><a href="#">Про</a></li>
                    <li><a href="#">Богам</a></li>
                </ul>
            </div>
        </div>
    </section>
</template>
