const axios = require('axios');

async function createPostsWithCategories() {
  console.log('📝 CREATING NEW POSTS WITH CATEGORIES...\n');
  
  try {
    // Get all categories
    const categoriesResponse = await axios.get('http://localhost:1337/api/categories');
    const categories = categoriesResponse.data.data;
    
    // Create mapping of category names to IDs
    const categoryMap = {};
    categories.forEach(cat => {
      categoryMap[cat.name.toLowerCase()] = cat.id;
    });
    
    console.log('Available categories:');
    Object.entries(categoryMap).forEach(([name, id]) => {
      console.log(`   ${name}: ${id}`);
    });
    console.log('');
    
    // New posts with categories
    const newPosts = [
      {
        title: "React Hooks Complete Guide",
        slug: "react-hooks-complete-guide",
        description: "A comprehensive guide to React Hooks with practical examples",
        content: "<h1>React Hooks Complete Guide</h1><p>Learn everything about React Hooks from basics to advanced patterns.</p>",
        category: categoryMap["technology"]
      },
      {
        title: "CSS Grid Layout Mastery",
        slug: "css-grid-layout-mastery",
        description: "Master CSS Grid Layout with real-world examples",
        content: "<h1>CSS Grid Layout Mastery</h1><p>Complete guide to CSS Grid with practical examples and best practices.</p>",
        category: categoryMap["web development"]
      },
      {
        title: "UI Design Principles",
        slug: "ui-design-principles",
        description: "Essential UI design principles for modern applications",
        content: "<h1>UI Design Principles</h1><p>Learn the fundamental principles of great UI design.</p>",
        category: categoryMap["design"]
      },
      {
        title: "Startup Growth Strategies",
        slug: "startup-growth-strategies",
        description: "Proven strategies for startup growth and scaling",
        content: "<h1>Startup Growth Strategies</h1><p>Discover proven strategies to grow your startup successfully.</p>",
        category: categoryMap["business"]
      },
      {
        title: "Next.js Performance Tips",
        slug: "nextjs-performance-tips",
        description: "Optimize your Next.js applications for better performance",
        content: "<h1>Next.js Performance Tips</h1><p>Learn how to optimize Next.js apps for maximum performance.</p>",
        category: categoryMap["web development"]
      },
      {
        title: "Modern JavaScript Features",
        slug: "modern-javascript-features",
        description: "Explore the latest JavaScript features and how to use them",
        content: "<h1>Modern JavaScript Features</h1><p>Discover ES6+ features that will improve your JavaScript code.</p>",
        category: categoryMap["technology"]
      },
      {
        title: "Color Theory in Design",
        slug: "color-theory-design",
        description: "Understanding color theory for better designs",
        content: "<h1>Color Theory in Design</h1><p>Learn how colors work together and create beautiful designs.</p>",
        category: categoryMap["design"]
      },
      {
        title: "Business Model Innovation",
        slug: "business-model-innovation",
        description: "How to create innovative business models",
        content: "<h1>Business Model Innovation</h1><p>Learn how to design and implement innovative business models.</p>",
        category: categoryMap["business"]
      }
    ];
    
    console.log(`Creating ${newPosts.length} new posts with categories...\n`);
    
    for (const postData of newPosts) {
      try {
        const response = await axios.post('http://localhost:1337/api/blog-posts', {
          data: {
            ...postData,
            publishedAt: new Date().toISOString()
          }
        });
        
        const createdPost = response.data.data;
        const categoryName = Object.entries(categoryMap).find(([name, id]) => id === postData.category)?.[0];
        
        console.log(`✅ Created: "${postData.title}"`);
        console.log(`   📁 Category: ${categoryName} (ID: ${postData.category})`);
        console.log(`   🆔 Post ID: ${createdPost.id}`);
        console.log('');
        
      } catch (error) {
        if (error.response?.status === 400 && error.response?.data?.error?.message?.includes('already exists')) {
          console.log(`⚠️  Already exists: "${postData.title}"`);
        } else {
          console.log(`❌ Failed to create: "${postData.title}"`);
          console.log(`   Error: ${error.response?.data?.error?.message || error.message}`);
        }
        console.log('');
      }
    }
    
    console.log('🎉 New posts with categories created successfully!');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

createPostsWithCategories();
