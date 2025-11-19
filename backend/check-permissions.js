console.log('🔒 PERMISSIONS ISSUE DETECTED\n');
console.log('The API calls are failing with "Forbidden" error.');
console.log('This means you need to configure permissions in Strapi admin panel.\n');

console.log('📋 STEPS TO FIX PERMISSIONS:');
console.log('1. Open Strapi Admin: http://localhost:1337/admin');
console.log('2. Go to Settings → USERS & PERMISSIONS PLUGIN → Roles');
console.log('3. Click on "Public" role');
console.log('4. Scroll to "Blog Post" section');
console.log('5. Enable these permissions:');
console.log('   ✓ find');
console.log('   ✓ findOne');
console.log('   ✓ create');
console.log('   ✓ update');
console.log('   ✓ delete');
console.log('6. Click Save');
console.log('7. Also check "Category" and "Tag" permissions');
console.log('8. After saving, run this script again\n');

console.log('⚠️  CURRENT ISSUE:');
console.log('   • Posts can be read (find/findOne works)');
console.log('   • Posts cannot be updated (update permission missing)');
console.log('   • This prevents assigning categories to posts\n');

console.log('🎯 ALTERNATIVE:');
console.log('   If you prefer, I can create new posts with categories');
console.log('   instead of updating existing ones.\n');

console.log('📞 Let me know when you have updated the permissions!');
