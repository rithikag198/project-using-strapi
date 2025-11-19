const axios = require('axios');

async function testPopulate() {
  try {
    console.log('Testing different populate options...\n');
    
    // Test populate=*
    console.log('1. Testing populate=*:');
    const res1 = await axios.get('http://localhost:1337/api/blog-posts?populate=*');
    const post1 = res1.data.data[0];
    console.log('   Post 1 fields:', Object.keys(post1));
    console.log('   Has category?', !!post1.category);
    if (post1.category) {
      console.log('   Category:', post1.category.name);
    }
    console.log('');
    
    // Test populate=category
    console.log('2. Testing populate=category:');
    const res2 = await axios.get('http://localhost:1337/api/blog-posts?populate=category');
    const post2 = res2.data.data[0];
    console.log('   Post 1 fields:', Object.keys(post2));
    console.log('   Has category?', !!post2.category);
    if (post2.category) {
      console.log('   Category:', post2.category.name);
    }
    console.log('');
    
    // Test populate=category,tags
    console.log('3. Testing populate=category,tags:');
    const res3 = await axios.get('http://localhost:1337/api/blog-posts?populate=category,tags');
    const post3 = res3.data.data[0];
    console.log('   Post 1 fields:', Object.keys(post3));
    console.log('   Has category?', !!post3.category);
    if (post3.category) {
      console.log('   Category:', post3.category.name);
    }
    console.log('');
    
    // Check posts with categories
    console.log('4. Checking posts that have categories:');
    const postsWithCategories = res3.data.data.filter(p => p.category);
    console.log(`   Found ${postsWithCategories.length} posts with categories`);
    postsWithCategories.slice(0, 3).forEach((post, i) => {
      console.log(`   ${i+1}. "${post.title}" - ${post.category?.name || 'No category'}`);
    });
    
  } catch (error) {
    console.error('Error:', error.message);
  }
}

testPopulate();
