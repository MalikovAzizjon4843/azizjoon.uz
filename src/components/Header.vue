<template>
  <header :class="[
      'haeder-default',
      'black-logo-version',
      'header--sticky',
      'p-3',
      scrollTop > 50 ? 'rn-header' : '',
      themeClass
    ]">
    <div class="header-wrapper rn-popup-mobile-menu m--0 row align-items-center h-25">
      <!-- Left Logo -->
      <div class="col-lg-2 col-6">
        <div class="header-left">
          <div class="logo">
            <router-link to="/" @click.native.prevent="scrollToTop">
              <img src="@/assets/images/avatar.png" alt="logo" loading="lazy" />
            </router-link>
          </div>
        </div>
      </div>

      <!-- Center Nav -->
      <div class="col-lg-10 col-6">
        <div class="header-center d-flex justify-content-end justify-content-xl-between align-items-center float-end">
          <button class="menu-toggle d-block d-xl-none" @click="toggleMenu">
            <i data-feather="menu"></i>
          </button>
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
          <div class="header-right d-none d-xl-flex align-items-center gap-2">
            <button
                type="button"
                class="theme-toggle"
                @click="toggleTheme"
                :aria-label="theme === 'dark' ? $t('theme.switchToLight') : $t('theme.switchToDark')"
            >
              <i :data-feather="theme === 'dark' ? 'sun' : 'moon'"></i>
              <span>{{ theme === 'dark' ? $t('theme.switchToLight') : $t('theme.switchToDark') }}</span>
            </button>
            <b-dropdown :text="$i18n.locale.toUpperCase()" :variant="dropdownVariant" size="sm">
              <b-dropdown-item @click="switchLanguage('en')">EN</b-dropdown-item>
              <b-dropdown-item @click="switchLanguage('ru')">RU</b-dropdown-item>
              <b-dropdown-item @click="switchLanguage('uz')">UZ</b-dropdown-item>
            </b-dropdown>
          </div>
        </div>
      </div>
    </div>

    <div v-if="isMenuOpen" class="mobile-menu d-block d-xl-none">
      <ul class="primary-menu nav flex-column">
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
        <li class="nav-item mt-3">
          <button
              type="button"
              class="theme-toggle w-100 justify-content-center"
              @click="handleMobileThemeToggle"
          >
            <i :data-feather="theme === 'dark' ? 'sun' : 'moon'"></i>
            <span>{{ theme === 'dark' ? $t('theme.switchToLight') : $t('theme.switchToDark') }}</span>
          </button>
        </li>
        <li class="nav-item mt-3">
          <b-dropdown :text="$i18n.locale.toUpperCase()" :variant="dropdownVariant" size="sm">
            <b-dropdown-item @click="switchLanguage('en')">EN</b-dropdown-item>
            <b-dropdown-item @click="switchLanguage('ru')">RU</b-dropdown-item>
            <b-dropdown-item @click="switchLanguage('uz')">UZ</b-dropdown-item>
          </b-dropdown>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import feather from 'feather-icons'

export default {
  name: "Header",
  props: {
    theme: {
      type: String,
      default: 'dark'
    }
  },
  data() {
    return {
      scrollTop: 0,
      activeId: "#home",
      isMenuOpen: false,
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
      this.isMenuOpen = false;
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
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      this.isMenuOpen = false;
    },
    switchLanguage(lang) {
      this.$i18n.locale = lang
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('preferred-locale', lang)
        try {
          const url = new URL(window.location.href)
          url.searchParams.set('lang', lang)
          window.history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`)
        } catch (error) {
          // Ignore URL parsing errors in unsupported environments
        }
      }
    },
    toggleTheme() {
      this.$emit('toggle-theme')
    },
    handleMobileThemeToggle() {
      this.toggleTheme()
      this.isMenuOpen = false
    },
    refreshIcons() {
      this.$nextTick(() => {
        feather.replace()
      })
    }
  },
  mounted() {
    window.addEventListener("scroll", this.trackActiveSection);
    window.addEventListener('scroll', this.onScroll)
    this.refreshIcons()
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.trackActiveSection);
    window.removeEventListener('scroll', this.onScroll)
  },
  computed: {
    themeClass() {
      return this.theme === 'light' ? 'light-mode' : 'dark-mode'
    },
    dropdownVariant() {
      return this.theme === 'light' ? 'outline-dark' : 'outline-light'
    }
  },
  watch: {
    theme() {
      this.refreshIcons()
    },
    isMenuOpen() {
      this.refreshIcons()
    }
  }
};
</script>

<style scoped>
header {
  position: relative;
}

.rn-header {
  background-color: #1e1e1e;
  padding: 0.75rem 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

header.light-mode {
  color: #1f2937;
}

header.light-mode .rn-header {
  background-color: #ffffff;
  box-shadow: 0 10px 25px rgba(15, 23, 42, 0.1);
}

header.light-mode .primary-menu .nav-link {
  color: #4b5563;
}

header.light-mode .primary-menu .nav-link.active {
  color: #0f172a;
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

.theme-toggle {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border: none;
  border-radius: 999px;
  padding: 0.35rem 0.85rem;
  background: rgba(255, 255, 255, 0.08);
  color: inherit;
  font-size: 0.95rem;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.theme-toggle i {
  width: 20px;
  height: 20px;
}

.theme-toggle span {
  white-space: nowrap;
  font-weight: 500;
}

header.dark-mode .theme-toggle:hover {
  background: rgba(255, 255, 255, 0.16);
}

header.light-mode .theme-toggle {
  background: rgba(15, 23, 42, 0.08);
  color: #0f172a;
}

header.light-mode .theme-toggle:hover {
  background: rgba(15, 23, 42, 0.16);
}

.mobile-menu .theme-toggle {
  width: 100%;
  justify-content: center;
}

.logo {
  width: 90px;
  height: 90px;
}

.logo img {
  width: 100%;
  height: auto;
}

</style>
