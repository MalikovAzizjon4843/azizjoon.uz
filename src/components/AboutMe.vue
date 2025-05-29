<template>

  <main class="main-page-wrapper">

    <!-- Start Slider Area -->
    <section id="home" class="rn-slide-area">
      <div class="slide slider-style-3">
        <div class="container">
          <div class="row slider-wrapper pt-5">
            <div class="order-2 order-xl-1 col-lg-12 col-xl-5 mt_lg--50 mt_md--50 mt_sm--50">
              <div class="slider-info">
                <div class="row">
                  <div class="col-xl-12 col-lg-12 col-12">
                    <div class="user-info-top">
                      <div class="user-info-header">
                        <div class="user">
                          <i data-feather="user"></i>
                        </div>
                        <h2 class="title">
                          Hi, I’m <span>Azizjon</span>
                        </h2>
                        <p class="disc">Full Stack (Java) engineer working for fairtech.uz in Tashkent</p>
                      </div>
                      <div class="user-info-footer">
                        <div class="info">
                          <i data-feather="file"></i>
                          <span>Full Stack (Java) engineer</span>
                        </div>
                        <div class="info">
                          <i data-feather="mail"></i>
                          <span>azizjon.malikovv@gmail.com</span>
                        </div>
                        <div class="info">
                          <i data-feather="map-pin"></i>
                          <span>Tashkent</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-xl-12 col-lg-12 col-12">
                    <div class="user-info-bottom">
                      <span>Download my CV: </span>
                      <div class="button-wrapper d-flex">
                        <a class="rn-btn mr--30" href="#contacts"><span>DOWNLOAD CV</span></a>
                        <a class="rn-btn" href="#contacts"><span>CONTACT ME</span></a>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div class="order-1 order-xl-2 col-lg-12 col-xl-7">
              <div class="background-image-area">
                <div class="thumbnail-image">
                  <img src="@/assets/images/slider/banner2.png" alt="Personal Portfolio" style="width: 672px; height: 505px" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Slider Area -->







    <!-- Back to top end -->
    <!-- Start Right Demo  -->
    <!-- End Right Demo  -->
  </main>
</template>

<script>
export default {
  name: 'AboutMe'
}
</script>

<style scoped>
.user-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.user-pulse {
  position: relative;
  width: 64px;
  height: 64px;
}

.user-icon {
  font-size: 28px;
  color: #fff;
  background-color: #CA0A45;
  border-radius: 50%;
  padding: 18px;
  z-index: 2;
  position: relative;
}

.user-pulse::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: rgba(202, 10, 69, 0.4);
  animation: pulse-ring 1.8s infinite ease-out;
  z-index: 1;
}

@keyframes pulse-ring {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  70% {
    transform: scale(1.8);
    opacity: 0;
  }
  100% {
    transform: scale(1.8);
    opacity: 0;
  }
}

.icon {
  margin-right: 10px;
  color: #CA0A45;
}
</style>

