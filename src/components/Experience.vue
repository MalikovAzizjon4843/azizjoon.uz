<template>
  <section id="experiences" class="rn-experience-area section-separator rn-section-gap">
    <!-- Start Experience area -->
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" data-aos-once="true" class="section-title text-center">
              <span class="subtitle">Over 2 years of experience</span>
              <h2 class="title">My Experience</h2>
            </div>
          </div>
        </div>
        <div class="row mt--10">
          <div class="col-12 mt_experience">

            <!-- single skills -->
            <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" data-aos-once="true" class="experience-style-two">
              <div class="experience-left">
                <div class="experience-image">
                  <img src="@/assets/images/portfolio/portfolio-01.jpg" alt="Personal Portfolio">
                </div>
                <div class="experience-center">
                  <span class="date">2015-Present</span>
                  <h4 class="experience-title">
                    Rainbow - Themes.
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
                  <img src="@/assets/images/portfolio/portfolio-02.jpg" alt="Personal Portfolio">
                </div>
                <div class="experience-center">
                  <span class="date">2015-Present</span>
                  <h4 class="experience-title">
                    App Development.
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
            <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="300" data-aos-once="true" class="experience-style-two">
              <div class="experience-left">
                <div class="experience-image">
                  <img src="@/assets/images/portfolio/portfolio-03.jpg" alt="Personal Portfolio">
                </div>
                <div class="experience-center">
                  <span class="date">2015-Present</span>
                  <h4 class="experience-title">
                    Application Management.
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
    <!-- End Experience area -->
  </section>
</template>

<script>

export default {
  name: 'ExperienceSection',
  data() {
    return {
      experiences: [
        {
          image: 'portfolio-01.jpg',
          date: '2015-Present',
          title: 'Rainbow - Themes.',
          subtitle: 'Co-Founder, Web Designer & Developer',
          description: 'Reinventing the way you create websites'
        },
        {
          image: 'portfolio-02.jpg',
          date: '2015-Present',
          title: 'App Development.',
          subtitle: 'Co-Founder, Web Designer & Developer',
          description: 'Reinventing the way you create websites'
        },
        {
          image: 'portfolio-03.jpg',
          date: '2015-Present',
          title: 'Application Management.',
          subtitle: 'Co-Founder, Web Designer & Developer',
          description: 'Reinventing the way you create websites'
        }
      ]
    }
  }
}
</script>
