const API_URL = 'http://localhost:1337';

async function testAPI() {
  try {
    console.log('Testing backend API...');
    
    // Test basic connection
    const response = await fetch(`${API_URL}/api/blog-posts?populate=*`);
    console.log('Response status:', response.status);
    
    if (response.ok) {
      const data = await response.json();
      console.log('✅ API working. Posts count:', data.data?.length || 0);
    } else {
      console.log('❌ API error:', response.statusText);
    }
  } catch (error) {
    console.error('❌ Connection error:', error.message);
  }
}

testAPI();
