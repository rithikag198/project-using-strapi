'use client';

import Link from "next/link";

interface PostCardProps {
  post: {
    id: number;
    title: string;
    slug: string;
    description?: string;
    content?: string;
    author?: {
      id: number;
      name: string;
      email: string;
    };
    publishedAt?: string;
    category?: {
      id: number;
      name: string;
      slug: string;
    };
    tags?: {
      id: number;
      name: string;
      slug: string;
    }[];
    image?: any;
  };
}

export default function PostCard({ post }: PostCardProps) {
  const category = post.category;
  const tags = post.tags;

  // Generate placeholder image URL based on post title
  const getPlaceholderImage = (title: string) => {
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    return `https://via.placeholder.com/1200x600/6366f1/ffffff?text=` + encodeURIComponent(title);
  };

  const finalImageUrl = getPlaceholderImage(post.title);

  return (
    <div className="card-hover bg-white rounded-xl overflow-hidden shadow-lg">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={finalImageUrl}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          onError={(e) => {
            // Fallback to a default placeholder if image fails to load
            const target = e.target as HTMLImageElement;
            target.src = 'https://via.placeholder.com/1200x600/6366f1/ffffff?text=' + encodeURIComponent(post.title);
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          
          {/* Category Badge */}
          {category && (
            <div className="absolute top-4 left-4">
              <span className="bg-white/90 backdrop-blur-sm text-purple-600 px-3 py-1 rounded-full text-sm font-semibold">
                {category.name}
              </span>
            </div>
          )}
        </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
          <Link href={`/blog/${post.slug}`} className="hover:text-purple-600 transition-colors">
            {post.title}
          </Link>
        </h3>

        {/* Description */}
        {post.description && (
          <p className="text-gray-600 mb-4 line-clamp-3">{post.description}</p>
        )}

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag.id}
                className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs font-medium"
              >
                #{tag.name}
              </span>
            ))}
          </div>
        )}

        {/* Meta */}
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
            <span>{post.author?.name}</span>
          </div>
          {post.publishedAt && (
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
