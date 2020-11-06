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
  subtitle: 'I am a Full Stack Developer based in North Carolina. Proof that dreams do come true!',
  skills: '',
  skillset: '',
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
    img: 'RandM.png',
    title: 'Rick and Morty',
    info:
      'One of my favorite projects. Huge Rick and Morty fan so I decided to create it with React | BootStrap | Styled-Components | Material- UI. Also learned how to add animations and audio.',
    info2: '',
    url: 'https://rick-morty.markallison751.now.sh/',
    repo: 'https://github.com/qb1968/Rick-Morty', // if no repo, the button will not show up
  },
  {
    id: 2,
    img: 'Wunder.png',
    title: 'Wunderlist',
    info:
      'Collaberated on this project with Web-UI and Front End developer. Simple to do list where my responsibility was designing the Backend.',
    info2: '',
    url: 'https://frontend-f31fx9705.now.sh/',
    repo: 'https://github.com/Build-Week-Wunderlist-4/Backend/tree/jonathan-allison', // if no repo, the button will not show up
  },
  {
    id: 3,
    img: 'ecom.png',
    title: 'Ecom',
    info: 'Fully functional ecommerce site. Built with MERN Stack.',
    info2: '',
    url: 'https://morning-gorge-25166.herokuapp.com/',
    repo: 'https://github.com/qb1968/ecom', // if no repo, the button will not show up
  },

  {
    id: 5,
    img: 'Movies.png',
    title: 'Movie Database',
    info:
      'This was a fun React project I worked on over Christmas break. I am a huge movie buff so I thought it would be fun. ',
    info2: '',
    url: 'https://movie-db-five.now.sh/',
    repo: 'https://github.com/qb1968/MovieDB', // if no repo, the button will not show up
  },
  {
    id: 6,
    img: 'SHF.png',
    title: 'SuperHero-Finder',
    info:
      'Just a big nerd who still loves comics. Since I love superheros thought it would be a fun project. Go ahead you know you want to! ',
    info2: '',
    url: 'https://superhero-finder.vercel.app/',
    repo: 'https://github.com/qb1968/Superhero-Finder', // if no repo, the button will not show up
  },
  {
    id: 4,
    img: 'SFMTA.png',
    title: 'SFMTA Data Analysis',
    info:
      ' Collaborated on this project with a team of 4 web developers, 3 data scientists and 1 UX designer to build the app  in 8 weeks. We worked with Jarie Bolander on this project, who was the stakeholder. Site was created to moniter bunches and gaps for the SFMTA',
    info2:
      '  "I really enjoyed working with Jonathan on the Labs 22 project. He had some keen insights that made the project come together in a delightful way. I was impressed that he could take my 3 paragraph idea and help create www.datadriventransit.org. He would be an asset to any team looking for someone that can take an idea, work with a multi-disciplinary team across the world, and bring it to life. " ||      Jarie Bolander Entrepreneur|Author|Podcaster',
    url: 'https://labs2020.vercel.app/',
    repo: 'https://github.com/qb1968/Labs2020', // if no repo, the button will not show up
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
