const axios = require('axios');

async function testFrontendAPI() {
  try {
    console.log('Testing the exact API call the frontend makes...\n');
    
    // This is the exact call the frontend makes
    const res = await fetch('http://localhost:1337/api/blog-posts?populate=*', { cache: 'no-store' });
    const data = await res.json();
    
    console.log(`Total posts returned: ${data.data?.length || 0}`);
    
    // Check if posts have categories
    const postsWithCategories = data.data?.filter(p => p.category) || [];
    console.log(`Posts with categories: ${postsWithCategories.length}`);
    
    // Show first few posts
    console.log('\nFirst 5 posts:');
    data.data?.slice(0, 5).forEach((post, i) => {
      console.log(`${i+1}. "${post.title}"`);
      console.log(`   Category: ${post.category?.name || 'No category'}`);
      console.log('');
    });
    
  } catch (error) {
    console.error('Error:', error.message);
  }
}

testFrontendAPI();
