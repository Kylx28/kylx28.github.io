export type ProjectCategory = 'Robotics' | 'AI / ML' | 'Systems' | 'Computer Vision' | 'Research' | 'C++' | 'Other'

export interface ProjectMetric { value: string; label: string }
export interface ProjectLink { label: string; url: string }
export interface ProjectSection { title: string; body: string }

export interface Project {
  slug: string
  title: string
  description: string
  year: string
  order?: number
  categories: ProjectCategory[]
  tags: string[]
  status?: string
  featured?: boolean
  thumbnail: string
  links?: ProjectLink[]
  inspiration?: ProjectLink[]
  sections: ProjectSection[]
  metrics?: ProjectMetric[]
  video?: { src: string; title: string; caption?: string }
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
    order: 2,
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
    slug: 'robot-get-up-action-priors',
    title: 'Humanoid Robot Get-Up Using Action Priors',
    description: 'Training a Unitree G1 humanoid to stand from fallen poses using demonstration-guided reinforcement learning in MuJoCo.',
    year: '2026',
    order: 1,
    categories: ['Robotics', 'AI / ML', 'Research'],
    tags: ['PyTorch', 'MuJoCo', 'PPO'],
    status: 'In Progress',
    featured: true,
    thumbnail: asset('images/mujoco-human.png'),
    video: {
      src: asset('videos/final_evaluation_supine_slerp.mp4'),
      title: 'Supine Get-Up Evaluation',
      caption: 'Evaluation rollout of the humanoid standing from an initial supine position.',
    },
    links: [{ label: 'GitHub', url: 'https://github.com/Kylx28/apex-robot-getup' }],
    inspiration: [
      { label: 'Demonstration-Guided Humanoid Stand-Up on an Emulated Deformable Surface', url: 'https://arxiv.org/pdf/2608.20852' },
      { label: 'APEX: Action Priors Enable Efficient Exploration for Robust Motion Tracking on Legged Robots', url: 'https://arxiv.org/pdf/2505.10022' },
    ],
    sections: [
      { title: 'Overview', body: 'A MuJoCo research project for training the 29-DoF Unitree G1 to stand from supine and prone fallen poses. The goal is to use demonstration-derived action priors during exploration while producing a final end-to-end reference free policy.' },
      { title: 'Simulation and Reference Trajectories', body: 'The project includes a deterministic G1 environment with normalized joint-position actions, joint-space PD control, and tooling to load, preprocess, calibrate, and replay get-up motions from the BONES-SEED dataset.' },
      { title: 'Training Environment', body: 'Residual policy is trained using PPO and is used to correct an existing reference trajectory.' },
      { title: 'Current Direction and Next Steps', body: 'Current work achieves stable standing from supine position using reference demonstrations. Planned extensions include decaying action priors for guided exploration during training, reference-free inference, multiple critics, and domain randomization.' },
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
      {title: 'Overview', body: 'Trained an ensemble CNN with an expert router, transfer learning, data augmentation, and class rebalancing, achieving 80% balanced accuracy on skin cancer classification and outperforming individual models by 5%.'}
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
      { title: 'Overview', body: 'Collaborated in a team of 3 to build a full-stack mapping application in C++ using the OpenStreetMap API, enabling interactive navigation and route visualization. Implemented A* for pathfinding and simulated annealing for solving traveling salesman-like problems.' },
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
      { title: 'Overview', body: 'Member of the UofT Autonomous Drone Racing team from 2023-2025. Implemented the multi-state constraint Kalman filter for drone localization. Conducted literature review on state of the art visual-inertial odometry (VIO) algorithms and tested frameworks such as VINS-Mono and OpenVINS. Helped build and setup racing gates for drone testing.' },
    ],
  },
  {
    slug: 'mapf',
    title: 'Multi Agent Pathfinding in Continuous Space Using Reinforcement Learning',
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
