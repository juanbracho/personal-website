// src/components/appSupportData.js
// Support and FAQ content for all apps

export const supportContent = {
  kioku: {
    email: "brachojuan45@gmail.com",
    responseTime: "1-2 business days",
    categories: {
      gettingStarted: {
        title: "📅 Getting Started with Kioku",
        faqs: [
          {
            question: "How do I schedule my first task in Kioku?",
            answer: "Create a task by tapping the \"+\" button, give it a name and category, then drag it from the unassigned section onto your calendar timeline to schedule it. The drag-and-drop interface makes scheduling visual and intuitive."
          },
          {
            question: "What is the Brain Dump feature?",
            answer: "Brain Dump lets you quickly capture ideas and tasks without categorizing them first. Just type your thought and save it. Later, you can convert these items into proper tasks with categories, durations, and schedules."
          },
          {
            question: "How do categories and durations work?",
            answer: "Kioku uses category-based duration presets (Health, Pets, Home, Personal). Each category has typical duration options to help you estimate task time more accurately. For example, Health tasks offer 5, 10, 15, 20, 25, or 30 minute options."
          }
        ]
      },
      tasksSubtasks: {
        title: "✅ Tasks & Subtasks",
        faqs: [
          {
            question: "How do I add subtasks to a task?",
            answer: "Open the task details modal by tapping on a task, then use the \"+ Add\" button in the Subtasks section. Each subtask can have its own duration and can be scheduled independently or as part of the parent task."
          },
          {
            question: "What happens to recurring tasks when I complete them?",
            answer: "When you complete a recurring task (daily, weekly, or monthly), Kioku automatically creates a new instance for the next occurrence. The new task starts unscheduled, so you can drag it onto your calendar when you're ready."
          },
          {
            question: "How do I handle overdue tasks?",
            answer: "Overdue tasks appear in a separate section with a red border and show how many days ago they were scheduled. Simply drag them to a new time slot to reschedule, or mark them complete if you've finished them."
          }
        ]
      },
      privacyData: {
        title: "🔒 Privacy & Data",
        faqs: [
          {
            question: "Is my task data private in Kioku?",
            answer: "Yes! All your tasks, schedules, brain dump items, and subtasks are stored locally on your device. We don't collect or store any of your personal task data on our servers. Your privacy is our top priority."
          },
          {
            question: "Can I export my task data?",
            answer: "Go to Settings and use the \"Export Data\" option to create a backup of all your tasks, routines, and schedules in JSON format. You can save this file and import it on another device if needed."
          }
        ]
      }
    }
  },

  kage: {
    email: "brachojuan45@gmail.com",
    responseTime: "1-2 business days",
    categories: {
      gettingStarted: {
        title: "🚀 Getting Started with Kage",
        faqs: [
          {
            question: "How do I create my first goal in Kage?",
            answer: "Navigate to the Goals section and tap the \"+\" button. Give your goal a name, choose an icon and color, set a target date, and add any description. You can then break down your goal into actionable tasks."
          },
          {
            question: "How do I track my habits?",
            answer: "Go to the Habits section and create a new habit with the \"+\" button. Set how often you want to do it (daily, weekly, or custom), and start tracking by marking it complete each time you do it."
          },
          {
            question: "Is my data private in Kage?",
            answer: "Yes! All your data is stored locally on your device. We don't collect or store your personal information, goals, habits, or journal entries on our servers. Your privacy is our priority."
          }
        ]
      },
      goalsTasks: {
        title: "🎯 Goals & Tasks",
        faqs: [
          {
            question: "How do I break down a goal into tasks?",
            answer: "When viewing a goal, you can add tasks that help you achieve it. Tasks can have due dates, priorities, and detailed descriptions. Complete tasks to make progress toward your goal."
          },
          {
            question: "Can I set deadlines for my goals?",
            answer: "Yes! When creating or editing a goal, you can set a target completion date. Kage will help you track your progress and stay on schedule."
          }
        ]
      }
    }
  },

  kaizen: {
    email: "brachojuan45@gmail.com",
    responseTime: "1-2 business days",
    categories: {
      gettingStarted: {
        title: "🏋️ Getting Started with Kaizen",
        faqs: [
          {
            question: "How do I create my first workout routine?",
            answer: "Navigate to the Routines tab and tap the \"+\" button. Give your routine a name, add exercises from our database, set the number of sets and reps for each exercise, and save. You can then start workouts based on this routine."
          },
          {
            question: "What is \"Go Rogue\" mode?",
            answer: "\"Go Rogue\" lets you create spontaneous workouts without following a preset routine. Just select exercises on the fly and track your sets and reps. Perfect for when you want flexibility in your training."
          },
          {
            question: "How do I track my personal records?",
            answer: "Kaizen automatically tracks your best performances for each exercise. When you complete sets with higher weight or more reps than before, it will be recorded as a new personal record in the Analytics section."
          }
        ]
      },
      dataAnalytics: {
        title: "📊 Data & Analytics",
        faqs: [
          {
            question: "How do I export my workout data?",
            answer: "Go to Settings and look for the \"Export Data\" option. This will create a backup file containing all your workouts, routines, personal records, and settings. You can save this file and import it on another device."
          },
          {
            question: "Can I set goals for specific exercises?",
            answer: "Yes! In the Goals section, you can set targets for weight and reps for each exercise. Kaizen will track your progress and show you how close you are to achieving your goals."
          },
          {
            question: "Is my fitness data private?",
            answer: "Absolutely! All your workout data, personal records, and fitness information stays on your device. We don't collect or store any of your personal fitness data on our servers."
          }
        ]
      }
    }
  }
};

// Helper function to get support content
export const getSupportContent = (appId) => {
  return supportContent[appId] || null;
};
