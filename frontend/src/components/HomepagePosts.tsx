import { getBlogPosts } from '@/lib/api';
import PostCard from './PostCard';

export default async function HomepagePosts() {
  const posts = await getBlogPosts();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.slice(0, 6).map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
