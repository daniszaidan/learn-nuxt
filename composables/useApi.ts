import type { Post } from '~/types';

export const useApi = () => {
  const config = useRuntimeConfig();
  
  const fetchPosts = async () => {
    return await useFetch<Post[]>('https://jsonplaceholder.typicode.com/posts', {
      key: 'posts',
      default: () => [],
      transform: (posts) => posts.slice(0, 20), // Limit to 20 posts for demo
      server: true,
      lazy: false
    });
  };

  const fetchPost = async (id: number) => {
    return await useFetch<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      key: `post-${id}`,
      server: true,
      lazy: false,
      pick: ['id', 'title', 'body', 'userId']
    });
  };

  const fetchUser = async (userId: number) => {
    return await useFetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
      key: `user-${userId}`,
      server: true,
      lazy: true
    });
  };

  return {
    fetchPosts,
    fetchPost,
    fetchUser
  };
}; 