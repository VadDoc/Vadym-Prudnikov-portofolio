import {v1} from "uuid";
import socialImg from '../images/social_network.png'
import pearlImg from '../images/pearlSpa.png'
import advImg from '../images/zem-advokat.png'
import alpImg from '../images/promAlp.png'
import royalImg from '../images/royal-stone.png'
import counterImg from '../images/counter.png'
import portfolioImg from '../images/portfolio.png'

export const home = {
  title: [
    "I'm vadym prudnikov.",
    "react developer",
    "javascript developer",
    "frontend developer"
  ],
  text: [
    "I'm a React developer &amp; JavaScript developer &amp; Front‑end developer" +
  " who has a results-focused attitude to creating SPA, using React (JS/TS), Redux." +
  " My free time is dedicated to Codewars &amp; programming tutorials." +
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
}

export const about = {
  titleText: ['about', 'me', 'resume'],
  myExperiences: [
    {
      id: v1(),
      time: '2021-present',
      position: 'React / Javascript / Frontend Developer',
      place: 'Freelance',
      text: 'Website creation, upgrade and optimization - React / Redux / Thunk / JavaScript / TypeScript / Axios / Rest API / Redux-form / Formik / Material UI / Ant Design / Unit Test / Storybook / AJAX / JSON / WordPress / PHP / Bootstrap / Grid / Flexbox / SCSS / SASS / module CSS / CSS3 / HTML5 / Git'
    },
    {
      id: v1(),
      time: '2021-present',
      position: 'React Developer',
      place: 'IT INCUBATOR (Minsk, Belarus)',
      text: 'IT Courses: React Developer, JavaScript Developer, Frontend Developer: React / Redux / Thunk / JavaScript / TypeScript / Axios / Rest API / Redux-form / Formik / Material UI / Ant Design / Unit Test / Storybook'
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
      time: '2020-2021',
      position: 'Frontend Developer',
      place: 'IT Courses CyberBionic Systematics (Kyiv, Ukraine)',
      text: 'IT Courses: Frontend Developer, JavaScript Developer - JavaScript / TypeScript / Angular / Bootstrap / CSS / SCSS / SASS / HTML'
    },

    {
      id: v1(),
      time: '2005-2019',
      position: 'Head of the office in Ukraine',
      place: 'CMP Germed GmbH (Germany), Kyiv, Ukraine',
      text: 'Representative office in Ukraine, head (medical tourism) '
    },
    {
      id: v1(),
      time: '1993-2005',
      position: 'Traumatologist',
      place: 'Kyiv Emergency Hospital',
      text: 'Trauma department doctor'
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
    {id: v1(), title: 'Phone: ', value: [<a href={`tel:${contacts.tel}`}>{contacts.tel}</a>]},
    {id: v1(), title: 'Email: ', value: [<a href={`mailto:${contacts.email}`}>{contacts.email}</a>]},
    {id: v1(), title: 'Telegram: ', value: [<a href="">{contacts.telegram}</a>]},
    {id: v1(), title: 'Skype: ', value: [<a href="">{contacts.skype}</a>]},
    {
      id: v1(),
      title: 'LinkedIn: ',
      value: [<a href="https://www.linkedin.com/in/vadym-prudnikov-b4b093207/">linkedin.com</a>]
    },
    {id: v1(), title: 'GitHub: ', value: [<a href="https://github.com/VadDoc/">github.com</a>]},
    {id: v1(), title: 'Languages: ', value: ['Ukrainian, Russian,', 'English (intermediate)']},
  ],
  allSkills: 'React / Redux / JavaScript / TypeScript / Thunk / Flux / Selectors / Hooks / Axios / Rest API / Redux-form / ' +
    ' Formik / Material UI / Ant Design / Unit Test / Storybook / AJAX / JSON / Wordpress / Bootstrap / Grid / Flexbox / SCSS / SASS / LESS / module CSS / CSS3 / HTML5 / Git / NodeJS / MySQL / Photoshop',
  mySkills: [
    {name: 'React', per: 67},
    {name: 'Redux', per: 82},
    {name: 'TypeScript', per: 62},
    {name: 'JavaScript', per: 55},
    {name: 'Axios', per: 65},
    {name: 'Storybook', per: 55},
    {name: 'Unit Testing', per: 45},
    // {name: 'HTML', per: 100},
    {name: 'Material UI', per: 48},

    {name: 'AJAX', per: 68},
    {name: 'Git', per: 45},
    {name: 'JSON', per: 73},
    {name: 'NODEJS', per: 35},
    // {name: 'HTML', per: 100},
    // {name: 'CSS', per: 10},
    // {name: 'HTML', per: 100},

    {name: 'Wordpress', per: 51},
    {name: 'SASS', per: 58},
    {name: 'LESS', per: 55},
    {name: 'SCSS', per: 69},
    {name: 'Bootstrap', per: 72},
    {name: 'CSS', per: 95},
    {name: 'HTML', per: 99},


    {name: 'MySQL', per: 23},
    {name: 'Photoshop', per: 45},
    // {name: 'CSS', per: 95},
    // {name: 'HTML', per: 99},
  ]
}

export const projects = {
  titleText: ['my', 'projects', 'works'],
  myProjects: [
    {
      id: v1(),
      title: 'Social Network',
      img: socialImg,
      siteName: 'Social-Network',
      siteLink: 'https://vaddoc.github.io/Social-Network/',
      codeName: 'github.com',
      codeLink: 'https://github.com/VadDoc/Social-Network',
      languages: ' React / Redux / Thunk / TypeScript / Axios / Rest API / Redux-form / ' +
        ' Unit Test / Storybook / SCSS / HTML',
    },
    {
      id: v1(),
      title: 'Portfolio',
      img: portfolioImg,
      siteName: 'Portfolio',
      siteLink: 'https://vaddoc.github.io/Vadym-Prudnikov-portofolio/',
      codeName: 'github.com',
      codeLink: 'https://github.com/VadDoc/Vadym-Prudnikov-portofolio',
      languages: 'React / JavaScript / Fontawesome / SCSS / HTML '
    },
    {
      id: v1(),
      title: 'Counter',
      img: counterImg,
      siteName: 'counter',
      siteLink: 'https://vaddoc.github.io/Counter/',
      codeName: 'github.com',
      codeLink: 'https://github.com/VadDoc/Counter',
      languages: 'React / Redux / Thunk / JavaScript / TypeScript / Axios / Rest API / Redux-form / ' +
        'Formik / Material UI / Ant Design / Unit Test / Storybook / SCSS / HTML',
    },
    {
      id: v1(),
      title: 'Royal Stone',
      img: royalImg,
      siteName: 'royalstone.com.ua',
      siteLink: 'http://royalua.s57.yourdomain.com.ua/en/glavnaya-stranicza-english/',
      codeName: 'github.com',
      codeLink: 'https://github.com/VadDoc/Social-Network',
      languages: 'Wordpress / JavaScript / HTML / CSS / PHP / AJAX / JSON',
    },
    {
      id: v1(),
      title: 'Promalp',
      img: alpImg,
      siteName: 'promalp-group.com',
      siteLink: 'https://promalp-group.com/',
      codeName: 'github.com',
      codeLink: 'https://github.com/VadDoc/Social-Network',
      languages: 'Wordpress / JavaScript / HTML / CSS / PHP / AJAX / JSON',
    },
    {
      id: v1(),
      title: 'SPA Pearl',
      img: pearlImg,
      siteName: 'pearlspa.com.ua',
      siteLink: 'https://pearlspa.com.ua/',
      codeName: 'github.com',
      codeLink: 'https://github.com/VadDoc/Social-Network',
      languages: 'Wordpress / JavaScript / HTML / CSS / PHP / AJAX / JSON',
    },
    {
      id: v1(),
      title: 'Advokat',
      img: advImg,
      siteName: 'zemelnij-advokat.ru',
      siteLink: 'https://zemelnij-advokat.ru/',
      codeName: 'github.com',
      codeLink: 'https://github.com/VadDoc/Social-Network',
      languages: 'Wordpress / JavaScript / HTML / CSS / PHP / AJAX / JSON',
    },
  ]
}


