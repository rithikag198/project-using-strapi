// Static data for GitHub Pages deployment
const staticBlogPosts = [
  {
    id: 1,
    documentId: "blog-post-1",
    title: "Building Scalable Next.js Applications",
    slug: "scalable-nextjs-applications",
    description: "Learn how to build and scale Next.js applications for production",
    content: "<h1>Scalable Next.js Applications</h1><p>Building scalable applications with Next.js requires careful planning and architecture. In this guide, we'll explore the best practices for creating Next.js applications that can handle growth and maintain performance.</p><h2>Key Concepts</h2><p>Understanding server-side rendering, static generation, and incremental static regeneration is crucial for building scalable applications.</p>",
    author: {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah@example.com"
    },
    category: {
      id: 1,
      name: "Web Development",
      slug: "web-development"
    },
    tags: [
      { id: 1, name: "Next.js", slug: "nextjs" },
      { id: 2, name: "React", slug: "react" }
    ],
    image: null,
    publishedAt: "2024-01-15T10:00:00.000Z",
    createdAt: "2024-01-15T10:00:00.000Z",
    updatedAt: "2024-01-15T10:00:00.000Z"
  },
  {
    id: 2,
    documentId: "blog-post-2",
    title: "Modern CSS Techniques",
    slug: "modern-css-techniques",
    description: "Explore the latest CSS features and techniques for modern web development",
    content: "<h1>Modern CSS Techniques</h1><p>CSS has evolved significantly over the years. From Flexbox to Grid, custom properties to container queries, modern CSS offers powerful tools for creating responsive and maintainable layouts.</p><h2>What You'll Learn</h2><p>We'll cover the latest CSS features that every frontend developer should know, including CSS Grid, Flexbox, custom properties, and more.</p>",
    author: {
      id: 2,
      name: "Mike Chen",
      email: "mike@example.com"
    },
    category: {
      id: 1,
      name: "Web Development",
      slug: "web-development"
    },
    tags: [
      { id: 3, name: "CSS", slug: "css" },
      { id: 4, name: "Frontend", "slug": "frontend" }
    ],
    image: null,
    publishedAt: "2024-01-20T14:30:00.000Z",
    createdAt: "2024-01-20T14:30:00.000Z",
    updatedAt: "2024-01-20T14:30:00.000Z"
  },
  {
    id: 3,
    documentId: "blog-post-3",
    title: "JavaScript Best Practices",
    slug: "javascript-best-practices",
    description: "Essential JavaScript best practices for clean and maintainable code",
    content: "<h1>JavaScript Best Practices</h1><p>Writing clean JavaScript code is crucial for maintainability and collaboration. In this article, we'll explore essential best practices that every JavaScript developer should follow.</p><h2>Clean Code Principles</h2><p>From naming conventions to code organization, we'll cover the principles that make JavaScript code readable and maintainable.</p>",
    author: {
      id: 3,
      name: "Emily Davis",
      email: "emily@example.com"
    },
    category: {
      id: 2,
      name: "Programming",
      slug: "programming"
    },
    tags: [
      { id: 2, name: "React", slug: "react" },
      { id: 5, name: "JavaScript", "slug": "javascript" }
    ],
    image: null,
    publishedAt: "2024-01-25T09:15:00.000Z",
    createdAt: "2024-01-25T09:15:00.000Z",
    updatedAt: "2024-01-25T09:15:00.000Z"
  }
];

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

export interface Author {
  id: number;
  name: string;
  email: string;
}

export interface BlogPost {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  author: Author;
  category: Category;
  tags: Tag[];
  image: any;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}

// Static API functions for GitHub Pages
export async function getBlogPosts(): Promise<BlogPost[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return staticBlogPosts;
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  return staticBlogPosts.find(post => post.slug === slug) || null;
}

export async function getCategories(): Promise<Category[]> {
  await new Promise(resolve => setTimeout(resolve, 300));
  const categories = staticBlogPosts.map(post => post.category);
  return categories.filter((cat, index, self) => 
    index === self.findIndex(c => c.id === cat.id)
  );
}

export async function getTags(): Promise<Tag[]> {
  await new Promise(resolve => setTimeout(resolve, 300));
  const allTags = staticBlogPosts.flatMap(post => post.tags);
  return allTags.filter((tag, index, self) => 
    index === self.findIndex(t => t.id === tag.id)
  );
}

export async function getBlogPostsByCategory(categorySlug: string): Promise<BlogPost[]> {
  await new Promise(resolve => setTimeout(resolve, 400));
  return staticBlogPosts.filter(post => post.category.slug === categorySlug);
}

export async function getBlogPostsByTag(tagSlug: string): Promise<BlogPost[]> {
  await new Promise(resolve => setTimeout(resolve, 400));
  return staticBlogPosts.filter(post => 
    post.tags.some(tag => tag.slug === tagSlug)
  );
}
