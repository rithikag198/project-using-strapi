const axios = require('axios');

const tags = [
  { name: 'React' },
  { name: 'JavaScript' },
  { name: 'Next.js' },
  { name: 'CSS' },
  { name: 'Tutorial' },
  { name: 'UI/UX' },
  { name: 'Startup' },
  { name: 'Productivity' }
];

async function createTags() {
  for (const tag of tags) {
    try {
      const tagData = {
        data: tag
      };
      
      const response = await axios.post('http://localhost:1337/api/tags', tagData);
      console.log(`✅ Created tag: ${tag.name}`);
    } catch (error) {
      console.error(`❌ Failed to create tag: ${tag.name}`, error.response?.data || error.message);
    }
  }
}

createTags();
