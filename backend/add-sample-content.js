const axios = require('axios');
const fs = require('fs');
const path = require('path');

const API_URL = 'http://localhost:1337/api';
const API_TOKEN = process.env.STRAPI_API_TOKEN || null;

// Configure axios with auth if token is available
const api = axios.create({
  baseURL: API_URL,
  headers: API_TOKEN ? {
    'Authorization': `Bearer ${API_TOKEN}`
  } : {}
});

// Sample blog posts data
const samplePosts = [
  {
    title: "Getting Started with Next.js 14",
    slug: "getting-started-with-nextjs-14",
    description: "Learn how to build modern web applications with Next.js 14 and its latest features.",
    content: `
      <h1>Getting Started with Next.js 14</h1>
      <p>Next.js 14 brings exciting new features and improvements that make building web applications easier than ever. In this comprehensive guide, we'll explore everything you need to know to get started.</p>
      
      <h2>What's New in Next.js 14?</h2>
      <p>Next.js 14 introduces several groundbreaking features:</p>
      <ul>
        <li>Turbopack for faster builds</li>
        <li>Improved Server Components</li>
        <li>Enhanced App Router</li>
        <li>Better metadata handling</li>
      </ul>
      
      <h2>Setting Up Your First Project</h2>
      <p>Creating a new Next.js project is simple:</p>
      <pre><code>npx create-next-app@latest my-app
cd my-app
npm run dev</code></pre>
      
      <h2>Understanding the App Router</h2>
      <p>The new App Router in Next.js 14 provides a more intuitive way to structure your application. It uses a file-system-based routing that supports layouts, nested routes, and more.</p>
      
      <h2>Server Components vs Client Components</h2>
      <p>Next.js 14 makes it clear which components run on the server and which run on the client. Server Components are the default, providing better performance and smaller bundle sizes.</p>
      
      <h2>Best Practices</h2>
      <p>When building with Next.js 14, keep these best practices in mind:</p>
      <ol>
        <li>Use Server Components by default</li>
        <li>Optimize images with the Image component</li>
        <li>Implement proper error boundaries</li>
        <li>Use the built-in caching mechanisms</li>
      </ol>
      
      <h2>Conclusion</h2>
      <p>Next.js 14 is a powerful framework that makes building modern web applications a breeze. With its new features and improvements, you can create fast, scalable applications with ease.</p>
    `,
    author: "John Doe",
    category: "Technology",
    tags: ["Next.js", "React", "Web Development", "Tutorial"]
  },
  {
    title: "The Ultimate Guide to TypeScript",
    slug: "ultimate-guide-to-typescript",
    description: "Master TypeScript from basics to advanced concepts with this comprehensive guide.",
    content: `
      <h1>The Ultimate Guide to TypeScript</h1>
      <p>TypeScript has become the go-to language for building robust JavaScript applications. This guide will take you from the basics to advanced concepts.</p>
      
      <h2>Why TypeScript?</h2>
      <p>TypeScript offers numerous benefits over plain JavaScript:</p>
      <ul>
        <li>Static type checking</li>
        <li>Better IDE support</li>
        <li>Improved code documentation</li>
        <li>Easier refactoring</li>
      </ul>
      
      <h2>Basic Types</h2>
      <p>TypeScript provides several basic types:</p>
      <pre><code>let name: string = "John";
let age: number = 30;
let isActive: boolean = true;
let hobbies: string[] = ["reading", "coding"];</code></pre>
      
      <h2>Interfaces and Types</h2>
      <p>Define custom types with interfaces:</p>
      <pre><code>interface User {
  id: number;
  name: string;
  email: string;
  age?: number; // Optional property
}</code></pre>
      
      <h2>Advanced Concepts</h2>
      <p>Explore advanced TypeScript features like generics, decorators, and modules.</p>
      
      <h2>Conclusion</h2>
      <p>TypeScript makes your JavaScript code more maintainable and less error-prone. Start using it today!</p>
    `,
    author: "Jane Smith",
    category: "Technology",
    tags: ["TypeScript", "JavaScript", "Programming", "Tutorial"]
  },
  {
    title: "Modern CSS Techniques in 2024",
    slug: "modern-css-techniques-2024",
    description: "Explore the latest CSS features and techniques for creating stunning web designs.",
    content: `
      <h1>Modern CSS Techniques in 2024</h1>
      <p>CSS has evolved significantly over the years. Let's explore the modern techniques that are shaping web design in 2024.</p>
      
      <h2>CSS Grid and Flexbox</h2>
      <p>Modern layout systems make creating complex layouts easier than ever:</p>
      <pre><code>.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}</code></pre>
      
      <h2>CSS Custom Properties</h2>
      <p>Variables in CSS make maintaining consistent designs easier:</p>
      <pre><code>:root {
  --primary-color: #3b82f6;
  --secondary-color: #10b981;
  --text-dark: #1f2937;
}</code></pre>
      
      <h2>Container Queries</h2>
      <p>The new container queries allow components to adapt based on their container size.</p>
      
      <h2>CSS-in-JS vs Utility-First CSS</h2>
      <p>Choose between CSS-in-JS solutions like styled-components or utility-first frameworks like Tailwind CSS.</p>
      
      <h2>Conclusion</h2>
      <p>CSS continues to evolve with new features that make web design more powerful and maintainable.</p>
    `,
    author: "Emily Chen",
    category: "Design",
    tags: ["CSS", "Web Design", "Frontend", "Tutorial"]
  },
  {
    title: "Building Scalable APIs with Node.js",
    slug: "building-scalable-apis-nodejs",
    description: "Learn how to build and scale RESTful APIs using Node.js and best practices.",
    content: `
      <h1>Building Scalable APIs with Node.js</h1>
      <p>Node.js is an excellent choice for building scalable APIs. This guide covers everything you need to know.</p>
      
      <h2>Setting Up Express.js</h2>
      <p>Express.js is the most popular framework for building APIs with Node.js:</p>
      <pre><code>const express = require('express');
const app = express();

app.use(express.json());
app.use('/api', routes);</code></pre>
      
      <h2>Database Integration</h2>
      <p>Choose the right database for your needs - MongoDB for flexibility, PostgreSQL for reliability.</p>
      
      <h2>Authentication & Authorization</h2>
      <p>Implement JWT tokens for secure authentication:</p>
      <pre><code>const jwt = require('jsonwebtoken');
const token = jwt.sign({ userId }, process.env.JWT_SECRET);</code></pre>
      
      <h2>Performance Optimization</h2>
      <p>Use caching, connection pooling, and proper indexing to optimize performance.</p>
      
      <h2>Error Handling</h2>
      <p>Implement proper error handling and logging throughout your application.</p>
      
      <h2>Conclusion</h2>
      <p>With the right architecture and practices, Node.js can handle massive scale with ease.</p>
    `,
    author: "Mike Johnson",
    category: "Technology",
    tags: ["Node.js", "API", "Backend", "JavaScript"]
  },
  {
    title: "Digital Marketing Strategies for 2024",
    slug: "digital-marketing-strategies-2024",
    description: "Discover the most effective digital marketing strategies to grow your business in 2024.",
    content: `
      <h1>Digital Marketing Strategies for 2024</h1>
      <p>The digital marketing landscape is constantly evolving. Stay ahead with these proven strategies.</p>
      
      <h2>Content Marketing</h2>
      <p>Quality content remains king in 2024. Focus on creating valuable, engaging content that solves your audience's problems.</p>
      
      <h2>Social Media Marketing</h2>
      <p>Choose the right platforms for your audience and maintain consistent branding across all channels.</p>
      
      <h2>SEO Best Practices</h2>
      <p>Stay updated with Google's algorithm changes and focus on user experience, mobile-friendliness, and page speed.</p>
      
      <h2>Email Marketing</h2>
      <p>Build and nurture your email list with personalized campaigns and automation.</p>
      
      <h2>Paid Advertising</h2>
      <p>Use Google Ads, Facebook Ads, and LinkedIn Ads strategically to reach your target audience.</p>
      
      <h2>Analytics and Measurement</h2>
      <p>Track everything and use data to make informed decisions about your marketing strategy.</p>
      
      <h2>Conclusion</h2>
      <p>A successful digital marketing strategy requires a multi-channel approach and continuous optimization.</p>
    `,
    author: "Sarah Williams",
    category: "Marketing",
    tags: ["Marketing", "Digital", "Strategy", "Business"]
  },
  {
    title: "User Experience Design Principles",
    slug: "user-experience-design-principles",
    description: "Learn the fundamental principles of UX design to create user-friendly products.",
    content: `
      <h1>User Experience Design Principles</h1>
      <p>Great UX design is invisible. Users should be able to accomplish their goals without thinking about the design.</p>
      
      <h2>Understanding Your Users</h2>
      <p>The foundation of good UX is understanding your users through research, personas, and user journeys.</p>
      
      <h2>Key UX Principles</h2>
      <ul>
        <li>Clarity over cleverness</li>
        <li>Consistency across the interface</li>
        <li>Feedback for every action</li>
        <li>Error prevention and recovery</li>
        <li>Accessibility for all users</li>
      </ul>
      
      <h2>Information Architecture</h2>
      <p>Organize content logically and make navigation intuitive.</p>
      
      <h2>Interaction Design</h2>
      <p>Create smooth, predictable interactions that feel natural to users.</p>
      
      <h2>Visual Design</h2>
      <p>Use visual hierarchy, color, typography, and spacing to guide users through your interface.</p>
      
      <h2>Testing and Iteration</h2>
      <p>Test your designs with real users and iterate based on feedback.</p>
      
      <h2>Conclusion</h2>
      <p>Good UX design is a process of continuous learning and improvement focused on user needs.</p>
    `,
    author: "Alex Turner",
    category: "Design",
    tags: ["UX", "Design", "User Research", "Interface"]
  },
  {
    title: "Starting a Successful E-commerce Business",
    slug: "starting-successful-ecommerce-business",
    description: "A comprehensive guide to launching and growing your online store.",
    content: `
      <h1>Starting a Successful E-commerce Business</h1>
      <p>E-commerce offers incredible opportunities for entrepreneurs. Here's how to build a successful online store.</p>
      
      <h2>Choosing Your Niche</h2>
      <p>Find a profitable niche that aligns with your passion and has market demand.</p>
      
      <h2>Product Sourcing</h2>
      <p>Explore different sourcing options: dropshipping, wholesale, manufacturing, or print-on-demand.</p>
      
      <h2>Building Your Store</h2>
      <p>Choose the right platform: Shopify, WooCommerce, or custom solutions.</p>
      
      <h2>Payment Processing</h2>
      <p>Set up secure payment gateways and offer multiple payment options.</p>
      
      <h2>Marketing Your Store</h2>
      <p>Develop a comprehensive marketing strategy including SEO, social media, and email marketing.</p>
      
      <h2>Customer Service</h2>
      <p>Provide excellent customer service to build loyalty and generate repeat business.</p>
      
      <h2>Analytics and Optimization</h2>
      <p>Track key metrics and continuously optimize your conversion funnel.</p>
      
      <h2>Conclusion</h2>
      <p>Success in e-commerce requires planning, persistence, and a customer-first approach.</p>
    `,
    author: "David Brown",
    category: "Business",
    tags: ["E-commerce", "Business", "Entrepreneurship", "Sales"]
  },
  {
    title: "The Future of Artificial Intelligence",
    slug: "future-of-artificial-intelligence",
    description: "Exploring the latest developments and future possibilities in AI technology.",
    content: `
      <h1>The Future of Artificial Intelligence</h1>
      <p>AI is transforming every industry and aspect of our lives. Let's explore what the future holds.</p>
      
      <h2>Current State of AI</h2>
      <p>From machine learning to deep learning, AI has made tremendous progress in recent years.</p>
      
      <h2>Machine Learning Advances</h2>
      <p>Deep learning, neural networks, and transformers are pushing the boundaries of what's possible.</p>
      
      <h2>Natural Language Processing</h2>
      <p>GPT and other language models are revolutionizing how we interact with computers.</p>
      
      <h2>Computer Vision</h2>
      <p>AI can now see and understand the world with remarkable accuracy.</p>
      
      <h2>AI in Healthcare</h2>
      <p>From diagnosis to drug discovery, AI is transforming healthcare delivery.</p>
      
      <h2>Ethical Considerations</h2>
      <p>As AI becomes more powerful, we must address ethical concerns and ensure responsible development.</p>
      
      <h2>The Road Ahead</h2>
      <p>The future of AI is exciting but requires careful planning and ethical consideration.</p>
      
      <h2>Conclusion</h2>
      <p>AI will continue to transform our world, and staying informed is key to adapting to these changes.</p>
    `,
    author: "Dr. Lisa Wang",
    category: "Technology",
    tags: ["AI", "Machine Learning", "Future", "Technology"]
  }
];

