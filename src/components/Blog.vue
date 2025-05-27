<template>
  <div>
    <!-- Start News Area -->
    <div class="rn-blog-area rn-section-gap section-separator" id="blog">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" data-aos-once="true" class="section-title text-center">
              <span class="subtitle">Visit my blog and keep your feedback</span>
              <h2 class="title">My Blog</h2>
            </div>
          </div>
        </div>
        <div class="row row--25 mt--30 mt_md--10 mt_sm--10">
          <!-- Start Single blog -->
          <div v-for="(blog, index) in blogs" :key="index" :data-aos="`fade-up`" :data-aos-duration="500" :data-aos-delay="100 + (index * 50)" data-aos-once="true" class="col-lg-6 col-xl-4 mt--30 col-md-6 col-sm-12 col-12 mt--30">
            <div class="rn-blog" data-bs-toggle="modal" data-bs-target="#exampleModalCenters" @click="openBlog(blog)">
              <div class="inner">
                <div class="thumbnail">
                  <a href="javascript:void(0)">
                    <img :src="require(`@/assets/images/blog/${blog.image}`)" :alt="blog.title">
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
                    <a href="javascript:void(0)">{{ blog.title }}<i class="feather-arrow-up-right"></i></a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <!-- End Single blog -->
        </div>
      </div>
    </div>
    <!-- End News Area -->

    <!-- Modal Blog Body area Start -->
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

            <!-- Comment Section Area Start -->
            <div class="comment-inner">
              <h3 class="title mb--40 mt--50">Leave a Reply</h3>
              <form action="#">
                <div class="row">
                  <div class="col-lg-6 col-md-12 col-12">
                    <div class="rnform-group"><input type="text" placeholder="Name"></div>
                    <div class="rnform-group"><input type="email" placeholder="Email"></div>
                    <div class="rnform-group"><input type="text" placeholder="Website"></div>
                  </div>
                  <div class="col-lg-6 col-md-12 col-12">
                    <div class="rnform-group">
                      <textarea placeholder="Comment"></textarea>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <a class="rn-btn" href="#"><span>SUBMIT NOW</span></a>
                  </div>
                </div>
              </form>
            </div>
            <!-- Comment Section End -->
          </div>
        </div>
      </div>
    </div>
    <!-- End Modal Blog area -->

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const blogs = ref([
  {
    image: 'blog-01.jpg',
    category: 'Canada',
    readTime: '2 min read',
    title: 'T-shirt design is the part of design',
    date: '2 May, 2021',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate distinctio assumenda explicabo veniam temporibus eligendi.'
  },
  {
    image: 'blog-02.jpg',
    category: 'Development',
    readTime: '2 hour read',
    title: 'The services provide for design',
    date: '2 May, 2021',
    description: 'Mauris tempor, orci id pellentesque convallis, massa mi congue eros, sed posuere massa nunc quis dui.'
  },
  {
    image: 'blog-03.jpg',
    category: 'Application',
    readTime: '5 min read',
    title: 'Mobile app landing design & app maintain',
    date: '2 May, 2021',
    description: 'Ut rhoncus vestibulum facilisis. Duis et lorem vitae ligula cursus venenatis.'
  }
]);

const currentBlog = ref(blogs.value[0]);

const openBlog = (blog) => {
  currentBlog.value = blog;
};
</script>

<style scoped>
/* Add your scoped styles here */
</style>
