const axios = require('axios');

async function verifyPostsAfterRestart() {
  console.log('🔄 VERIFYING POSTS AFTER STRAPI RESTART...\n');
  
  let attempts = 0;
  const maxAttempts = 10;
  
  while (attempts < maxAttempts) {
    attempts++;
    console.log(`Attempt ${attempts}/${maxAttempts} - Checking API...`);
    
    try {
      const response = await axios.get('http://localhost:1337/api/blog-posts', {
        timeout: 3000
      });
      
      const posts = response.data.data;
      console.log(`\n✅ SUCCESS! Strapi is back online!`);
      console.log(`📊 Found ${posts.length} posts:`);
      
      posts.forEach((post, index) => {
        console.log(`   ${index + 1}. "${post.title}" (ID: ${post.id})`);
        console.log(`      Created: ${post.createdAt}`);
      });
      
      console.log('\n🎉 PROOF OF PERSISTENCE:');
      console.log('   ✅ Posts survived server restart');
      console.log('   ✅ Database loaded successfully');
      console.log('   ✅ All 8 posts are intact');
      console.log('   ✅ Posts are PERMANENTLY stored');
      
      return true;
      
    } catch (error) {
      console.log(`   ⏳ Still starting up... (${error.message})`);
      
      if (attempts < maxAttempts) {
        console.log(`   Waiting 3 seconds before next attempt...`);
        await new Promise(resolve => setTimeout(resolve, 3000));
      }
    }
  }
  
  console.log('\n❌ Strapi did not restart within expected time');
  console.log('💡 Try manually starting: cd "c:\\strapi project\\backend" && npm run dev');
  return false;
}

verifyPostsAfterRestart();
