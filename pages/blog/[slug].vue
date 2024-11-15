<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useAsyncData } from '#app'

const route = useRoute()
const { slug } = route.params

// Запрашиваем пост по slug
const { data: postData } = await useAsyncData(`post:${slug}`, () => 
  $fetch(`https://alexandr.pw/wp-json/wp/v2/posts/?slug=${slug}`)
)
</script>

<template>
  <div class="container singlePost" v-if="postData && postData[0]">
    <div class="sidebar singlePost-sidebar">
      <ul>
        <li><a href="#"># Элемент</a></li>
        <li><a href="#"># Элемент</a></li>
        <li><a href="#"># Элемент</a></li>
        <li><a href="#"># Элемент</a></li>
        <li><a href="#"># Элемент</a></li>
      </ul>
    </div>
    <div class="singlePost-container">
        <div class="singlePost-thumbnail">
            <img :src="postData[0].yoast_head_json.og_image[0].url" alt="">
        </div>
      <h1>{{ postData[0].title.rendered }}</h1>
      <div v-html="postData[0].content.rendered"></div>
    </div>
  </div>
  <div v-else>
    <p>Пост не найден или загружается...</p>
  </div>
</template>


