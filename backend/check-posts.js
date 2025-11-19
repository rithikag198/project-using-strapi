const axios = require('axios');

async function checkPosts() {
  try {
    const response = await axios.get('http://localhost:1337/api/blog-posts');
    console.log('Total posts:', response.data.data.length);
    response.data.data.forEach((post, index) => {
      console.log(`${index + 1}. ${post.title}`);
    });
  } catch (error) {
    console.error('Error:', error.message);
  }
}

checkPosts();
