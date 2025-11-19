const axios = require('axios');

async function checkCategoriesAndPosts() {
  console.log('🔍 CHECKING CATEGORIES AND POSTS...\n');
  
  try {
    // Check categories
    const categoriesResponse = await axios.get('http://localhost:1337/api/categories');
    const categories = categoriesResponse.data.data;
    
    console.log(`📁 Found ${categories.length} categories:`);
    categories.forEach((cat, i) => {
      console.log(`   ${i+1}. ${cat.name} (ID: ${cat.id})`);
    });
    
    // Check posts with categories
    const postsResponse = await axios.get('http://localhost:1337/api/blog-posts?populate=categories');
    const posts = postsResponse.data.data;
    
    console.log(`\n📝 Posts with categories:`);
    posts.forEach((post, i) => {
      console.log(`   ${i+1}. "${post.title}"`);
      if (post.categories && post.categories.length > 0) {
        post.categories.forEach(cat => {
          console.log(`      📁 Category: ${cat.name}`);
        });
      } else {
        console.log(`      ⚠️  No categories assigned`);
      }
    });
    
    // Check each category's posts
    console.log(`\n🔍 Checking posts per category:`);
    for (const category of categories) {
      try {
        const categoryPostsResponse = await axios.get(`http://localhost:1337/api/blog-posts?filters[categories][name][$eq]=${category.name}&populate=categories`);
        const categoryPosts = categoryPostsResponse.data.data;
        console.log(`   📁 ${category.name}: ${categoryPosts.length} posts`);
        categoryPosts.forEach(post => {
          console.log(`      📝 ${post.title}`);
        });
      } catch (error) {
        console.log(`   ❌ Error checking ${category.name}: ${error.message}`);
      }
    }
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

checkCategoriesAndPosts();
