// src/components/appDetailData.js
// Extended app information for detailed app pages

export const appDetailData = {
  kioku: {
    id: 'kioku',
    name: 'Kioku',
    tagline: 'Visual Task Scheduling',
    fullDescription: 'Kioku transforms task management into an intuitive visual experience. Instead of endless to-do lists, drag unassigned tasks onto your calendar to schedule them like solving a puzzle. The app helps you organize your day by visualizing how tasks fit into your available time, making scheduling feel natural and satisfying.',
    philosophy: 'Born from the frustration of overcomplicated task managers, Kioku embraces a local-first philosophy where your data stays on your device. No accounts, no syncing, no cloud dependencies—just a simple, powerful tool that respects your privacy while helping you stay organized.',
    features: [
      'Visual drag-and-drop calendar scheduling',
      'Category-based duration estimates (Health: 5-30min, Pets: 15-60min, etc.)',
      'Auto-regenerating recurring tasks',
      'Brain Dump mode for quick capture without categorization',
      'Local-first architecture - all data stays on your device',
      'SQLite database for reliable local storage',
      'Local notifications for scheduled tasks',
      'Mind Stream feature with speech-to-text and audio recording',
      'No account required, complete privacy'
    ],
    appStoreUrl: 'https://apps.apple.com/us/app/kioku-task-tracker/id6754204721',
    playStoreUrl: 'https://play.google.com/apps/testing/com.kioku.tracker',
    playStoreStatus: 'In Review',
    appId: '6754204721',
    tech: ['Flutter', 'Dart', 'SQLite', 'Provider'],
    platforms: ['iOS', 'Android'],
    colors: {
      primary: '#06b6d4',
      secondary: '#0891b2'
    },
    icon: null, // Optional: '/assets/apps/kioku/icon.png'
    screenshots: [] // Optional: screenshot paths
  },

  kage: {
    id: 'kage',
    name: 'Kage',
    tagline: 'Minimalist Habit Tracker',
    fullDescription: 'Kage is a clean, distraction-free habit tracker designed to help you build and maintain positive habits with minimal friction. Track your daily habits, visualize your progress with streak monitoring, and stay accountable on your personal development journey without the clutter of over-engineered productivity apps.',
    philosophy: 'In a world of notification-heavy apps vying for your attention, Kage takes a different approach. Built as a Progressive Web App with native mobile capabilities, it offers a simple, focused interface that gets out of your way and lets you focus on what matters: building better habits.',
    features: [
      'Clean, minimalist interface with zero clutter',
      'Visual progress tracking and streak monitoring',
      'Daily habit check-ins with simple tap interface',
      'Goal setting and milestone tracking',
      'Habit categories and organization',
      'Data export functionality for portability',
      'Dark mode support',
      'Local-first storage with optional cloud sync',
      'Built as PWA with native iOS and Android apps'
    ],
    appStoreUrl: 'https://apps.apple.com/us/app/kage-habit-app/id6751781547',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.kage.app',
    appId: '6751781547',
    tech: ['React', 'TypeScript', 'Capacitor', 'Tailwind CSS', 'PWA'],
    platforms: ['iOS', 'Android'],
    colors: {
      primary: '#FF7101',
      secondary: '#FF4500'
    },
    icon: null,
    screenshots: []
  },

  kaizen: {
    id: 'kaizen',
    name: 'Kaizen',
    tagline: 'Routine Management & Workout Tracking',
    fullDescription: 'Kaizen helps you organize all your workout routines in one place with equipment-based exercise filtering, workout session tracking with built-in timers, and visual progress monitoring. Designed to guide you through each workout with real-time assistance and track your fitness journey over time.',
    philosophy: 'Named after the Japanese philosophy of continuous improvement, Kaizen embodies the principle that small, consistent actions lead to significant results. Whether you\'re a beginner or experienced athlete, Kaizen provides the structure and tracking you need to make steady progress on your fitness goals.',
    features: [
      'Equipment-based exercise filtering (dumbbells, barbells, bodyweight, etc.)',
      'Workout session tracking with built-in timers',
      'Visual progress monitoring and statistics',
      'Structured routine management and organization',
      'Exercise library with detailed instructions',
      'Rest timer between sets',
      'Workout history and performance analytics',
      'Custom routine creation and editing',
      'Local data storage for privacy and offline access'
    ],
    appStoreUrl: 'https://apps.apple.com/us/app/kaizen-workout-app/id6752676636',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.mykaizen.app',
    appId: '6752676636',
    tech: ['Flutter', 'Dart', 'Provider', 'Shared Preferences'],
    platforms: ['iOS', 'Android'],
    colors: {
      primary: '#667eea',
      secondary: '#764ba2'
    },
    icon: null,
    screenshots: []
  }
};

// Helper function to get app by ID
export const getAppDetail = (appId) => {
  return appDetailData[appId] || null;
};
