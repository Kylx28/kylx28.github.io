export type ProjectCategory = 'Robotics' | 'AI / ML' | 'Systems' | 'Computer Vision' | 'Research' | 'C++' | 'Other'

export interface ProjectMetric { value: string; label: string }
export interface ProjectLink { label: string; url: string }
export interface ProjectSection { title: string; body: string }

export interface Project {
  slug: string
  title: string
  description: string
  year: string
  categories: ProjectCategory[]
  tags: string[]
  status?: string
  featured?: boolean
  thumbnail: string
  links?: ProjectLink[]
  sections: ProjectSection[]
  metrics?: ProjectMetric[]
  splat?: { src: string; poster: string }
}

export const categories: Array<'All' | ProjectCategory> = ['All', 'Robotics', 'AI / ML', 'Systems', 'Computer Vision', 'Research', 'C++', 'Other']

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const projects: Project[] = [
  {
    slug: 'gaussian-splatting-pipeline',
    title: 'Object-Centric Gaussian Splatting Pipeline',
    description: 'An end-to-end pipeline for reconstructing isolated objects as interactive 3D Gaussian splats from handheld image captures.',
    year: '2026',
    categories: ['Computer Vision', 'AI / ML'],
    tags: ['Python', 'COLMAP', 'SAM 2', 'gsplat'],
    status: 'In Progress',
    featured: true,
    thumbnail: asset('images/onitsuka-tiger.jpg'),
    links: [{ label: 'View interactive shoe splat', url: '/interests?view=onitsuka-tiger' }],
    sections: [
      { title: 'Overview', body: 'Built a reproducible capture-to-web workflow for reconstructing individual objects from a handheld image sequence and publishing the result as an interactive Gaussian splat.' },
      { title: 'Pipeline', body: 'The pipeline combines COLMAP camera reconstruction, SAM 2 foreground masks, masked gsplat training, and multi-view pruning to remove background floaters while preserving object detail.' },
      { title: 'Web delivery', body: 'Pruned PLY output is transcoded to the compact SPZ format and loaded on demand in the browser. The interactive Onitsuka Tiger capture is available in the Other Interests section.' },
    ],
  },
  {
    slug: 'skin-cancer-classifier',
    title: 'Skin Cancer Classification',
    description: 'Ensemble convolutional neural network for skin lesion classification on the HAM10000 dataset.',
    year: '2025',
    categories: ['AI / ML'],
    tags: ['Python', 'PyTorch', 'Scikit-Learn'],
    status: 'Completed',
    featured: true,
    thumbnail: asset('images/ensemble_arch.png'),
    links: [{ label: 'GitHub', url: 'https://github.com/vancityaziz/ML-for-Skin-Cancer-Classification' }],
    sections: [
      {title: 'Overview', body: 'Built an ensemble CNN model in a team of 4, outperforming individual model baselines by +5% accuracy on skin lesion image classification.'}
    ],
  },
  {
    slug: 'mapping-app',
    title: 'Mapping Application With A* Search',
    description: 'A google maps-like mapping application built in C++ using the OpenStreetMap API.',
    year: '2023',
    categories: ['Systems', 'C++'],
    tags: ['C++'],
    status: 'Completed',
    featured: true,
    thumbnail: asset('images/mapping-app.png'),
    sections: [
      { title: 'Overview', body: 'Collaborated in a team of 3 to build a full-stack mapping application in C++ using the OpenStreetMap API, enabling interactive navigation and route visualization.' },
    ],
  },
  {
    slug: 'design-team',
    title: 'Autonomous Drone Racing',
    description: 'Developed state estimation and localization algorithms for the UofT Autonomous Drone Racing team.',
    year: '2025',
    categories: [ 'Robotics', 'Computer Vision', 'C++'],
    tags: ['ROS', 'C++', 'Linux'],
    status: 'Completed',
    featured: true,
    thumbnail: asset('images/utadr.jpeg'),
    links: [{ label: 'GitHub', url: 'https://github.com/Kylx28/MSCKF_ADR' }],
    sections: [
      { title: 'Overview', body: 'Team member of the autonomous drone racing team from 2023-2025. Implemented the multi-state constraint kalman filter for drone localization. Conducted literature review and tested other algorithms including VINS-Mono and IMU preintegration.' },
    ],
  },
  {
    slug: 'mapf',
    title: 'Continuous Multi Agent Pathfinding',
    description: 'Researching residual reinforcement learning for multi agent pathfinding in continuous-space.',
    year: '2026',
    categories: ['Robotics', 'AI / ML'],
    tags: ['Python', 'PyTorch', 'RL'],
    status: 'In Progress',
    thumbnail: asset('images/step_000000507904_episode_000.gif'),
    links: [{ label: 'Research Project', url: 'https://marmotlab.org/projects/mapf.html' }],
    sections: [
      { title: 'Overview', body: 'Using reinforcement learning to train a residual policy on top of a search-based expert planner.' },
    ],
  },
]

export const getProject = (slug?: string) => projects.find((project) => project.slug === slug)
