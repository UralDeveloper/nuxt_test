<script setup lang="ts">
    const props = defineProps({
        post: {
            type: Object,
            required: true
        }
    })
    let postLink = '/blog/' + props.post.slug
</script>
<template>
    <div class="posts-item">
        <h3 class="posts-item__title">
            <a :href="postLink">{{ post.title.rendered }}</a>
        </h3>
        <div class="posts-item__desc" v-html="post.excerpt.rendered">
        </div>
        <div class="posts-item__footer">
            <span class="posts-item__tags">
                <a href="/tags">PHP</a>
                <a href="/tags">WordPress</a>
            </span>
            <a href="/blog/single-post" class="posts-item__link">Подробнее</a>
        </div>
    </div>
</template>