// Categories to ensure exist
const categories = [
  { name: "Technology", slug: "technology", description: "Latest in technology, programming, and digital innovation" },
  { name: "Design", slug: "design", description: "UI/UX design, visual arts, and creative inspiration" },
  { name: "Business", slug: "business", description: "Business strategies, entrepreneurship, and market insights" },
  { name: "Marketing", slug: "marketing", description: "Digital marketing, branding, and growth strategies" }
];

// Tags to ensure exist
const tags = [
  "React", "Next.js", "TypeScript", "JavaScript", "Node.js", "CSS", "HTML",
  "Web Development", "Frontend", "Backend", "API", "Database", "Tutorial",
  "Design", "UX", "UI", "Interface", "User Research", "Marketing", "Digital",
  "Strategy", "Business", "E-commerce", "Sales", "AI", "Machine Learning",
  "Technology", "Future", "Programming", "JavaScript", "Entrepreneurship"
];

async function findOrCreateCategory(categoryName) {
  // Find existing category
  const findResponse = await api.get('/categories', {
    params: {
      'filters[name][$eq]': categoryName
    }
  });
  
  if (findResponse.data.data.length > 0) {
    return findResponse.data.data[0];
  }
  
  // Create new category
  const category = categories.find(c => c.name === categoryName);
  const createResponse = await api.post('/categories', {
    data: category || { name: categoryName, slug: categoryName.toLowerCase() }
  });
  
  return createResponse.data.data;
}

