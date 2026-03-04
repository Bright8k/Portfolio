export type ProjectCategory =
  | 'Development'
  | 'Design'
  | 'Social Media Management'
  | 'Graphic Designer';

export interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  link: string;
  category: ProjectCategory;
  tags: string[];
}
