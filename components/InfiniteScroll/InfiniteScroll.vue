<template>
    <div ref="scrollContainer" class="infinite-scroll">
      <slot></slot>
      <div v-if="isLoading" class="loading-spinner">
        Загрузка...
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, watch, onMounted, onBeforeUnmount } from 'vue';
  
  const props = defineProps({
    loadMore: {
      type: Function,
      required: true,
      default: () => Promise.resolve(),
    },
    hasMore: {
      type: Boolean,
      default: true,
    },
    threshold: {
      type: Number,
      default: 300, // Расстояние до конца, при котором срабатывает подгрузка
    },
  });
  
  const emit = defineEmits(['loading', 'loaded']);
  
  const scrollContainer = ref(null);
  const isLoading = ref(false);
  
  const onScroll = async () => {
    if (!scrollContainer.value || isLoading.value || !props.hasMore) return;
  
    const { scrollTop, scrollHeight, clientHeight } = scrollContainer.value;
    if (scrollHeight - scrollTop - clientHeight <= props.threshold) {
      isLoading.value = true;
      emit('loading');
  
      try {
        await props.loadMore();
      } finally {
        isLoading.value = false;
        emit('loaded');
      }
    }
  };
  
  onMounted(() => {
    scrollContainer.value?.addEventListener('scroll', onScroll);
  });
  
  onBeforeUnmount(() => {
    scrollContainer.value?.removeEventListener('scroll', onScroll);
  });
  </script>
  
  <style scoped>
  .infinite-scroll {
    overflow-y: auto;
    height: 100%;
  }
  
  .loading-spinner {
    text-align: center;
    padding: 10px;
    font-size: 14px;
  }
  </style>
  