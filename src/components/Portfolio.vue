<template>
  <section class="rn-blog-area rn-section-gap section-separator" id="portfolio">
    <div class="container">
      <div class="text-center mb-8">
        <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" data-aos-once="true" class="section-title text-center">
          <span class="subtitle">Visit my portfolio and keep your feedback</span>
          <h2 class="title">My Portfolio</h2>
        </div>
      </div>

      <swiper :options="swiperOptions" class="portfolio-swiper">
        <swiper-slide v-for="(blog, index) in blogs" :key="index">
          <div class="rn-blog">
            <div class="inner">
              <div class="thumbnail">
                <img :src="require(`@/assets/images/blog/${blog.image}`)" :alt="blog.title" />
              </div>
              <div class="content">
                <div class="category-info">
                  <div class="category-list"><a href="#">{{ blog.category }}</a></div>
                  <div class="meta"><span><i class="feather-clock"></i> {{ blog.readTime }}</span></div>
                </div>
                <h4 class="title">{{ blog.title }}<i class="feather-arrow-up-right"></i></h4>
              </div>
            </div>
          </div>
        </swiper-slide>

        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>

      <!-- Modal -->
      <div class="modal fade" id="exampleModalCenters" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-news" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true"><i data-feather="x"></i></span>
              </button>
            </div>
            <div class="modal-body">
              <img :src="require(`@/assets/images/blog/${currentBlog.image}`)" alt="news modal" class="img-fluid modal-feat-img">
              <div class="news-details">
                <span class="date">{{ currentBlog.date }}</span>
                <h2 class="title">{{ currentBlog.title }}</h2>
                <p>{{ currentBlog.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

export default {
  name: 'PortfolioSection',
  components: {
    swiper: Swiper,
    swiperSlide: SwiperSlide
  },
  data() {
    return {
      blogs: [
        {
          image: 'blog-01.jpg',
          category: 'Canada',
          readTime: '2 min read',
          title: 'T-shirt design is the part of design',
          date: '2 May, 2021',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...'
        },
        {
          image: 'blog-02.jpg',
          category: 'Development',
          readTime: '2 hour read',
          title: 'The services provide for design',
          date: '2 May, 2021',
          description: 'Mauris tempor, orci id pellentesque convallis...'
        },
        {
          image: 'blog-03.jpg',
          category: 'Application',
          readTime: '5 min read',
          title: 'Mobile app landing design & app maintain',
          date: '2 May, 2021',
          description: 'Ut rhoncus vestibulum facilisis...'
        }
      ],
      currentBlog: {},
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
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          320: { slidesPerView: 1 }
        }
      }
    };
  },
  methods: {
    openBlog(blog) {
      this.currentBlog = blog;
    }
  },
  created() {
    this.currentBlog = this.blogs[0];
  }
};
</script>

<style scoped>
.portfolio-swiper {
  width: 100%;
  padding-bottom: 50px;
}
.swiper-slide {
  display: flex;
  justify-content: center;
  box-sizing: border-box;
}
.rn-blog {
  max-width: 320px;
  width: 100%;
  background: #1e1e1e;
  padding: 20px;
  border-radius: 8px;
  color: white;
}
.thumbnail img {
  width: 100%;
  border-radius: 8px;
}
</style>
