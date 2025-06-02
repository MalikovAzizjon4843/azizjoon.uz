<template>
  <section id="educations" class="rn-education-area section-separator rn-section-gap">
    <!-- Start education section -->
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" data-aos-once="true" class="section-title text-center">
              <span class="subtitle">Bachelor of Computer Science</span>
              <h2 class="title">Education</h2>
            </div>
          </div>
        </div>
        <div class="row mt--10">
          <div class="col-12 mt_experience">
            <!-- single skills -->
            <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" data-aos-once="true" class="experience-style-two">
              <div class="experience-left">
                <div class="experience-image">
                  <img src="@/assets/images/portfolio/titu-logo.png" alt="Personal Portfolio">
                </div>
                <div class="experience-center">
                  <span class="date bg-success">2022-Present (Part time)</span>
                  <h4 class="experience-title">
                    Software Develop.
                  </h4>
                  <h6 class="subtitle">
                    Co-Founder, Web Designer & Developer
                  </h6>
                  <p class="disc">Reinvetning the way you create websites</p>
                </div>
              </div>
              <div class="experience-right">
                <div class="experience-footer">
                  <a class="rn-btn" href="#contacts"><span>CONTACT ME</span></a>
                </div>
              </div>
            </div>
            <!-- single skills -->

            <!-- single skills -->
            <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="200" data-aos-once="true" class="experience-style-two">
              <div class="experience-left">
                <div class="experience-image">
                  <img src="@/assets/images/portfolio/pdp-logo.png" alt="Personal Portfolio">
                </div>
                <div class="experience-center">
                  <span class="date">2015-Present</span>
                  <h4 class="experience-title">
                    Web Design.
                  </h4>
                  <h6 class="subtitle">
                    Co-Founder, Web Designer & Developer
                  </h6>
                  <p class="disc">Reinvetning the way you create websites</p>
                </div>
              </div>
              <div class="experience-right">
                <div class="experience-footer">
                  <a class="rn-btn" href="#contacts"><span>CONTACT ME</span></a>
                </div>
              </div>
            </div>
            <!-- single skills -->
          </div>
        </div>
      </div>
    <!-- End education section -->

  </section>
</template>

<script>

export default {
  name: 'EducationSection',
  data() {
    return {
      educations: [
        {
          image: 'portfolio-04.jpg',
          date: '2015-Present',
          title: 'Software Develop.',
          subtitle: 'Co-Founder, Web Designer & Developer',
          description: 'Reinventing the way you create websites'
        },
        {
          image: 'portfolio-05.jpg',
          date: '2015-Present',
          title: 'Web Design.',
          subtitle: 'Co-Founder, Web Designer & Developer',
          description: 'Reinventing the way you create websites'
        }
      ]
    }
  }
}
</script>
