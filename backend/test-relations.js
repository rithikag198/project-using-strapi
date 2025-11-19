const axios = require('axios');

async function testRelations() {
  try {
    console.log('Testing different populate options...\n');
    
    // Test with different populate parameters
    const populateOptions = [
      'categories',
      'categories.name',
      'categories.id',
      '*',
      'categories,tags'
    ];
    
    for (const option of populateOptions) {
      try {
        console.log(`Testing populate=${option}...`);
        const response = await axios.get(`http://localhost:1337/api/blog-posts?populate=${option}`);
        const post = response.data.data[0];
        
        if (post.categories) {
          console.log(`✅ Success! Categories found: ${post.categories.length}`);
          console.log(`   First category: ${post.categories[0]?.name || 'No name'}`);
        } else {
          console.log(`❌ No categories field`);
        }
        console.log('');
        
      } catch (error) {
        console.log(`❌ Error with populate=${option}: ${error.response?.data?.error?.message || error.message}`);
        console.log('');
      }
    }
    
    // Try to update a post with categories
    console.log('Testing post update with categories...');
    try {
      const updateData = {
        data: {
          categories: [2, 4] // Technology and Web Development
        }
      };
      
      const updateResponse = await axios.put(
        'http://localhost:1337/api/blog-posts/2',
        updateData
      );
      
      console.log('✅ Post updated successfully!');
      console.log('Response:', JSON.stringify(updateResponse.data, null, 2));
      
    } catch (error) {
      console.log('❌ Update failed:', error.response?.data?.error?.message || error.message);
    }
    
  } catch (error) {
    console.error('Error:', error.message);
  }
}

testRelations();
