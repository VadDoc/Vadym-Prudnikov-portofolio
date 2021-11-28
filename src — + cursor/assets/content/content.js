import {v1} from "uuid";

export const about = {
  myExperiences: [
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
    {id: v1(), title: 'First Name: ', value: ['Prudnikov']},
    {id: v1(), title: 'Last name: ', value: ['Vadym']},
    {id: v1(), title: 'Nationality: ', value: ['Ukrainian']},
    {id: v1(), title: 'Freelance: ', value: ['Available']},
    {id: v1(), title: 'Address: ', value: ['Kyiv, Ukraine']},
    {id: v1(), title: 'Phone: ', value: [<a href="tel:+380679864827">+380 (67) 986-48-27</a>]},
    {id: v1(), title: 'Email: ', value: [<a href="mailto:vadprudnikov@gmail.com">vadprudnikov@gmail.com</a>]},
    {id: v1(), title: 'Telegram: ', value: [<a href="mailto:vaddoc@live.com">vaddoc@live.com</a>]},
    {id: v1(), title: 'Skype: ', value: [<a href="mailto:vaddoc@live.com">vaddoc@live.com</a>]},
    {id: v1(), title: 'LinkedIn: ', value: [<a href="https://www.linkedin.com/in/vadym-prudnikov-b4b093207/">linkedin.com</a>]},
    {id: v1(), title: 'GitHub: ', value: [<a href="https://github.com/VadDoc/">github.com</a>]},
    {id: v1(), title: 'Languages: ', value: ['Ukrainian, Russian,', 'English (intermediate)']},
  ],

}
