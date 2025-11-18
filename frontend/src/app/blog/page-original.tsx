import { getBlogPosts } from "@/lib/api";
import PostCard from "@/components/PostCard";

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="hero-gradient text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">All Blog Posts</h1>
          <p>Total posts: {posts.data?.length || 0}</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4">
          {posts.data?.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.data.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No blog posts found.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
