import { getBlogPosts } from '@/lib/api';

export default async function BlogPage() {
  try {
    const postsResponse = await getBlogPosts();
    const posts = postsResponse.data;

    return (
      <div className="min-h-screen bg-gray-50">
        <section className="hero-gradient text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">All Blog Posts</h1>
            <p>Total posts: {posts.length}</p>
          </div>
        </section>
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  {post.image && post.image.length > 0 && (
                    <img 
                      src={post.image[0].url} 
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-6">
                    <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                    {post.description && (
                      <p className="text-gray-600 mb-4">{post.description}</p>
                    )}
                    <a href={`/blog/${post.slug}`} className="text-purple-600 hover:text-purple-800">
                      Read more →
                    </a>
                  </div>
                </div>
              ))}
            </div>
            {posts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600">No blog posts found. Check back soon!</p>
              </div>
            )}
          </div>
        </section>
      </div>
    );
  } catch (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <section className="hero-gradient text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          </div>
        </section>
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <p className="text-gray-600">Unable to load blog posts. Please try again later.</p>
          </div>
        </section>
      </div>
    );
  }
}
