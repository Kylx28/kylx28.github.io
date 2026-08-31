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
    { text: 'Final Year Computer Engineering Undergraduate @ ' },
    { text: 'University of Toronto', emphasis: true },
    { text: '.' },
    { text: 'Currently: Multi-Agent Reinforcement Learning @ ', newLine: true },
    { text: 'MARMoT Lab (NUS)', emphasis: true, href: 'https://marmotlab.org/index.html' },
    { text: '.' },
    { text: 'Previously: AI Networking @ ', newLine: true },
    { text: 'Huawei Canada', emphasis: true, href: 'https://www.linkedin.com/company/huawei-technologies-canada-co-ltd/' },
    { text: ', 6G Networks Research @ ' },
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
