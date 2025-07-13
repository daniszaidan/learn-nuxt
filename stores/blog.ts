import { defineStore } from 'pinia';
import type { Post, BlogState } from '~/types';

export const useBlogStore = defineStore('blog', {
  state: (): BlogState => ({
    posts: [],
    currentPost: null,
    loading: false,
    error: null
  }),

  getters: {
    getPostById: (state) => (id: number) => {
      return state.posts.find(post => post.id === id) || null;
    },
    
    getPostsByUser: (state) => (userId: number) => {
      return state.posts.filter(post => post.userId === userId);
    }
  },

  actions: {
    async fetchPosts() {
      this.loading = true;
      this.error = null;
      
      try {
        const { data, error } = await useFetch<Post[]>('https://jsonplaceholder.typicode.com/posts');
        
        if (error.value) {
          throw new Error(error.value.message);
        }
        
        this.posts = data.value || [];
      } catch (err) {
        this.error = err instanceof Error ? err.message : 'Failed to fetch posts';
      } finally {
        this.loading = false;
      }
    },

    async fetchPost(id: number) {
      this.loading = true;
      this.error = null;
      
      try {
        const { data, error } = await useFetch<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`);
        
        if (error.value) {
          throw new Error(error.value.message);
        }
        
        this.currentPost = data.value || null;
      } catch (err) {
        this.error = err instanceof Error ? err.message : 'Failed to fetch post';
      } finally {
        this.loading = false;
      }
    },

    clearError() {
      this.error = null;
    },

    clearCurrentPost() {
      this.currentPost = null;
    }
  }
}); 