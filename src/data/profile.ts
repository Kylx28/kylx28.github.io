export interface BioPart {
  text: string
  emphasis?: boolean
  href?: string
}

export const profile = {
  name: 'Kyle Sabado',
  // role: 'Machine Learning · Robotics · AI Systems',
  bio: [
    { text: 'Fourth year computer engineering student at the ' },
    { text: 'University of Toronto', emphasis: true },
    { text: '. Currently researching multi agent pathfinding @ ' },
    { text: 'MARMoT Lab', emphasis: true, href: 'https://marmotlab.org/index.html' },
    { text: '. Previously an AI networking intern @ ' },
    { text: 'Huawei Canada', emphasis: true },
    { text: '.' },
  ] as BioPart[],
  affiliation: 'Computer Engineering @ University of Toronto. Robotics Research @ MARMoT Lab.',
  interests: ['Robotics', 'Machine Learning', 'AI Systems'],
  links: {
    email: 'mailto:kyle.sabado@mail.utoronto.ca',
    github: 'https://github.com/Kylx28',
    linkedin: 'https://www.linkedin.com/in/kylesabado',
  },
  emailLabel: 'kyle.sabado@mail.utoronto.ca',
  cvPdf: `${import.meta.env.BASE_URL}cv.pdf`,
}
