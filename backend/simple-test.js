const axios = require('axios');

axios.get('http://localhost:1337/api/blog-posts?populate=category')
  .then(response => {
    const posts = response.data.data.slice(0, 3);
    console.log('Posts with categories:');
    posts.forEach(post => {
      console.log(`"${post.title}" - ${post.category?.name || 'No category'}`);
    });
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
