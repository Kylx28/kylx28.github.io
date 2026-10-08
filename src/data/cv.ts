export interface CVItem {
  period: string
  title: string
  place: string
  detail: string
  tags?: string[]
  url?: string
}

export interface SelectedCourse {
  code: string
  name: string
  description: string
  url: string
  category: 'Machine Learning & AI' | 'Controls & Robotics' | 'Math'
}

export const cvSections: Array<{ title: string; items: CVItem[] }> = [
  { title: 'Education', items: [
    { period: '2022 — 2027', title: 'BASc, Computer Engineering', place: 'University of Toronto', detail: 'Concentration in robotics, control systems, and AI.' },
  ] },
  { title: 'Experience', items: [
    { period: 'May 2025 - Apr 2026', title: 'AI Networking Intern', place: 'Huawei Canada', detail: 'Worked on control plane networking solutions for mixture-of-experts LLM training and inference.', tags: ['Python', 'vLLM', 'GPU Cluster'] },
  ] },
  { title: 'Research', items: [
    { period: 'May 2026 — Present', title: 'Reinforcement Learning Research Intern ', place: 'National University of Singapore', detail: 'Residual reinforcement learning for continuous-space multi agent pathfinding.', tags: ['Python', 'PyTorch', 'RL'] },
    { period: 'May 2024 — Sept 2024', title: 'Wireless Localization Research Intern', place: 'University of Toronto', detail: 'Localization and tracking using reconfigurable intelligence surfaces in 6G wireless networks.', tags: ['MATLAB']},
  ] },
  { title: 'Design Team', items: [
    {period: 'Sept 2026 - Present', title: 'aUToronto Motion Prediction Member', place: 'University of Toronto', detail: 'Implementing motion prediction models for the autonomous driving stack.', tags: ['C++', 'ROS 2', 'PyTorch']},
    {period: 'Sept 2023 - Dec 2025', title: 'Autonomous Drone Racing Team Member', place: 'University of Toronto', detail: 'Implemented state estimation and localization algorithms for autonomous drones.', tags: ['C++', 'ROS', 'OpenCV']}
  ]},
  { title: 'Publications', items: [
    { period: '2025', title: 'Cooperative Localization and Tracking Using RISs and Sidelink Communications', place: 'Conference', detail: 'M. Ammous*, K. Sabado*, M. Saif and S. Valaee', url: 'https://ieeexplore.ieee.org/document/10978292' },
  ] },
]

export const selectedCourses: SelectedCourse[] = [
  {
    code: 'ECE367',
    name: 'Matrix Algebra & Optimization',
    description: 'Linear algebra and matrix decompositions; unconstrained and constrained linear/nonlinear optimization.',
    url: 'https://engineering.calendar.utoronto.ca/course/ece367h1',
    category: 'Math',
  },
  {
    code: 'ECE368',
    name: 'Probabilistic Reasoning',
    description: 'Probabilistic modeling and inference using multivariate Gaussian models, hidden Markov models, factor graphs, hypothesis testing, estimation, marginalization, and message passing.',
    url: 'https://engineering.calendar.utoronto.ca/course/ece368h1',
    category: 'Math',
  },
  {
    code: 'ECE421',
    name: 'Introduction to Machine Learning',
    description: 'Machine learning fundamentals covering supervised and unsupervised methods, neural networks, SVMs, PCA, clustering, Gaussian mixtures, generalization theory, and regularization.',
    url: 'https://engineering.calendar.utoronto.ca/course/ece421h1',
    category: 'Machine Learning & AI',
  },
  {
    code: 'APS360',
    name: 'Applied Fundamentals of Deep Learning',
    description: 'Applied deep learning covering neural networks, autoencoders, recurrent models, transformers, GANs, and GNNs. Also features a team-based course project.',
    url: 'https://engineering.calendar.utoronto.ca/course/aps360h1',
    category: 'Machine Learning & AI',
  },
  {
    code: 'CSC384',
    name: 'Introduction to Artificial Intelligence',
    description: 'Artificial intelligence fundamentals covering search, logical reasoning, automated planning, probabilistic reasoning, learning, and decision-making under uncertainty.',
    url: 'https://artsci.calendar.utoronto.ca/course/csc384h1',
    category: 'Machine Learning & AI',
  },
  {
    code: 'CSC413',
    name: 'Neural Networks and Deep Learning',
    description: 'A rigorous treatment of neural networks and deep learning.',
    url: 'https://artsci.calendar.utoronto.ca/course/csc413h1',
    category: 'Machine Learning & AI',
  },
  {
    code: 'ECE410',
    name: 'Linear Control Systems',
    description: 'Linear state-space control covering stability, controllability, observability, state feedback, observers, tracking, and LQR optimal control.',
    url: 'https://engineering.calendar.utoronto.ca/course/ece410h1',
    category: 'Controls & Robotics',
  },
  {
    code: 'ECE470',
    name: 'Robot Modeling and Control',
    description: 'Robot manipulator kinematics, trajectory and path planning, dynamics, and nonlinear control methods including computed torque, passivity-based control, and feedback linearization.',
    url: 'https://engineering.calendar.utoronto.ca/course/ece470h1',
    category: 'Controls & Robotics',
  },
  {
    code: 'MAT336',
    name: 'Elements of Analysis',
    description: 'Introduction to real analysis.',
    url: 'https://artsci.calendar.utoronto.ca/course/mat336h1',
    category: 'Math',
  },
]

export const skills = [
  { group: 'Languages', values: ['Python', 'C++', 'C', 'MATLAB/Simulink', 'Java', 'Verilog'] },
  { group: 'Robotics', values: ['ROS', 'OpenCV', 'MuJoCo'] },
  { group: 'ML / AI', values: ['PyTorch', 'Hugging Face', 'vLLM', 'Weights & Biases'] },
  { group: 'Systems', values: ['Linux', 'Docker', 'Ray', 'Distributed Deep Learning'] },
]
