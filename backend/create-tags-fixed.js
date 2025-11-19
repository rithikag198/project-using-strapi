const axios = require('axios');

const tags = [
  { name: 'React', slug: 'react' },
  { name: 'JavaScript', slug: 'javascript' },
  { name: 'Next.js', slug: 'nextjs' },
  { name: 'CSS', slug: 'css' },
  { name: 'Tutorial', slug: 'tutorial' },
  { name: 'UI/UX', slug: 'ui-ux' },
  { name: 'Startup', slug: 'startup' },
  { name: 'Productivity', slug: 'productivity' }
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
      console.error(`❌ Failed to create tag: ${tag.name}`, error.response?.data?.error?.message || error.message);
    }
  }
}

createTags();
