// src/components/articlesData.js

export const articles = [
  {
    id: 'ai-solutions',
    title: 'How to use AI to build solutions WITH you',
    description: 'Exploring how AI functions as a specialized teaching partner rather than a replacement tool. Introducing the "90% Confidence Rule" and a four-phase human-AI development pattern for effective collaboration.',
    date: '2025-06-30',
    type: 'external',
    externalUrl: 'https://www.linkedin.com/pulse/how-use-ai-build-solutions-you-juan-avila-5xopc/',
    tags: ['AI', 'Development', 'Productivity'],
    featured: true
  },
  {
    id: 'achieve-goals',
    title: 'How hard is it to achieve your goals?',
    description: 'A personal essay on resilience through immigration from Venezuela to the US. Drawing on Stoic philosophy to navigate bureaucratic obstacles, unexpected detours, and the emotional journey of pursuing education across continents.',
    date: '2025-04-08',
    type: 'external',
    externalUrl: 'https://www.linkedin.com/pulse/how-hard-achieve-your-goals-juan-bracho-avila-0ggbc/',
    tags: ['Personal Growth', 'Resilience', 'Immigration'],
    featured: true
  },
  {
    id: 'immigrant',
    title: 'What does it mean to be an immigrant?',
    description: 'Reflecting on the sacrifices immigrants make when leaving their homeland. Exploring themes of cultural displacement, resilience, and the fundamental search for dignity and opportunity in a new country.',
    date: '2025-04-01',
    type: 'external',
    externalUrl: 'https://www.linkedin.com/pulse/what-does-mean-immigrant-juan-bracho-avila-4wzxc/',
    tags: ['Immigration', 'Personal Story', 'Culture'],
    featured: true
  },
  {
    id: 'dopamine-control',
    title: 'Build the habit of controlling your Dopamine',
    description: 'Understanding how social media exploits dopamine systems similarly to addictive drugs. Exploring dopamine chemistry as foundational knowledge for building healthier digital habits.',
    date: '2025-03-31',
    type: 'external',
    externalUrl: 'https://www.linkedin.com/pulse/build-habit-controlling-your-dopamine-juan-bracho-avila-spirc/',
    tags: ['Mental Health', 'Habits', 'Productivity'],
    featured: true
  },
  {
    id: 'getting-started',
    title: 'Getting Started with Data Analytics',
    description: 'An introduction to my journey in data analytics, covering the fundamentals and key learnings from the UT Austin bootcamp.',
    date: '2024-12-01',
    type: 'internal',
    tags: ['Data Analytics', 'Career', 'Education'],
    featured: false
  }
];

// Article content for internal articles
export const articleContent = {
  'getting-started': {
    title: 'Getting Started with Data Analytics',
    date: '2024-12-01',
    content: `
      <h2>My Journey into Data Analytics</h2>
      <p>After completing the Data Analytics Bootcamp at the University of Texas at Austin, I've gained comprehensive skills in Python, SQL, Tableau, and more. This journey has transformed the way I approach problem-solving and data-driven decision making.</p>

      <h3>Key Learnings</h3>
      <ul>
        <li>Python for Data Analysis and Visualization</li>
        <li>SQL for Database Management and Queries</li>
        <li>Tableau for Interactive Dashboards</li>
        <li>Machine Learning Fundamentals</li>
        <li>Statistical Analysis and Hypothesis Testing</li>
      </ul>

      <h3>What's Next</h3>
      <p>I'm excited to apply these skills in real-world projects and continue learning in the ever-evolving field of data analytics. Stay tuned for more articles about specific projects and techniques!</p>
    `
  }
};
