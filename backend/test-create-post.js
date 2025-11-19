const axios = require('axios');
const strapiUrl = 'http://localhost:1337';

async function testAdminAccess() {
  try {
    console.log('Testing admin access...');
    
    // Test if we can access the admin panel
    const adminResponse = await axios.get(`${strapiUrl}/admin`);
    console.log('Admin panel accessible:', adminResponse.status === 200);
    
    // Try to get available content types
    const apiResponse = await axios.get(`${strapiUrl}/api/content-type-builder/content-types`, {
      headers: {
        'Authorization': 'Bearer your-token-here'
      }
    }).catch(() => ({ status: 'auth_required' }));
    
    console.log('API auth required:', apiResponse.status === 'auth_required');
    
  } catch (error) {
    console.error('Error:', error.message);
  }
}

async function createSamplePost() {
  try {
    console.log('Creating sample post...');
    
    // This will work if you have proper admin session cookies
    const postData = {
      data: {
        title: 'Getting Started with React Hooks',
        slug: 'getting-started-with-react-hooks',
        description: 'Learn the fundamentals of React Hooks and how to use them in your applications.',
        content: '<h1>React Hooks: A Complete Guide</h1><p>This is a comprehensive guide to React Hooks...</p>',
        publishedAt: new Date().toISOString()
      }
    };
    
    const response = await axios.post(`${strapiUrl}/api/blog-posts`, postData, {
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true // Include admin session cookies
    });
    
    console.log('Post created successfully:', response.data);
  } catch (error) {
    console.error('Failed to create post:', error.response?.data || error.message);
  }
}

// Run tests
testAdminAccess();
createSamplePost();
