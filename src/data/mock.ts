export interface Author {
  name: string;
  avatarUrl: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  imageUrl: string;
  author: Author;
  rank?: number;
}

export const FEATURED_ARTICLES: Article[] = [
  {
    id: "f1",
    title: "The Architecture of Silence: Finding Focus in a Noisy World",
    excerpt: "In an era defined by constant connectivity, the intentional curation of silence is becoming our most valuable luxury.",
    category: "Culture",
    date: "2023-10-15",
    readTime: "8 min read",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
    author: {
      name: "Elias Thorne",
      avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: "f2",
    title: "Synthesizing Nature: The Future of Sustainable Materials",
    excerpt: "How biomimicry and advanced material science are merging to create fabrics that heal the environment rather than harm it.",
    category: "Science",
    date: "2023-10-12",
    readTime: "12 min read",
    imageUrl: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=1200",
    author: {
      name: "Dr. Amara Lin",
      avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: "f3",
    title: "The Renaissance of Slow Travel",
    excerpt: "Moving away from itinerary-driven vacations toward immersive, deliberate journeys that foster genuine connection.",
    category: "Lifestyle",
    date: "2023-10-08",
    readTime: "6 min read",
    imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200",
    author: {
      name: "Julian Vance",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

export const TRENDING_ARTICLES: Article[] = [
  {
    id: "t1",
    rank: 1,
    title: "Decoding the algorithms of human memory",
    category: "Science",
    date: "2023-10-18",
    readTime: "7 min read",
    imageUrl: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=600",
    excerpt: "",
    author: { name: "Sarah Chen", avatarUrl: "" },
  },
  {
    id: "t2",
    rank: 2,
    title: "The aesthetic principles of modern minimalism",
    category: "Design",
    date: "2023-10-17",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=600",
    excerpt: "",
    author: { name: "Marcus Reed", avatarUrl: "" },
  },
  {
    id: "t3",
    rank: 3,
    title: "Navigating the ethical dilemmas of AI art",
    category: "Technology",
    date: "2023-10-16",
    readTime: "9 min read",
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600",
    excerpt: "",
    author: { name: "Elena Rostova", avatarUrl: "" },
  },
  {
    id: "t4",
    rank: 4,
    title: "The psychology behind our relationship with money",
    category: "Finance",
    date: "2023-10-14",
    readTime: "11 min read",
    imageUrl: "https://images.unsplash.com/photo-1611024847487-e26177381a3e?auto=format&fit=crop&q=80&w=600",
    excerpt: "",
    author: { name: "David Kim", avatarUrl: "" },
  },
  {
    id: "t5",
    rank: 5,
    title: "Culinary traditions lost and found",
    category: "Culture",
    date: "2023-10-13",
    readTime: "8 min read",
    imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=600",
    excerpt: "",
    author: { name: "Maria Garcia", avatarUrl: "" },
  },
];

export const LATEST_ARTICLES: Article[] = [
  {
    id: "l1",
    title: "The Hidden Impact of Urban Green Spaces on Mental Health",
    excerpt: "New studies reveal that access to nature in cities is not just an amenity—it is a public health necessity.",
    category: "Health",
    date: "2023-10-19",
    readTime: "6 min read",
    imageUrl: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=800",
    author: { name: "Chloe Winters", avatarUrl: "" },
  },
  {
    id: "l2",
    title: "Demystifying Quantum Computing for the Layperson",
    excerpt: "Breaking down qubits, superposition, and entanglement without the complex mathematics.",
    category: "Technology",
    date: "2023-10-18",
    readTime: "14 min read",
    imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800",
    author: { name: "Dr. James Aris", avatarUrl: "" },
  },
  {
    id: "l3",
    title: "The Art of the Handwritten Letter in a Digital Age",
    excerpt: "Why returning to pen and paper might be the ultimate form of modern rebellion.",
    category: "Lifestyle",
    date: "2023-10-17",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800",
    author: { name: "Sylvia Plath", avatarUrl: "" },
  },
  {
    id: "l4",
    title: "Understanding Market Cycles Beyond the Headlines",
    excerpt: "A historical perspective on boom and bust cycles and what they teach us about human behavior.",
    category: "Finance",
    date: "2023-10-16",
    readTime: "9 min read",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800",
    author: { name: "Robert Kiyosaki", avatarUrl: "" },
  },
  {
    id: "l5",
    title: "Forgotten Philosophies of the Ancient World",
    excerpt: "Stoicism is popular, but what about Epicureanism, Cynicism, and the lost wisdom of the East?",
    category: "Culture",
    date: "2023-10-15",
    readTime: "11 min read",
    imageUrl: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800",
    author: { name: "Marcus Aurelius", avatarUrl: "" },
  },
  {
    id: "l6",
    title: "The Mechanics of Taste: How We Perceive Flavor",
    excerpt: "An exploration of the sensory science behind why we love what we eat.",
    category: "Science",
    date: "2023-10-14",
    readTime: "7 min read",
    imageUrl: "https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?auto=format&fit=crop&q=80&w=800",
    author: { name: "Julia Child", avatarUrl: "" },
  },
];

export const CATEGORIES = [
  "Technology", "Lifestyle", "Travel", "Culture", 
  "Business", "Health", "Science", "Finance"
];
