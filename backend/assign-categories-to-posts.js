const axios = require('axios');

async function assignCategoriesToPosts() {
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
      { title: "Getting Started with React Hooks", categories: ["technology", "web development"] },
      { title: "Test Post 2", categories: ["technology"] },
      { title: "Modern CSS Techniques Every Developer Should Know", categories: ["web development", "design"] },
      { title: "Building Scalable Next.js Applications", categories: ["web development", "technology"] },
      { title: "The Psychology of Great User Interfaces", categories: ["design"] },
      { title: "TypeScript Best Practices for React Developers", categories: ["technology", "web development"] },
      { title: "Mastering Async JavaScript: Promises and Beyond", categories: ["technology", "web development"] },
      { title: "State Management in 2024: Choosing the Right Tool", categories: ["technology", "web development"] }
    ];
    
    for (const assignment of postCategoryAssignments) {
      const post = posts.find(p => p.title === assignment.title);
      if (!post) {
        console.log(`❌ Post not found: ${assignment.title}`);
        continue;
      }
      
      // Convert category names to IDs
      const categoryIds = assignment.categories
        .map(catName => categoryMap[catName.toLowerCase()])
        .filter(id => id !== undefined);
      
      if (categoryIds.length === 0) {
        console.log(`⚠️  No valid categories found for: ${assignment.title}`);
        continue;
      }
      
      try {
        const updateData = {
          data: {
            categories: categoryIds
          }
        };
        
        const updateResponse = await axios.put(
          `http://localhost:1337/api/blog-posts/${post.id}`,
          updateData
        );
        
        console.log(`✅ Updated: "${post.title}"`);
        console.log(`   Categories: ${assignment.categories.join(', ')}`);
        console.log(`   IDs: ${categoryIds.join(', ')}`);
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

assignCategoriesToPosts();
