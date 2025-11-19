const axios = require('axios');

async function verifyCategories() {
  console.log('🔍 VERIFYING POSTS WITH CATEGORIES...\n');
  
  try {
    // Get all posts with categories populated
    const postsResponse = await axios.get('http://localhost:1337/api/blog-posts?populate=category');
    const posts = postsResponse.data.data;
    
    console.log(`Total posts: ${posts.length}\n`);
    
    // Count posts per category
    const categoryCounts = {};
    
    posts.forEach(post => {
      console.log(`📝 "${post.title}"`);
      if (post.category) {
        const categoryName = post.category.name;
        console.log(`   📁 Category: ${categoryName} (ID: ${post.category.id})`);
        
        categoryCounts[categoryName] = (categoryCounts[categoryName] || 0) + 1;
      } else {
        console.log(`   ⚠️  No category assigned`);
      }
      console.log('');
    });
    
    console.log('📊 Posts per category:');
    Object.entries(categoryCounts).forEach(([category, count]) => {
      console.log(`   📁 ${category}: ${count} posts`);
    });
    
    // Test category filtering
    console.log('\n🔍 Testing category filters:');
    const categoriesResponse = await axios.get('http://localhost:1337/api/categories');
    const categories = categoriesResponse.data.data;
    
    for (const category of categories) {
      try {
        const categoryPostsResponse = await axios.get(`http://localhost:1337/api/blog-posts?filters[category][name][$eq]=${category.name}&populate=category`);
        const categoryPosts = categoryPostsResponse.data.data;
        
        console.log(`   📁 ${category.name}: ${categoryPosts.length} posts`);
        categoryPosts.forEach(post => {
          console.log(`      📝 ${post.title}`);
        });
        console.log('');
      } catch (error) {
        console.log(`   ❌ Error checking ${category.name}: ${error.message}`);
      }
    }
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

verifyCategories();
