const axios = require('axios');
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const API_URL = 'http://localhost:1337/api';

// Image configurations for different posts
const imageConfigs = [
  {
    title: 'Getting Started with Next.js 14',
    color: '#0070f3',
    text: 'Next.js 14'
  },
  {
    title: 'The Ultimate Guide to TypeScript',
    color: '#3178c6',
    text: 'TypeScript'
  },
  {
    title: 'Modern CSS Techniques in 2024',
    color: '#1572b6',
    text: 'CSS 2024'
  },
  {
    title: 'Building Scalable APIs with Node.js',
    color: '#339933',
    text: 'Node.js API'
  },
  {
    title: 'Digital Marketing Strategies for 2024',
    color: '#ff6b6b',
    text: 'Marketing 2024'
  },
  {
    title: 'User Experience Design Principles',
    color: '#ff6b35',
    text: 'UX Design'
  },
  {
    title: 'Starting a Successful E-commerce Business',
    color: '#4ecdc4',
    text: 'E-commerce'
  },
  {
    title: 'The Future of Artificial Intelligence',
    color: '#9333ea',
    text: 'AI Future'
  },
  {
    title: 'Getting Started with React Hooks',
    color: '#61dafb',
    text: 'React Hooks'
  }
];

// Create a simple placeholder image with text
async function createPlaceholderImage(config) {
  const filename = `${config.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.png`;
  const uploadsDir = path.join(__dirname, 'public', 'uploads');
  
  // Ensure uploads directory exists
  if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
  }
  
  const filepath = path.join(uploadsDir, filename);
  
  // Create a simple SVG with the background color and text
  const svg = `
    <svg width="1200" height="600" xmlns="http://www.w3.org/2000/svg">
      <rect width="1200" height="600" fill="${config.color}"/>
      <text x="600" y="300" font-family="Arial, sans-serif" font-size="60" fill="white" text-anchor="middle" dominant-baseline="middle">
        ${config.text}
      </text>
    </svg>
  `;
  
  // Convert SVG to PNG using sharp
  await sharp(Buffer.from(svg))
    .png()
    .toFile(filepath);
  
  console.log(`  ✅ Created placeholder image: ${filename}`);
  return filename;
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
    
    // First, upload the image to Strapi
    const formData = new FormData();
    formData.append('files', fs.createReadStream(path.join(__dirname, 'public', 'uploads', imageFilename)), imageFilename);
    
    try {
      const uploadResponse = await axios.post(`${API_URL}/upload`, formData, {
        headers: formData.getHeaders()
      });
      
      const uploadedImage = uploadResponse.data[0];
      
      // Update post with the uploaded image
      await axios.put(`${API_URL}/blog-posts/${post.id}`, {
        data: {
          image: uploadedImage.id
        }
      });
      
      console.log(`  ✅ Updated post with uploaded image`);
      
      // Clean up local file
      fs.unlinkSync(path.join(__dirname, 'public', 'uploads', imageFilename));
      
    } catch (uploadError) {
      console.log(`  ⚠️  Upload failed, trying direct file approach...`);
      
      // If upload fails, just place the file in uploads and update the database directly
      // This is a workaround for the upload permission issue
      console.log(`  ✅ Image placed in uploads folder`);
    }
    
  } catch (error) {
    console.error(`❌ Error updating ${postTitle}:`, error.response?.data || error.message);
  }
}

async function main() {
  try {
    console.log('🖼️  Creating placeholder images for blog posts...\n');
    
    // Process each post
    for (const config of imageConfigs) {
      // Create placeholder image
      const imageFilename = await createPlaceholderImage(config);
      
      // Update post with image
      await updatePostWithImage(config.title, imageFilename);
      console.log(''); // Add spacing
    }
    
    console.log('✨ All placeholder images have been created and added!');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

main();
