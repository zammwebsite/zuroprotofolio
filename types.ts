// Fix: Import ReactElement to resolve JSX namespace issue.
import type { ReactElement } from 'react';

export interface Project {
  id: number | string;
  name: string;
  // Fix: Allow description to be null to match GitHub API response.
  description: string | null;
  html_url: string;
  homepage: string | null;
  topics: string[];
  // Fix: Add optional fork property to align with GitHub API and fix type error in githubService.
  fork?: boolean;
  owner?: {
    avatar_url: string;
  };
  thumbnail?: string;
}

export interface Experience {
  year: string;
  company: string;
  role: string;
  description: string;
  technologies: string[];
}

export interface Skill {
  name: string;
  // Fix: Use ReactElement type for component icons to resolve JSX namespace issue.
  icon: ReactElement;
}
