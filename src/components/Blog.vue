<template>
  <section class="rn-blog-area rn-section-gap section-separator" id="blog">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="100"
              data-aos-once="true"
              class="section-title text-center"
          >
            <span class="subtitle">Visit my blog and keep your feedback</span>
            <h2 class="title">My Blog</h2>
          </div>
        </div>
      </div>

      <div class="row row--25 mt--30 mt_md--10 mt_sm--10">
        <div
            v-for="(blog, index) in blogs"
            :key="index"
            :data-aos="`fade-up`"
            :data-aos-duration="500"
            :data-aos-delay="100 + (index * 50)"
            data-aos-once="true"
            class="col-lg-6 col-xl-4 mt--30 col-md-6 col-sm-12 col-12 mt--30"
        >
          <div class="rn-blog" @click="openBlog(blog)">
            <div class="inner">
              <div class="thumbnail">
                <a href="javascript:void(0)">
                  <img
                      :src="require(`@/assets/images/blog/${blog.image}`)"
                      :alt="blog.title"
                      loading="lazy"
                  />
                </a>
              </div>
              <div class="content">
                <div class="category-info">
                  <div class="category-list">
                    <a href="javascript:void(0)">{{ blog.category }}</a>
                  </div>
                  <div class="meta">
                    <span><i class="feather-clock"></i> {{ blog.readTime }}</span>
                  </div>
                </div>
                <h4 class="title">
                  <a href="javascript:void(0)">
                    {{ blog.title }}
                    <i class="feather-arrow-up-right"></i>
                  </a>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- BootstrapVue Modal -->
      <b-modal v-model="showModal" :title="currentBlog.title" hide-footer>
        <div class="modal-body">
        <img
            v-if="currentBlog.image"
            :src="require(`@/assets/images/blog/${currentBlog.image}`)"
            alt="news modal"
            class="img-fluid mb-3"
            loading="lazy"
        />
        <span class="date">{{ currentBlog.date }}</span>
        <p class="mt-3">{{ currentBlog.description }}</p>

        <!-- Comment Section -->
        <div class="comment-inner mt-4">
          <h3 class="title mb--20">Leave a Reply</h3>
          <b-form @submit.prevent>
            <b-form-group>
              <div class="rnform-group"><b-form-input placeholder="Name"></b-form-input></div>
            </b-form-group>
            <b-form-group>
              <div class="rnform-group"><b-form-input type="email" placeholder="Email"></b-form-input></div>
            </b-form-group>
            <b-form-group>
              <div class="rnform-group"><b-form-input placeholder="Website"></b-form-input></div>
            </b-form-group>
            <b-form-group>
              <div class="rnform-group"><b-form-textarea placeholder="Comment"></b-form-textarea></div>
            </b-form-group>
            <b-button class="rn-btn" block>SUBMIT NOW</b-button>
          </b-form>
        </div>
        </div>
      </b-modal>
    </div>
  </section>
</template>

<script>
export default {
  name: "BlogSection",
  data() {
    return {
      showModal: false,
      blogs: [
        {
          image: "blog-job.jpg",
          category: "Career",
          readTime: "6 min read",
          title: "Ish topishdagi muammolar va amaliy yechimlar",
          date: "03 Mar, 2025",
          description:
              "Bozor talablari, portfolio yetishmasligi va intervyu tayyorgarligi — eng ko‘p uchraydigan to‘siqlar. Bozorga mos stack, real loyihalar, GitHub faolligi va maqsadli networking yordamida bosqichma-bosqich yechim qiling."
        },
        {
          image: "blog-ai.png",
          category: "AI / Trend",
          readTime: "4 min read",
          title: "Sun’iy intellekt: bugun va kelajak uchun ta’siri",
          date: "12 Mar, 2025",
          description:
              "AI bugun kod yozishdan tortib tavsiyalar va analitikagacha ko‘plab jarayonlarni tezlashtirmoqda. Kelajakda esa natural til interfeyslari, avtomatlashtirish va shaxsiylashtirish orqali ish uslublarimiz tubdan o‘zgaradi."
        },
        {
          image: "blog-portfolio.png",
          category: "Frontend",
          readTime: "5 min read",
          title: "Vue bilan shaxsiy portfolio: tez, yengil, responsiv",
          date: "22 Feb, 2025",
          description:
              "Vue 3 + AOS + Swiper bilan silliq scroll, animatsiyalar va modal kontentlarni oson qurish mumkin. Asset optimallashtirish va komponentlar arxitekturasi saytni yengil va tez qiladi."
        }
      ],
      currentBlog: {}
    };
  },
  created() {
    this.currentBlog = this.blogs[0];
  },
  methods: {
    openBlog(blog) {
      this.currentBlog = blog;
      this.showModal = true;
    }
  }
};
</script>
