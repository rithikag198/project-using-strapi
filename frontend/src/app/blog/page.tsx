// Static blog posts data with beautiful images
const posts = [
  {
    id: 1,
    title: "Getting Started with React",
    slug: "getting-started-with-react",
    description: "Learn the basics of React and how to build your first component with hooks and modern patterns.",
    content: "React is a powerful JavaScript library for building user interfaces. In this comprehensive guide, we'll explore everything from JSX to advanced hooks, helping you master modern React development.",
    author: { id: 1, name: "John Doe", email: "john@example.com" },
    publishedAt: "2024-01-15",
    category: { id: 1, name: "React", slug: "react" },
    tags: [{ id: 1, name: "javascript", slug: "javascript" }, { id: 2, name: "frontend", slug: "frontend" }],
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop"
  },
  {
    id: 2,
    title: "Advanced TypeScript Techniques",
    slug: "advanced-typescript-techniques",
    description: "Explore advanced TypeScript features and patterns for better type safety and developer experience.",
    content: "TypeScript offers powerful features that go beyond basic type checking. Learn about advanced types, generics, decorators, and how to build type-safe applications.",
    author: { id: 2, name: "Jane Smith", email: "jane@example.com" },
    publishedAt: "2024-01-20",
    category: { id: 2, name: "TypeScript", slug: "typescript" },
    tags: [{ id: 3, name: "types", slug: "types" }, { id: 4, name: "programming", slug: "programming" }],
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop"
  },
  {
    id: 3,
    title: "Building REST APIs with Node.js",
    slug: "building-rest-apis-with-nodejs",
    description: "A comprehensive guide to building scalable REST APIs using Node.js and Express.",
    content: "Learn how to design, build, and deploy RESTful APIs using Node.js. We'll cover authentication, database integration, testing, and best practices for production-ready APIs.",
    author: { id: 3, name: "Mike Johnson", email: "mike@example.com" },
    publishedAt: "2024-01-25",
    category: { id: 3, name: "Node.js", slug: "nodejs" },
    tags: [{ id: 5, name: "backend", slug: "backend" }, { id: 6, name: "api", slug: "api" }],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop"
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">All Blog Posts</h1>
          <p className="text-xl text-purple-100">Discover insights, tutorials, and stories from our expert writers</p>
          <div className="mt-8">
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
              Total posts: {posts.length}
            </span>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <div key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-purple-600 px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category.name}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Title */}
                  <h2 className="text-xl font-bold text-gray-900 mb-3">
                    <a href={`/blog/${post.slug}`} className="hover:text-purple-600 transition-colors">
                      {post.title}
                    </a>
                  </h2>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag.id}
                        className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs font-medium"
                      >
                        #{tag.name}
                      </span>
                    ))}
                  </div>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                      <span>{post.author.name}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                    </div>
                  </div>

                  {/* Read More Button */}
                  <div className="mt-6">
                    <a 
                      href={`/blog/${post.slug}`} 
                      className="inline-flex items-center text-purple-600 hover:text-purple-800 font-semibold transition-colors"
                    >
                      Read more →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {posts.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <p className="text-gray-600">No blog posts found. Check back soon!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}