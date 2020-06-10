import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Jonathan Allison.',
  subtitle: 'I am a Full Stack Developer based in North Carolina',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'bat8.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'RM.png',
    title: 'Rick and Morty',
    info: '',
    info2: '',
    url: 'https://serene-tereshkova-2232d4.netlify.app',
    repo: 'https://github.com/qb1968/Rick-Morty', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'Wunder.png',
    title: 'Wunderlist',
    info: '',
    info2: '',
    url: 'https://frontend-f31fx9705.now.sh/',
    repo: 'https://github.com/Build-Week-Wunderlist-4/Backend/tree/jonathan-allison', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'Game.png',
    title: 'Game of Life',
    info: '',
    info2: '',
    url: 'https://csbw1.now.sh',
    repo: 'https://github.com/qb1968/GOL/tree/master', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'DDD.png',
    title: 'SFTMA Data Analysis',
    info: '',
    info2: '',
    url: 'https://datadriventransit.org',
    repo: 'https://github.com/Lambda-School-Labs/sfmta-data-analysis-fe', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'Movies.png',
    title: 'Movie Database',
    info: '',
    info2: '',
    url: 'https://movie-db-five.now.sh/',
    repo: 'https://github.com/qb1968/MovieDB', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'mark.allison75@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/jonathan-allison-1a4136196/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/qb1968',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
