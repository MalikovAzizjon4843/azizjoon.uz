<template>
  <header :class="[
      'haeder-default',
      'black-logo-version',
      'header--sticky',
      'p-3',
      scrollTop > 50 ? 'rn-header' : ''
    ]">
    <div class="header-wrapper rn-popup-mobile-menu m--0 row align-items-center h-25">
      <!-- Left Logo -->
      <div class="col-lg-2 col-6">
        <div class="header-left">
          <div class="logo" style="width: 90px; height: 90px">
            <router-link to="/">
              <img src="@/assets/images/avatar.png" alt="logo" />
            </router-link>
          </div>
        </div>
      </div>

      <!-- Center Nav -->
      <div class="col-lg-10 col-6">
        <div class="header-center d-flex justify-content-between align-items-center float-end">
          <nav id="sideNav" class="mainmenu-nav navbar-example2 d-none d-xl-block onepagenav">
            <ul class="primary-menu nav ">
              <li
                  v-for="item in navItems"
                  :key="item.href"
                  class="nav-item"
              >
                <a
                    :href="item.href"
                    class="nav-link smoth-animation"
                    :class="{ active: activeId === item.href }"
                    @click.prevent="scrollTo(item.href)"
                >
                  {{ item.label }}
                </a>
              </li>
            </ul>
          </nav>

          <!-- Right dummy (mobile menu btn or language later) -->
          <div class="header-right d-none d-xl-block">
            <!-- Example: future language switcher -->
            <!-- <b-button variant="outline-light" size="sm">EN</b-button> -->
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      scrollTop: 0,
      activeId: "#home",
      navItems: [
        { label: "Home", href: "#home" },
        { label: "Experience", href: "#experiences" },
        { label: "Education", href: "#educations" },
        { label: "Resume", href: "#resume" },
        { label: "Portfolio", href: "#portfolio" },
        { label: "Blog", href: "#blog" },
        { label: "Footer", href: "#footer" }
      ]
    };
  },
  methods: {
    scrollTo(href) {
      const el = document.querySelector(href);
      if (el) {
        const top = el.offsetTop - 80;
        window.scrollTo({
          top,
          behavior: "smooth"
        });
      }
    },
    trackActiveSection() {
      const scrollY = window.scrollY + 100;
      for (let item of this.navItems) {
        const el = document.querySelector(item.href);
        if (el && scrollY >= el.offsetTop) {
          this.activeId = item.href;
        }
      }
    },
    onScroll() {
      this.scrollTop = window.scrollY
    }
  },
  mounted() {
    window.addEventListener("scroll", this.trackActiveSection);
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.trackActiveSection);
    window.removeEventListener('scroll', this.onScroll)
  },
};
</script>

<style scoped>
.rn-header {
  background-color: #1e1e1e;
  padding: 0.75rem 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.primary-menu .nav-link {
  color: #aaa;
  font-weight: 500;
  padding: 0.75rem 1rem;
  transition: all 0.3s ease-in-out;
}

.primary-menu .nav-link.active {
  color: white;
}

.smoth-animation {
  scroll-behavior: smooth;
}
</style>
