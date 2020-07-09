/* eslint-disable no-undef */
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
  img: 'me.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: 1,
    img: 'RM.png',
    title: 'Rick and Morty',
    info:
      'One of my favorite things that we had at Lambda. This app began as a Sprint Challenge for Single Page Apps. Huge Rick and Morty fan so I decided to modify it some. Learned how to add animations and audio. Built using React.',
    info2: '',
    url: 'https://rick-morty.markallison751.now.sh/',
    repo: 'https://github.com/qb1968/Rick-Morty', // if no repo, the button will not show up
  },
  {
    id: 2,
    img: 'Wunder.png',
    title: 'Wunderlist',
    info:
      'Build week project from Lambda. Simple to do list where my responsibility was designing the Backend.',
    info2: '',
    url: 'https://frontend-f31fx9705.now.sh/',
    repo: 'https://github.com/Build-Week-Wunderlist-4/Backend/tree/jonathan-allison', // if no repo, the button will not show up
  },
  {
    id: 3,
    img: 'Game.png',
    title: 'Game of Life',
    info: 'The Game of Life built with React',
    info2: '',
    url: 'https://csbw1.now.sh',
    repo: 'https://github.com/qb1968/GOL/tree/master', // if no repo, the button will not show up
  },
  {
    id: 4,
    img: 'DDD.png',
    title: 'SFTMA Data Analysis',
    info:
      'Labs project from Lambda School. Worked on Frontend and styling with a team of four. We worked with Jarie Bolander on this project from scratch. Site was created to moniter bunches and gaps for the SFMTA',
    info2:
      '  "I really enjoyed working with Jonathan on the Labs 22 project. He had some keen insights that made the project come together in a delightful way. I was impressed that he could take my 3 paragraph idea and help create www.datadriventransit.org. He would be an asset to any team looking for someone that can take an idea, work with a multi-disciplinary team across the world, and bring it to life. " ||      Jarie Bolander Entrepreneur|Author|Podcaster',
    url: 'https://datadriventransit.org',
    repo: 'https://github.com/Lambda-School-Labs/sfmta-data-analysis-fe', // if no repo, the button will not show up
  },
  {
    id: 5,
    img: 'Movies.png',
    title: 'Movie Database',
    info:
      'This was a fun project I worked on over Christmas break. I am a huge movie buff so I thought it would be fun. ',
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
