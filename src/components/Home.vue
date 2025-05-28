<template>
  <div>
    <AboutMe/>
    <ExperienceSection/>
    <EducationSection/>
    <ResumeSection/>
    <PortfolioSection/>
    <Blog />
    <!-- Back to top Start -->
    <div class="backto-top" @click="scrollToTop" :class="{ show: backToTopVisible }">
      <div>
        <i data-feather="arrow-up"></i>
      </div>
    </div>
    <!-- Back to top End -->
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import AboutMe from "@/components/AboutMe.vue";
import Blog from "@/components/Blog.vue";
import ExperienceSection from "@/components/Experience.vue";
import EducationSection from "@/components/Education.vue";
import ResumeSection from "@/components/Resume.vue";
import PortfolioSection from "@/components/Portfolio.vue";

export default {
  name: 'App',
  components: {
    PortfolioSection,
    ResumeSection,
    EducationSection,
    ExperienceSection,
    Blog,
    AboutMe,
  },
  setup() {
    const backToTopVisible = ref(false);

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

    const handleScroll = () => {
      backToTopVisible.value = window.scrollY > 200;
    };

    onMounted(() => {
      document.body.classList.add('template-color-1', 'spybody');
      document.body.setAttribute('data-spy', 'scroll');
      document.body.setAttribute('data-bs-target', '.navbar-example2');
      document.body.setAttribute('data-offset', '150');

      // Initialize Feather icons
      import('feather-icons').then((feather) => {
        feather.replace();
      });

      window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      scrollToTop,
      backToTopVisible
    };
  }
}
</script>

<style>
/* Your global styles here */
.backto-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  transition: opacity 0.3s;
  opacity: 0;
  visibility: hidden;
}

.backto-top.show {
  opacity: 1;
  visibility: visible;
}

.backto-top i {
  font-size: 18px;
}
</style>
