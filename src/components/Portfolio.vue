<template>
  <section id="portfolio" class="rn-portfolio-area portfolio-style-three rn-section-gap section-separator">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title text-center">
            <span class="subtitle">Visit my portfolio and keep your feedback</span>
            <h2 class="title">My Portfolio</h2>
          </div>
        </div>
      </div>

      <div class="row mt--25 mt_md--5 mt_sm--5">
        <div class="col-lg-12">
          <swiper :options="swiperOptions" class="portfolio-swiper">
            <!-- Slides -->
            <swiper-slide v-for="(item, i) in items" :key="i">
              <div class="rn-portfolio" @click="openItem(item)">
                <div class="inner">
                  <div class="thumbnail">
                    <a href="javascript:void(0)">
                      <img :src="item.imageSrc" :alt="item.title" />
                    </a>
                  </div>
                  <div class="content">
                    <div class="category-info">
                      <div class="category-list">
                        <a href="javascript:void(0)">{{ item.category }}</a>
                      </div>
                      <div class="meta">
                        <span><i class="feather-heart"></i> {{ item.likes }}</span>
                      </div>
                    </div>
                    <h4 class="title">
                      <a href="javascript:void(0)">{{ item.title }}
                        <i class="feather-arrow-up-right"></i>
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </swiper-slide>

            <!-- Controls -->
<!--            <div class="swiper-pagination" slot="pagination"></div>-->
            <div class="swiper-button-prev slick-arrow-style-one slick-arrow" slot="button-prev"></div>
            <div class="swiper-button-next slick-arrow-style-one slick-arrow" slot="button-next"></div>
          </swiper>
        </div>
      </div>
    </div>

    <!-- Details Modal -->
    <b-modal v-model="showModal" size="lg" :title="currentItem?.title || 'Project details'" hide-footer>
      <div class="row">
        <div class="col-md-6 mb-3">
          <img v-if="currentItem" :src="currentItem.imageSrc" :alt="currentItem.title" class="img-fluid rounded" />
        </div>
        <div class="col-md-6">
          <h5 class="mb-1">{{ currentItem?.category }}</h5>
          <p class="text-muted mb-2" v-if="currentItem?.company">
            <strong>Company:</strong> {{ currentItem.company }}
          </p>
          <p class="text-muted mb-3" v-if="currentItem?.period">
            <strong>Period:</strong> {{ currentItem.period }}
          </p>

          <p class="mb-3">{{ currentItem?.summary }}</p>

          <ul class="mb-3" v-if="currentItem?.highlights && currentItem.highlights.length">
            <li v-for="(h, idx) in currentItem.highlights" :key="idx">{{ h }}</li>
          </ul>

          <ul class="list-unstyled mb-3">
            <li v-if="currentItem?.stack"><strong>Stack:</strong> {{ currentItem.stack }}</li>
            <li v-if="currentItem?.role"><strong>Role:</strong> {{ currentItem.role }}</li>
            <li v-if="currentItem?.year"><strong>Year:</strong> {{ currentItem.year }}</li>
          </ul>

          <div class="button-group mt-2">
            <a v-if="currentItem?.link" :href="currentItem.link" target="_blank" rel="noopener" class="rn-btn mr--10">
              <span>VIEW PROJECT</span>
              <i data-feather="chevron-right"></i>
            </a>
            <a href="javascript:void(0)" class="rn-btn thumbs-icon">
              <span>LIKE THIS</span>
              <i data-feather="thumbs-up"></i>
            </a>
          </div>
        </div>
      </div>
    </b-modal>
  </section>
</template>

