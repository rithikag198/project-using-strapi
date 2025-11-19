const axios = require('axios');

async function checkFrontend() {
  try {
    console.log('🌐 Checking frontend blog page...\n');
    
    // Check if frontend is accessible
    const response = await axios.get('http://localhost:3000/blog');
    const content = response.data;
    
    // Look for total posts count
    const totalPostsMatch = content.match(/Total posts:\s*(\d+)/);
    if (totalPostsMatch) {
      console.log(`✅ Frontend shows: Total posts: ${totalPostsMatch[1]}`);
    } else {
      console.log('⚠️  Total posts count not found in frontend');
    }
    
    // Count how many post titles are in the content
    const titleMatches = content.match(/<h2[^>]*>([^<]+)<\/h2>/g);
    if (titleMatches) {
      console.log(`✅ Found ${titleMatches.length} post titles on frontend`);
    }
    
    // Check if new posts are displayed
    const newPosts = [
      'React Hooks Complete Guide',
      'CSS Grid Layout Mastery',
      'UI Design Principles',
      'Startup Growth Strategies',
      'Next.js Performance Tips',
      'Modern JavaScript Features',
      'Color Theory in Design',
      'Business Model Innovation'
    ];
    
    console.log('\n📝 Checking new posts on frontend:');
    newPosts.forEach(title => {
      if (content.includes(title)) {
        console.log(`   ✅ ${title}`);
      } else {
        console.log(`   ❌ ${title}`);
      }
    });
    
  } catch (error) {
    console.error('❌ Error accessing frontend:', error.message);
  }
}

checkFrontend();
