
import type { Project } from '../types';

export const fetchGithubProjects = async (username: string): Promise<Project[]> => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&direction=desc`);
    if (!response.ok) {
      console.error('Failed to fetch GitHub projects');
      return [];
    }
    const data: Project[] = await response.json();
    return data.filter(repo => repo.description && !repo.fork).slice(0, 6);
  } catch (error) {
    console.error('Error fetching GitHub projects:', error);
    return [];
  }
};
