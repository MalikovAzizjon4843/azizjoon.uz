<template>
  <div id="footer" class="rn-footer-area footer-style-2 rn-section-gapTop section-separator">
    <div class="container pb--80 pb_sm--40 plr_sm--20">
      <div class="row">
        <div class="col-xl-3 col-12 col-lg-3 col-md-6 col-sm-6 col-12">
          <div class="logo" style="width: 90px; height: 90px">
            <router-link to="/">
              <img src="@/assets/images/avatar.png" alt="logo" />
            </router-link>
          </div>
          <div class="social-icone-wrapper">
            <ul class="social-share d-flex liststyle">
              <li class="facebook"><a href="#"><i data-feather="linkedin"></i></a>
              </li>
              <li class="instagram"><a href="https://www.instagram.com/azizdjan.malikov/"><i data-feather="instagram"></i></a>
              </li>
              <li class="linkedin"><a href="https://x.com/AzizjonMalikov"><i data-feather="twitter"></i></a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-sl-3 col-12 mt_sm--20 col-lg-3 col-md-6 col-sm-6 col-12">
          <div class="menu-wrapper">
            <div class="menu-title">
              <h6>product</h6>
            </div>
            <ul class="menu-footer">
              <li><a href="#">Database</a></li>
              <li><a href="#">Authentication</a></li>
              <li><a href="#">Storage</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">Pricing</a></li>
            </ul>
          </div>
        </div>
        <div class="col-sl-3 col-12 mt_sm--20 col-lg-3 col-md-6 col-sm-6 col-12">
          <div class="menu-wrapper">
            <div class="menu-title">
              <h6>Resources</h6>
            </div>
            <ul class="menu-footer">
              <li><a href="#">Authentication</a></li>
              <li><a href="#">System Status</a></li>
              <li><a href="#">Terms of service</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">over right</a></li>
            </ul>
          </div>
        </div>
        <div class="col-sl-3 col-12 mt_sm--20 col-lg-3 col-md-6 col-sm-6 col-12">
          <div class="menu-wrapper">
            <div class="menu-title">
              <h6>Developers</h6>
            </div>
            <ul class="menu-footer">
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Authentication</a></li>
              <li><a href="#">API Reference</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">Open Source</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright text-center ptb--40 section-separator">
      <p class="description">© 2025. All rights reserved by <a target="_blank" href="https://www.azizjoon.uz/">Azizjon Malikov</a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style>

</style>
