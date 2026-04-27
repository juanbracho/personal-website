// Shared content for all four directions
window.JUAN = {
  name: "Juan Bracho",
  tagline: "Constant learner · AI-enabled app builder",
  location: "Austin, TX",
  langs: ["Español", "English", "Italiano"],
  bio: "From studying law in Venezuela to building mobile apps in the U.S. — I emigrated twice, traded courtroom for code, and now build small apps that solve my own problems and ship them on iOS and Android in case they help someone else.",
  bioShort: "Lawyer turned builder. Two emigrations, three languages, three apps shipped this year.",

  apps: [
    { id: "kaizen", name: "Kaizen", tag: "Routine & workout tracking",
      blurb: "Organize routines, track sessions, watch progress.",
      tech: ["Flutter", "Dart"], color: "#c4633c", glyph: "改善" },
    { id: "kage", name: "Kage", tag: "Minimalist habit tracker",
      blurb: "Streaks, reminders, distraction-free.",
      tech: ["React", "Capacitor", "PWA"], color: "#5e6b4a", glyph: "影" },
    { id: "kioku", name: "Kioku", tag: "Visual task scheduling",
      blurb: "Drag tasks onto calendar like a puzzle.",
      tech: ["Flutter", "SQLite"], color: "#a08456", glyph: "記憶" },
  ],

  articles: [
    { id: "jack", title: "A Jack of All Trades", date: "Mar 2025",
      excerpt: "Why being a generalist became my edge after two emigrations and four careers.",
      tags: ["Personal", "Career"], read: "6 min", img: "assets/articles/jack_of_all_trades.png" },
    { id: "money", title: "I Built My Own Money-Tracking App", date: "Feb 2025",
      excerpt: "Kanso, intention, and why every off-the-shelf budget app felt wrong.",
      tags: ["Building", "Finance"], read: "8 min", img: "assets/articles/Kanso.png" },
    { id: "first-world", title: "What is a First World Country?", date: "Jan 2025",
      excerpt: "Living in three countries taught me the label means less than we think.",
      tags: ["Essay", "Immigration"], read: "5 min", img: "assets/articles/1st_world.jpeg" },
    { id: "ai", title: "How to Use AI to Build WITH You", date: "Jun 2025",
      excerpt: "The 90% Confidence Rule and a four-phase pattern for human + AI development.",
      tags: ["AI", "Building"], read: "7 min" },
    { id: "immigrant", title: "What Does It Mean to Be an Immigrant?", date: "Apr 2025",
      excerpt: "On displacement, dignity, and the search for a place that feels like yours.",
      tags: ["Immigration", "Essay"], read: "6 min" },
  ],

  books: [
    { title: "The Comfort Crisis", author: "Michael Easter", rating: 10, year: 2025 },
    { title: "Tiny Habits", author: "B.J. Fogg", rating: 10, year: 2025 },
    { title: "Stolen Focus", author: "Johann Hari", rating: 10, year: 2025 },
    { title: "The DOSE Effect", author: "TJ Power", rating: 10, year: 2025 },
    { title: "The Book of Charlie", author: "David Von Drehle", rating: 10, year: 2025 },
    { title: "Psychology of Money", author: "Morgan Housel", rating: 10, year: 2025 },
    { title: "When Breath Becomes Air", author: "Paul Kalanithi", rating: 10, year: 2026 },
    { title: "Digital Minimalism", author: "Cal Newport", rating: 10, year: 2025 },
  ],

  timeline: [
    { year: "2018", where: "Maracaibo, VE", what: "Bachelor of Law" },
    { year: "2020", where: "Buenos Aires, AR", what: "Emigrated. Project admin at Avaya." },
    { year: "2022", where: "Buenos Aires → Texas", what: "Master in Corporate Law. Emigrated again." },
    { year: "2022", where: "Texas, US", what: "Project administrator at Atwell." },
    { year: "2024", where: "Austin, TX", what: "Data analytics bootcamp at UT Austin." },
    { year: "2025", where: "Austin, TX", what: "Executive Assistant at HydroGraph. Shipped 3 apps." },
  ],
};
