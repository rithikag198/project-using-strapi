const axios = require('axios');

axios.get('http://localhost:1337/api/blog-posts?populate=category')
  .then(response => {
    const posts = response.data.data;
    const postsWithCategories = posts.filter(p => p.category);
    
    console.log(`Total posts: ${posts.length}`);
    console.log(`Posts with categories: ${postsWithCategories.length}\n`);
    
    console.log('Posts WITH categories:');
    postsWithCategories.forEach(post => {
      console.log(`✅ "${post.title}" - ${post.category?.name || 'No category'}`);
    });
    
    console.log('\nPosts WITHOUT categories:');
    const postsWithoutCategories = posts.filter(p => !p.category);
    postsWithoutCategories.forEach(post => {
      console.log(`❌ "${post.title}" - No category`);
    });
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
