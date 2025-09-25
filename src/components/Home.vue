<template>
  <div>
    <AboutMe/>
    <ExperienceSection/>
    <EducationSection/>
    <ResumeSection/>
    <PortfolioSection/>
    <Blog />
  </div>
</template>

<script>
import AboutMe from "@/components/AboutMe.vue";
import Blog from "@/components/Blog.vue";
import ExperienceSection from "@/components/Experience.vue";
import EducationSection from "@/components/Education.vue";
import ResumeSection from "@/components/Resume.vue";
import PortfolioSection from "@/components/Portfolio.vue";

export default {
  name: 'Home',
  components: {
    PortfolioSection,
    ResumeSection,
    EducationSection,
    ExperienceSection,
    Blog,
    AboutMe,
  }
}
</script>
