const axios = require('axios');

async function checkAll() {
  try {
    const postsResponse = await axios.get('http://localhost:1337/api/blog-posts');
    const categoriesResponse = await axios.get('http://localhost:1337/api/categories');
    const tagsResponse = await axios.get('http://localhost:1337/api/tags');
    
    console.log('=== SUMMARY ===');
    console.log(`Posts: ${postsResponse.data.data.length}`);
    postsResponse.data.data.forEach((post, i) => console.log(`  ${i+1}. ${post.title}`));
    
    console.log(`\nCategories: ${categoriesResponse.data.data.length}`);
    categoriesResponse.data.data.forEach((cat, i) => console.log(`  ${i+1}. ${cat.name}`));
    
    console.log(`\nTags: ${tagsResponse.data.data.length}`);
    tagsResponse.data.data.forEach((tag, i) => console.log(`  ${i+1}. ${tag.name}`));
    
  } catch (error) {
    console.error('Error:', error.message);
  }
}

checkAll();
