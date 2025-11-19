const axios = require('axios');

const categories = [
  {
    name: 'Technology',
    slug: 'technology',
    description: 'Articles about technology, programming, and software development'
  },
  {
    name: 'Web Development', 
    slug: 'web-development',
    description: 'Topics related to web development, frontend, and backend technologies'
  },
  {
    name: 'Design',
    slug: 'design', 
    description: 'UI/UX design, visual design, and user experience principles'
  },
  {
    name: 'Business',
    slug: 'business',
    description: 'Business insights, startups, and entrepreneurship'
  }
];

async function createCategories() {
  for (const category of categories) {
    try {
      const categoryData = {
        data: category
      };
      
      const response = await axios.post('http://localhost:1337/api/categories', categoryData);
      console.log(`✅ Created category: ${category.name}`);
    } catch (error) {
      console.error(`❌ Failed to create category: ${category.name}`, error.response?.data || error.message);
    }
  }
}

createCategories();
