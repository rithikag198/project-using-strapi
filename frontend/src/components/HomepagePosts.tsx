// Static blog posts data
const posts = [
  {
    id: 1,
    title: "Getting Started with React",
    slug: "getting-started-with-react",
    description: "Learn the basics of React and how to build your first component.",
    author: { id: 1, name: "John Doe", email: "john@example.com" },
    publishedAt: "2024-01-15",
    category: { id: 1, name: "React", slug: "react" },
    tags: [{ id: 1, name: "javascript", slug: "javascript" }, { id: 2, name: "frontend", slug: "frontend" }]
  },
  {
    id: 2,
    title: "Advanced TypeScript Techniques",
    slug: "advanced-typescript-techniques",
    description: "Explore advanced TypeScript features and patterns for better type safety.",
    author: { id: 2, name: "Jane Smith", email: "jane@example.com" },
    publishedAt: "2024-01-20",
    category: { id: 2, name: "TypeScript", slug: "typescript" },
    tags: [{ id: 3, name: "types", slug: "types" }, { id: 4, name: "programming", slug: "programming" }]
  },
  {
    id: 3,
    title: "Building REST APIs with Node.js",
    slug: "building-rest-apis-with-nodejs",
    description: "A comprehensive guide to building scalable REST APIs using Node.js and Express.",
    author: { id: 3, name: "Mike Johnson", email: "mike@example.com" },
    publishedAt: "2024-01-25",
    category: { id: 3, name: "Node.js", slug: "nodejs" },
    tags: [{ id: 5, name: "backend", slug: "backend" }, { id: 6, name: "api", slug: "api" }]
  }
];

import PostCard from './PostCard';

export default function HomepagePosts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.slice(0, 6).map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
