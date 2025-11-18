import { getBlogPosts } from "@/lib/api";
import PostCard from "@/components/PostCard";
import Link from "next/link";

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">All Blog Posts</h1>
            <p className="text-xl opacity-90">Explore our complete collection of articles and tutorials</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link href="/" className="text-gray-600 hover:text-purple-600">
                  Home
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li className="text-purple-600 font-medium">Blog</li>
            </ol>
          </nav>

          {/* Posts Grid */}
          {posts?.data && posts.data.length > 0 ? (
            <>
              {/* Results Count */}
              <div className="mb-8">
                <p className="text-gray-600">
                  Showing {posts.data.length} {posts.data.length === 1 ? "post" : "posts"}
                </p>
              </div>

              {/* Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.data.map((post: any) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>

              {/* Pagination */}
              {posts.meta?.pagination && (
                <div className="mt-12 flex justify-center">
                  <div className="flex space-x-2">
                    {Array.from({ length: posts.meta.pagination.pageCount }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        className={`px-4 py-2 rounded-lg transition-colors ${
                          page === posts.meta?.pagination?.page
                            ? "bg-purple-600 text-white"
                            : "bg-white text-gray-700 hover:bg-purple-50"
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-6">
                <svg className="w-32 h-32 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-4">No blog posts found</h2>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Start creating amazing content in your Strapi admin panel to see it appear here.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="http://localhost:1337/admin" 
                  target="_blank"
                  className="btn-primary text-white px-6 py-3 rounded-lg inline-block"
                >
                  Create Your First Post
                </Link>
                <Link 
                  href="/"
                  className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors inline-block"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
