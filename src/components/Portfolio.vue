<template>
  <section class="rn-portfolio-area rn-section-gap section-separator" id="portfolio">
    <div class="container">
      <div class="text-center mb-8">
        <div class="section-title text-center">
          <span class="subtitle">Visit my portfolio and keep your feedback</span>
          <h2 class="title">My Portfolio</h2>
        </div>
      </div>

      <swiper :options="swiperOptions" class="portfolio-swiper">
        <swiper-slide v-for="(item, index) in items" :key="index">
          <div class="rn-portfolio">
            <div class="inner">
              <div class="thumbnail">
                <img :src="require(`@/assets/images/portfolio/${item.image}`)" :alt="item.title" />
              </div>
              <div class="content">
                <div class="category-info">
                  <div class="category-list"><a href="#">{{ item.category }}</a></div>
                  <div class="meta"><span><i class="feather-heart"></i> {{ item.likes }}</span></div>
                </div>
                <h4 class="title">{{ item.title }} <i class="feather-arrow-up-right"></i></h4>
              </div>
            </div>
          </div>
        </swiper-slide>

        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
  </section>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'PortfolioSection',
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      items: [
        {
          image: 'portfolio-06.jpg',
          category: 'Photoshop',
          likes: 650,
          title: 'The services provide for design'
        },
        {
          image: 'portfolio-05.jpg',
          category: 'Figma',
          likes: 420,
          title: 'Mobile app landing design & Services'
        },
        {
          image: 'portfolio-04.jpg',
          category: 'Laravel',
          likes: 318,
          title: 'Web app Responsive design & Services'
        },
        {
          image: 'portfolio-03.jpg',
          category: 'Figma',
          likes: 210,
          title: 'PHP with app landing design & Services'
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
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          320: { slidesPerView: 1 }
        }
      }
    }
  }
}
</script>

<style scoped>
.portfolio-swiper {
  width: 100%;
  padding-bottom: 50px;
}
.swiper-slide {
  display: flex;
  justify-content: center;
}
.rn-portfolio {
  max-width: 340px;
  width: 100%;
  background: #1e1e1e;
  padding: 20px;
  border-radius: 10px;
  color: white;
}
.thumbnail img {
  width: 100%;
  border-radius: 10px;
}
</style>
