const axios = require('axios');

async function checkPosts() {
  try {
    const response = await axios.get('http://localhost:1337/api/blog-posts');
    console.log('Posts:', response.data.data.length);
    response.data.data.forEach((post, i) => console.log(`  ${i+1}. ${post.title}`));
  } catch (e) {
    console.error('Posts error:', e.message);
  }
}

async function checkCategories() {
  try {
    const response = await axios.get('http://localhost:1337/api/categories');
    console.log('Categories:', response.data.data.length);
    response.data.data.forEach((cat, i) => console.log(`  ${i+1}. ${cat.name}`));
  } catch (e) {
    console.error('Categories error:', e.message);
  }
}

async function checkTags() {
  try {
    const response = await axios.get('http://localhost:1337/api/tags');
    console.log('Tags:', response.data.data.length);
    response.data.data.forEach((tag, i) => console.log(`  ${i+1}. ${tag.name}`));
  } catch (e) {
    console.error('Tags error:', e.message);
  }
}

async function main() {
  await checkPosts();
  await checkCategories();
  await checkTags();
  console.log('\n✅ All checks completed!');
}

main();
