export interface CVItem {
  period: string
  title: string
  place: string
  detail: string
  tags?: string[]
  url?: string
}

export const cvSections: Array<{ title: string; items: CVItem[] }> = [
  { title: 'Education', items: [
    { period: '2022 — 2027', title: 'BASc, Computer Engineering', place: 'University of Toronto', detail: 'Focus in robotics, control systems, and AI.' },
  ] },
  { title: 'Experience', items: [
    { period: 'May 2025 - April 2026', title: 'AI Networking Intern', place: 'Huawei Canada', detail: 'Worked on control plane networking solutions for mixture-of-experts LLM training and inference.', tags: ['Python', 'vLLM', 'GPU Cluster'] },
  ] },
  { title: 'Research', items: [
    { period: 'May 2026 — Now', title: 'Reinforcement Learning Research Intern ', place: 'National University of Singapore', detail: 'Residual reinforcement learning for continuous-space multi agent pathfinding.', tags: ['Python', 'PyTorch', 'RL'] },
    { period: 'May 2024 — September 2024', title: 'Wireless Communications Research Intern', place: 'University of Toronto', detail: 'Localization and tracking using reconfigurable intelligence surfaces in 6G wireless networks.', tags: ['MATLAB']},
  ] },
  { title: 'Design Team', items: [
    {period: 'September 2023 - December 2025', title: 'Autonomous Drone Racing Team Member', place: 'University of Toronto', detail: 'Implemented state estimation and localization algorithms for autonomous drones.', tags: ['C++', 'ROS', 'OpenCV']}
  ]},
  { title: 'Publications', items: [
    { period: '2025', title: 'Cooperative Localization and Tracking Using RISs and Sidelink Communications', place: 'Conference', detail: 'M. Ammous*, K. Sabado*, M. Saif and S. Valaee', url: 'https://ieeexplore.ieee.org/document/10978292' },
  ] },
]

export const skills = [
  { group: 'Languages', values: ['Python', 'C++', 'C', 'MATLAB', 'Java', 'Verilog'] },
  { group: 'Robotics', values: ['ROS', 'SLAM', 'OpenCV'] },
  { group: 'ML / AI', values: ['PyTorch', 'Hugging Face', 'vLLM'] },
  { group: 'Systems', values: ['Linux', 'Docker', 'Ray', 'Distributed Deep Learning'] },
]
