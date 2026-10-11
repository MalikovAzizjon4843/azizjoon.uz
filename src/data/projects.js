// Single source of truth for every project on the site: the home carousel,
// /projects and /projects/:slug read from here, and scripts/generate-sitemap.mjs
// builds the sitemap from it. Keep this file free of Vite-only imports.
//
// Schema (missing fields are filled with empty values by normalize() below):
// {
//   slug: 'rais',                     // URL: /projects/rais — lowercase, a-z0-9-
//   order: 3,                         // position in the catalog (lower first)
//   featured: true,                   // shown in the home page carousel
//   category: 'government' | 'company' | 'client' | 'personal',
//   status: 'live' | 'internal' | 'done' | 'in-progress' | 'prototype',
//   year: '2023' | '2022 — 2023' | '2023 — now',   // "now" is translated
//   links: { live: string|null, github: string|null },  // never admin panels
//   stack: ['Vue 3', 'Spring Boot'],
//   cover: '/projects/<slug>/cover.webp' | null,
//   screenshots: [{ src: '/projects/<slug>/01.webp', caption: { uz, ru, en } }],
//   content: {
//     uz: { title, tagline, role, problem, solution, result, highlights: [] },
//     ru: { ... },
//     en: { ... }
//   }
// }
//
// Never put server IPs, database names, usernames, tokens, client contacts or
// internal domains here — everything in this file is public.

export const CATEGORIES = ['government', 'client', 'company', 'personal']
export const STATUSES = ['live', 'internal', 'done', 'in-progress', 'prototype']
export const LOCALES = ['uz', 'ru', 'en']

// Home page carousel order.
export const FEATURED_ORDER = ['fairtech', 'xt-xarid', 'adizone', 'mana-pochta', 'rtam', 'mobifone', 'vue3-migration']

// Screenshot size used for width/height attributes (16:10).
export const SHOT_SIZE = { width: 1600, height: 1000 }

