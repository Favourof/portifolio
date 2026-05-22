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
  image?: {
    src: string
    alt: string
  }
}

export const projects: Project[] = [
  {
    slug: "node-event-loop-optimization",
    title: "Node.js Performance Optimization",
    summary:
      "A profiling case study that cut request latency from 3.5 seconds to 54 milliseconds by removing event-loop bottlenecks.",
    challenge:
      "The system was spending too much time in a CPU-bound path, which made every request feel slow under load.",
    solution:
      "I profiled the hot path, moved expensive work off the event loop, and used Worker Threads to keep the API responsive.",
    impact:
      "The final result was a 98% latency reduction and a much clearer picture of how to diagnose Node.js performance issues.",
    role: "Performance engineering and diagnosis",
    stack: ["Node.js", "Worker Threads", "Profiling", "Load testing"],
    featured: true,
    githubUrl:
      "https://github.com/Favourof/profiling-and-performance-optimization-node.js",
    image: {
      src: "/images/projects/node-event-loop-optimization.svg",
      alt: "Node.js performance optimization cover image",
    },
  },
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
    stack: [
      "Node.js",
      "Express.js",
      "TypeScript",
      "MongoDB",
      "JWT",
      "bcryptjs",
    ],
    featured: true,
    githubUrl: "https://github.com/Favourof/mern-auth-system",
    liveUrl: "https://client-mu-ebon.vercel.app",
    image: {
      src: "/images/projects/mern-auth-system.png",
      alt: "MERN auth system cover image",
    },
  },
  {
    slug: "microservice-ecommerce",
    title: "Ecommerce Microservices Backend",
    summary:
      "A microservice-based commerce backend that splits auth and cart concerns into separate services behind an API gateway.",
    challenge:
      "As systems grow, a monolith becomes harder to maintain, and isolated business concerns need clearer boundaries.",
    solution:
      "I separated the backend into service-oriented parts and used a gateway pattern so each concern could evolve more safely.",
    impact:
      "The architecture makes scaling, maintenance, and future feature work easier to reason about.",
    role: "Backend architecture and service-level development",
    stack: ["Microservices", "Node.js", "API Gateway", "Architecture"],
    featured: true,
    githubUrl: "https://github.com/Favourof/bankend-microservice-ecormmrce",
    image: {
      src: "/images/projects/ecommerce-microservices-backend.jpg",
      alt: "Ecommerce microservices backend cover image",
    },
  },
  {
    slug: "payverse-backend",
    title: "PayVerse Backend",
    summary:
      "A payment-focused backend that documents architecture decisions, data modeling, and the trade-offs behind a finance workflow.",
    challenge:
      "Financial systems need reliability, clear transaction boundaries, and careful handling of sensitive operations.",
    solution:
      "I designed the backend around controlled API flows, clear persistence rules, and explicit architecture trade-offs.",
    impact:
      "The project shows how I think about safe data handling, dependable systems, and practical backend choices.",
    role: "Backend development",
    stack: ["Node.js", "PostgreSQL", "Payments", "Architecture"],
    featured: true,
    githubUrl: "https://github.com/Favourof/payVerse-backend",
    image: {
      src: "/images/projects/payverse-backend.png",
      alt: "PayVerse backend cover image",
    },
  },
  {
    slug: "expense-tracker",
    title: "Expense Tracker",
    summary:
      "A full-stack expense tracker PWA that helps users record income, monitor spending, and review their money flow in one place.",
    challenge:
      "Users need a fast, installable way to track money and stay productive on mobile even when connectivity is unreliable.",
    solution:
      "I built a structured full-stack experience for logging financial activity, viewing balances, tracking spending patterns, and supporting a progressive web app workflow.",
    impact:
      "The app helps users make smarter decisions by giving them a clear picture of income and expenses in a product they can use like a native app.",
    role: "Frontend and backend development",
    stack: ["React", "PWA", "API", "Deployment"],
    githubUrl: "https://github.com/Favourof/expense-tracker",
    liveUrl: "https://expense-tracker-nine-steel.vercel.app",
    image: {
      src: "/images/projects/expense-tracker.png",
      alt: "Expense tracker cover image",
    },
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
    liveUrl: "https://crime-client-nu.vercel.app/",
    image: {
      src: "/images/projects/crime-system.png",
      alt: "Crime system cover image",
    },
  },
]
