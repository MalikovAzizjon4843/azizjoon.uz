<template>
  <section id="resume" class="rn-resume-area rn-section-gap section-separator">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title text-center">
            <span class="subtitle">3+ Years of Experience</span>
            <h2 class="title">My Resume</h2>
          </div>
        </div>
      </div>

      <div class="row mt--45">
        <div class="col-lg-12">
          <!-- Tabs -->
          <ul class="rn-nav-list nav" role="tablist">
            <li class="nav-item" v-for="tab in tabs" :key="tab.id">
              <a
                  href="#"
                  class="nav-link"
                  :class="{ active: activeTab === tab.id }"
                  @click.prevent="activeTab = tab.id"
              >
                {{ tab.label }}
              </a>
            </li>
          </ul>

          <!-- Tab content -->
          <div class="rn-nav-content tab-content mt-5">
            <!-- Education -->
            <div v-if="activeTab === 'education'" class="tab-pane active fade show single-tab-area">
              <div class="personal-experience-inner mt--40">
                <div class="row">
                  <!-- Education left -->
                  <div class="col-lg-6 col-md-12 col-12">
                    <div class="content">
                      <span class="subtitle">2021 – Present</span>
                      <h4 class="maintitle">Education Quality</h4>

                      <div class="experience-list">
                        <div class="resume-single-list" v-for="e in educationItems" :key="e.name">
                          <div class="inner">
                            <div class="heading">
                              <div class="title">
                                <h4>{{ e.name }}</h4>
                                <span>{{ e.institute }}</span>
                              </div>
                              <div class="date-of-time">
                                <span>{{ e.period }}</span>
                              </div>
                            </div>
                            <p class="description">{{ e.description }}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Job right -->
                  <div class="col-lg-6 col-md-12 col-12 mt_md--60 mt_sm--60">
                    <div class="content">
                      <span class="subtitle">2022 – Present</span>
                      <h4 class="maintitle">Job Experience</h4>

                      <div class="experience-list">
                        <div class="resume-single-list" v-for="j in jobItems" :key="j.name">
                          <div class="inner">
                            <div class="heading">
                              <div class="title">
                                <h4>{{ j.name }}</h4>
                                <span>{{ j.company }}</span>
                              </div>
                              <div class="date-of-time">
                                <span>{{ j.period }}</span>
                              </div>
                            </div>
                            <p class="description">{{ j.description }}</p>

                            <ul v-if="j.points && j.points.length" class="mt-2 pl-3">
                              <li v-for="(p,idx) in j.points" :key="idx">{{ p }}</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Professional skills -->
            <div v-if="activeTab === 'professional'">
              <div class="personal-experience-inner mt--40">
                <div class="row row--40">
                  <!-- Backend -->
                  <div class="col-lg-6 col-md-6 col-12">
                    <div class="progress-wrapper">
                      <div class="content">
                        <span class="subtitle">Stack</span>
                        <h4 class="maintitle">Backend Skills</h4>

                        <div class="progress-charts" v-for="s in backendSkills" :key="s.label">
                          <h6 class="heading heading-h6">{{ s.label }}</h6>
                          <div class="progress">
                            <div
                                class="progress-bar wow fadeInLeft"
                                data-wow-duration="0.6s"
                                data-wow-delay=".3s"
                                role="progressbar"
                                :style="{ width: s.val + '%' }"
                                :aria-valuenow="s.val" aria-valuemin="0" aria-valuemax="100"
                            >
                              <span class="percent-label">{{ s.val }}%</span>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>

                  <!-- Frontend/DB/Tools -->
                  <div class="col-lg-6 col-md-6 col-12 mt_sm--60">
                    <div class="progress-wrapper">
                      <div class="content">
                        <span class="subtitle">Stack</span>
                        <h4 class="maintitle">Frontend • DB • Tools</h4>

                        <div class="progress-charts" v-for="s in otherSkills" :key="s.label">
                          <h6 class="heading heading-h6">{{ s.label }}</h6>
                          <div class="progress">
                            <div
                                class="progress-bar wow fadeInLeft"
                                data-wow-duration="0.6s"
                                data-wow-delay=".3s"
                                role="progressbar"
                                :style="{ width: s.val + '%' }"
                                :aria-valuenow="s.val" aria-valuemin="0" aria-valuemax="100"
                            >
                              <span class="percent-label">{{ s.val }}%</span>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <!-- Experience (detailed) -->
            <div v-if="activeTab === 'experience'">
              <div class="personal-experience-inner mt--40">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="content">
                      <span class="subtitle">Highlights</span>
                      <h4 class="maintitle">Selected Projects</h4>

                      <div class="experience-list">
                        <div class="resume-single-list" v-for="p in projects" :key="p.name">
                          <div class="inner">
                            <div class="heading">
                              <div class="title">
                                <h4>{{ p.name }}</h4>
                                <span>{{ p.note }}</span>
                              </div>
                              <div class="date-of-time"><span>{{ p.period }}</span></div>
                            </div>
                            <p class="description">{{ p.description }}</p>
                            <div v-if="p.links && p.links.length" class="mt-2">
                              <a v-for="(l,ix) in p.links" :key="ix" :href="l.href" target="_blank" class="mr-3">
                                {{ l.label }}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Interview (Certificates & Links) -->
            <div v-if="activeTab === 'interview'">
              <div class="personal-experience-inner mt--40">
                <div class="row">
                  <div class="col-lg-6 col-md-12 col-12">
                    <div class="content">
                      <span class="subtitle">Proof</span>
                      <h4 class="maintitle">Certificates</h4>

                      <div class="experience-list">
                        <div class="resume-single-list" v-for="c in certificates" :key="c.name">
                          <div class="inner">
                            <div class="heading">
                              <div class="title">
                                <h4>{{ c.name }}</h4>
                                <span>{{ c.org }}</span>
                              </div>
                              <div class="date-of-time"><span>{{ c.when }}</span></div>
                            </div>
                            <p class="description">
                              <a :href="c.link" target="_blank">View certificate</a>
                            </p>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div class="col-lg-6 col-md-12 col-12 mt_md--60 mt_sm--60">
                    <div class="content">
                      <span class="subtitle">Presence</span>
                      <h4 class="maintitle">Profiles & Contacts</h4>

                      <div class="experience-list">
                        <div class="resume-single-list" v-for="l in links" :key="l.label">
                          <div class="inner">
                            <div class="heading">
                              <div class="title">
                                <h4>{{ l.label }}</h4>
                                <span>{{ l.note }}</span>
                              </div>
                              <div class="date-of-time"><span>&nbsp;</span></div>
                            </div>
                            <p class="description">
                              <a :href="l.href" target="_blank">{{ l.href }}</a>
                            </p>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            </div>
            <!-- /Interview -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ResumeSection',
  data() {
    return {
      activeTab: 'education',
      tabs: [
        { id: 'education',   label: 'Education' },
        { id: 'professional',label: 'Professional Skills' },
        { id: 'experience',  label: 'Experience' },
        { id: 'interview',   label: 'Interview' }
      ],

      // === Education ===
      educationItems: [
        {
          name: 'BSc, Computer Engineering (Part-time)',
          institute: 'Tashkent University of Economics and Technologies',
          period: 'Mar 2023 – Present (Year 4)',
          description: 'Systems, algorithms, software architecture. Part-time studies alongside production work.'
        },
        {
          name: 'Java Backend Course',
          institute: 'PDP Academy',
          period: 'Jul 2021 – Mar 2022',
          description: 'Java Core, OOP, Spring, DB development. Graduated with certificate.'
        },
        {
          name: 'Java Backend Development Training',
          institute: 'EPAM Systems',
          period: 'Apr 2022 – Jul 2022',
          description: 'Java, Spring, DB development with production-style practices.'
        }
      ],

      // === Employment (short) ===
      jobItems: [
        {
          name: 'Full-Stack Developer',
          company: 'Antimonopoly Committee of the Republic of Uzbekistan (fairtech.uz)',
          period: 'Jul 2023 – Present',
          description: 'Vue.js front-end + Java/Spring back-end on national-scale platforms.',
          points: [
            'Managed republic-wide pharmacy system',
            'Built regional management modules',
            'Created quiz.fairtech.uz for inspector assessments',
            'Contributed to cabinet.fairtech.uz modular system'
          ]
        },
        {
          name: 'Java Backend Developer',
          company: 'Texno Dargoh (teda.uz)',
          period: 'Apr 2022 – May 2023',
          description: 'Java/Spring web apps and internal systems.',
          points: [
            'CRM systems to improve customer management',
            'Automated magazine publishing operations',
            'Websites & Telegram bots UI/UX and back-end'
          ]
        }
      ],

      // === Skills ===
      backendSkills: [
        { label: 'Java • OOP • JDBC', val: 90 },
        { label: 'Spring / Spring Boot', val: 90 },
        { label: 'Hibernate / JPA', val: 85 },
        { label: 'REST API Design', val: 90 }
      ],
      otherSkills: [
        { label: 'Vue.js • vue-router • JS/TS', val: 88 },
        { label: 'HTML • CSS', val: 85 },
        { label: 'PostgreSQL • SQL', val: 85 },
        { label: 'Git • GitLab/GitHub • Maven/Gradle', val: 85 }
      ],

      // === Projects (Experience tab) ===
      projects: [
        {
          name: 'quiz.fairtech.uz',
          period: 'Apr 2024 – May 2024',
          note: 'Online quiz system for inspectors',
          description: 'Scalable assessment platform with role-based access and analytics.',
          links: [{ label: 'Visit', href: 'https://quiz.fairtech.uz' }]
        },
        {
          name: 'cabinet.fairtech.uz',
          period: 'Dec 2023 – Present',
          note: 'Modular cabinet system (internal)',
          description: 'Designed modules and drove delivery for internal workflows.',
          links: [{ label: 'Site', href: 'https://cabinet.fairtech.uz' }]
        },
        {
          name: 'Fairtech core platform',
          period: 'Jul 2023 – Present',
          note: 'Workflow automation (internal)',
          description: 'Core services for government-facing products.',
          links: [{ label: 'Company', href: 'https://fairtech.uz' }]
        },
        {
          name: 'Texno Dargoh CRM & media automation',
          period: '2022 – 2023',
          note: 'CRM, website & bots',
          description: 'CRM, event platform, websites and Telegram bots.',
          links: [
            { label: 'TEDA', href: 'https://www.teda.uz' },
            { label: 'Admin', href: 'https://admin.teda.uz/' }
          ]
        }
      ],

      // === Certificates & Links ===
      certificates: [
        {
          name: 'Java Backend Course',
          org: 'PDP Academy',
          when: 'May 2022',
          link: 'https://online.pdp.uz/api/file/get/92ca4b35-6388-4b50-8762-95542363d4a7'
        },
        { name: 'Frontend Course', org: 'PDP Academy', when: 'Apr 2021', link: '#' },
        { name: 'Frontend/Backend Course', org: 'One Million Uzbek Coders', when: 'Feb 2020', link: '#' }
      ],
      links: [
        { label: 'Personal Website', note: 'Portfolio & playground', href: 'https://www.azizjoon.uz/' },
        { label: 'GitHub', note: 'Code & OSS', href: 'https://github.com/MalikovAzizjon4843' },
        { label: 'Twitter/X', note: 'Updates', href: 'https://x.com/AzizjonMalikov' },
        { label: 'LinkedIn', note: 'Professional profile', href: 'https://linkedin.com/in/azizjon-malikov' }
      ]
    }
  }
}
</script>
