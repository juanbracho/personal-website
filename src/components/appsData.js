// src/components/appsData.js

export const mobileApps = [
  {
    id: 'kaizen',
    name: 'Kaizen',
    tagline: 'Equipment-Driven Fitness Tracker',
    description: 'A mobile-first fitness app that helps you organize, execute, and track workouts based on your available equipment. Features equipment-based exercise filtering, routine management, real-time session tracking with timers, and progress analytics to monitor your fitness journey.',
    appStoreUrl: 'https://apps.apple.com/us/app/kaizen-workout-app/id6752676636',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.mykaizen.app',
    appId: '6752676636',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'PWA'],
    platforms: ['iOS', 'Android'],
    featured: true,
    order: 1
  },
  {
    id: 'kage',
    name: 'Kage',
    tagline: 'Minimalist Habit Tracker',
    description: 'Build and maintain positive habits with a clean, distraction-free interface. Kage helps you stay consistent with visual progress tracking, streak monitoring, and daily reminders designed to keep you accountable on your personal development journey.',
    appStoreUrl: 'https://apps.apple.com/us/app/kage-habit-app/id6751781547',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.kage.app',
    appId: '6751781547',
    tech: ['SwiftUI (iOS)', 'React + Capacitor (Android)', 'date-fns', 'dnd-kit'],
    platforms: ['iOS', 'Android'],
    featured: true,
    order: 2
  },
  {
    id: 'kioku',
    name: 'Kioku',
    tagline: 'Visual Task Scheduling',
    description: 'Transform task management into an intuitive visual experience. Drag unassigned tasks onto your calendar to schedule them like solving a puzzle. Features category-based duration estimates, auto-regenerating recurring tasks, and a brain dump mode for quick capture without categorization.',
    appStoreUrl: 'https://apps.apple.com/us/app/kioku-task-tracker/id6754204721',
    playStoreUrl: 'https://play.google.com/apps/testing/com.kioku.tracker',
    playStoreStatus: 'In Review',
    appId: '6754204721',
    tech: ['Flutter', 'SQLite', 'Provider', 'Drag & Drop UI'],
    platforms: ['iOS', 'Android'],
    featured: true,
    order: 3
  }
];
