const axios = require('axios');

async function assignCategoryToPosts() {
  console.log('🔗 ASSIGNING CATEGORIES TO POSTS...\n');
  
  try {
    // Get all posts
    const postsResponse = await axios.get('http://localhost:1337/api/blog-posts');
    const posts = postsResponse.data.data;
    
    // Get all categories
    const categoriesResponse = await axios.get('http://localhost:1337/api/categories');
    const categories = categoriesResponse.data.data;
    
    console.log(`Found ${posts.length} posts and ${categories.length} categories\n`);
    
    // Create mapping of category names to IDs
    const categoryMap = {};
    categories.forEach(cat => {
      categoryMap[cat.name.toLowerCase()] = cat.id;
    });
    
    console.log('Category IDs:');
    Object.entries(categoryMap).forEach(([name, id]) => {
      console.log(`   ${name}: ${id}`);
    });
    
    // Assign categories to posts based on content
    const postCategoryAssignments = [
      { title: "Getting Started with React Hooks", category: "technology" },
      { title: "Test Post 2", category: "technology" },
      { title: "Modern CSS Techniques Every Developer Should Know", category: "web development" },
      { title: "Building Scalable Next.js Applications", category: "web development" },
      { title: "The Psychology of Great User Interfaces", category: "design" },
      { title: "TypeScript Best Practices for React Developers", category: "technology" },
      { title: "Mastering Async JavaScript: Promises and Beyond", category: "technology" },
      { title: "State Management in 2024: Choosing the Right Tool", category: "technology" }
    ];
    
    for (const assignment of postCategoryAssignments) {
      const post = posts.find(p => p.title === assignment.title);
      if (!post) {
        console.log(`❌ Post not found: ${assignment.title}`);
        continue;
      }
      
      const categoryId = categoryMap[assignment.category.toLowerCase()];
      if (!categoryId) {
        console.log(`⚠️  Category not found: ${assignment.category}`);
        continue;
      }
      
      try {
        const updateData = {
          data: {
            category: categoryId
          }
        };
        
        const updateResponse = await axios.put(
          `http://localhost:1337/api/blog-posts/${post.id}`,
          updateData
        );
        
        console.log(`✅ Updated: "${post.title}"`);
        console.log(`   Category: ${assignment.category} (ID: ${categoryId})`);
        console.log('');
        
      } catch (error) {
        console.log(`❌ Failed to update: ${assignment.title}`);
        console.log(`   Error: ${error.response?.data?.error?.message || error.message}`);
      }
    }
    
    console.log('🎉 Category assignment complete!');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

assignCategoryToPosts();
