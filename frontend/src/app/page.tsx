import Link from "next/link";
import HomepagePosts from "@/components/HomepagePosts";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Welcome to My Digital Space
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
              Hi, I'm <span className="text-yellow-300">G.Rithika</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
              Welcome to Our Blog - Discover amazing stories, insights, and tutorials from my expert writing journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link 
                href="/blog" 
                className="inline-block bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Explore All Posts
              </Link>
              <Link 
                href="/about" 
                className="inline-block border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                About Me
              </Link>
            </div>
            <div className="flex justify-center space-x-6 text-3xl">
              <div className="text-center">
                <div className="font-bold text-2xl">9+</div>
                <div className="text-sm opacity-80">Blog Posts</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-2xl">5+</div>
                <div className="text-sm opacity-80">Categories</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-2xl">100%</div>
                <div className="text-sm opacity-80">Passion</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-400 rounded-full opacity-20 animate-pulse delay-500"></div>
      </section>

      {/* Featured Posts Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              My Latest Work
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              Latest Blog Posts
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Stay updated with my latest content about technology, programming, and digital innovation
            </p>
          </div>
          
          <HomepagePosts />
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Stay Connected
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's Connect & Grow Together
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Subscribe to my newsletter and never miss a post. I share insights about technology, programming, and digital innovation - curated by <span className="text-yellow-300 font-semibold">G.Rithika</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 px-6 py-4 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white placeholder-white/70 focus:outline-none focus:border-white focus:bg-white/20 transition-all"
              />
              <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Subscribe
              </button>
            </div>
            <p className="text-sm opacity-80">
              Join 100+ readers. No spam, unsubscribe anytime.
            </p>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-5 right-5 w-16 h-16 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-5 left-5 w-24 h-24 bg-pink-400 rounded-full opacity-20 animate-pulse delay-500"></div>
      </section>

      {/* About Author Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                  GR
                </div>
                <h3 className="text-2xl font-bold mb-2">About <span className="text-purple-600">G.Rithika</span></h3>
                <p className="text-gray-600">Content Creator | Tech Enthusiast | Digital Storyteller</p>
              </div>
              <p className="text-gray-700 text-center mb-6">
                Passionate about sharing knowledge and insights through engaging blog posts. 
                I love exploring new technologies and breaking down complex topics into easy-to-understand content.
                Join me on this journey of continuous learning and discovery!
              </p>
              <div className="flex justify-center space-x-4">
                <Link href="/blog" className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors">
                  Read My Blog
                </Link>
                <Link href="/about" className="border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-colors">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
