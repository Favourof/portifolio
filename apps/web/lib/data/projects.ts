export type Project = {
  slug: string
  title: string
  summary: string
  challenge: string
  solution: string
  impact: string
  role: string
  stack: string[]
  featured?: boolean
  githubUrl?: string
  liveUrl?: string
}

export const projects: Project[] = [
  {
    slug: "mern-auth-system",
    title: "MERN Auth System",
    summary:
      "A production-ready authentication system with secure signup, login, email verification, password reset, token rotation, and role-based access control.",
    challenge:
      "Many applications need a secure authentication foundation before they can scale confidently.",
    solution:
      "I built a complete auth flow with JWT, refresh-token rotation, email verification, password reset, rate limiting, and role-based access control.",
    impact:
      "The system gives any app a safer, production-minded starting point for user management and access control.",
    role: "Full-stack ownership",
    stack: ["Node.js", "Express.js", "TypeScript", "MongoDB", "JWT", "bcryptjs"],
    featured: true,
    githubUrl: "https://github.com/Favourof/mern-auth-system",
  },
  {
    slug: "expense-tracker",
    title: "Expense Tracker",
    summary:
      "A full-stack app that helps users record income, track spending, and understand their money flow in one place.",
    challenge:
      "Users need a simple way to see where their money is going and make better financial decisions.",
    solution:
      "I built a structured full-stack experience for logging financial activity, viewing balances, and tracking user spending behavior.",
    impact:
      "The app helps users make smarter decisions by giving them a clear picture of income and expenses.",
    role: "Frontend and backend development",
    stack: ["React", "API", "Deployment"],
    featured: true,
    githubUrl: "https://github.com/Favourof/expense-tracker",
    liveUrl: "https://expense-tracker-Front-end.vercel.app",
  },
  {
    slug: "microservice-ecommerce",
    title: "Microservice Ecommerce",
    summary:
      "A microservice-based e-commerce backend built to split major business areas into separate services.",
    challenge: "As systems grow, a monolith becomes harder to maintain and scale.",
    solution:
      "I separated the backend into service-oriented parts so each business concern could evolve more safely and independently.",
    impact:
      "The architecture makes future scaling, maintenance, and feature expansion easier to manage.",
    role: "Backend architecture and service-level development",
    stack: ["Microservices", "Node.js", "API design"],
    featured: true,
    githubUrl: "https://github.com/Favourof/bankend-microservice-ecormmrce",
  },
  {
    slug: "payverse-backend",
    title: "PayVerse Backend",
    summary:
      "A backend service for payment or finance workflows built around structured APIs and safe business logic.",
    challenge:
      "Financial systems need reliability, control, and careful handling of sensitive operations.",
    solution:
      "I designed the backend around controlled API flows and careful business logic for sensitive operations.",
    impact:
      "The project shows how I think about safe data handling and dependable backend systems.",
    role: "Backend development",
    stack: ["Backend APIs", "Business logic", "Data handling"],
    githubUrl: "https://github.com/Favourof/payVerse-backend",
  },
  {
    slug: "crime",
    title: "Crime System",
    summary:
      "A client-server application for managing crime-related data, reporting, or monitoring workflows.",
    challenge:
      "Separating frontend and backend makes the system easier to maintain, extend, and scale.",
    solution:
      "I built the client and server as separate layers so the app could stay organized and easier to evolve.",
    impact:
      "The structure makes the system cleaner to work on and easier for teams to maintain.",
    role: "Full-stack development",
    stack: ["Frontend", "Backend", "Client-server architecture"],
    githubUrl: "https://github.com/Favourof/crime",
  },
]
