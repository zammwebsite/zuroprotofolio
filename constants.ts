
import type { Project, Experience } from './types';

export const GITHUB_USERNAME = 'google'; // Replace with a real username to fetch projects, e.g., 'vercel'

export const SOCIAL_LINKS = {
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  twitter: 'https://twitter.com',
  instagram: 'https://instagram.com',
};

export const FALLBACK_PROJECTS: Project[] = [
  {
    id: 1,
    name: 'Project Alpha',
    description: 'A cutting-edge web application for data visualization using AI.',
    html_url: '#',
    homepage: '#',
    topics: ['React', 'TailwindCSS', 'AI API'],
    thumbnail: 'https://picsum.photos/seed/alpha/600/400',
  },
  {
    id: 2,
    name: 'Service Beta',
    description: 'Cloud-native backend service for a large-scale mobile app.',
    html_url: '#',
    homepage: '#',
    topics: ['Node.js', 'Firebase', 'Cloud'],
    thumbnail: 'https://picsum.photos/seed/beta/600/400',
  },
  {
    id: 3,
    name: 'UI/UX Gamma',
    description: 'A complete design system and component library for a SaaS platform.',
    html_url: '#',
    homepage: null,
    topics: ['UI/UX', 'Figma', 'React'],
    thumbnail: 'https://picsum.photos/seed/gamma/600/400',
  },
  {
    id: 4,
    name: 'Delta Platform',
    description: 'An integrated platform for creative professionals.',
    html_url: '#',
    homepage: '#',
    topics: ['Next.js', 'PostgreSQL', 'Vercel'],
    thumbnail: 'https://picsum.photos/seed/delta/600/400',
  },
    {
    id: 5,
    name: 'Epsilon Mobile',
    description: 'Cross-platform mobile app for productivity.',
    html_url: '#',
    homepage: '#',
    topics: ['React Native', 'TypeScript', 'GraphQL'],
    thumbnail: 'https://picsum.photos/seed/epsilon/600/400',
  },
  {
    id: 6,
    name: 'Zeta Integration',
    description: 'Third-party API integration for an e-commerce giant.',
    html_url: '#',
    homepage: null,
    topics: ['API Integration', 'Stripe', 'Node.js'],
    thumbnail: 'https://picsum.photos/seed/zeta/600/400',
  },
];


export const EXPERIENCES: Experience[] = [
  {
    year: '2023 - Present',
    company: 'Tech Innovators Inc.',
    role: 'Senior Frontend Developer',
    description: 'Leading the development of a new user-facing dashboard, focusing on performance and user experience.',
    technologies: ['React', 'TypeScript', 'Next.js', 'Vercel'],
  },
  {
    year: '2021 - 2023',
    company: 'Creative Solutions',
    role: 'Full-Stack Developer',
    description: 'Developed and maintained web applications for various clients, from e-commerce sites to internal tools.',
    technologies: ['Node.js', 'React', 'Firebase', 'AWS'],
  },
  {
    year: '2020 - 2021',
    company: 'Design First Studio',
    role: 'UI/UX Designer & Developer',
    description: 'Bridged the gap between design and development, creating beautiful and functional user interfaces.',
    technologies: ['Figma', 'React', 'CSS-in-JS'],
  },
];
