import { API_ROUTES, client } from '@/api';
import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Bookmark } from '@/interfaces/bookmark.interface';

export const useBookmarkStore = defineStore('bookmarks', () => {
  const bookmarks = ref<Bookmark[]>([]);

  async function fetchBookmarks(categoryId: number) {
    const { data } = await client().get<Bookmark[]>(API_ROUTES.bookmarks.get(categoryId));
    bookmarks.value = data;
  }

  async function deleteBookmark(id: number, categoryId: number) {
    await client().delete<Bookmark[]>(API_ROUTES.bookmarks.delete(id));
    fetchBookmarks(categoryId);
  }

  return { bookmarks, fetchBookmarks, deleteBookmark };
});
