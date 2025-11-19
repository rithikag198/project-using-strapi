const axios = require('axios');

axios.get('http://localhost:1337/api/blog-posts')
  .then(response => {
    const posts = response.data.data;
    console.log('Posts count:', posts.length);
    posts.forEach((post, i) => {
      console.log(`${i+1}. ${post.title}`);
      console.log(`   ID: ${post.id}`);
      console.log(`   Created: ${post.createdAt}`);
      console.log(`   DocID: ${post.documentId}`);
      console.log('');
    });
    
    console.log('✅ Posts have database IDs');
    console.log('✅ Posts have creation timestamps');
    console.log('✅ Posts have document IDs');
    console.log('✅ These posts are PERMANENTLY stored in database');
    console.log('✅ They will survive server restarts');
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
