const axios = require('axios');

async function debugAPI() {
  try {
    console.log('Testing basic API calls...\n');
    
    // Test posts
    const postsResponse = await axios.get('http://localhost:1337/api/blog-posts');
    console.log('Posts count:', postsResponse.data.data.length);
    console.log('First post structure:', JSON.stringify(postsResponse.data.data[0], null, 2));
    
    // Test categories
    const categoriesResponse = await axios.get('http://localhost:1337/api/categories');
    console.log('\nCategories count:', categoriesResponse.data.data.length);
    console.log('First category:', categoriesResponse.data.data[0].name);
    
  } catch (error) {
    console.error('Error:', error.message);
  }
}

debugAPI();
