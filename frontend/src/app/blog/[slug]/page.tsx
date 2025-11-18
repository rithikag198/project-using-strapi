import { notFound } from 'next/navigation';
import { getBlogPostBySlug } from '@/lib/api';
import Navbar from '@/components/Navbar-client';
import Footer from '@/components/Footer';
import Image from 'next/image';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  
  if (!post) {
    notFound();
  }
  
  const { title, content, published_at, author, image, category, tags } = post;
  
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-8">
          <div className="text-center mb-8">
            {category && (
              <div className="flex items-center gap-2">
                <span className="text-gray-500">Category:</span>
                <a href={`/category/${category.slug}`} className="text-blue-600 hover:text-blue-800">
                  {category.name}
                </a>
              </div>
            )}
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {title}
            </h1>
            
            <div className="flex items-center justify-center text-gray-500 text-sm">
              {author && <span>By {author}</span>}
              {author && published_at && <span className="mx-2">•</span>}
              {published_at && <time>{formatDate(published_at)}</time>}
            </div>
          </div>
          
          {/* Image */}
          <div className="mb-8">
            <img
              src={image && image.length > 0 
                ? `http://localhost:1337${image[0].url}`
                : `http://localhost:1337/uploads/${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.png`
              }
              alt={title}
              className="w-full h-auto rounded-lg"
              onError={(e) => {
                // Fallback to a default placeholder if image fails to load
                const target = e.target as HTMLImageElement;
                target.src = 'https://via.placeholder.com/1200x600/6366f1/ffffff?text=' + encodeURIComponent(title);
              }}
            />
          </div>
        </header>
        
        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: content || '' }}
        />
        
        {tags && tags.length > 0 && (
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2 mt-4">
              {tags.map((tag) => (
                <span
                  key={tag.id}
                  className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
                >
                  #{tag.name}
                </span>
              ))}
            </div>
          </div>
        )}
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <a
            href="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to all posts
          </a>
        </div>
      </article>
      
      <Footer />
    </div>
  );
}
