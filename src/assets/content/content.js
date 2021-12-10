import {v1} from "uuid";
import socialImg from '../images/social_network.png'
import pearlImg from '../images/pearlSpa.png'
import advImg from '../images/zem-advokat.png'
import alpImg from '../images/promAlp.png'
import royalImg from '../images/royal-stone.png'
import counterImg from '../images/counter.png'
import portfolioImg from '../images/portfolio.png'
import todolistMUIImg from '../images/todolistMUI.png'
import todolist from '../images/todolist.png'

export const home = {
  title: [
    "I'm vadym prudnikov.",
    "front-end developer",
    "react / javascript",
  ],
  text: [
    "I'm a Front‑end developer (React / JavaScript)" +
  " who has a results-focused attitude to creating SPA, using React (JS/TS), Redux." +
  " My free time is dedicated to Codewars & programming tutorials." +
  " I am passionate about creating excellent software that improves" +
  " the lives of the people around me.",
    "Ready to consider project work and full-time employment."
  ],
  email: 'vadprudnikov@gmail.com',
  skype: 'vaddoc@live.com',
  telegram: 'VadDomovoy',
  titleText: ['get in', 'touch', 'contacts'],
}

export const contacts = {
  titleText: ['get in', 'touch', 'contacts'],
  address: 'Kyiv, Ukraine',
  tel: '+380 (67) 986-48-27',
  email: 'vadprudnikov@gmail.com',
  skype: 'vaddoc@live.com',
  telegram: 'VadDomovoy',
  facebook: 'https://www.facebook.com/vadprudnikov/',
  twitter: 'https://twitter.com/Vad_Doc',
  instagram: 'https://www.instagram.com/vadym.prudnikov/',
  linkedin: "https://www.linkedin.com/in/vadym-prudnikov-b4b093207/",
  github: "https://github.com/VadDoc/",
}

