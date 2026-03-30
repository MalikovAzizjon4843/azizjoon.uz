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
    website: 'https://azizjoon.uz'
  },

  stats: [
    { value: 3, suffix: '+', i18nLabel: 'stats.years' },
    { value: 22, suffix: '+', i18nLabel: 'stats.projects' },
    { value: 8, suffix: '+', i18nLabel: 'stats.enterprise' },
    { value: 100, suffix: '+', i18nLabel: 'stats.components' }
  ],

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

  experience: [
    {
      role: 'experience.fairtech.role',
      company: 'Fairtech',
      organization: 'experience.fairtech.org',
      location: 'Toshkent',
      startDate: '2023.07',
      endDate: null,
      isCurrent: true,
      description: 'experience.fairtech.description',
      bullets: [
        'experience.fairtech.bullet1',
        'experience.fairtech.bullet2',
        'experience.fairtech.bullet3',
        'experience.fairtech.bullet4',
        'experience.fairtech.bullet5',
        'experience.fairtech.bullet6',
        'experience.fairtech.bullet7',
        'experience.fairtech.bullet8'
      ],
      tech: ['Vue.js', 'Spring Boot', 'PostgreSQL', 'JPA/Hibernate', 'REST API']
    },
    {
      role: 'experience.texno.role',
      company: 'Texno Dargoh',
      organization: 'experience.texno.org',
      location: 'Toshkent',
      startDate: '2022.04',
      endDate: '2023.05',
      isCurrent: false,
      description: 'experience.texno.description',
      bullets: [
        'experience.texno.bullet1',
        'experience.texno.bullet2',
        'experience.texno.bullet3',
        'experience.texno.bullet4',
        'experience.texno.bullet5'
      ],
      tech: ['Java', 'Spring', 'CRM', 'Telegram Bot API', 'Thymeleaf']
    }
  ],

  projects: [
    // === FEATURED (5) ===
    {
      name: 'RAIS',
      status: 'production',
      type: 'Enterprise',
      i18nDesc: 'projects.rais.desc',
      tech: ['Vue 3', 'Spring Boot', 'PostgreSQL', 'REST API'],
      featured: true,
      links: { github: null, live: null }
    },
    {
      name: 'Compleans',
      status: 'production',
      type: 'Enterprise',
      i18nDesc: 'projects.compleans.desc',
      tech: ['Vue.js', 'Spring Boot', 'JPA/Hibernate', 'PostgreSQL'],
      featured: true,
      links: { github: null, live: null }
    },
    {
      name: 'XT_XARID',
      status: 'production',
      type: 'Enterprise',
      i18nDesc: 'projects.xtxarid.desc',
      tech: ['Java', 'Spring Boot', 'REST API', 'PostgreSQL', 'MultipartFile'],
      featured: true,
      links: { github: null, live: null }
    },
    {
      name: "Ta'sir Chora Module",
      status: 'production',
      type: 'Enterprise',
      i18nDesc: 'projects.tasir_chora.desc',
      tech: ['Java', 'Spring Boot', 'JPA/Hibernate', 'PostgreSQL', 'REST API'],
      featured: true,
      links: { github: null, live: null }
    },
    {
      name: 'Pharm Info Monitor',
      status: 'production',
      type: 'Enterprise',
      i18nDesc: 'projects.pharm.desc',
      tech: ['Vue 2', 'Spring Boot', 'PostgreSQL', 'REST API', 'MultipartFile'],
      featured: true,
      links: { github: null, live: null }
    },
    // === REGULAR ===
    {
      name: 'my.fairtech.uz',
      status: 'live',
      type: 'Web',
      i18nDesc: 'projects.fairtech_portal.desc',
      tech: ['Vue.js', 'SCSS', 'Responsive'],
      featured: false,
      links: { github: null, live: 'https://my.fairtech.uz' }
    },
    {
      name: 'Dominant Subjects Registry',
      status: 'live',
      type: 'Enterprise',
      i18nDesc: 'projects.dominant.desc',
      tech: ['Vue.js', 'Spring Boot', 'PostgreSQL'],
      featured: false,
      links: { github: null, live: null }
    },
    {
      name: 'TEDA CRM System',
      status: 'production',
      type: 'Full-Stack',
      i18nDesc: 'projects.teda_crm.desc',
      tech: ['Java', 'Spring', 'PostgreSQL', 'CRM'],
      featured: false,
      links: { github: 'https://github.com/TEDA-LLC/ourSystem.git', live: 'https://admin.teda.uz' }
    },
    {
      name: 'teda.uz + Telegram Bot',
      status: 'production',
      type: 'Web / Bot',
      i18nDesc: 'projects.teda_web.desc',
      tech: ['Java', 'Spring', 'Thymeleaf', 'Telegram Bot API'],
      featured: false,
      links: { github: null, live: 'https://www.teda.uz' }
    },
    {
      name: 'Ibrat Club',
      status: 'production',
      type: 'Web / Bot',
      i18nDesc: 'projects.ibrat.desc',
      tech: ['Java', 'Spring', 'Telegram Bot API'],
      featured: false,
      links: { github: null, live: 'https://ibrat.teda.uz' }
    },
    {
      name: 'quiz.fairtech.uz',
      status: 'production',
      type: 'Web',
      i18nDesc: 'projects.quiz.desc',
      tech: ['Vue.js', 'Spring Boot', 'PostgreSQL'],
      featured: false,
      links: { github: null, live: 'https://quiz.fairtech.uz' }
    },
    {
      name: 'cabinet.fairtech.uz',
      status: 'production',
      type: 'Enterprise',
      i18nDesc: 'projects.cabinet.desc',
      tech: ['Vue.js', 'Spring Boot', 'PostgreSQL'],
      featured: false,
      links: { github: null, live: 'https://cabinet.fairtech.uz' }
    },
    {
      name: 'fairtech.uz',
      status: 'production',
      type: 'Enterprise',
      i18nDesc: 'projects.fairtech_main.desc',
      tech: ['Vue.js', 'Spring Boot'],
      featured: false,
      links: { github: null, live: 'https://fairtech.uz' }
    },
    {
      name: 'Interactive Uzbekistan Map',
      status: 'dev',
      type: 'Frontend',
      i18nDesc: 'projects.uz_map.desc',
      tech: ['Vue 2', 'SVG', 'JavaScript', 'SCSS'],
      featured: false,
      links: { github: null, live: null }
    },
    {
      name: 'Nested Drag & Drop Builder',
      status: 'completed',
      type: 'Frontend',
      i18nDesc: 'projects.dnd_builder.desc',
      tech: ['Nuxt 3', 'TypeScript', 'Pinia', 'Drag & Drop API'],
      featured: false,
      links: { github: null, live: null }
    },
    {
      name: 'Telegram Birthday Bot',
      status: 'dev',
      type: 'Bot',
      i18nDesc: 'projects.birthday_bot.desc',
      tech: ['Java', 'Spring Boot', 'Telegram Bot API', 'PostgreSQL'],
      featured: false,
      links: { github: null, live: null }
    },
    {
      name: 'TradingView Signal Bot',
      status: 'dev',
      type: 'Bot / AI',
      i18nDesc: 'projects.trading_bot.desc',
      tech: ['Python', 'OpenAI API', 'Telegram Bot API'],
      featured: false,
      links: { github: null, live: null }
    },
    {
      name: 'GPT Telegram Bot',
      status: 'dev',
      type: 'Bot / AI',
      i18nDesc: 'projects.gpt_bot.desc',
      tech: ['Python', 'OpenAI API', 'Telegram Bot API', 'Heroku'],
      featured: false,
      links: { github: null, live: null }
    },
    {
      name: 'Royce Logistics',
      status: 'dev',
      type: 'Full-Stack',
      i18nDesc: 'projects.royce.desc',
      tech: ['Vue 3', 'Nuxt 3', 'Tailwind CSS', 'Pinia', 'TypeScript'],
      featured: false,
      links: { github: null, live: null }
    },
    {
      name: 'Adizone CRM',
      status: 'dev',
      type: 'Full-Stack',
      i18nDesc: 'projects.adizone.desc',
      tech: ['Vue 3', 'Tailwind CSS', 'Pinia', 'REST API'],
      featured: false,
      links: { github: null, live: null }
    },
    {
      name: 'Multi-Platform Media Bot',
      status: 'dev',
      type: 'Bot',
      i18nDesc: 'projects.media_bot.desc',
      tech: ['Telegram Bot API', 'YouTube', 'Instagram', 'TikTok'],
      featured: false,
      links: { github: null, live: null }
    },
    {
      name: 'azizjoon.uz',
      status: 'live',
      type: 'Personal',
      i18nDesc: 'projects.portfolio.desc',
      tech: ['Vue 3', 'SCSS', 'Animations', 'I18n'],
      featured: false,
      links: { github: 'https://github.com/MalikovAzizjon4843', live: 'https://azizjoon.uz' }
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
