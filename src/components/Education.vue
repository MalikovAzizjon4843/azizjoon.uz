<template>
  <section id="educations" class="rn-education-area section-separator rn-section-gap">
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
          <!-- TITU Card -->
          <div class="experience-style-two" data-aos="fade-up">
            <div class="experience-left">
              <div class="experience-image">
                <img src="@/assets/images/portfolio/titu-logo.png" alt="TITU">
              </div>
              <div class="experience-center">
                <span class="date bg-success">2023–2027 (Part time)</span>
                <h4 class="experience-title">BSc in Computer Engineering</h4>
                <h6 class="subtitle">Tashkent University of Economics and Technologies</h6>
                <p class="disc">3rd Year Student</p>
<!--                <p class="disc">Currently pursuing a Bachelor's degree at TITU. Program includes systems, algorithms, and software architecture.</p>-->
              </div>
            </div>
            <div class="experience-right">
              <div class="experience-footer">
                <button class="rn-btn" @click="showTitu = true"><span>VIEW MORE</span></button>
              </div>
            </div>
          </div>

          <!-- PDP Card -->
          <div class="experience-style-two" data-aos="fade-up" data-aos-delay="100">
            <div class="experience-left">
              <div class="experience-image">
                <img src="@/assets/images/portfolio/pdp-logo.png" alt="PDP">
              </div>
              <div class="experience-center">
                <span class="date bg-danger">Jul 2021 – May 2022</span>
                <h4 class="experience-title">Java Backend Development Program</h4>
                <h6 class="subtitle">PDP Academy</h6>
                <p class="disc">Graduate – Certified</p>
                <p class="disc">Learned Java, Spring Boot, REST APIs, DBs, and earned certificate.</p>
              </div>
            </div>
            <div class="experience-right">
              <div class="experience-footer">
                <button class="rn-btn" @click="showPdp = true"><span>VIEW MORE</span></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- TITU Modal -->
    <b-modal v-model="showTitu" hide-footer no-close-on-backdrop no-close-on-esc size="sm">
      <template v-slot:modal-header>
        <h3 class="modal-title">Tashkent University of Economics and Technologies (TITU)</h3>
        <b-btn type="button" class="close" @click="showTitu = false">
          <span>X</span>
        </b-btn>
      </template>
      <p>
        📍 Part-time Bachelor's degree (Computer Engineering) <br>
        🕐 Duration: Mar 2023 – Jul 2027 <br>
        🧠 Core subjects include: <br>
        - Algorithms & Data Structures<br>
        - Operating Systems<br>
        - Computer Architecture<br>
        - Web Systems<br>
        - Software Engineering
      </p>
      <a href="https://uztitu.uz/uz" target="_blank">Official Site</a>
    </b-modal>

    <!-- PDP Modal -->
    <b-modal v-model="showPdp" title="PDP Academy" hide-footer>
      <p>
        📅 2021 iyul – 2022 may <br>
        🧠 Java Core, Spring Boot, MySQL, REST API, Git <br>
        ✅ Sertifikat olgan
      </p>
      <a href="https://pdpa.uz/" target="_blank">Rasmiy sayt →</a>
    </b-modal>
  </section>
</template>

<script>
export default {
  name: 'EducationSection',
  data() {
    return {
      showTitu: false,
      showPdp: false
    };
  }
};
</script>
