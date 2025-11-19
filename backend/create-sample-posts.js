const axios = require('axios');

const posts = [
  {
    title: 'Modern CSS Techniques Every Developer Should Know',
    slug: 'modern-css-techniques',
    description: 'Explore the latest CSS features and techniques that will level up your web development skills.',
    content: '<h1>Modern CSS Techniques</h1><p>CSS has evolved significantly with new features like Grid, Flexbox, and custom properties...</p>'
  },
  {
    title: 'Building Scalable Next.js Applications',
    slug: 'scalable-nextjs-applications', 
    description: 'Learn how to build and maintain large-scale Next.js applications with best practices.',
    content: '<h1>Scalable Next.js Applications</h1><p>Building scalable applications requires careful planning and architecture...</p>'
  },
  {
    title: 'The Psychology of Great User Interfaces',
    slug: 'psychology-great-ui',
    description: 'Understanding the psychological principles behind effective user interface design.',
    content: '<h1>Psychology of UI Design</h1><p>Great user interfaces are built on solid psychological principles...</p>'
  }
];

async function createPosts() {
  for (const post of posts) {
    try {
      const postData = {
        data: {
          ...post,
          publishedAt: new Date().toISOString()
        }
      };
      
      const response = await axios.post('http://localhost:1337/api/blog-posts', postData);
      console.log(`✅ Created: ${post.title}`);
    } catch (error) {
      console.error(`❌ Failed to create: ${post.title}`, error.response?.data || error.message);
    }
  }
}

createPosts();