<script>
// Vue 2 + Swiper v5
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'PortfolioSection',
  components: { swiper, swiperSlide },
  data() {
    return {
      showModal: false,
      currentItem: null,
      items: [
        {
          image: 'portfolio-erp.png',
          category: 'Spring Boot / ERP',
          likes: 540,
          title: 'ERP Modules Suite (Inventory, Sales, HR)',
          company: 'Texno Model',
          period: 'May 2022 – Jun 2023',
          summary:
              'Built core ERP modules and integrated backend logic used across operations.',
          highlights: [
            'Designed RESTful APIs for Inventory, Sales, HR & RBAC',
            'Implemented caching and background jobs for heavy operations',
            'Wrote unit/integration tests and contributed to CI/CD'
          ],
          stack: 'Java 11+, Spring Boot, Spring Data JPA, PostgreSQL, Redis, RabbitMQ, Docker',
          role: 'Java Software Engineer',
          year: '2022–2023',
          link: '#'
        },
        {
          image: 'portfolio-fairtech.png',
          category: 'E-commerce Backend',
          likes: 620,
          title: 'Fairtech E-commerce Platform Backend',
          company: 'fairtech.uz',
          period: 'Jul 2023 – Present',
          summary:
              'Implemented order pipeline, payment integrations, JWT auth and performance tuning.',
          highlights: [
            'Checkout, order status, and inventory sync flows',
            'JWT-based auth & role management, Swagger/OpenAPI docs',
            'Caching & SQL optimizations, Dockerized environments'
          ],
          stack: 'Java 17, Spring Boot 3, Spring Security (JWT), MySQL, Redis, Docker',
          role: 'Full-Stack (Java)',
          year: '2023–Present',
          link: '#'
        },
        {
          image: 'portfolio-04.jpg',
          category: 'Frontend / SPA',
          likes: 310,
          title: 'Personal Portfolio Website',
          company: 'Personal',
          period: '2024',
          summary:
              'Single-page portfolio with smooth scrolling, section spy, and responsive layout.',
          highlights: [
            'AOS animations, Swiper carousel, section scroll-spy',
            'Sticky header with shadow on scroll',
            'Optimized assets and bundle size'
          ],
          stack: 'Vue 2, BootstrapVue, AOS, Swiper v5, Feather Icons',
          role: 'Frontend Developer',
          year: '2024',
          link: '#'
        },
        {
          image: 'portfolio-03.jpg',
          category: 'Capstone / REST API',
          likes: 265,
          title: 'Task Manager API (Capstone)',
          company: 'PDP Academy',
          period: 'Jul 2021 – May 2022',
          summary:
              'Capstone project focusing on clean REST design, validation and persistence.',
          highlights: [
            'CRUD for tasks, users, labels and comments',
            'Auth, validation and error handling best practices',
            'Database migrations and API documentation'
          ],
          stack: 'Java, Spring Boot, Hibernate/JPA, PostgreSQL',
          role: 'Backend Developer (Graduate)',
          year: '2022',
          link: '#'
        }
      ],
      swiperOptions: {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        grabCursor: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        breakpoints: {
          1024: { slidesPerView: 3, spaceBetween: 30 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          320: { slidesPerView: 1, spaceBetween: 16 }
        }
      }
    }
  },
  computed: {
    itemsWithSrc() {
      return this.items.map(it => ({
        ...it,
        imageSrc: require(`@/assets/images/portfolio/${it.image}`)
      }))
    }
  },
  created() {
    this.items = this.itemsWithSrc
  },
  methods: {
    openItem(item) {
      this.currentItem = item
      this.showModal = true
      if (window.feather && window.feather.replace) {
        this.$nextTick(() => window.feather.replace())
      }
    }
  }
}
</script>

<style scoped>
.portfolio-swiper { width: 100%; }

.rn-portfolio {
  background: #1e1e1e;
  border-radius: 12px;
  color: #fff;
  cursor: pointer;
  transition: transform .25s ease, box-shadow .25s ease;
}
.rn-portfolio:hover {
  transform: translateY(-6px);
  box-shadow: 0 14px 24px rgba(0,0,0,.35);
}
.rn-portfolio .thumbnail img {
  width: 100%;
  display: block;
  border-radius: 12px 12px 0 0;
}
.rn-portfolio .inner { padding: 18px; }
.rn-portfolio .category-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: .25rem;
}
.rn-portfolio .category-list a { color: #bbb; }
.rn-portfolio .title { margin: 0; font-size: 18px; }

.swiper-button-prev, .swiper-button-next { color: #fff; }
.swiper-pagination-bullet { background: #666; opacity: 1; }
.swiper-pagination-bullet-active { background: #CA0A45; }
</style>
