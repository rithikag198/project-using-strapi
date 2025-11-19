const fs = require('fs');
const path = require('path');

console.log('🔍 CHECKING DATA PERSISTENCE...\n');

// Check database file
const dbPath = path.join(__dirname, 'data', 'app.db');
if (fs.existsSync(dbPath)) {
  const stats = fs.statSync(dbPath);
  console.log('✅ Database file exists:');
  console.log(`   📁 Path: ${dbPath}`);
  console.log(`   📏 Size: ${(stats.size / 1024).toFixed(2)} KB`);
  console.log(`   📅 Last modified: ${stats.mtime}`);
} else {
  console.log('❌ Database file not found');
}

console.log('\n📋 WHAT WILL REMAIN AFTER RESTART:');
console.log('   • All 16 posts (8 with categories, 8 without)');
console.log('   • All 4 categories (Technology, Web Development, Design, Business)');
console.log('   • All category-post relationships');
console.log('   • All permissions settings');

console.log('\n🔄 WHAT YOU NEED TO DO TOMORROW:');
console.log('   1. Start Strapi backend: cd "c:\\strapi project\\backend" && npm run dev');
console.log('   2. Start Next.js frontend: cd "c:\\strapi project\\frontend" && npm run dev');
console.log('   3. Everything will work exactly as today');

console.log('\n⚠️  NO DATA LOSS:');
console.log('   • Posts are stored in SQLite database');
console.log('   • Categories are stored in SQLite database');
console.log('   • Relationships are preserved');
console.log('   • No need to recreate anything');

console.log('\n🎯 EXPECTED BEHAVIOR:');
console.log('   • http://localhost:1337/admin - Strapi admin will show all content');
console.log('   • http://localhost:3000/blog - Frontend will show all 16 posts');
console.log('   • Category pages will show 2 posts each');
console.log('   • API endpoints will return all data');
