export interface BioPart {
  text: string
  emphasis?: boolean
  href?: string
  newLine?: boolean
}

export const profile = {
  name: 'Kyle Sabado',
  // role: 'Machine Learning · Robotics · AI Systems',
  bio: [
    { text: 'I\'m a fourth-year Computer Engineering student at the ' },
    { text: 'University of Toronto', emphasis: true },
    { text: ', specializing in machine learning and control systems. My interests include robotic control and deep learning for robotics.' },
    { text: ' I\'ve also worked on optimizing training and inference systems for LLMs.'},
    { text: 'Currently: researching multi-agent reinforcement learning at ', newLine: true },
    { text: 'MARMoT Lab (NUS)', emphasis: true, href: 'https://marmotlab.org/index.html' },
    { text: '.' },
    { text: 'Previously: AI networking at ', newLine: true },
    { text: 'Huawei Canada', emphasis: true, href: 'https://www.linkedin.com/company/huawei-technologies-canada-co-ltd/' },
    { text: ' and 6G localization research at ' },
    { text: 'WIRLab (UofT)', emphasis: true, href: 'https://www.wirlab.utoronto.ca/'},
    { text: '.'}
  ] as BioPart[],
  affiliation: 'Computer Engineering @ University of Toronto. Robotics Research @ MARMoT Lab.',
  interests: ['Robotics', 'Machine Learning', 'AI Systems'],
  links: {
    email: 'mailto:kyle.sabado@mail.utoronto.ca',
    github: 'https://github.com/Kylx28',
    linkedin: 'https://www.linkedin.com/in/kylesabado',
  },
  emailLabel: 'kyle.sabado@mail.utoronto.ca',
  cvPdf: `${import.meta.env.BASE_URL}images/kyle_sabado_resume_short_2026.pdf`,
}
