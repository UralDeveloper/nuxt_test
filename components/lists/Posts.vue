<script setup lang="ts">
    import PostsItem from '../items/Posts.vue'

    // Fetch data '*/wp-json/wp/v2/posts'
    const { data: posts } = await useFetch('/api/wp-json/wp/v2/posts?per_page=3')

</script>

<template>
    <section class="posts-wrapper">
        <div class="posts-container container">
            <div class="titleBlock posts-titleBlock">
                <h2 class="title posts-title"># Посты</h2>
                <a href="/blog" class="posts-link">Все посты</a>
            </div>
            <div class="posts-list">
                <PostsItem v-for="post in posts" :key="post.id" :post="post" />
            </div>
            <div class="posts-sidebar">
                <ul>
                    <li><a href="#">Начинающим</a></li>
                    <li><a href="#">Начинающим</a></li>
                    <li><a href="#">Начинающим</a></li>
                    <li><a href="#">Начинающим</a></li>
                    <li><a href="#">Начинающим</a></li>
                </ul>
            </div>
        </div>
    </section>
</template>