async function findOrCreateTag(tagName) {
  // Find existing tag
  const findResponse = await api.get('/tags', {
    params: {
      'filters[name][$eq]': tagName
    }
  });
  
  if (findResponse.data.data.length > 0) {
    return findResponse.data.data[0];
  }
  
  // Create new tag
  const createResponse = await api.post('/tags', {
    data: { name: tagName, slug: tagName.toLowerCase().replace(/\s+/g, '-') }
  });
  
  return createResponse.data.data;
}

async function createBlogPost(postData) {
  // Find or create category
  const category = await findOrCreateCategory(postData.category);
  
  // Find or create tags
  const tagIds = [];
  for (const tagName of postData.tags) {
    const tag = await findOrCreateTag(tagName);
    tagIds.push(tag.id);
  }
  
  // Create the blog post
  const postResponse = await api.post('/blog-posts', {
    data: {
      title: postData.title,
      slug: postData.slug,
      description: postData.description,
      content: postData.content,
      author: postData.author,
      category: category.id,
      tags: tagIds,
      publishedAt: new Date().toISOString()
    }
  });
  
  console.log(`✅ Created post: ${postData.title}`);
  return postResponse.data.data;
}

async function main() {
  try {
    console.log('🚀 Starting to add sample content...\n');
    
    // Create all sample posts
    for (const post of samplePosts) {
      try {
        await createBlogPost(post);
      } catch (error) {
        console.error(`❌ Failed to create post "${post.title}":`, error.response?.data || error.message);
      }
    }
    
    console.log('\n✨ Sample content creation completed!');
    console.log('\n📊 Summary:');
    console.log(`- Created ${samplePosts.length} blog posts`);
    console.log(`- Organized posts into ${categories.length} categories`);
    console.log(`- Used ${tags.length} different tags`);
    
  } catch (error) {
    console.error('❌ Error:', error.response?.data || error.message);
    process.exit(1);
  }
}

main();
