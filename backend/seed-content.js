const axios = require("axios");

const STRAPI_URL = "http://localhost:1337";

async function seedContent() {
  try {
    console.log(" Starting to seed content...");

    // Create Categories
    const categories = [
      { name: "Technology", slug: "technology", description: "Latest tech news, tutorials, and insights" },
      { name: "Web Development", slug: "web-development", description: "Frontend and backend development articles" },
      { name: "Design", slug: "design", description: "UI/UX design principles and trends" },
      { name: "Business", slug: "business", description: "Business strategies and entrepreneurship" }
    ];

    console.log(" Creating categories...");
    const createdCategories = [];
    for (const category of categories) {
      try {
        const response = await axios.post(`${STRAPI_URL}/api/categories`, {
          data: category
        });
        createdCategories.push(response.data.data);
        console.log(` Created category: ${category.name}`);
      } catch (error) {
        console.log(`  Category ${category.name} might already exist`);
      }
    }

    // Create Tags
    const tags = [
      { name: "React", slug: "react" },
      { name: "JavaScript", slug: "javascript" },
      { name: "Next.js", slug: "nextjs" },
      { name: "CSS", slug: "css" },
      { name: "Tutorial", slug: "tutorial" },
      { name: "UI/UX", slug: "ui-ux" },
      { name: "Startup", slug: "startup" },
      { name: "Productivity", slug: "productivity" }
    ];

    console.log("  Creating tags...");
    const createdTags = [];
    for (const tag of tags) {
      try {
        const response = await axios.post(`${STRAPI_URL}/api/tags`, {
          data: tag
        });
        createdTags.push(response.data.data);
        console.log(` Created tag: ${tag.name}`);
      } catch (error) {
        console.log(`  Tag ${tag.name} might already exist`);
      }
    }

    // Create Blog Posts
    const posts = [
      {
        title: "Getting Started with React Hooks",
        slug: "getting-started-with-react-hooks",
        description: "Learn the fundamentals of React Hooks and how to use them in your applications.",
        content: `<h1>React Hooks: A Complete Guide</h1>
        <p>React Hooks revolutionized the way we write React components. In this comprehensive guide, we will explore everything you need to know about Hooks.</p>
        
        <h2>What are React Hooks?</h2>
        <p>Hooks are functions that let you "hook into" React state and lifecycle features from function components. They allow you to use state and other React features without writing a class.</p>
        
        <h2>The Basic Hooks</h2>
        <h3>useState</h3>
        <p>The useState Hook lets you add React state to function components:</p>
        <pre><code>const [count, setCount] = useState(0);</code></pre>
        
        <h3>useEffect</h3>
        <p>The useEffect Hook lets you perform side effects in function components:</p>
        <pre><code>useEffect(() => {
  document.title = \`You clicked \${count} times\`;
}, [count]);</code></pre>
        
        <h2>Custom Hooks</h2>
        <p>You can create your own Hooks to reuse stateful logic between components. Custom Hooks are a mechanism to reuse stateful logic.</p>
        
        <h2>Best Practices</h2>
        <ul>
          <li>Only call Hooks at the top level</li>
          <li>Only call Hooks from React functions</li>
          <li>Use the ESLint plugin for Hooks</li>
        </ul>
        
        <p>React Hooks provide a more direct API to the React concepts you already know: props, state, context, refs, and lifecycle.</p>`,
        author: "Sarah Johnson",
        published_at: new Date("2024-01-15"),
        category: 1,
        tags: [1, 2, 5]
      },
      {
        title: "Modern CSS Techniques Every Developer Should Know",
        slug: "modern-css-techniques",
        description: "Explore the latest CSS features that will make your development more efficient and your designs more impressive.",
        content: `<h1>Modern CSS Techniques</h1>
        <p>CSS has evolved significantly over the years. Let us explore modern techniques that every developer should know.</p>
        
        <h2>CSS Grid and Flexbox</h2>
        <p>These two layout systems have revolutionized how we create layouts:</p>
        <pre><code>/* CSS Grid */
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

/* Flexbox */
.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}</code></pre>
        
        <h2>CSS Custom Properties (Variables)</h2>
        <p>Variables make your CSS more maintainable:</p>
        <pre><code>:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --spacing: 1rem;
}

.button {
  background: var(--primary-color);
  padding: var(--spacing);
}</code></pre>
        
        <h2>Container Queries</h2>
        <p>Container queries allow you to style elements based on their container size:</p>
        <pre><code>@container (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}</code></pre>
        
        <h2>CSS-in-JS</h2>
        <p>Modern CSS-in-JS solutions offer scoped styles and dynamic styling capabilities.</p>
        
        <p>These techniques will help you write more efficient and maintainable CSS.</p>`,
        author: "Mike Chen",
        published_at: new Date("2024-01-20"),
        category: 3,
        tags: [4, 6]
      },
      {
        title: "Building Scalable Next.js Applications",
        slug: "building-scalable-nextjs-applications",
        description: "Learn how to build production-ready Next.js applications that can handle growth and maintain performance.",
        content: `<h1>Building Scalable Next.js Applications</h1>
        <p>Next.js provides a powerful framework for building React applications. Here is how to make them scalable.</p>
        
        <h2>Project Structure</h2>
        <p>A well-organized project structure is crucial for scalability:</p>
        <pre><code>src/
 app/
 components/
 lib/
 hooks/
 utils/
 types/</code></pre>
        
        <h2>Performance Optimization</h2>
        <h3>Code Splitting</h3>
        <p>Next.js automatically code splits your application. Use dynamic imports for additional optimization:</p>
        <pre><code>const HeavyComponent = dynamic(() => import("./HeavyComponent"), {
  loading: () => <p>Loading...</p>
});</code></pre>
        
        <h3>Image Optimization</h3>
        <p>Use the Next.js Image component for automatic optimization:</p>
        <pre><code>import Image from "next/image";

<Image
  src="/hero.jpg"
  alt="Hero image"
  width={800}
  height={600}
  priority
/></code></pre>
        
        <h2>State Management</h2>
        <p>For complex applications, consider using Zustand or Redux Toolkit for state management.</p>
        
        <h2>API Routes</h2>
        <p>Next.js API routes allow you to build full-stack applications:</p>
        <pre><code>export default function handler(req, res) {
  res.status(200).json({ message: "Hello from API!" });
}</code></pre>
        
        <h2>Deployment</h2>
        <p>Deploy to Vercel for the best Next.js experience with automatic optimizations.</p>`,
        author: "Alex Rivera",
        published_at: new Date("2024-01-25"),
        category: 2,
        tags: [3, 2, 5]
      },
      {
        title: "The Psychology of Great User Interfaces",
        slug: "psychology-of-great-user-interfaces",
        description: "Understanding the psychological principles behind effective UI design to create better user experiences.",
        content: `<h1>The Psychology of Great User Interfaces</h1>
        <p>Great user interfaces do not just look good—they understand human psychology.</p>
        
        <h2>Cognitive Load</h2>
        <p>Minimize cognitive load by keeping interfaces simple and intuitive. Users should be able to accomplish tasks without thinking too hard.</p>
        
        <h2>Visual Hierarchy</h2>
        <p>Guide users attention through strategic use of size, color, and positioning:</p>
        <ul>
          <li>Large elements draw more attention</li>
          <li>Bright colors stand out</li>
          <li>Top and left areas get more focus</li>
        </ul>
        
        <h2>Hick is Law</h2>
        <p>The time it takes to make a decision increases with the number and complexity of choices. Limit options to reduce decision fatigue.</p>
        
        <h2>Fitts is Law</h2>
        <p>Make important targets larger and easier to click. This is especially important for mobile interfaces.</p>
        
        <h2>Miller is Law</h2>
        <p>The average person can only keep 72 items in their working memory. Group information into chunks of 5-9 items.</p>
        
        <h2>Emotional Design</h2>
        <p>Create emotional connections through:</p>
        <ul>
          <li>Micro-interactions</li>
          <li>Delightful animations</li>
          <li>Personality and voice</li>
        </ul>
        
        <p>Understanding these psychological principles will help you create interfaces that users love.</p>`,
        author: "Emma Thompson",
        published_at: new Date("2024-02-01"),
        category: 3,
        tags: [6, 4]
      },
      {
        title: "Startup MVP Development: From Idea to Launch",
        slug: "startup-mvp-development",
        description: "A practical guide to building and launching your Minimum Viable Product efficiently.",
        content: `<h1>Startup MVP Development</h1>
        <p>Building an MVP is about finding the balance between features and speed to market.</p>
        
        <h2>What Makes a Good MVP?</h2>
        <p>A great MVP should:</p>
        <ul>
          <li>Solve a real problem</li>
          <li>Deliver core value</li>
          <li>Be testable</li>
          <li>Allow for iteration</li>
        </ul>
        
        <h2>The MVP Development Process</h2>
        
        <h3>1. Problem Validation</h3>
        <p>Before writing any code, validate that you are solving a real problem:</p>
        <ul>
          <li>Talk to potential users</li>
          <li>Conduct surveys</li>
          <li>Analyze competitors</li>
        </ul>
        
        <h3>2. Feature Prioritization</h3>
        <p>Use the MoSCoW method:</p>
        <ul>
          <li><strong>Must have:</strong> Core functionality</li>
          <li><strong>Should have:</strong> Important features</li>
          <li><strong>Could have:</strong> Nice-to-have features</li>
          <li><strong>Will not have:</strong> Out of scope</li>
        </ul>
        
        <h3>3. Rapid Prototyping</h3>
        <p>Create quick prototypes to test assumptions:</p>
        <ul>
          <li>Wireframes</li>
          <li>Mockups</li>
          <li>Interactive prototypes</li>
        </ul>
        
        <h3>4. Agile Development</h3>
        <p>Use sprints to build incrementally:</p>
        <pre><code>Sprint 1: Core functionality
Sprint 2: User authentication
Sprint 3: Basic dashboard
Sprint 4: Feedback collection</code></pre>
        
        <h2>Technology Stack Considerations</h2>
        <p>Choose technologies that allow for rapid development and easy iteration.</p>
        
        <h2>Launch Strategy</h2>
        <p>Plan your launch carefully:</p>
        <ul>
          <li>Beta testing</li>
          <li>Marketing preparation</li>
          <li>Support infrastructure</li>
        </ul>
        
        <p>Remember, the goal is to learn and iterate, not to build the perfect product on day one.</p>`,
        author: "David Park",
        published_at: new Date("2024-02-05"),
        category: 4,
        tags: [7, 8]
      },
      {
        title: "Advanced TypeScript Patterns for React Developers",
        slug: "advanced-typescript-patterns-react",
        description: "Master advanced TypeScript patterns to write type-safe and maintainable React applications.",
        content: `<h1>Advanced TypeScript Patterns for React</h1>
        <p>TypeScript can make your React applications more robust and maintainable. Let us explore advanced patterns.</p>
        
        <h2>Generic Components</h2>
        <p>Create reusable components with proper typing:</p>
        <pre><code>interface Props<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

function List<T>({ items, renderItem }: Props<T>) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}</code></pre>
        
        <h2>Discriminated Unions</h2>
        <p>Handle different states with type safety:</p>
        <pre><code>type LoadingState = 
  | { status: "loading" }
  | { status: "success"; data: any }
  | { status: "error"; error: string };

function Component({ state }: { state: LoadingState }) {
  switch (state.status) {
    case "loading":
      return <div>Loading...</div>;
    case "success":
      return <div>{state.data}</div>;
    case "error":
      return <div>{state.error}</div>;
  }
}</code></pre>
        
        <h2>Utility Types</h2>
        <p>Leverage TypeScript is built-in utility types:</p>
        <pre><code>// Make all properties optional
type PartialUser = Partial<User>;

// Pick specific properties
type UserBasic = Pick<User, "name" | "email">;

// Omit specific properties
type CreateUser = Omit<User, "id" | "createdAt">;</code></pre>
        
        <h2>Custom Hooks with TypeScript</h2>
        <pre><code>function useApi<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}</code></pre>
        
        <h2>Type Guards</h2>
        <p>Create type guards for runtime type checking:</p>
        <pre><code>function isString(value: unknown): value is string {
  return typeof value === "string";
}

function process(value: unknown) {
  if (isString(value)) {
    // TypeScript knows value is string here
    return value.toUpperCase();
  }
}</code></pre>
        
        <p>These patterns will help you write more type-safe and maintainable React applications.</p>`,
        author: "Lisa Wang",
        published_at: new Date("2024-02-10"),
        category: 2,
        tags: [2, 3, 5]
      }
    ];

    console.log(" Creating blog posts...");
    const createdPosts = [];
    for (const postData of posts) {
      try {
        const response = await axios.post(`${STRAPI_URL}/api/blog-posts`, {
          data: postData
        });
        createdPosts.push(response.data.data);
        console.log(` Created post: ${postData.title}`);
      } catch (error) {
        console.log(`  Post "${postData.title}" might already exist or failed to create`);
        if (error.response) {
          console.log(`   Error: ${error.response.data.error?.message || JSON.stringify(error.response.data)}`);
        }
      }
    }

    console.log(`\n Content seeding completed!`);
    console.log(` Summary:`);
    console.log(`   - Categories: ${createdCategories.length}`);
    console.log(`   - Tags: ${createdTags.length}`);
    console.log(`   - Blog Posts: ${createdPosts.length}`);
    console.log(`\n Visit http://localhost:3000 to see your beautiful blog!`);

  } catch (error) {
    console.error(" Error seeding content:", error.message);
    if (error.code === "ECONNREFUSED") {
      console.log("\n Make sure Strapi server is running on http://localhost:1337");
      console.log("   Run: cd backend && npm run develop");
    }
  }
}

seedContent();
