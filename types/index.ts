export interface Post {
  id: number;
  title: string;
  body: string;
  userId?: number;
}

export interface User {
  id: number;
  name: string;
  email: string;
  username?: string;
}

export interface BlogState {
  posts: Post[];
  currentPost: Post | null;
  loading: boolean;
  error: string | null;
}

export interface SeoMeta {
  title: string;
  description: string;
  image?: string;
  url?: string;
} 