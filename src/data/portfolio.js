export const portfolioData = {
  personal: {
    name: 'Azizjon',
    surname: 'Malikov',
    title: 'Middle Full Stack Developer',
    email: 'azizjon.malikovv@gmail.com',
    phone: '+998919224843',
    location: 'Toshkent',
    photo: null,
    resumePath: '/cv/Azizjon Malikov.pdf',
    available: true,
    social: {
      github: 'https://github.com/MalikovAzizjon4843',
      linkedin: 'https://www.linkedin.com/in/azizjon-malikov',
      telegram: 'https://t.me/Azizjon_Malikov'
    },
    website: 'https://azizjoon.uz',
    timeZone: 'Asia/Tashkent',
    // Shown in the "Tashkent time" widget as online (Mon–Fri, local time).
    workingHours: { from: 9, to: 19 }
  },

  // Home page overview widgets.
  highlights: {
    careerStart: 2022,
    regions: 14,
    currentCompany: 'RTAM DM',
    currentProjects: ['Fairtech', 'RAIS', 'XT_XARID', 'rtam.uz'],
    coreStack: ['Vue 3', 'Nuxt 3', 'TypeScript', 'Pinia', 'Java', 'Spring Boot', 'PostgreSQL', 'Docker']
  },

  skills: {
    frontend: [
      'Vue.js', 'Vue 3', 'Nuxt', 'JavaScript', 'TypeScript',
      'HTML5', 'CSS3', 'SCSS', 'BootstrapVue', 'Responsive Design'
    ],
    backend: [
      'Java', 'Spring Boot', 'Spring Security', 'REST API',
      'Microservices', 'JPA/Hibernate', 'MapStruct'
    ],
    database: [
      'PostgreSQL', 'SQL', 'Liquibase'
    ],
    tools: [
      'Git', 'Docker', 'CI/CD', 'IntelliJ IDEA', 'VS Code',
      'Postman', 'Linux'
    ]
  },

  highlightedSkills: ['Vue.js', 'Vue 3', 'Spring Boot', 'PostgreSQL', 'Java'],

  // Newest first. Texts live in i18n under experience.jobs.<key>.
  experience: [
    {
      key: 'center',
      company: 'RTAM DM',
      location: 'Toshkent',
      startDate: '2023.07',
      endDate: null,
      bullets: 4,
      tech: ['Java', 'Spring Boot', 'PostgreSQL', 'Vue.js', 'Vue 3', 'Nuxt']
    },
    {
      key: 'texno',
      company: 'Texno Dargoh',
      location: 'Toshkent',
      startDate: '2022.04',
      endDate: '2023.05',
      bullets: 4,
      tech: ['Java', 'Spring', 'Thymeleaf', 'Telegram Bot API']
    }
  ],

  education: [
    {
      institution: 'education.tuit.name',
      location: 'Toshkent',
      i18nDegree: 'education.tuit.degree',
      years: '2023 — hozir',
      i18nDetails: 'education.tuit.details'
    },
    {
      institution: 'PDP Academy',
      location: 'Toshkent',
      i18nDegree: 'education.pdp.degree',
      years: '2021.07 — 2022.03',
      i18nDetails: 'education.pdp.details'
    },
    {
      institution: 'EPAM Systems',
      location: 'Toshkent',
      i18nDegree: 'education.epam.degree',
      years: '2022.04 — 2022.07',
      i18nDetails: 'education.epam.details'
    },
    {
      institution: 'One Million Uzbek Coders',
      location: 'Online',
      i18nDegree: 'education.onemillion.degree',
      years: '2020.02',
      i18nDetails: 'education.onemillion.details'
    }
  ],

  certificates: [
    {
      name: 'certificates.pdp_java.name',
      issuer: 'PDP Academy',
      date: '2022.05',
      url: 'https://online.pdp.uz/api/file/get/92ca4b35-6388-4b50-8762-95542363d4a7'
    },
    {
      name: 'certificates.pdp_frontend.name',
      issuer: 'PDP Academy',
      date: '2021.04',
      url: null
    },
    {
      name: 'certificates.onemillion.name',
      issuer: 'One Million Uzbek Coders',
      date: '2020.02',
      url: null
    }
  ]
}
