<script lang="ts" setup>
import { Category } from '@/interfaces/category.interface';
import { useBookmarkStore } from '@/stores/bookmark.store';
import { useCategoryStore } from '@/stores/categories.store';
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const categoryStore = useCategoryStore();
const bookmarkStore = useBookmarkStore();
const category = ref<Category>();
watch(
  () => ({
    alias: route.params.alias,
  }),
  (data) => {
    category.value = categoryStore.getCategoryByAlias(data.alias);
    if (category.value) {
      bookmarkStore.fetchBookmarks(category.value.id);
    }
  },
);
</script>
<template>
  Category {{ category?.name }}
  {{ bookmarkStore.bookmarks.length }}
</template>
