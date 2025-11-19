const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'https://project-using-strapi.vercel.app';

export interface Category {
  id: number;
  name: string;
  slug: string;
  description?: string;
}

export interface Tag {
  id: number;
  name: string;
  slug: string;
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  content?: string;
  description?: string;
  published_at?: string;
  author?: string;
  image?: Array<{
    id: number;
    name: string;
    url: string;
    formats?: {
      thumbnail?: { url: string };
      small?: { url: string };
      medium?: { url: string };
      large?: { url: string };
    };
  }>;
  category?: {
    id: number;
    name: string;
    slug: string;
  };
  tags?: Array<{
    id: number;
    name: string;
    slug: string;
  }>;
}

export interface ApiResponse<T> {
  data: T[];
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export async function getBlogPosts(): Promise<ApiResponse<BlogPost>> {
  const response = await fetch(`${API_URL}/api/blog-posts?populate=*`, {
    cache: 'no-store',
  });
  
  if (!response.ok) {
    throw new Error('Failed to fetch blog posts');
  }
  
  return response.json();
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost> {
  const response = await fetch(`${API_URL}/api/blog-posts?filters[slug][$eq]=${slug}&populate=*`, {
    cache: 'no-store',
  });
  
  if (!response.ok) {
    throw new Error('Failed to fetch blog post by slug');
  }
  
  const result = await response.json();
  return result.data[0];
}

export async function getCategories(): Promise<ApiResponse<Category>> {
  const response = await fetch(`${API_URL}/api/categories`, {
    cache: 'no-store',
  });
  
  if (!response.ok) {
    throw new Error('Failed to fetch categories');
  }
  
  return response.json();
}

export async function getCategoryBySlug(slug: string): Promise<Category> {
  const response = await fetch(`${API_URL}/api/categories?filters[slug][$eq]=${slug}`, {
    cache: 'no-store',
  });
  
  if (!response.ok) {
    throw new Error('Failed to fetch category');
  }
  
  const result = await response.json();
  return result.data[0];
}

export async function getBlogPostsByCategory(categorySlug: string): Promise<ApiResponse<BlogPost>> {
  const response = await fetch(`${API_URL}/api/blog-posts?filters[category][slug][$eq]=${categorySlug}&populate=*`, {
    cache: 'no-store',
  });
  
  if (!response.ok) {
    throw new Error('Failed to fetch blog posts by category');
  }
  
  return response.json();
}

export async function getTags(): Promise<ApiResponse<Tag>> {
  const response = await fetch(`${API_URL}/api/tags`, {
    cache: 'no-store',
  });
  
  if (!response.ok) {
    throw new Error('Failed to fetch tags');
  }
  
  return response.json();
}
