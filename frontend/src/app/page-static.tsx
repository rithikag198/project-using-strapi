import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Welcome to Our Blog
            </h1>
            <p className="text-xl mb-8">
              Discover amazing content about technology, design, and more.
            </p>
            <Link 
              href="/blog" 
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              View All Posts
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Posts</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Static placeholder cards */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-purple-400 to-blue-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Latest Technology Trends</h3>
                <p className="text-gray-600 mb-4">Explore the cutting-edge developments in technology...</p>
                <Link href="/blog" className="text-purple-600 hover:text-purple-800 font-semibold">
                  Read More →
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-green-400 to-blue-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Design Best Practices</h3>
                <p className="text-gray-600 mb-4">Learn about modern design principles and techniques...</p>
                <Link href="/blog" className="text-purple-600 hover:text-purple-800 font-semibold">
                  Read More →
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-pink-400 to-purple-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Development Tips</h3>
                <p className="text-gray-600 mb-4">Improve your coding skills with expert advice...</p>
                <Link href="/blog" className="text-purple-600 hover:text-purple-800 font-semibold">
                  Read More →
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/blog" 
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              View All Blog Posts
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Get the latest posts delivered right to your inbox. No spam, unsubscribe anytime.
          </p>
          <div className="max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-purple-500"
            />
            <button className="w-full mt-4 bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
