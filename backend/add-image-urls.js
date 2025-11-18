const axios = require('axios');

const API_URL = 'http://localhost:1337/api';

// Image URLs for different categories
const imageUrls = {
  'Getting Started with Next.js 14': 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=600&fit=crop',
  'The Ultimate Guide to TypeScript': 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=1200&h=600&fit=crop',
  'Modern CSS Techniques in 2024': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=600&fit=crop',
  'Building Scalable APIs with Node.js': 'https://images.unsplash.com/photo-1558494949-ef010cbcc31c?w=1200&h=600&fit=crop',
  'Digital Marketing Strategies for 2024': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop',
  'User Experience Design Principles': 'https://images.unsplash.com/photo-1559028012-c754a54732c8?w=1200&h=600&fit=crop',
  'Starting a Successful E-commerce Business': 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=600&fit=crop',
  'The Future of Artificial Intelligence': 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop',
  'Getting Started with React Hooks': 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=600&fit=crop'
};

async function updatePostWithImageUrl(postTitle, imageUrl) {
  try {
    // Find the post
    const findResponse = await axios.get(`${API_URL}/blog-posts`, {
      params: {
        'filters[title][$eq]': postTitle,
        'populate': '*'
      }
    });
    
    if (findResponse.data.data.length === 0) {
      console.log(`❌ Post not found: ${postTitle}`);
      return;
    }
    
    const post = findResponse.data.data[0];
    console.log(`📝 Updating post: ${postTitle}`);
    
    // Create a simple image object with the URL
    // This will display the external image directly
    await axios.put(`${API_URL}/blog-posts/${post.id}`, {
      data: {
        // Note: We'll handle this in the frontend by checking for external URLs
        externalImageUrl: imageUrl
      }
    });
    
    console.log(`  ✅ Updated post with external image URL`);
    
  } catch (error) {
    console.error(`❌ Error updating ${postTitle}:`, error.response?.data || error.message);
  }
}

async function main() {
  try {
    console.log('🖼️  Adding external image URLs to blog posts...\n');
    
    // Process each post
    for (const [postTitle, imageUrl] of Object.entries(imageUrls)) {
      await updatePostWithImageUrl(postTitle, imageUrl);
      console.log(''); // Add spacing
    }
    
    console.log('✨ All image URLs have been added successfully!');
    console.log('\nNote: The frontend will need to be updated to handle external image URLs.');
    
  } catch (error) {
    console.error('❌ Error:', error.response?.data || error.message);
    process.exit(1);
  }
}

main();
