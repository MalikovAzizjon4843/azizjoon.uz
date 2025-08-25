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
                    class="nav-link"
                    :class="{ active: activeId === item.href }"
                    @click.prevent="scrollTo(item.href)"
                >
                  {{ $t(item.key) }}
                </a>
              </li>
            </ul>
          </nav>

          <!-- Language switcher -->
          <div class="header-right d-none d-xl-block">
            <b-dropdown :text="$i18n.locale.toUpperCase()" variant="outline-light" size="sm">
              <b-dropdown-item @click="switchLanguage('en')">EN</b-dropdown-item>
              <b-dropdown-item @click="switchLanguage('ru')">RU</b-dropdown-item>
              <b-dropdown-item @click="switchLanguage('uz')">UZ</b-dropdown-item>
            </b-dropdown>
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
        { key: 'nav.home', href: '#home' },
        { key: 'nav.experience', href: '#experiences' },
        { key: 'nav.education', href: '#educations' },
        { key: 'nav.resume', href: '#resume' },
        { key: 'nav.portfolio', href: '#portfolio' },
        { key: 'nav.blog', href: '#blog' },
        { key: 'nav.footer', href: '#footer' }
      ]
    };
  },
  methods: {
    scrollTo(href) {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
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
    },
    switchLanguage(lang) {
      this.$i18n.locale = lang
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

</style>
