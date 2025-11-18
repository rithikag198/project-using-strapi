import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="text-yellow-300">Rithika</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Content Creator | Tech Enthusiast | Digital Storyteller
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              {/* Profile Section */}
              <div className="text-center mb-12">
                <div className="w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold">
                  GR
                </div>
                <h2 className="text-3xl font-bold mb-4">Hi, I'm <span className="text-purple-600">Rithika</span></h2>
                <p className="text-gray-600 text-lg mb-6">
                  Passionate content creator with a love for technology and digital storytelling
                </p>
                <div className="flex justify-center space-x-6 mb-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">9+</div>
                    <div className="text-sm text-gray-600">Blog Posts</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">5+</div>
                    <div className="text-sm text-gray-600">Categories</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">100%</div>
                    <div className="text-sm text-gray-600">Dedication</div>
                  </div>
                </div>
              </div>

              {/* Story Section */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6 text-purple-600">My Journey</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Welcome to my digital space! I'm Rithika, a passionate content creator who loves exploring the 
                  intersection of technology, creativity, and storytelling. My journey began with a curiosity about how 
                  things work and evolved into a passion for sharing knowledge with others.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Through my blog posts, I aim to break down complex topics into easy-to-understand content that 
                  inspires and educates. Whether it's the latest in web development, digital marketing strategies, 
                  or emerging technologies, I love diving deep and sharing my discoveries with my readers.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  I believe in continuous learning and the power of community. Every post I write is an opportunity 
                  to connect with fellow enthusiasts, share insights, and grow together in this ever-evolving digital landscape.
                </p>
              </div>

              {/* Expertise Section */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6 text-purple-600">Areas of Expertise</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-purple-50 rounded-lg p-6">
                    <h4 className="font-semibold text-purple-800 mb-2">🚀 Technology</h4>
                    <p className="text-gray-700">Web development, programming languages, emerging tech trends</p>
                  </div>
                  <div className="bg-pink-50 rounded-lg p-6">
                    <h4 className="font-semibold text-pink-800 mb-2">📱 Digital Marketing</h4>
                    <p className="text-gray-700">SEO, social media, content strategy, growth hacking</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h4 className="font-semibold text-blue-800 mb-2">🎨 Design</h4>
                    <p className="text-gray-700">UI/UX principles, modern CSS, responsive design</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-6">
                    <h4 className="font-semibold text-green-800 mb-2">💼 Business</h4>
                    <p className="text-gray-700">E-commerce, entrepreneurship, digital transformation</p>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-6 text-purple-600">Let's Connect!</h3>
                <p className="text-gray-700 mb-8">
                  I'd love to hear from you! Whether you have questions, ideas to share, or just want to say hello, 
                  feel free to reach out.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/blog" 
                    className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors"
                  >
                    Read My Blog
                  </Link>
                  <a
                    href="mailto:contact@grithika.com"
                    className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-colors"
                  >
                    Contact Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