export const about = {
  titleText: ['about', 'me', 'resume'],
  myExperiences: [
    {
      id: v1(),
      time: '2021-present',
      position: 'React / Javascript / Front-end Developer',
      place: 'Freelance',
      text: 'Website creation, upgrade, optimization, fix bugs - React / Redux / Thunk / JavaScript / TypeScript / Axios / Rest API / Redux-form / Formik / Material UI / Ant Design / Unit Test / Storybook / AJAX / JSON / WordPress / PHP / Bootstrap / Grid / Flexbox / SCSS / SASS / module CSS / CSS3 / HTML5 / Git'
    },
    {
      id: v1(),
      time: '2020-2021',
      position: 'Frontend Developer',
      place: 'WEBJUMP (Kyiv, Ukraine)',
      text: 'Website creation (full stack), upgrade and website optimization - HTML / CSS / JavaScript / AJAX / JSON / WordPress / PHP / Bootstrap,- creating JavaScript-plugins for WordPress'
    },
    {
      id: v1(),
      time: '2010-2019',
      position: 'Head of the office in Ukraine',
      place: 'CMP Germed GmbH (Germany), Kyiv, Ukraine',
      text: 'Solving organizational issues, communication with clients and officials. Activity: medical tourism'
    },
    {
      id: v1(),
      time: '2005-2010',
      position: 'Deputy head',
      place: 'Company Leader Invest ltd, Kyiv, Ukraine',
      text: 'Project management, communication with customers, teamwork'
    },
    {
      id: v1(),
      time: '1993-2005',
      position: 'Traumatologist',
      place: 'Kyiv Emergency Hospital',
      text: 'Trauma department doctor'
    },
  ],
  myEducation: [
    {
      id: v1(),
      time: '2021-present',
      position: 'React Developer',
      place: 'IT INCUBATOR (Minsk, Belarus)',
      text: 'IT Courses: React Developer, JavaScript Developer, Front-end Developer: React / Redux / Thunk / JavaScript / TypeScript / Axios / Rest API / Redux-form / Formik / Material UI / Ant Design / Unit Test / Storybook'
    },
    {
      id: v1(),
      time: '2020',
      position: 'Front-end Developer',
      place: 'IT Courses CyberBionic Systematics (Kyiv, Ukraine)',
      text: 'IT Courses: Front-end Developer, JavaScript Developer - JavaScript / TypeScript / Angular / Bootstrap / CSS / SCSS / SASS / HTML'
    },
    {
      id: v1(),
      time: '1985-1993',
      position: 'Medicine',
      place: 'Kyiv Medical University',
      text: 'Specialization: orthopedist-traumatologist'
    },
  ],
  infoItemsList: [
    {id: v1(), title: 'First Name: ', value: ['Vadym']},
    {id: v1(), title: 'Last name: ', value: ['Prudnikov']},
    {id: v1(), title: 'Nationality: ', value: ['Ukrainian']},
    {id: v1(), title: 'Freelance: ', value: ['Available']},
    {id: v1(), title: 'Address: ', value: [contacts.address]},
    {id: v1(), title: 'Phone: ', value: [<a href={`tel:${contacts.tel}`} target="_blank" rel="noreferrer">{contacts.tel}</a>]},
    {id: v1(), title: 'Email: ', value: [<a href={`mailto:${contacts.email}`} target="_blank" rel="noreferrer">{contacts.email}</a>]},
    {id: v1(), title: 'Telegram: ', value: [<a href={`https://telegram.me/${contacts.telegram}`} target="_blank" rel="noreferrer">{contacts.telegram}</a>]},
    {id: v1(), title: 'Skype: ', value: [<a href={`skype:${contacts.skype}?call`} target="_blank" rel="noreferrer">{contacts.skype}</a>]},
    {id: v1(), title: 'LinkedIn: ', value: [<a href={contacts.linkedin} target="_blank" rel="noreferrer">linkedin.com</a>]},
    {id: v1(), title: 'GitHub: ', value: [<a href={contacts.github} target="_blank" rel="noreferrer">github.com</a>]},
    {id: v1(), title: 'Languages: ', value: ['Ukrainian, Russian,', 'English (intermediate in progress)']},
  ],
  allSkills: 'JavaScript / TypeScript / React / Redux / React-redux / Thunk / Flux / Reselect / Hooks / Axios / React-router / Rest API / Redux-form / Formik / Material UI / Ant Design / Unit Test / Storybook / AJAX / JSON / Wordpress / Bootstrap / Grid / Flexbox / Fontawesome / SCSS / SASS / LESS / module CSS / CSS3 / HTML5 / Git / NodeJS / MySQL / Photoshop',
  mySkills: [
    {id:v1(), name: 'JavaScript', per: 68},
    {id:v1(), name: 'TypeScript', per: 62},
    {id:v1(), name: 'React', per: 72},
    {id:v1(), name: 'Redux', per: 82},
    // {id:v1(), name: 'Axios', per: 85},
    // {id:v1(), name: 'Redux-form', per: 73},
    // {id:v1(), name: 'Formik', per: 56},
    // {id:v1(), name: 'Storybook', per: 55},
    // {id:v1(), name: 'Unit Testing', per: 51},
    // {id:v1(), name: 'Material UI', per: 68},
    // {id:v1(), name: 'Ant Design', per: 53},
    {id:v1(), name: 'Wordpress', per: 65},
    {id:v1(), name: 'Bootstrap', per: 82},
    {id:v1(), name: 'CSS & preprocessing', per: 91},
    {id:v1(), name: 'HTML5', per: 95},
    // {id:v1(), name: 'Git', per: 61},
  ]
}

