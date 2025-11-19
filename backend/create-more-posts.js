const axios = require('axios');

const morePosts = [
  {
    title: 'Modern CSS Techniques Every Developer Should Know',
    slug: 'modern-css-techniques',
    description: 'Explore the latest CSS features and techniques that will level up your web development skills.',
    content: '<h1>Modern CSS Techniques</h1><p>CSS has evolved significantly with new features like Grid, Flexbox, and custom properties. In this article, we explore cutting-edge CSS techniques that every modern developer should master.</p><p>From container queries to cascade layers, CSS is becoming more powerful and developer-friendly than ever before.</p>'
  },
  {
    title: 'Building Scalable Next.js Applications',
    slug: 'scalable-nextjs-applications',
    description: 'Learn how to build and maintain large-scale Next.js applications with best practices.',
    content: '<h1>Scalable Next.js Applications</h1><p>Building scalable applications requires careful planning and architecture. This guide covers everything from project structure to performance optimization in Next.js.</p><p>Discover patterns and practices that will help your Next.js applications grow gracefully.</p>'
  },
  {
    title: 'The Psychology of Great User Interfaces',
    slug: 'psychology-great-ui',
    description: 'Understanding the psychological principles behind effective user interface design.',
    content: '<h1>Psychology of UI Design</h1><p>Great user interfaces are built on solid psychological principles. Learn how cognitive biases, visual hierarchy, and user behavior patterns influence design decisions.</p><p>This deep dive into UI psychology will help you create more intuitive and effective interfaces.</p>'
  },
  {
    title: 'TypeScript Best Practices for React Developers',
    slug: 'typescript-react-best-practices',
    description: 'Essential TypeScript patterns and practices for building robust React applications.',
    content: '<h1>TypeScript + React Best Practices</h1><p>TypeScript brings type safety to React development, but using it effectively requires understanding key patterns and practices.</p><p>Learn how to properly type props, handle state, and structure your React components with TypeScript.</p>'
  },
  {
    title: 'Mastering Async JavaScript: Promises and Beyond',
    slug: 'mastering-async-javascript',
    description: 'A comprehensive guide to handling asynchronous operations in modern JavaScript.',
    content: '<h1>Async JavaScript Mastery</h1><p>From callbacks to async/await, JavaScript has evolved powerful ways to handle asynchronous operations.</p><p>This guide covers promises, async/await patterns, error handling, and advanced async concepts every JavaScript developer should know.</p>'
  },
  {
    title: 'State Management in 2024: Choosing the Right Tool',
    slug: 'state-management-2024',
    description: 'Compare and contrast different state management solutions for modern web applications.',
    content: '<h1>State Management in 2024</h1><p>The state management landscape has evolved significantly. From Redux to Zustand, Context to Signals, there are many options available.</p><p>Learn the pros and cons of each approach and choose the right tool for your next project.</p>'
  }
];

async function createMorePosts() {
  console.log(`Creating ${morePosts.length} additional posts...\n`);
  
  for (const post of morePosts) {
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
      if (error.response?.status === 400 && error.response?.data?.error?.message?.includes('already exists')) {
        console.log(`⚠️  Already exists: ${post.title}`);
      } else {
        console.error(`❌ Failed to create: ${post.title}`, error.response?.data?.error?.message || error.message);
      }
    }
  }
  
  console.log('\nChecking total posts...');
  try {
    const checkResponse = await axios.get('http://localhost:1337/api/blog-posts');
    console.log(`\n📊 Total posts now: ${checkResponse.data.data.length}`);
    checkResponse.data.data.forEach((post, index) => {
      console.log(`  ${index + 1}. ${post.title}`);
    });
  } catch (error) {
    console.error('Error checking posts:', error.message);
  }
}

createMorePosts();
