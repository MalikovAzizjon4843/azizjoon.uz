<template>
  <header>
    <!-- header - developer home -->
    <!-- Start Header -->
    <header class="rn-header haeder-default black-logo-version header--fixed header--sticky">
      <div class="header-wrapper rn-popup-mobile-menu m--0 row align-items-center">
        <!-- Start Header Left -->
        <div class="col-lg-2 col-6">
          <div class="header-left">
            <div class="logo" style="width: 100px; height: 100px">
              <router-link to="/">
                <img src="@/assets/images/logo/myimg-removebg-preview.png" alt="logo">
              </router-link>
            </div>
          </div>
        </div>
        <!-- End Header Left -->
        <!-- Start Header Center -->
        <div class="col-lg-10 col-6">
          <div class="header-center">
            <nav id="sideNav" class="mainmenu-nav navbar-example2 d-none d-xl-block onepagenav">
              <!-- Start Mainmanu Nav -->
              <ul class="primary-menu nav nav-pills">
                <li class="nav-item"><router-link to="/" class="nav-link smoth-animation active">Home</router-link></li>
                <li class="nav-item"><router-link to="/experiences" class="nav-link smoth-animation">Experience</router-link></li>
                <li class="nav-item"><router-link to="/educations" class="nav-link smoth-animation">Education</router-link></li>
                <li class="nav-item"><router-link to="/resume" class="nav-link smoth-animation">Resume</router-link></li>
                <li class="nav-item"><router-link to="/portfolio" class="nav-link smoth-animation">Portfolio</router-link></li>
                <li class="nav-item"><router-link to="/blog" class="nav-link smoth-animation">Blog</router-link></li>
                <li class="nav-item"><router-link to="/footer" class="nav-link smoth-animation">Footer</router-link></li>
              </ul>
              <!-- End Mainmanu Nav -->
            </nav>
            <!-- Start Header Right  -->
            <div class="header-right">
              <!-- <a class="rn-btn" target="_blank" href="https://themeforest.net/checkout/from_item/33188244?license=regular"><span>BUY NOW</span></a> -->

              <div class="hamberger-menu d-block d-xl-none">
                <i id="menuBtn" class="feather-menu humberger-menu"></i>
              </div>

              <div class="close-menu d-block">
                <span class="closeTrigger">
                  <i data-feather="x"></i>
                </span>
              </div>
            </div>
            <!-- End Header Right  -->
          </div>
        </div>
        <!-- End Header Center -->
      </div>
    </header>
    <!-- End Header Area -->
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
/* Your CSS here */
</style>