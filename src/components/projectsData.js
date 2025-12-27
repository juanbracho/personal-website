// src/components/projectsData.js

export const assignments = [
  {
    id: 'excel',
    name: 'Excel',
    thumbnail: require('../assets/thumbnails/excel.png'),
    github: 'https://github.com/juanbracho/UT_Module1',
    tech: ['Excel', 'Data Analysis']
  },
  {
    id: 'vba',
    name: 'VBA',
    thumbnail: require('../assets/thumbnails/vba.png'),
    github: 'https://github.com/juanbracho/UT_Module2',
    tech: ['VBA', 'Excel', 'Automation']
  },
  {
    id: 'python',
    name: 'Python',
    thumbnail: require('../assets/thumbnails/python.png'),
    github: 'https://github.com/juanbracho/UT_Module3',
    tech: ['Python', 'Programming']
  },
  {
    id: 'data-analysis',
    name: 'Data Analysis w/ Python',
    thumbnail: require('../assets/thumbnails/data-analysis.png'),
    github: 'https://github.com/juanbracho/UT_Module4',
    tech: ['Python', 'Pandas', 'NumPy']
  },
  {
    id: 'data-viz',
    name: 'Data Visualization w/ Python',
    thumbnail: require('../assets/thumbnails/data-visualization.png'),
    github: 'https://github.com/juanbracho/UT_Module5',
    tech: ['Python', 'Matplotlib', 'Visualization']
  },
  {
    id: 'python-apis',
    name: 'Python APIs',
    thumbnail: require('../assets/thumbnails/python-apis.png'),
    github: 'https://github.com/juanbracho/UT_Module6',
    tech: ['Python', 'APIs', 'JSON']
  },
  {
    id: 'sql',
    name: 'SQL',
    thumbnail: require('../assets/thumbnails/sql.png'),
    github: 'https://github.com/juanbracho/UT_Module9',
    tech: ['SQL', 'Database']
  },
  {
    id: 'advanced-sql',
    name: 'Advanced SQL',
    thumbnail: require('../assets/thumbnails/advanced-sql.png'),
    github: 'https://github.com/juanbracho/UT_Module10',
    tech: ['SQL', 'PostgreSQL']
  },
  {
    id: 'data-collection',
    name: 'Data Collection',
    thumbnail: require('../assets/thumbnails/data-collection.png'),
    github: 'https://github.com/juanbracho/UT_Module11',
    tech: ['Python', 'Web Scraping', 'Beautiful Soup']
  },
  {
    id: 'nosql',
    name: 'NoSQL Databases',
    thumbnail: require('../assets/thumbnails/nosql.png'),
    github: 'https://github.com/juanbracho/UT_Module12',
    tech: ['MongoDB', 'NoSQL']
  },
  {
    id: 'interactive-viz',
    name: 'Interactive Visualizations',
    thumbnail: require('../assets/thumbnails/interactive-visualizations.png'),
    github: 'https://github.com/juanbracho/UT_Module14',
    tech: ['JavaScript', 'D3.js', 'Plotly']
  },
  {
    id: 'mapping',
    name: 'Mapping',
    thumbnail: require('../assets/thumbnails/mapping.png'),
    github: 'https://github.com/juanbracho/UT_Module15',
    tech: ['Leaflet', 'GeoJSON', 'Maps']
  },
  {
    id: 'tableau',
    name: 'Tableau',
    thumbnail: require('../assets/thumbnails/tableau.png'),
    github: 'https://github.com/juanbracho/UT_Module18',
    tech: ['Tableau', 'Data Visualization']
  },
  {
    id: 'unsupervised',
    name: 'Unsupervised Learning',
    thumbnail: require('../assets/thumbnails/unsupervised-learning.png'),
    github: 'https://github.com/juanbracho/UT_Module19',
    tech: ['Python', 'Machine Learning', 'scikit-learn']
  },
  {
    id: 'supervised',
    name: 'Supervised Learning',
    thumbnail: require('../assets/thumbnails/supervised-learning.png'),
    github: 'https://github.com/juanbracho/UT_Module20',
    tech: ['Python', 'Machine Learning', 'scikit-learn']
  },
  {
    id: 'neural-networks',
    name: 'Neural Networks and Deep Learning',
    thumbnail: require('../assets/thumbnails/neural-networks.png'),
    github: 'https://github.com/juanbracho/UT_Module21',
    tech: ['Python', 'TensorFlow', 'Deep Learning']
  },
  {
    id: 'big-data',
    name: 'Big Data',
    thumbnail: require('../assets/thumbnails/big-data.png'),
    github: 'https://github.com/juanbracho/UT_Module22',
    tech: ['PySpark', 'Big Data', 'Hadoop']
  },
];

export const projects = [
  {
    id: 'stock-analysis',
    name: 'Stock Analysis with Python',
    thumbnail: require('../assets/thumbnails/stock-analysis.png'),
    github: 'https://github.com/juanbracho/UT_Module7',
    description: 'Comprehensive stock market analysis using Python, pandas, and financial APIs.',
    tech: ['Python', 'Pandas', 'APIs', 'Finance']
  },
  {
    id: 'etl-project',
    name: 'ETL Project',
    thumbnail: require('../assets/thumbnails/etl-project.png'),
    github: 'https://github.com/juanbracho/UT_Module13',
    description: 'Extract, Transform, Load pipeline for data integration and warehousing.',
    tech: ['Python', 'ETL', 'PostgreSQL']
  },
  {
    id: 'data-viz-track',
    name: 'Data Visualization with Python',
    thumbnail: require('../assets/thumbnails/data-visualization-track.png'),
    github: 'https://github.com/juanbracho/UT_Module16',
    description: 'Advanced data visualization techniques and interactive dashboards.',
    tech: ['Python', 'Plotly', 'Dash', 'Visualization']
  },
  {
    id: 'capstone',
    name: 'ML Stock Prediction Models',
    thumbnail: require('../assets/thumbnails/capstone-project.png'),
    github: 'https://github.com/juanbracho/UT_Module23',
    description: 'Machine learning models for stock market prediction and analysis.',
    tech: ['Python', 'Machine Learning', 'TensorFlow', 'Finance']
  }
];

export const webApps = [
  {
    id: 'finance-dashboard',
    name: 'Personal Finance Dashboard',
    thumbnail: require('../assets/thumbnails/finance-dashboard.png'),
    description: 'Comprehensive personal finance management system with income/expense tracking, budget management, and financial analytics using Flask backend with interactive Plotly visualizations.',
    github: 'https://github.com/juanbracho/personal_finance',
    status: 'private-repo',
    tech: ['Flask', 'Python', 'SQLAlchemy', 'Plotly.js', 'Bootstrap']
  },
  {
    id: 'girasoul-inventory',
    name: 'Girasoul Inventory Tracker',
    thumbnail: require('../assets/thumbnails/girasoul-inventory.png'),
    description: 'Business inventory management system for second-hand clothing resale with automated SKU generation, sales tracking, and comprehensive financial analytics for Instagram-based retail operations.',
    github: 'https://github.com/juanbracho/girasoulresale',
    status: 'private-repo',
    tech: ['Flask', 'Python', 'SQLAlchemy', 'SQLite', 'Bootstrap']
  }
];
