// Static blog page for GitHub Pages deployment
export default function BlogPage() {
  // Static placeholder data for GitHub Pages
  const staticPosts = [
    {
      id: 1,
      title: "Welcome to Our Blog",
      excerpt: "This is a static version of our blog. For the full experience, please visit our deployed application.",
      slug: "#",
      image: null
    },
    {
      id: 2,
      title: "About This Project",
      excerpt: "This blog is built with Strapi (backend) and Next.js (frontend). The backend runs on localhost:1337.",
      slug: "#",
      image: null
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="hero-gradient text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">All Blog Posts</h1>
          <p>Total posts: {staticPosts.length}</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {staticPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <a href={post.slug} className="text-purple-600 hover:text-purple-800">
                    Read more →
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-600">
              This is a static demo. For the full blog experience, run the application locally with:
            </p>
            <code className="bg-gray-100 px-4 py-2 rounded mt-2 block">
              ./start-servers.bat
            </code>
          </div>
        </div>
      </section>
    </div>
  );
}
