// Portfolio projects - based on real experience
export const projects = [
  {
    title: "Chat Messaging",
    description:
      "A scalable chat messaging system developed at Instabug using Ruby on Rails and Golang microservices. The system handles heavy concurrent API requests with optimized MySQL indexing, ElasticSearch for searching capabilities, and Redis for handling race conditions.",
    shortDescription: "A scalable chat messaging system built with Ruby on Rails and Golang microservices, optimized for handling concurrent requests.",
    image: "/blog-placeholder-3.jpg",
    tags: ["Ruby on Rails", "MySQL", "ElasticSearch", "Redis", "Docker"],
    id: "chat-messaging",
    link: null,
    github: "https://github.com/AmrRiyad/chat-app",
  },
  {
    title: "Store Mobile App",
    description:
      "Designed and launched a Flutter-based mobile application for a store that streamlines the ordering process. Integrated Firebase as a NoSQL database for real-time updates and developed a comprehensive dashboard to manage orders and track inventory. Implemented SQLite to locally store data such as cart items and favorite products.",
    shortDescription: "Flutter-based mobile application for streamlining store ordering processes with real-time updates using Firebase and local storage with SQLite.",
    image: "/blog-placeholder-4.jpg",
    tags: ["Flutter", "Firebase", "SQLite", "Mobile Development", "NoSQL"],
    id: "store-mobile-app",
    link: "https://play.google.com/store/apps/details?id=com.jozor.riyad_afandy",
    github: null,
  },
]; 