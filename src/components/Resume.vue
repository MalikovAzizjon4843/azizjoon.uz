<template>
  <section id="resume" class="rn-resume-area rn-section-gap section-separator">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title text-center">
            <span class="subtitle">7+ Years of Experience</span>
            <h2 class="title">My Resume</h2>
          </div>
        </div>
      </div>

      <div class="row mt--45">
        <div class="col-lg-12">
          <!-- Tab navigation -->
          <ul class="rn-nav-list nav " role="tablist">
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
            <!-- Education Tab -->
            <div
                v-if="activeTab === 'education'"
                class="tab-pane active fade show single-tab-area"
            >
              <div class="personal-experience-inner mt--40">
                <div class="row">
                  <div class="col-lg-6 col-md-12 col-12">
                    <div class="content">
                      <span class="subtitle">2007 - 2010</span>
                      <h4 class="maintitle">Education Quality</h4>
                      <div class="experience-list">
                        <div class="resume-single-list" v-for="item in educationItems" :key="item.name">
                          <div class="inner">
                            <div class="heading">
                              <div class="title">
                                <h4>{{ item.name }}</h4>
                                <span>{{ item.institute }}</span>
                              </div>
                              <div class="date-of-time">
                                <span>{{ item.score }}</span>
                              </div>
                            </div>
                            <p class="description">{{ item.description }}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-6 col-md-12 col-12 mt_md--60 mt_sm--60">
                    <div class="content">
                      <span class="subtitle">2007 - 2010</span>
                      <h4 class="maintitle">Job Experience</h4>
                      <div class="experience-list">
                        <div class="resume-single-list" v-for="item in jobItems" :key="item.name">
                          <div class="inner">
                            <div class="heading">
                              <div class="title">
                                <h4>{{ item.name }}</h4>
                                <span>{{ item.institute }}</span>
                              </div>
                              <div class="date-of-time">
                                <span>{{ item.score }}</span>
                              </div>
                            </div>
                            <p class="description">{{ item.description }}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <!-- Placeholder for other tabs -->
            <div v-if="activeTab === 'professional'">
                <div class="personal-experience-inner mt--40">
                  <div class="row row--40">

                    <!-- Start Single Progressbar  -->
                    <div class="col-lg-6 col-md-6 col-12">
                      <div class="progress-wrapper">
                        <div class="content">
                          <span class="subtitle">Features</span>
                          <h4 class="maintitle">Design Skill</h4>
                          <!-- Start Single Progress Charts -->
                          <div class="progress-charts">
                            <h6 class="heading heading-h6">PHOTOSHOT</h6>
                            <div class="progress">
                              <div class="progress-bar wow fadeInLeft" data-wow-duration="0.5s" data-wow-delay=".3s" role="progressbar" style="width: 100%" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><span
                                  class="percent-label">100%</span></div>
                            </div>
                          </div>
                          <!-- End Single Progress Charts -->

                          <!-- Start Single Progress Charts -->
                          <div class="progress-charts">
                            <h6 class="heading heading-h6">FIGMA</h6>
                            <div class="progress">
                              <div class="progress-bar wow fadeInLeft" data-wow-duration="0.6s" data-wow-delay=".4s" role="progressbar" style="width: 95%" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><span
                                  class="percent-label">95%</span></div>
                            </div>
                          </div>
                          <!-- End Single Progress Charts -->

                          <!-- Start Single Progress Charts -->
                          <div class="progress-charts">
                            <h6 class="heading heading-h6">ADOBE XD</h6>
                            <div class="progress">
                              <div class="progress-bar wow fadeInLeft" data-wow-duration="0.7s" data-wow-delay=".5s" role="progressbar" style="width: 60%" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><span
                                  class="percent-label">60%</span></div>
                            </div>
                          </div>
                          <!-- End Single Progress Charts -->

                          <!-- Start Single Progress Charts -->
                          <div class="progress-charts">
                            <h6 class="heading heading-h6">ADOBE ILLUSTRATOR</h6>
                            <div class="progress">
                              <div class="progress-bar wow fadeInLeft" data-wow-duration="0.8s" data-wow-delay=".6s" role="progressbar" style="width: 70%" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><span
                                  class="percent-label">70%</span></div>
                            </div>
                          </div>
                          <!-- End Single Progress Charts -->

                          <!-- Start Single Progress Charts -->
                          <div class="progress-charts">
                            <h6 class="heading heading-h6">DESIGN</h6>
                            <div class="progress">
                              <div class="progress-bar wow fadeInLeft" data-wow-duration="0.9s" data-wow-delay=".7s" role="progressbar" style="width: 90%" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><span
                                  class="percent-label">90%</span></div>
                            </div>
                          </div>
                          <!-- End Single Progress Charts -->

                        </div>
                      </div>
                    </div>
                    <!-- End Single Progressbar  -->

                    <!-- Start Single Progressbar  -->
                    <div class="col-lg-6 col-md-6 col-12 mt_sm--60">
                      <div class="progress-wrapper">
                        <div class="content">
                          <span class="subtitle">Features</span>
                          <h4 class="maintitle">Development Skill</h4>
                          <!-- Start Single Progress Charts -->
                          <div class="progress-charts">
                            <h6 class="heading heading-h6">HTML</h6>
                            <div class="progress">
                              <div class="progress-bar wow fadeInLeft" data-wow-duration="0.5s" data-wow-delay=".3s" role="progressbar" style="width: 85%" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><span
                                  class="percent-label">85%</span></div>
                            </div>
                          </div>
                          <!-- End Single Progress Charts -->

                          <!-- Start Single Progress Charts -->
                          <div class="progress-charts">
                            <h6 class="heading heading-h6">CSS</h6>
                            <div class="progress">
                              <div class="progress-bar wow fadeInLeft" data-wow-duration="0.6s" data-wow-delay=".4s" role="progressbar" style="width: 80%" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><span
                                  class="percent-label">80%</span></div>
                            </div>
                          </div>
                          <!-- End Single Progress Charts -->

                          <!-- Start Single Progress Charts -->
                          <div class="progress-charts">
                            <h6 class="heading heading-h6">JAVASCRIPT</h6>
                            <div class="progress">
                              <div class="progress-bar wow fadeInLeft" data-wow-duration="0.7s" data-wow-delay=".5s" role="progressbar" style="width: 90%" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><span
                                  class="percent-label">90%</span></div>
                            </div>
                          </div>
                          <!-- End Single Progress Charts -->

                          <!-- Start Single Progress Charts -->
                          <div class="progress-charts">
                            <h6 class="heading heading-h6">SOFTWARE</h6>
                            <div class="progress">
                              <div class="progress-bar wow fadeInLeft" data-wow-duration="0.8s" data-wow-delay=".6s" role="progressbar" style="width: 75%" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><span
                                  class="percent-label">75%</span></div>
                            </div>
                          </div>
                          <!-- End Single Progress Charts -->

                          <!-- Start Single Progress Charts -->
                          <div class="progress-charts">
                            <h6 class="heading heading-h6">PLUGIN</h6>
                            <div class="progress">
                              <div class="progress-bar wow fadeInLeft" data-wow-duration="0.9s" data-wow-delay=".7s" role="progressbar" style="width: 70%" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><span
                                  class="percent-label">70%</span></div>
                            </div>
                          </div>
                          <!-- End Single Progress Charts -->

                        </div>
                      </div>
                    </div>
                    <!-- End Single Progressbar  -->

                  </div>
                </div>
            </div>
            <div v-if="activeTab === 'experience'">
                <div class="personal-experience-inner mt--40">
                  <div class="row">
                    <!-- Start Skill List Area  -->
                    <div class="col-lg-6 col-md-12 col-12">
                      <div class="content">
                        <span class="subtitle">2015 - 2020</span>
                        <h4 class="maintitle">Education Quality</h4>
                        <div class="experience-list">

                          <!-- Start Single List  -->
                          <div class="resume-single-list">
                            <div class="inner">
                              <div class="heading">
                                <div class="title">
                                  <h4>Personal Portfolio April Fools</h4>
                                  <span>University of DVI (1997 - 2001)</span>
                                </div>
                                <div class="date-of-time">
                                  <span>4.30/5</span>
                                </div>
                              </div>
                              <p class="description">The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales.
                                Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                mauris hendrerit ante.</p>
                            </div>
                          </div>
                          <!-- End Single List  -->

                          <!-- Start Single List  -->
                          <div class="resume-single-list">
                            <div class="inner">
                              <div class="heading">
                                <div class="title">
                                  <h4> Examples Of Personal Portfolio</h4>
                                  <span>College of Studies (2000 - 2002)</span>
                                </div>
                                <div class="date-of-time">
                                  <span>4.50/5</span>
                                </div>
                              </div>
                              <p class="description">Maecenas finibus nec sem ut
                                imperdiet. Ut tincidunt est ac dolor aliquam sodales.
                                Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                mauris hendrerit ante.</p>
                            </div>
                          </div>
                          <!-- End Single List  -->

                          <!-- Start Single List  -->
                          <div class="resume-single-list">
                            <div class="inner">
                              <div class="heading">
                                <div class="title">
                                  <h4>Tips For Personal Portfolio</h4>
                                  <span>University of Studies (1997 - 2001)</span>
                                </div>
                                <div class="date-of-time">
                                  <span>4.80/5</span>
                                </div>
                              </div>
                              <p class="description"> If you are going to use a passage. Ut tincidunt est ac dolor aliquam sodales.
                                Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                mauris hendrerit ante.</p>
                            </div>
                          </div>
                          <!-- End Single List  -->

                        </div>
                      </div>
                    </div>
                    <!-- End Skill List Area  -->

                    <!-- Start Skill List Area 2nd  -->
                    <div class="col-lg-6 col-md-12 col-12 mt_md--60 mt_sm--60">
                      <div class="content">
                        <span class="subtitle">2007 - 2010</span>
                        <h4 class="maintitle">Job Experience</h4>
                        <div class="experience-list">

                          <!-- Start Single List  -->
                          <div class="resume-single-list">
                            <div class="inner">
                              <div class="heading">
                                <div class="title">
                                  <h4>Diploma in Web Development</h4>
                                  <span>BSE In CSE (2004 - 2008)</span>
                                </div>
                                <div class="date-of-time">
                                  <span>4.70/5</span>
                                </div>
                              </div>
                              <p class="description">Contrary to popular belief. Ut tincidunt est ac dolor aliquam sodales.
                                Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                mauris hendrerit ante.</p>
                            </div>
                          </div>
                          <!-- End Single List  -->

                          <!-- Start Single List  -->
                          <div class="resume-single-list">
                            <div class="inner">
                              <div class="heading">
                                <div class="title">
                                  <h4>The Personal Portfolio Mystery</h4>
                                  <span>Job at Rainbow-Themes (2008 - 2016)</span>
                                </div>
                                <div class="date-of-time">
                                  <span>4.95/5</span>
                                </div>
                              </div>
                              <p class="description">Generate Lorem Ipsum which looks. Ut tincidunt est ac dolor aliquam sodales.
                                Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                mauris hendrerit ante.</p>
                            </div>
                          </div>
                          <!-- End Single List  -->

                          <!-- Start Single List  -->
                          <div class="resume-single-list">
                            <div class="inner">
                              <div class="heading">
                                <div class="title">
                                  <h4>Diploma in Computer Science</h4>
                                  <span>Works at Plugin Development (2016 - 2020)</span>
                                </div>
                                <div class="date-of-time">
                                  <span>5.00/5</span>
                                </div>
                              </div>
                              <p class="description">Maecenas finibus nec sem ut
                                imperdiet. Ut tincidunt est ac dolor aliquam sodales.
                                Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                mauris hendrerit ante.</p>
                            </div>
                          </div>
                          <!-- End Single List  -->

                        </div>
                      </div>
                    </div>
                    <!-- End Skill List Area  -->
                  </div>
                </div>
            </div>
            <div v-if="activeTab === 'interview'">
                <div class="personal-experience-inner mt--40">
                  <div class="row">
                    <!-- Start Skill List Area  -->
                    <div class="col-lg-6 col-md-12 col-12">
                      <div class="content">
                        <span class="subtitle">2020 - 2025</span>
                        <h4 class="maintitle">Education Quality</h4>
                        <div class="experience-list">

                          <!-- Start Single List  -->
                          <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="300" data-aos-once="true" class="resume-single-list">
                            <div class="inner">
                              <div class="heading">
                                <div class="title">
                                  <h4>Personal Portfolio April Fools</h4>
                                  <span>University of DVI (1997 - 2001)</span>
                                </div>
                                <div class="date-of-time">
                                  <span>4.30/5</span>
                                </div>
                              </div>
                              <p class="description">The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales.
                                Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                mauris hendrerit ante.</p>
                            </div>
                          </div>
                          <!-- End Single List  -->

                          <!-- Start Single List  -->
                          <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="500" data-aos-once="true" class="resume-single-list">
                            <div class="inner">
                              <div class="heading">
                                <div class="title">
                                  <h4> Examples Of Personal Portfolio</h4>
                                  <span>College of Studies (2000 - 2002)</span>
                                </div>
                                <div class="date-of-time">
                                  <span>4.50/5</span>
                                </div>
                              </div>
                              <p class="description">Maecenas finibus nec sem ut
                                imperdiet. Ut tincidunt est ac dolor aliquam sodales.
                                Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                mauris hendrerit ante.</p>
                            </div>
                          </div>
                          <!-- End Single List  -->

                          <!-- Start Single List  -->
                          <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="700" data-aos-once="true" class="resume-single-list">
                            <div class="inner">
                              <div class="heading">
                                <div class="title">
                                  <h4>Tips For Personal Portfolio</h4>
                                  <span>University of Studies (1997 - 2001)</span>
                                </div>
                                <div class="date-of-time">
                                  <span>4.80/5</span>
                                </div>
                              </div>
                              <p class="description"> If you are going to use a passage. Ut tincidunt est ac dolor aliquam sodales.
                                Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                mauris hendrerit ante.</p>
                            </div>
                          </div>
                          <!-- End Single List  -->

                        </div>
                      </div>
                    </div>
                    <!-- End Skill List Area  -->

                    <!-- Start Skill List Area 2nd  -->
                    <div class="col-lg-6 col-md-12 col-12 mt_md--60 mt_sm--60">
                      <div class="content">
                        <span class="subtitle">2007 - 2010</span>
                        <h4 class="maintitle">Job Experience</h4>
                        <div class="experience-list">

                          <!-- Start Single List  -->
                          <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="500" data-aos-once="true" class="resume-single-list">
                            <div class="inner">
                              <div class="heading">
                                <div class="title">
                                  <h4>Diploma in Web Development</h4>
                                  <span>BSE In CSE (2004 - 2008)</span>
                                </div>
                                <div class="date-of-time">
                                  <span>4.70/5</span>
                                </div>
                              </div>
                              <p class="description">Contrary to popular belief. Ut tincidunt est ac dolor aliquam sodales.
                                Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                mauris hendrerit ante.</p>
                            </div>
                          </div>
                          <!-- End Single List  -->

                          <!-- Start Single List  -->
                          <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="700" data-aos-once="true" class="resume-single-list">
                            <div class="inner">
                              <div class="heading">
                                <div class="title">
                                  <h4>The Personal Portfolio Mystery</h4>
                                  <span>Job at Rainbow-Themes (2008 - 2016)</span>
                                </div>
                                <div class="date-of-time">
                                  <span>4.95/5</span>
                                </div>
                              </div>
                              <p class="description">Generate Lorem Ipsum which looks. Ut tincidunt est ac dolor aliquam sodales.
                                Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                mauris hendrerit ante.</p>
                            </div>
                          </div>
                          <!-- End Single List  -->

                          <!-- Start Single List  -->
                          <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="900" data-aos-once="true" class="resume-single-list">
                            <div class="inner">
                              <div class="heading">
                                <div class="title">
                                  <h4>Diploma in Computer Science</h4>
                                  <span>Works at Plugin Development (2016 - 2020)</span>
                                </div>
                                <div class="date-of-time">
                                  <span>5.00/5</span>
                                </div>
                              </div>
                              <p class="description">Maecenas finibus nec sem ut
                                imperdiet. Ut tincidunt est ac dolor aliquam sodales.
                                Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                mauris hendrerit ante.</p>
                            </div>
                          </div>
                          <!-- End Single List  -->

                        </div>
                      </div>
                    </div>
                    <!-- End Skill List Area  -->
                  </div>
                </div>
            </div>
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
        { id: 'education', label: 'Education' },
        { id: 'professional', label: 'Professional Skills' },
        { id: 'experience', label: 'Experience' },
        { id: 'interview', label: 'Interview' }
      ],
      educationItems: [
        {
          name: 'Personal Portfolio April Fools',
          institute: 'University of DVI (1997 - 2001)',
          score: '4.30/5',
          description: 'The education should be very interactive.'
        },
        {
          name: 'Examples Of Personal Portfolio',
          institute: 'College of Studies (2000 - 2002)',
          score: '4.50/5',
          description: 'Maecenas finibus nec sem ut imperdiet.'
        },
        {
          name: 'Tips For Personal Portfolio',
          institute: 'University of Studies (1997 - 2001)',
          score: '4.80/5',
          description: 'If you are going to use a passage...'
        }
      ],
      jobItems: [
        {
          name: 'Diploma in Web Development',
          institute: 'BSE In CSE (2004 - 2008)',
          score: '4.70/5',
          description: 'Contrary to popular belief...'
        },
        {
          name: 'The Personal Portfolio Mystery',
          institute: 'Job at Rainbow-Themes (2008 - 2016)',
          score: '4.95/5',
          description: 'Generate Lorem Ipsum which looks...'
        },
        {
          name: 'Diploma in Computer Science',
          institute: 'Works at Plugin Development (2016 - 2020)',
          score: '5.00/5',
          description: 'Maecenas finibus nec sem ut imperdiet...'
        }
      ]
    }
  }
}
</script>
