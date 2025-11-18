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
  'The Future of Artificial Intelligence': 'the-future-of-artificial-intelligence.png'
};

async function createImageRecord(imageFilename) {
  try {
    // Get file stats
    const imagePath = path.join(__dirname, 'public', 'uploads', imageFilename);
    const stats = fs.statSync(imagePath);
    
    // Create image record in the database
    const imageData = {
      name: imageFilename,
      alternativeText: null,
      caption: null,
      width: 1200,
      height: 600,
      formats: {},
      hash: imageFilename.replace(/\.[^/.]+$/, ""),
      ext: path.extname(imageFilename),
      mime: `image/${path.extname(imageFilename).slice(1)}`,
      size: Math.round(stats.size / 1024) / 100, // Convert to KB
      url: `/uploads/${imageFilename}`,
      provider: "local",
      provider_metadata: null
    };
    
    // Try to create the image record directly
    try {
      const response = await axios.post(`${API_URL}/upload/files`, imageData);
      console.log(`  ✅ Created image record for: ${imageFilename}`);
      return response.data;
    } catch (error) {
      console.log(`  ⚠️  Could not create image record, will use direct URL approach`);
      return null;
    }
    
  } catch (error) {
    console.error(`  ❌ Error creating image record for ${imageFilename}:`, error.message);
    return null;
  }
}

async function updatePostWithImage(postTitle, imageFilename) {
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
    
    // Create image record
    const imageRecord = await createImageRecord(imageFilename);
    
    if (imageRecord) {
      // Update post with the image record
      await axios.put(`${API_URL}/blog-posts/${post.id}`, {
        data: {
          image: imageRecord.id
        }
      });
      console.log(`  ✅ Updated post with image record`);
    } else {
      // Fallback: Add a custom field with the image URL
      await axios.put(`${API_URL}/blog-posts/${post.id}`, {
        data: {
          externalImageUrl: `http://localhost:1337/uploads/${imageFilename}`
        }
      });
      console.log(`  ✅ Updated post with external image URL`);
    }
    
  } catch (error) {
    console.error(`❌ Error updating ${postTitle}:`, error.response?.data || error.message);
  }
}

async function main() {
  try {
    console.log('🖼️  Adding images to blog posts...\n');
    
    // Process each post
    for (const [postTitle, imageFilename] of Object.entries(postImageMapping)) {
      await updatePostWithImage(postTitle, imageFilename);
      console.log(''); // Add spacing
    }
    
    console.log('✨ All images have been added to posts!');
    
  } catch (error) {
    console.error('❌ Error:', error.response?.data || error.message);
    process.exit(1);
  }
}

main();