export const projects = {
  titleText: ['my', 'projects', 'works'],
  myProjects: [
    {
      id: v1(),
      title: 'Todo list MUI API',
      img: todolistMUIImg,
      siteName: 'Todo list MUI API',
      siteLink: 'https://vaddoc.github.io/Todolists-MUI/',
      codeName: 'github.com',
      codeLink: 'https://github.com/VadDoc/Todolists-MUI',
      languages: ' React / Redux / React-redux / Thunk / TypeScript / Axios / Rest API / Formik / React-router / ' +
        ' Material UI / Unit Test / Storybook / CSS / HTML / NodeJS / Git',
    },
    {
      id: v1(),
      title: 'Social Network',
      img: socialImg,
      siteName: 'Social-Network',
      siteLink: 'https://vaddoc.github.io/Social-Network/',
      codeName: 'github.com',
      codeLink: 'https://github.com/VadDoc/Social-Network',
      languages: ' React / Redux / React-redux / Thunk / TypeScript / Axios / Rest API / Reselect / Redux-form / React-router ' +
        ' Unit Test / Storybook / SCSS / HTML / NodeJS / Git',
    },
    {
      id: v1(),
      title: 'Todo list',
      img: todolist,
      siteName: 'Todo list',
      siteLink: 'https://vaddoc.github.io/Todo-List/',
      codeName: 'github.com',
      codeLink: 'https://github.com/VadDoc/Todo-List',
      languages: ' React / Redux / TypeScript / Redux-form / React-router / ' +
        ' Unit Test / Storybook / SCSS / HTML / NodeJS / Git',
    },
    {
      id: v1(),
      title: 'Portfolio',
      img: portfolioImg,
      siteName: 'Portfolio',
      siteLink: 'https://vaddoc.github.io/Vadym-Prudnikov-portofolio/',
      codeName: 'github.com',
      codeLink: 'https://github.com/VadDoc/Vadym-Prudnikov-portofolio',
      languages: 'React / JavaScript / React-router / Fontawesome / SCSS / HTML / NodeJS / EmailJS / Git / Photoshop'
    },
    {
      id: v1(),
      title: 'Counter',
      img: counterImg,
      siteName: 'counter',
      siteLink: 'https://vaddoc.github.io/Counter/',
      codeName: 'github.com',
      codeLink: 'https://github.com/VadDoc/Counter',
      languages: 'React / Redux / React-redux / TypeScript / CSS / HTML / NodeJS / Git',
    },
    {
      id: v1(),
      title: 'Royal Stone',
      img: royalImg,
      siteName: 'royalstone.com.ua',
      siteLink: 'http://royalua.s57.yourdomain.com.ua/en/glavnaya-stranicza-english/',
      codeName: 'github.com',
      codeLink: 'https://github.com/VadDoc/Social-Network',
      languages: 'Wordpress / JavaScript / HTML / CSS / PHP / AJAX / JSON / Git / MySQL / Photoshop',
    },
    {
      id: v1(),
      title: 'Promalp',
      img: alpImg,
      siteName: 'promalp-group.com',
      siteLink: 'https://promalp-group.com/',
      codeName: 'github.com',
      codeLink: 'https://github.com/VadDoc/Social-Network',
      languages: 'Wordpress / JavaScript / HTML / CSS / PHP / AJAX / JSON / Git / MySQL / Photoshop',
    },
    {
      id: v1(),
      title: 'SPA Pearl',
      img: pearlImg,
      siteName: 'pearlspa.com.ua',
      siteLink: 'https://pearlspa.com.ua/',
      codeName: 'github.com',
      codeLink: 'https://github.com/VadDoc/Social-Network',
      languages: 'Wordpress / JavaScript / HTML / CSS / PHP / AJAX / JSON / Git / MySQL / Photoshop',
    },
    {
      id: v1(),
      title: 'Advokat',
      img: advImg,
      siteName: 'zemelnij-advokat.ru',
      siteLink: 'https://zemelnij-advokat.ru/',
      codeName: 'github.com',
      codeLink: 'https://github.com/VadDoc/Social-Network',
      languages: 'Wordpress / JavaScript / HTML / CSS / PHP / AJAX / JSON / Git / MySQL / Photoshop',
    },
  ]
}