const raw = [
  // ─── Government systems ───────────────────────────────────────────────
  {
    slug: 'fairtech',
    order: 1,
    featured: true,
    category: 'government',
    status: 'internal',
    year: '2023 — now',
    links: { live: null },
    stack: ['Java', 'Spring Boot', 'JPA / Hibernate', 'MapStruct', 'PostgreSQL', 'Vue.js', 'Vuetify'],
    content: {
      uz: {
        title: 'Fairtech — komplayans platformasi',
        tagline: "Qo'mitaning tekshiruv va ko'rsatmalar ijrosini boshqarish tizimi",
        role: 'Full-stack — backend modullar va frontend',
        problem: "Qo'mita xodimlari va tekshiriladigan yuridik shaxslar o'rtasidagi ko'rsatmalar, ularning ijrosi va tasdiqlanishi qog'oz va tarqoq vositalarda yuritilardi.",
        solution: "Ikki portal: fairtech.uz — xodimlar uchun ishlarni yuritish va tasdiqlash; cabinet.fairtech.uz — yuridik shaxslar ijro natijasini yuboradigan kabinet. Ko'rsatma ijrosi, Insofsiz raqobat va Kartel modullari umumiy andoza asosida.",
        result: 'Ish jarayoni markaziy apparat va 14 hududiy boshqarmada yagona tizimda yuritiladi.',
        highlights: [
          "Bir nechta sub'ekt va lot bilan ish ochish oqimi",
          'Ijro natijasini tasdiqlash / rad etish jarayoni',
          "STIR/JShShIR bo'yicha bajarilmagan ko'rsatmalarni tekshirish ochiq API'si",
          'MapStruct bilan DTO xaritalash, sahifalangan qidiruvlar'
        ]
      },
      ru: {
        title: 'Fairtech — платформа комплаенса',
        tagline: 'Система управления проверками и исполнением предписаний комитета',
        role: 'Full-stack — backend-модули и фронтенд',
        problem: 'Предписания между сотрудниками комитета и проверяемыми юрлицами, их исполнение и подтверждение велись на бумаге и в разрозненных инструментах.',
        solution: 'Два портала: fairtech.uz — для сотрудников, ведение дел и согласование; cabinet.fairtech.uz — кабинет, через который юрлица отправляют результат исполнения. Модули «Исполнение предписаний», «Недобросовестная конкуренция» и «Картели» построены на общем шаблоне.',
        result: 'Рабочий процесс центрального аппарата и 14 региональных управлений ведётся в единой системе.',
        highlights: [
          'Открытие дела с несколькими субъектами и лотами',
          'Согласование или отклонение результата исполнения',
          'Открытый API проверки неисполненных предписаний по ИНН/ПИНФЛ',
          'Маппинг DTO через MapStruct, постраничный поиск'
        ]
      },
      en: {
        title: 'Fairtech — compliance platform',
        tagline: "The committee's system for managing inspections and order enforcement",
        role: 'Full-stack — backend modules and frontend',
        problem: 'Orders issued to inspected companies, their execution and approval were tracked on paper and in scattered tools.',
        solution: 'Two portals: fairtech.uz, where staff run and approve cases, and cabinet.fairtech.uz, where companies submit execution results. The Order enforcement, Unfair competition and Cartel modules share one template.',
        result: 'The central office and 14 regional branches run the workflow in one system.',
        highlights: [
          'Opening a case with several entities and lots',
          'Approve / reject flow for execution results',
          'Public API that checks unfulfilled orders by TIN/PINFL',
          'DTO mapping with MapStruct, paginated search'
        ]
      }
    }
  },
  {
    slug: 'xt-xarid',
    order: 2,
    featured: true,
    category: 'government',
    status: 'internal',
    year: '2024 — now',
    stack: ['Java', 'Spring Boot', 'PostgreSQL', 'Apache POI', 'Vue 2', 'Element UI'],
    content: {
      uz: {
        title: 'XT_XARID — tender monitoringi',
        tagline: 'xt-xarid.uz davlat xaridlarini tekshirish va integratsiya tizimi',
        role: 'Full-stack',
        problem: "Davlat xaridlari ma'lumotlari qo'lda yig'ilar, tekshiruv va intizomiy choralar bir joyda kuzatilmasdi.",
        solution: "xt-xarid.uz bilan rejali integratsiya va qo'lda kiritish oqimi; lot bo'yicha tekshiruv, intizomiy choralar va fayllar; manba (rejali yoki qo'lda) bo'yicha ajratish.",
        result: 'Lotlar takror kiritilmaydi, tekshiruv natijalari bitta reestrda.',
        highlights: [
          'Lot raqamini oldindan tekshirish (takror saqlashning oldini olish)',
          "Ichma-ich ma'lumotlar grafini bitta so'rovda saqlash",
          "Apache POI bilan 9 bo'limli Excel eksport",
          'REST/NDJSON integratsiya',
          "Ta'sir chora moduli: ma'muriy protokol, ish qo'zg'atish, bir nechta huquqbuzar va jabrlanuvchi, holat bo'yicha filtrlash"
        ]
      },
      ru: {
        title: 'XT_XARID — мониторинг тендеров',
        tagline: 'Система проверки госзакупок xt-xarid.uz и интеграции',
        role: 'Full-stack',
        problem: 'Данные госзакупок собирались вручную, проверки и дисциплинарные меры не отслеживались в одном месте.',
        solution: 'Плановая интеграция с xt-xarid.uz и ручной ввод; проверки по лотам, дисциплинарные меры и файлы; разделение по источнику (плановый или ручной).',
        result: 'Лоты не дублируются, результаты проверок — в одном реестре.',
        highlights: [
          'Предварительная проверка номера лота (защита от повторного сохранения)',
          'Сохранение вложенного графа данных одним запросом',
          'Экспорт в Excel из 9 разделов на Apache POI',
          'Интеграция REST/NDJSON',
          'Модуль мер воздействия: административный протокол, возбуждение дела, несколько нарушителей и потерпевших, фильтрация по статусу'
        ]
      },
      en: {
        title: 'XT_XARID — tender monitoring',
        tagline: 'Inspection and integration system for xt-xarid.uz public procurement',
        role: 'Full-stack',
        problem: 'Procurement data was gathered by hand, and inspections and disciplinary measures were not tracked in one place.',
        solution: 'Scheduled integration with xt-xarid.uz plus a manual entry flow; lot-level inspections, disciplinary measures and files; records separated by source (scheduled or manual).',
        result: 'Lots are never entered twice, and inspection results live in one registry.',
        highlights: [
          'Lot number pre-check to prevent duplicate saves',
          'Saving a nested data graph in a single request',
          '9-section Excel export with Apache POI',
          'REST/NDJSON integration',
          'Enforcement measures module: administrative reports, opening cases, multiple offenders and victims, filtering by status'
        ]
      }
    }
  },
  {
    slug: 'rais',
    order: 3,
    category: 'government',
    status: 'internal',
    year: '2023',
    stack: ['Vue 3', 'Spring Boot', 'PostgreSQL'],
    content: {
      uz: {
        title: 'RAIS — Raqobat agentligi axborot tizimi',
        tagline: 'Statistika, murojaatlar va monitoring',
        role: 'Full-stack',
        highlights: [
          'Statistika moduli',
          "15 viloyat bo'yicha murojaatlar statistikasi API'si",
          'Rahbariyat uchun monitoring dashboardlari',
          "Interaktiv O'zbekiston xaritasi: viloyatlar murojaatlar soniga qarab rang oladi"
        ]
      },
      ru: {
        title: 'RAIS — информационная система агентства по конкуренции',
        tagline: 'Статистика, обращения и мониторинг',
        role: 'Full-stack',
        highlights: [
          'Модуль статистики',
          'API статистики обращений по 15 регионам',
          'Дашборды мониторинга для руководства',
          'Интерактивная карта Узбекистана: цвет региона зависит от числа обращений'
        ]
      },
      en: {
        title: 'RAIS — Competition Agency Information System',
        tagline: 'Statistics, appeals and monitoring',
        role: 'Full-stack',
        highlights: [
          'Statistics module',
          'Appeals statistics API across 15 regions',
          'Monitoring dashboards for management',
          'Interactive map of Uzbekistan: regions are colored by the number of appeals'
        ]
      }
    }
  },
  {
    slug: 'rtam',
    order: 4,
    featured: true,
    category: 'government',
    status: 'live',
    year: '2025 — 2026',
    links: { live: 'https://rtam.uz' },
    stack: ['Nuxt 4', 'Vue', 'Spring Boot 3.5', 'Java 17', 'PostgreSQL', 'JWT', 'Flyway', 'Nginx'],
    content: {
      uz: {
        title: 'rtam.uz — Markazning rasmiy sayti',
        tagline: "To'rt tilli ommaviy sayt va admin panel",
        role: 'Loyiha egasi — dizayn, frontend, backend va deploy',
        problem: 'Eski sayt eskirgan, tezligi va mobil ko\'rinishi zamon talabiga javob bermasdi.',
        solution: 'Nuxt 4 SSR asosida noldan yangi ommaviy sayt, Spring Boot backend va admin panel.',
        highlights: [
          "4 til: o'zbek (lotin va kirill), rus, ingliz",
          "Maxsus imkoniyatlar paneli: shrift o'lchami, kontrast, negativ rejim",
          "Tashrif statistikasi: IP manzillar SHA-256 bilan xeshlanadi (shaxsiy ma'lumot himoyasi)",
          "Jonli valyuta kursi (CBU) va ob-havo vidjetlari",
          "Foto va video galereya, hisobotlar bo'limi",
          'Server tomonda render, 230 dan ortiq sahifa oldindan tayyorlanadi'
        ]
      },
      ru: {
        title: 'rtam.uz — официальный сайт центра',
        tagline: 'Публичный сайт на четырёх языках и админ-панель',
        role: 'Владелец проекта — дизайн, фронтенд, бэкенд и деплой',
        problem: 'Старый сайт устарел: скорость и мобильная версия не отвечали современным требованиям.',
        solution: 'Новый публичный сайт с нуля на Nuxt 4 SSR, бэкенд на Spring Boot и админ-панель.',
        highlights: [
          '4 языка: узбекский (латиница и кириллица), русский, английский',
          'Панель специальных возможностей: размер шрифта, контраст, негативный режим',
          'Статистика посещений: IP-адреса хешируются SHA-256 (защита персональных данных)',
          'Виджеты живого курса валют (ЦБ) и погоды',
          'Фото- и видеогалерея, раздел отчётов',
          'Рендеринг на сервере, более 230 страниц генерируются заранее'
        ]
      },
      en: {
        title: "rtam.uz — the center's official website",
        tagline: 'A four-language public site and admin panel',
        role: 'Project owner — design, frontend, backend and deployment',
        problem: 'The old site was outdated; its speed and mobile experience fell short of current standards.',
        solution: 'A new public site built from scratch on Nuxt 4 SSR, with a Spring Boot backend and an admin panel.',
        highlights: [
          '4 languages: Uzbek (Latin and Cyrillic), Russian, English',
          'Accessibility panel: font size, contrast, inverted mode',
          'Visit analytics with SHA-256-hashed IP addresses (personal data protection)',
          'Live exchange rate (CBU) and weather widgets',
          'Photo and video gallery, reports section',
          'Server-side rendering with 230+ pages prerendered'
        ]
      }
    }
  },
  {
    slug: 'quiz-fairtech',
    order: 5,
    category: 'government',
    status: 'live',
    year: '2024',
    links: { live: 'https://quiz.fairtech.uz' },
    stack: ['Vue 3', 'Spring Boot', 'PostgreSQL'],
    content: {
      uz: {
        title: 'quiz.fairtech.uz',
        tagline: 'Davlat inspektorlari uchun onlayn baholash',
        highlights: [
          "Respublika bo'ylab inspektorlar bilimini test qilish",
          "Bosqichma-bosqich (wizard) test oqimi, karta ko'rinishidagi javoblar",
          "Qorong'u/yorug' rejim"
        ]
      },
      ru: {
        title: 'quiz.fairtech.uz',
        tagline: 'Онлайн-оценка государственных инспекторов',
        highlights: [
          'Тестирование знаний инспекторов по всей республике',
          'Пошаговый (wizard) сценарий теста, ответы в виде карточек',
          'Тёмная и светлая темы'
        ]
      },
      en: {
        title: 'quiz.fairtech.uz',
        tagline: 'Online assessment for government inspectors',
        highlights: [
          'Nationwide knowledge testing for inspectors',
          'Step-by-step (wizard) test flow with card-style answers',
          'Dark and light modes'
        ]
      }
    }
  },
  {
    slug: 'my-fairtech',
    order: 6,
    category: 'government',
    status: 'live',
    year: '2024',
    links: { live: 'https://my.fairtech.uz' },
    stack: ['Vue.js', 'SCSS'],
    content: {
      uz: { title: 'my.fairtech.uz', tagline: 'Fuqarolar va tashkilotlar uchun interaktiv xizmatlar platformasi' },
      ru: { title: 'my.fairtech.uz', tagline: 'Платформа интерактивных услуг для граждан и организаций' },
      en: { title: 'my.fairtech.uz', tagline: 'Interactive services platform for citizens and organizations' }
    }
  },
  {
    slug: 'dominant-registry',
    order: 7,
    category: 'government',
    status: 'internal',
    year: '2024',
    stack: ['Vue.js', 'Spring Boot', 'PostgreSQL'],
    content: {
      uz: {
        title: "Dominant sub'ektlar reestri",
        tagline: "Bozorda ustun mavqega ega sub'ektlar reestri",
        highlights: [
          "Rolga asoslangan ruxsatlar (ko'rish hamma uchun, o'zgartirish ruxsat bilan)",
          "Monopol mahsulotlar uchun dinamik ko'p qatorli maydonlar"
        ]
      },
      ru: {
        title: 'Реестр доминирующих субъектов',
        tagline: 'Реестр субъектов с доминирующим положением на рынке',
        highlights: [
          'Ролевые права (просмотр для всех, изменение — по разрешению)',
          'Динамические многострочные поля для монопольных товаров'
        ]
      },
      en: {
        title: 'Dominant Entities Registry',
        tagline: 'Registry of entities with a dominant market position',
        highlights: [
          'Role-based permissions (everyone can view, editing needs permission)',
          'Dynamic multi-row fields for monopoly products'
        ]
      }
    }
  },
  {
    slug: 'jurist',
    order: 8,
    category: 'government',
    status: 'internal',
    year: '2025',
    stack: ['Vue.js', 'Spring Boot'],
    content: {
      uz: {
        title: 'Jurist — sud ishlarini yuritish moduli',
        tagline: "Apellyatsiya (viloyat va oliy taftish) va ko'rsatma ijrosi jarayonlari",
        highlights: [
          'Kartalarga asoslangan yangi dizayn tizimi',
          "3 til: o'zbek (lotin, kirill), rus"
        ]
      },
      ru: {
        title: 'Юрист — модуль ведения судебных дел',
        tagline: 'Апелляция (областная инстанция и высшая ревизия) и исполнение предписаний',
        highlights: [
          'Новая дизайн-система на карточках',
          '3 языка: узбекский (латиница, кириллица), русский'
        ]
      },
      en: {
        title: 'Jurist — court case management module',
        tagline: 'Appeals (regional and supreme review) and order enforcement workflows',
        highlights: [
          'A new card-based design system',
          '3 languages: Uzbek (Latin, Cyrillic), Russian'
        ]
      }
    }
  },
  {
    slug: 'vue3-migration',
    order: 9,
    featured: true,
    category: 'government',
    status: 'done',
    year: '2025',
    stack: ['Vue 3', '@vue/compat', 'vue-i18n 9', 'Vue Router 4'],
    content: {
      uz: {
        title: 'Vue 2 → Vue 3 migratsiyasi',
        tagline: "Katta davlat tizimini to'xtatmasdan yangilash",
        role: 'Migratsiyaga rahbarlik',
        problem: "Vue 2 rasmiy qo'llab-quvvatlashdan chiqqan, tizim esa to'xtovsiz ishlashi shart edi.",
        solution: "@vue/compat orqali bosqichma-bosqich ko'chirish: avval moslik rejimi, keyin komponentlarni birma-bir Composition API'ga o'tkazish.",
        result: "100 dan ortiq komponent ko'chirildi, tizim bir kun ham to'xtamadi.",
        highlights: [
          "vue-i18n 9 va Vue Router 4 ga o'tish",
          'Moslik ogohlantirishlarini bosqichma-bosqich yopish'
        ]
      },
      ru: {
        title: 'Миграция Vue 2 → Vue 3',
        tagline: 'Обновление крупной госсистемы без остановки',
        role: 'Руководство миграцией',
        problem: 'Vue 2 снят с официальной поддержки, а система должна была работать без перерывов.',
        solution: 'Поэтапный перенос через @vue/compat: сначала режим совместимости, затем перевод компонентов по одному на Composition API.',
        result: 'Перенесено более 100 компонентов, система не останавливалась ни на день.',
        highlights: [
          'Переход на vue-i18n 9 и Vue Router 4',
          'Поэтапное закрытие предупреждений совместимости'
        ]
      },
      en: {
        title: 'Vue 2 → Vue 3 migration',
        tagline: 'Upgrading a large government system without downtime',
        role: 'Led the migration',
        problem: 'Vue 2 had reached end of life, yet the system had to keep running without interruption.',
        solution: 'A staged move through @vue/compat: compatibility mode first, then components ported one by one to the Composition API.',
        result: 'Over 100 components migrated without a single day of downtime.',
        highlights: [
          'Moved to vue-i18n 9 and Vue Router 4',
          'Cleared compatibility warnings step by step'
        ]
      }
    }
  },
  {
    slug: 'certificates',
    order: 10,
    category: 'government',
    status: 'internal',
    year: '2025',
    stack: ['Spring Boot', 'PostgreSQL', 'Vue 2', 'BootstrapVue'],
    content: {
      uz: {
        title: 'Sertifikatlar boshqaruv tizimi',
        tagline: "O'quv kurslari sertifikatlarini berish va tashqi tizimga eksport",
        highlights: [
          "Guruh bo'yicha sertifikat berish, QR va ommaviy tekshirish havolasi",
          'Raqamlash alohida ketma-ketlik jadvali va pessimistik qulf bilan',
          "Shaxs va o'qish yozuvlari ajratilgan (bir shaxs bir nechta guruhda)",
          'Tashqi tizimga eksport (MIB)'
        ]
      },
      ru: {
        title: 'Система управления сертификатами',
        tagline: 'Выдача сертификатов учебных курсов и экспорт во внешнюю систему',
        highlights: [
          'Выдача по группам, QR-код и публичная ссылка для проверки',
          'Нумерация через отдельную таблицу последовательностей и пессимистичную блокировку',
          'Записи о человеке и обучении разделены (один человек — в нескольких группах)',
          'Экспорт во внешнюю систему (MIB)'
        ]
      },
      en: {
        title: 'Certificate management system',
        tagline: 'Issuing course certificates and exporting them to an external system',
        highlights: [
          'Issuing by group, QR codes and a public verification link',
          'Numbering through a dedicated sequence table with pessimistic locking',
          'Person and enrolment records kept separate (one person, many groups)',
          'Export to an external system (MIB)'
        ]
      }
    }
  },
  {
    slug: 'pharm-info',
    order: 11,
    category: 'government',
    status: 'internal',
    year: '2024',
    stack: ['Vue.js', 'Spring Boot', 'PostgreSQL'],
    content: {
      uz: { title: 'Pharm Info — dorixonalar monitoringi', tagline: "Respublika bo'ylab dorixonalar faoliyatini kuzatish tizimi" },
      ru: { title: 'Pharm Info — мониторинг аптек', tagline: 'Система мониторинга деятельности аптек по всей республике' },
      en: { title: 'Pharm Info — pharmacy monitoring', tagline: 'Nationwide pharmacy activity monitoring system' }
    }
  },

  // ─── Texno Dargoh ────────────────────────────────────────────────────
  {
    slug: 'teda-crm',
    order: 20,
    category: 'company',
    status: 'done',
    year: '2022 — 2023',
    links: { github: 'https://github.com/TEDA-LLC/ourSystem' },
    stack: ['Java', 'Spring', 'PostgreSQL'],
    content: {
      uz: { title: 'TEDA CRM', tagline: 'Mijozlar va buyurtmalar boshqaruvi' },
      ru: { title: 'TEDA CRM', tagline: 'Управление клиентами и заказами' },
      en: { title: 'TEDA CRM', tagline: 'Customer and order management' }
    }
  },
  {
    slug: 'teda-web',
    order: 21,
    category: 'company',
    status: 'live',
    year: '2022 — 2023',
    links: { live: 'https://www.teda.uz' },
    stack: ['Java', 'Spring', 'Thymeleaf', 'Telegram Bot API'],
    content: {
      uz: { title: 'teda.uz va Telegram bot', tagline: 'Korporativ sayt va mijozlar bilan aloqa boti' },
      ru: { title: 'teda.uz и Telegram-бот', tagline: 'Корпоративный сайт и бот для связи с клиентами' },
      en: { title: 'teda.uz and Telegram bot', tagline: 'Corporate website and a customer contact bot' }
    }
  },
  {
    slug: 'ibrat',
    order: 22,
    category: 'company',
    status: 'live',
    year: '2023',
    links: { live: 'https://ibrat.teda.uz' },
    stack: ['Java', 'Spring', 'Telegram Bot API'],
    content: {
      uz: { title: 'Ibrat Club', tagline: 'Tadbirlarni tashkil qilish platformasi va Telegram bot' },
      ru: { title: 'Ibrat Club', tagline: 'Платформа организации мероприятий и Telegram-бот' },
      en: { title: 'Ibrat Club', tagline: 'Event organization platform and Telegram bot' }
    }
  },

  // ─── Client work ─────────────────────────────────────────────────────
  {
    slug: 'adizone',
    order: 30,
    featured: true,
    category: 'client',
    status: 'live',
    year: '2025 — now',
    links: { live: 'https://adizone.uz' },
    stack: ['Spring Boot 3.2', 'Spring Security', 'PostgreSQL', 'Vue 3', 'Next.js', 'Telegram Mini App'],
    content: {
      uz: {
        title: "Adizone — o'quv markazi uchun CRM",
        tagline: "Talabalar, to'lovlar, davomat, ish haqi va lidlar bitta tizimda",
        role: 'Yakka ishlab chiquvchi — arxitektura, backend, frontend, deploy',
        problem: "Markaz qimmat tashqi CRM'ga pul to'lar, to'lov va ish haqi hisob-kitobi qo'lda yuritilardi.",
        solution: 'Markazga moslashtirilgan CRM, landing sayt va talabalar uchun Telegram Mini App.',
        highlights: [
          "Oylik va har darslik to'lov modellari, hisob-kitob (accrual) asosidagi balans va qarzdorlar",
          "Dars kunlariga bog'langan davomat va uni ochish uchun ruxsat so'rovi",
          "Har bir xodim uchun sozlanadigan ish haqi qoidalari, o'qituvchilar KPI reytingi",
          'Lidlar kanban doskasi, Meta (Facebook/Instagram) Lead Ads integratsiyasi',
          "Shartnomalar PDF shablonlari, Excel'dan talabalarni import qilish",
          'Audit jurnali (AOP), 8 ta rol',
          'Talaba va ota-onalar uchun Telegram Mini App'
        ]
      },
      ru: {
        title: 'Adizone — CRM для учебного центра',
        tagline: 'Студенты, оплаты, посещаемость, зарплаты и лиды в одной системе',
        role: 'Единственный разработчик — архитектура, бэкенд, фронтенд, деплой',
        problem: 'Центр платил за дорогую внешнюю CRM, а расчёт оплат и зарплат вёлся вручную.',
        solution: 'CRM под процессы центра, лендинг и Telegram Mini App для студентов.',
        highlights: [
          'Помесячная и поурочная модели оплаты, баланс по начислениям (accrual) и должники',
          'Посещаемость, привязанная к дням занятий, и запрос разрешения на её открытие',
          'Настраиваемые правила зарплаты для каждого сотрудника, KPI-рейтинг преподавателей',
          'Канбан-доска лидов, интеграция с Meta (Facebook/Instagram) Lead Ads',
          'PDF-шаблоны договоров, импорт студентов из Excel',
          'Журнал аудита (AOP), 8 ролей',
          'Telegram Mini App для студентов и родителей'
        ]
      },
      en: {
        title: 'Adizone — CRM for a learning center',
        tagline: 'Students, payments, attendance, payroll and leads in one system',
        role: 'Sole developer — architecture, backend, frontend, deployment',
        problem: 'The center paid for an expensive third-party CRM, and payments and payroll were calculated by hand.',
        solution: "A CRM tailored to the center's processes, a landing site and a Telegram Mini App for students.",
        highlights: [
          'Monthly and per-lesson payment models, accrual-based balances and debtors',
          'Attendance tied to lesson days, with permission requests to reopen it',
          'Configurable payroll rules per employee and a teacher KPI ranking',
          'Leads kanban board with Meta (Facebook/Instagram) Lead Ads integration',
          'PDF contract templates and student import from Excel',
          'Audit log (AOP) and 8 roles',
          'Telegram Mini App for students and parents'
        ]
      }
    }
  },
  {
    slug: 'mana-pochta',
    order: 31,
    featured: true,
    category: 'client',
    status: 'live',
    year: '2026',
    links: { live: 'https://mana-pochta.uz' },
    stack: ['Java 21', 'Spring Boot', 'PostgreSQL', 'Redis', 'Vue 3', 'Nuxt', 'Telegram Bot', 'Docker'],
    content: {
      uz: {
        title: "MANA pochta — pochta va kuryerlik xizmati",
        tagline: "Qabul qilishdan yetkazishgacha jonli kuzatiladigan jo'natmalar",
        role: 'Yakka ishlab chiquvchi — dizayn, backend, frontend, bot, deploy',
        problem: "Jo'natmalar Google Sheets va oddiy bot orqali yuritilar, yo'lda kuzatib bo'lmasdi.",
        solution: "Xodimlar CRM'i (operator, kuryer, superadmin), ommaviy sayt, mijozlar uchun Telegram bot va Mini App — birinchi versiya taxminan 3 haftada.",
        highlights: [
          "Har jo'natmaga trek raqami va jonli status",
          'Shaharlararo reyslar: haydovchiga topshirish dalolatnomasi va tasdiqlash',
          'Smena, kassa jurnali va ikki imzoli kun yopilishi',
          'SMS va Telegram bildirishnomalari navbat (outbox) orqali',
          'OneID orqali shaxsni tasdiqlash (integratsiya tayyorlangan)',
          "3 til, qorong'u/yorug' rejim"
        ]
      },
      ru: {
        title: 'MANA pochta — почтовая и курьерская служба',
        tagline: 'Отправления с живым отслеживанием от приёма до доставки',
        role: 'Единственный разработчик — дизайн, бэкенд, фронтенд, бот, деплой',
        problem: 'Отправления велись в Google Sheets и простом боте, отследить их в пути было невозможно.',
        solution: 'CRM для сотрудников (оператор, курьер, суперадмин), публичный сайт, Telegram-бот и Mini App для клиентов — первая версия примерно за 3 недели.',
        highlights: [
          'Трек-номер и живой статус для каждого отправления',
          'Междугородние рейсы: акт передачи водителю и подтверждение',
          'Смены, кассовый журнал и закрытие дня двумя подписями',
          'SMS- и Telegram-уведомления через очередь (outbox)',
          'Подтверждение личности через OneID (интеграция подготовлена)',
          '3 языка, тёмная и светлая темы'
        ]
      },
      en: {
        title: 'MANA pochta — postal and courier service',
        tagline: 'Shipments tracked live from drop-off to delivery',
        role: 'Sole developer — design, backend, frontend, bot, deployment',
        problem: 'Shipments were tracked in Google Sheets and a basic bot, with no way to follow them in transit.',
        solution: 'A staff CRM (operator, courier, superadmin), a public site, and a Telegram bot and Mini App for customers — the first version in about three weeks.',
        highlights: [
          'A tracking number and live status for every shipment',
          'Intercity runs: handover act to the driver and confirmation',
          'Shifts, a cash journal and two-signature day closing',
          'SMS and Telegram notifications through an outbox queue',
          'Identity verification via OneID (integration prepared)',
          '3 languages, dark and light modes'
        ]
      }
    }
  },
  {
    slug: 'mobifone',
    order: 32,
    featured: true,
    category: 'client',
    status: 'live',
    year: '2025 — 2026',
    links: { live: 'https://mobifone.uz' },
    stack: ['Vue 3', 'Tailwind CSS', 'Spring Boot 3.2', 'PostgreSQL', 'Nginx'],
    content: {
      uz: {
        title: 'Mobifone — savdo nuqtasi uchun POS/CRM',
        tagline: "Telefon aksessuarlari do'koni uchun savdo, ombor va kassa tizimi",
        role: 'Yakka ishlab chiquvchi',
        highlights: [
          'Bir nechta sotuvchi bilan ishlash, 3 rol (admin, katta sotuvchi, sotuvchi)',
          "Savdo ekrani: nom, kod yoki shtrix-kod bo'yicha qidiruv va savat",
          'Ombor, qaytarish, xarid, chegirmalar, kassa va ish haqi',
          'Har mahsulot uchun minimal foyda foizi qoidasi',
          'Yangi qurilmadan kirishda PIN tasdiqlash, audit va sessiyalar'
        ]
      },
      ru: {
        title: 'Mobifone — POS/CRM для точки продаж',
        tagline: 'Продажи, склад и касса для магазина аксессуаров для телефонов',
        role: 'Единственный разработчик',
        highlights: [
          'Несколько продавцов, 3 роли (админ, старший продавец, продавец)',
          'Экран продаж: поиск по названию, коду или штрихкоду и корзина',
          'Склад, возвраты, закупки, скидки, касса и зарплаты',
          'Правило минимальной наценки для каждого товара',
          'Подтверждение PIN-кодом при входе с нового устройства, аудит и сессии'
        ]
      },
      en: {
        title: 'Mobifone — POS/CRM for a retail store',
        tagline: 'Sales, inventory and cash register for a phone accessories store',
        role: 'Sole developer',
        highlights: [
          'Multiple sellers with 3 roles (admin, senior seller, seller)',
          'Sales screen with search by name, code or barcode, and a cart',
          'Inventory, returns, purchasing, discounts, cash register and payroll',
          'A minimum profit margin rule per product',
          'PIN confirmation on new devices, audit log and sessions'
        ]
      }
    }
  },
  {
    slug: 'bayk-tourism',
    order: 33,
    category: 'client',
    status: 'live',
    year: '2026',
    links: { live: 'https://bayk-tourism.vercel.app' },
    stack: ['Nuxt 4', '@nuxt/content', 'i18n', 'Vercel'],
    content: {
      uz: {
        title: 'Bayk Tourism',
        tagline: "Buxorodagi turistik agentlik uchun SEO'ga yo'naltirilgan sayt",
        highlights: [
          'Server tomonda render (SEO uchun)',
          "3 til: rus, o'zbek, ingliz",
          'Turlar katalogi, ariza Telegram va emailga'
        ]
      },
      ru: {
        title: 'Bayk Tourism',
        tagline: 'SEO-ориентированный сайт туристического агентства в Бухаре',
        highlights: [
          'Рендеринг на сервере (для SEO)',
          '3 языка: русский, узбекский, английский',
          'Каталог туров, заявки в Telegram и на email'
        ]
      },
      en: {
        title: 'Bayk Tourism',
        tagline: 'An SEO-focused website for a Bukhara travel agency',
        highlights: [
          'Server-side rendering for SEO',
          '3 languages: Russian, Uzbek, English',
          'Tour catalog with requests sent to Telegram and email'
        ]
      }
    }
  },
  {
    slug: 'royce',
    order: 34,
    category: 'client',
    status: 'prototype',
    year: '2025',
    stack: ['React', 'Tailwind CSS'],
    content: {
      uz: {
        title: 'ROYCE Logistics TMS',
        tagline: "Yuk tashish kompaniyalari uchun transport boshqaruvi tizimi (prototip)",
        highlights: [
          'Haydovchilar, texnika, dispetcherlik, xavfsizlik moduli',
          "4 til, qorong'u/yorug' rejim",
          "Haydovchilar ilovasi konfiguratori jonli mobil oldindan ko'rish bilan"
        ]
      },
      ru: {
        title: 'ROYCE Logistics TMS',
        tagline: 'Система управления транспортом для грузоперевозчиков (прототип)',
        highlights: [
          'Водители, техника, диспетчеризация, модуль безопасности',
          '4 языка, тёмная и светлая темы',
          'Конфигуратор приложения для водителей с живым мобильным превью'
        ]
      },
      en: {
        title: 'ROYCE Logistics TMS',
        tagline: 'A transport management system for trucking companies (prototype)',
        highlights: [
          'Drivers, fleet, dispatching and a safety module',
          '4 languages, dark and light modes',
          'Driver app configurator with a live mobile preview'
        ]
      }
    }
  },

  // ─── Personal ────────────────────────────────────────────────────────
  {
    slug: 'chaqmoq-bot',
    order: 40,
    category: 'personal',
    status: 'live',
    year: '2025',
    links: { github: 'https://github.com/MalikovAzizjon4843/chaqmoq-platform' },
    stack: ['Java', 'Spring Boot', 'FFmpeg', 'Docker', 'Telegram Bot API'],
    content: {
      uz: {
        title: 'Chaqmoq — media yuklab olish boti',
        tagline: 'Ijtimoiy tarmoqlardan video va audio yuklovchi Telegram bot',
        highlights: [
          'Instagram, X, YouTube, Pinterest, Facebook, TikTok',
          'YouTube uchun sifat tanlash (360p–1080p)',
          'FFmpeg bilan ikki bosqichli siqish (dumaloq video cheklovi uchun)',
          'ACRCloud orqali musiqani aniqlash',
          'Parallel yuklash navbati — bot qotib qolmaydi'
        ]
      },
      ru: {
        title: 'Chaqmoq — бот для скачивания медиа',
        tagline: 'Telegram-бот, скачивающий видео и аудио из соцсетей',
        highlights: [
          'Instagram, X, YouTube, Pinterest, Facebook, TikTok',
          'Выбор качества для YouTube (360p–1080p)',
          'Двухэтапное сжатие через FFmpeg (под ограничения круглых видео)',
          'Распознавание музыки через ACRCloud',
          'Параллельная очередь загрузок — бот не зависает'
        ]
      },
      en: {
        title: 'Chaqmoq — media downloader bot',
        tagline: 'A Telegram bot that downloads video and audio from social networks',
        highlights: [
          'Instagram, X, YouTube, Pinterest, Facebook, TikTok',
          'Quality picker for YouTube (360p–1080p)',
          'Two-pass FFmpeg compression to fit round video-note limits',
          'Music recognition via ACRCloud',
          'A parallel download queue, so the bot never stalls'
        ]
      }
    }
  },
  {
    slug: 'trading-tools',
    order: 41,
    category: 'personal',
    status: 'done',
    year: '2025 — 2026',
    stack: ['MQL5', 'TypeScript', 'Node.js'],
    content: {
      uz: {
        title: 'Algoritmik savdo tadqiqoti',
        tagline: 'XAUUSD va kripto uchun savdo robotlari va xavf nazorati',
        highlights: [
          'MT5 Expert Advisor (XAUUSD) va xavfni cheklovchi qo\'riqchi EA',
          'TypeScript kripto paper-trading boti: walk-forward va namunadan tashqari testlar',
          'Xulosa halol qayd etilgan: komissiyalar hisobga olinganda barqaror ustunlik topilmadi'
        ]
      },
      ru: {
        title: 'Исследование алгоритмической торговли',
        tagline: 'Торговые роботы и контроль риска для XAUUSD и криптовалют',
        highlights: [
          'MT5 Expert Advisor (XAUUSD) и EA-страж, ограничивающий риск',
          'Бот для бумажной торговли криптой на TypeScript: walk-forward и тесты вне выборки',
          'Вывод зафиксирован честно: с учётом комиссий устойчивого преимущества не найдено'
        ]
      },
      en: {
        title: 'Algorithmic trading research',
        tagline: 'Trading bots and risk control for XAUUSD and crypto',
        highlights: [
          'An MT5 Expert Advisor (XAUUSD) and a guard EA that caps risk',
          'A TypeScript crypto paper-trading bot with walk-forward and out-of-sample tests',
          'An honest conclusion: after fees, no durable edge was found'
        ]
      }
    }
  },
  {
    slug: 'uzbek-stt',
    order: 42,
    category: 'personal',
    status: 'done',
    year: '2025',
    stack: ['JavaScript', 'Transformers.js', 'WebAssembly'],
    content: {
      uz: { title: "Oflayn o'zbekcha nutqni matnga aylantirish", tagline: "Whisper modeli to'liq brauzerda, serversiz" },
      ru: { title: 'Офлайн-распознавание узбекской речи', tagline: 'Модель Whisper полностью в браузере, без сервера' },
      en: { title: 'Offline Uzbek speech-to-text', tagline: 'The Whisper model running entirely in the browser, no server' }
    }
  },
  {
    slug: 'flappy-bird',
    order: 43,
    category: 'personal',
    status: 'done',
    year: '2026',
    stack: ['Unity', 'C#'],
    content: {
      uz: { title: "O'zbekona Flappy Bird", tagline: "Windows va Android uchun o'yin" },
      ru: { title: 'Flappy Bird по-узбекски', tagline: 'Игра для Windows и Android' },
      en: { title: 'Uzbek-style Flappy Bird', tagline: 'A game for Windows and Android' }
    }
  },
  {
    slug: 'lumeria',
    order: 44,
    category: 'personal',
    status: 'in-progress',
    year: '2026',
    stack: [],
    content: {
      uz: { title: 'Lumeria', tagline: 'Foto, video, PDF va taklifnomalar uchun bepul onlayn vositalar' },
      ru: { title: 'Lumeria', tagline: 'Бесплатные онлайн-инструменты для фото, видео, PDF и приглашений' },
      en: { title: 'Lumeria', tagline: 'Free online tools for photos, video, PDFs and invitations' }
    }
  },
  {
    slug: 'azizjoon',
    order: 45,
    category: 'personal',
    status: 'live',
    year: '2026',
    links: { live: 'https://azizjoon.uz' },
    stack: ['Vue 3', 'Vite', 'three.js', 'SCSS', 'Vercel Functions'],
    content: {
      uz: { title: 'azizjoon.uz', tagline: 'Shu sayt: Liquid Glass dizayn, 3D logo, 3 til' },
      ru: { title: 'azizjoon.uz', tagline: 'Этот сайт: дизайн Liquid Glass, 3D-логотип, 3 языка' },
      en: { title: 'azizjoon.uz', tagline: 'This site: Liquid Glass design, a 3D logo, 3 languages' }
    }
  },
  {
    slug: 'birthday-bot',
    order: 46,
    category: 'personal',
    status: 'done',
    year: '', // not provided yet
    stack: ['Java', 'Spring Boot', 'PostgreSQL', 'Telegram Bot API', 'Telegram Mini App'],
    content: {
      uz: {
        title: "Telegram tug'ilgan kun boti",
        tagline: "Guruhlar uchun tug'ilgan kunlarni eslatuvchi va tabriklovchi bot",
        highlights: [
          'AI yordamida tabrik matnlari',
          'Bir foydalanuvchi bir nechta guruhda',
          'Yosh avtomatik hisoblanadi',
          "Ko'p tilli",
          "Mini App ko'rinishidagi admin panel"
        ]
      },
      ru: {
        title: 'Telegram-бот для дней рождения',
        tagline: 'Бот, который напоминает о днях рождения в группах и поздравляет',
        highlights: [
          'Тексты поздравлений с помощью ИИ',
          'Один пользователь — в нескольких группах',
          'Возраст вычисляется автоматически',
          'Многоязычность',
          'Админ-панель в виде Mini App'
        ]
      },
      en: {
        title: 'Telegram birthday bot',
        tagline: 'A bot that reminds groups about birthdays and sends greetings',
        highlights: [
          'AI-written greetings',
          'One user across several groups',
          'Age calculated automatically',
          'Multilingual',
          'Admin panel as a Mini App'
        ]
      }
    }
  },
  {
    slug: 'gpt-bot',
    order: 47,
    category: 'personal',
    status: 'done',
    year: '', // not provided yet
    links: { github: 'https://github.com/MalikovAzizjon4843/gpt-telegram-bot' },
    stack: ['Python', 'OpenAI API', 'Telegram Bot API'],
    content: {
      uz: { title: 'GPT Telegram bot', tagline: 'OpenAI GPT bilan suhbatlashadigan Telegram bot' },
      ru: { title: 'GPT Telegram-бот', tagline: 'Telegram-бот для общения с OpenAI GPT' },
      en: { title: 'GPT Telegram bot', tagline: 'A Telegram bot for chatting with OpenAI GPT' }
    }
  }
]

const EMPTY_CONTENT = { title: '', tagline: '', role: '', problem: '', solution: '', result: '', highlights: [] }

function normalize(p) {
  return {
    featured: false,
    cover: null,
    screenshots: [],
    ...p,
    links: { live: null, github: null, ...p.links },
    stack: p.stack || [],
    content: Object.fromEntries(LOCALES.map((l) => [l, { ...EMPTY_CONTENT, ...p.content?.[l] }]))
  }
}

export const projects = raw.map(normalize).sort((a, b) => a.order - b.order)

export const featuredProjects = FEATURED_ORDER
  .map((slug) => projects.find((p) => p.slug === slug))
  .filter(Boolean)

export function findProject(slug) {
  return projects.find((p) => p.slug === slug) || null
}

// Catalog order for /projects: featured (carousel order) first, then the rest by `order`.
export function catalogOrder(list = projects) {
  const rank = (p) => (p.featured ? FEATURED_ORDER.indexOf(p.slug) : FEATURED_ORDER.length + p.order)
  return [...list].sort((a, b) => rank(a) - rank(b))
}
