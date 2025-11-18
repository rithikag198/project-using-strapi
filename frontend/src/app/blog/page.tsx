async function getPosts() {
  try {
    const res = await fetch('http://localhost:1337/api/blog-posts?populate=*', { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch posts');
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return { data: [] };
  }
}

export default async function BlogPage() {
  const posts = await getPosts();

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
              {posts.data.map((post: any) => (
                <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  {post.image && post.image[0] && (
                    <img 
                      src={`http://localhost:1337${post.image[0].url}`}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-6">
                    <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                    <p className="text-gray-600 mb-4">{post.excerpt || 'No excerpt available'}</p>
                    <a href={`/blog/${post.slug}`} className="text-purple-600 hover:text-purple-800">
                      Read more →
                    </a>
                  </div>
                </div>
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
