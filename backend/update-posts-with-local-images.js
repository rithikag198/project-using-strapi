const axios = require('axios');
const fs = require('fs');
const path = require('path');

const API_URL = 'http://localhost:1337/api';

// Image mapping for posts
const postImageMapping = {
  'Getting Started with Next.js 14': 'getting-started-with-next-js-14.png',
  'The Ultimate Guide to TypeScript': 'the-ultimate-guide-to-typescript.png',
  'Modern CSS Techniques in 2024': 'modern-css-techniques-in-2024.png',
  'Building Scalable APIs with Node.js': 'building-scalable-apis-with-node-js.png',
  'Digital Marketing Strategies for 2024': 'digital-marketing-strategies-for-2024.png',
  'User Experience Design Principles': 'user-experience-design-principles.png',
  'Starting a Successful E-commerce Business': 'starting-a-successful-e-commerce-business.png',
  'The Future of Artificial Intelligence': 'the-future-of-artificial-intelligence.png',
  'Getting Started with React Hooks': 'getting-started-with-react-hooks.png'
};

async function updatePostWithLocalImage(postTitle, imageFilename) {
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
    
    // Check if the image file exists
    const imagePath = path.join(__dirname, 'public', 'uploads', imageFilename);
    if (!fs.existsSync(imagePath)) {
      console.log(`  ❌ Image file not found: ${imageFilename}`);
      return;
    }
    
    console.log(`  ✅ Found image file: ${imageFilename}`);
    
    // Since we can't upload via API due to permissions, let's create a simple approach
    // We'll update the post with a custom field that references the image filename
    // and update the frontend to handle this
    
    await axios.put(`${API_URL}/blog-posts/${post.id}`, {
      data: {
        // Add a custom field for the image filename
        imageFilename: imageFilename
      }
    });
    
    console.log(`  ✅ Updated post with image filename reference`);
    
  } catch (error) {
    console.error(`❌ Error updating ${postTitle}:`, error.response?.data || error.message);
  }
}

async function main() {
  try {
    console.log('🖼️  Updating blog posts with local image references...\n');
    
    // Process each post
    for (const [postTitle, imageFilename] of Object.entries(postImageMapping)) {
      await updatePostWithLocalImage(postTitle, imageFilename);
      console.log(''); // Add spacing
    }
    
    console.log('✨ All posts have been updated with image references!');
    console.log('\nNote: The frontend will need to be updated to handle the imageFilename field.');
    
  } catch (error) {
    console.error('❌ Error:', error.response?.data || error.message);
    process.exit(1);
  }
}

main();
