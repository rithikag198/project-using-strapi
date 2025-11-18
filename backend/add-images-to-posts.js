const axios = require('axios');
const fs = require('fs');
const path = require('path');
const FormData = require('form-data');

const API_URL = 'http://localhost:1337/api';
const API_TOKEN = process.env.STRAPI_API_TOKEN || null;

// Configure axios with auth if token is available
const api = axios.create({
  baseURL: API_URL,
  headers: API_TOKEN ? {
    'Authorization': `Bearer ${API_TOKEN}`
  } : {}
});

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

// Helper function to download image
async function downloadImage(url, filename) {
  const response = await axios.get(url, { responseType: 'arraybuffer' });
  const uploadsDir = path.join(__dirname, 'public', 'uploads');
  
  // Ensure uploads directory exists
  if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
  }
  
  const filepath = path.join(uploadsDir, filename);
  fs.writeFileSync(filepath, response.data);
  return filepath;
}

// Helper function to upload image to Strapi
async function uploadImage(imagePath, filename) {
  const formData = new FormData();
  formData.append('files', fs.createReadStream(imagePath), filename);
  
  const response = await axios.post(`${API_URL}/upload`, formData, {
    headers: {
      ...formData.getHeaders(),
      ...(API_TOKEN ? { 'Authorization': `Bearer ${API_TOKEN}` } : {})
    }
  });
  
  return response.data[0];
}

async function addImageToPost(postTitle, imageUrl) {
  try {
    // Find the post
    const findResponse = await api.get('/blog-posts', {
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
    console.log(`📝 Processing post: ${postTitle}`);
    
    // Download image
    const filename = `${postTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.jpg`;
    const imagePath = await downloadImage(imageUrl, filename);
    console.log(`  ✅ Downloaded image: ${filename}`);
    
    // Upload to Strapi
    const uploadResponse = await uploadImage(imagePath, filename);
    console.log(`  ✅ Uploaded to Strapi: ${uploadResponse.url}`);
    
    // Update post with image
    await api.put(`/blog-posts/${post.id}`, {
      data: {
        image: uploadResponse.id
      }
    });
    
    console.log(`  ✅ Updated post with image`);
    
    // Clean up local file
    fs.unlinkSync(imagePath);
    
  } catch (error) {
    console.error(`❌ Error processing ${postTitle}:`, error.response?.data || error.message);
  }
}

async function main() {
  try {
    console.log('🖼️  Starting to add images to blog posts...\n');
    
    // Process each post
    for (const [postTitle, imageUrl] of Object.entries(imageUrls)) {
      await addImageToPost(postTitle, imageUrl);
      console.log(''); // Add spacing
    }
    
    console.log('✨ All images have been added successfully!');
    
  } catch (error) {
    console.error('❌ Error:', error.response?.data || error.message);
    process.exit(1);
  }
}

main();
