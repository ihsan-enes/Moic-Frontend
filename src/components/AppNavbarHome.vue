<template>
  <v-navigation-drawer v-model="drawer" temporary location="right" color="#001529" class="text-white">
    <v-list nav>
      <div v-for="(item, i) in menuItems" :key="i">
        <v-list-group v-if="item.children" :value="item.title" color="#d4af37">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" :title="$t(item.title)"></v-list-item>
          </template>
          <v-list-item v-for="(child, j) in item.children" :key="j" :to="child.to"
            :title="$t(child.title)"></v-list-item>
        </v-list-group>

        <v-list-item v-else :to="item.to" :title="$t(item.title)"></v-list-item>
      </div>
    </v-list>

    <v-divider class="my-2"></v-divider>

    <v-list nav>
      <v-list-subheader class="text-grey-lighten-1">DİL / LANGUAGE</v-list-subheader>
      <v-list-item @click="changeLanguage('tr')" :active="$i18n.locale === 'tr'">Türkçe</v-list-item>
      <v-list-item @click="changeLanguage('en')" :active="$i18n.locale === 'en'">English</v-list-item>
      <v-list-item @click="changeLanguage('ar')" :active="$i18n.locale === 'ar'">العربية</v-list-item>
    </v-list>
  </v-navigation-drawer>

  <v-app-bar flat color="transparent" absolute dark class="omar-nav px-md-10 mx-auto mt-2" style="overflow: visible">
    <v-img src="/images/logo.png" max-width="100" max-height="100" class="mr-3 cursor-pointer"
      @click="$router.push('/')"></v-img>
    <v-spacer></v-spacer>

    <div class="hidden-sm-and-down d-flex align-center">
      <template v-for="(item, i) in menuItems" :key="i">
        <v-menu v-if="item.children" open-on-hover location="bottom center" transition="slide-y-transition">
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props" :to="item.to" variant="text" color="white" class="text-none nav-link mx-1">
              {{ $t(item.title) }}
              <v-icon end size="x-small" class="ml-1">mdi-chevron-down</v-icon>
            </v-btn>
          </template>

          <v-list class="bg-dark-menu py-1 mt-2 shadow-xl" min-width="120">
            <v-list-item v-for="(child, j) in item.children" :key="j" :to="child.to" class="dropdown-item"
              density="compact">
              <v-list-item-title class="dropdown-text">
                {{ $t(child.title) }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-btn v-else :to="item.to" variant="text" color="white" class="text-none nav-link mx-1">
          {{ $t(item.title) }}
        </v-btn>
      </template>
    </div>

    <v-menu location="bottom end">
      <template v-slot:activator="{ props }">
        <v-btn variant="outlined" color="white" v-bind="props"
          class="lang-btn ml-5 text-none rounded-pill hidden-sm-and-down" density="compact" height="32">
          <span class="text-caption">{{ currentLocaleName }}</span>
          <v-icon right size="14" class="ml-1">mdi-chevron-down</v-icon>
        </v-btn>
      </template>
      <v-list bg-color="#001529" max-width="85" class="text-white py-0 border-gold-thin">
        <v-list-item @click="changeLanguage('tr')"><v-list-item-title
            class="dropdown-text text-caption font-weight-bold">TÜRKÇE</v-list-item-title></v-list-item>
        <v-list-item @click="changeLanguage('en')"><v-list-item-title
            class="dropdown-text text-caption font-weight-bold">ENGLISH</v-list-item-title></v-list-item>
        <v-list-item @click="changeLanguage('ar')"><v-list-item-title
            class="dropdown-text text-caption font-weight-bold">العربية</v-list-item-title></v-list-item>
      </v-list>
    </v-menu>

    <v-app-bar-nav-icon class="hidden-md-and-up text-white" @click="drawer = !drawer"></v-app-bar-nav-icon>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    menuItems: [
      {
        title: "navbar.about",
        to: "/",
        children: [
          { title: "navbar.about_sub", to: "/" },
          { title: "navbar.ufsm", to: "/ufsm" },
          { title: "navbar.icyf", to: "/icyf" }
        ]
      },
      { title: "navbar.committees", to: "/committees" },
      { title: "navbar.apply", to: "/application" },
      {
        title: "navbar.program",
        to: "/program",
        children: [
          { title: "navbar.flow", to: "/program" },
          { title: "navbar.rules", to: "/rules" },
          { title: "navbar.sponsors", to: "/sponsors" },
          { title: "navbar.team", to: "/team" }
        ]
      },
      { title: "navbar.contact", to: "/contact" },
    ]
  }),
  computed: {
    currentLocaleName() {
      const names = { tr: 'TR', en: 'EN', ar: 'AR' };
      return names[this.$i18n.locale] || 'TR';
    }
  },
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang;
      localStorage.setItem('user-locale',lang);
      this.drawer = false;
    }
  }
};
</script>

<style scoped>
.nav-link {
  color: rgba(255, 255, 255, 0.94) !important;
  font-weight: bolder !important;
  font-size: 0.62rem !important;
  letter-spacing: 0.11em !important;
  position: relative;
  overflow: visible !important;
  margin: 0 1px !important;
}

.nav-link :deep(.v-btn__overlay) {
  display: none !important;
}

/* ANA LİNK ANİMASYONU (KORUNDU) */
.nav-link :deep(.v-btn__content)::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 1px;
  background-color: #d4af37;
  transition: width 0.3s ease-in-out;
}

.lang-btn {
  min-width: 35px;
}

.nav-link:hover :deep(.v-btn__content)::after {
  width: 100%;
}

.omar-nav {
  max-width: 1000px !important;
  /* Ortalamayı sağlayan kritik 3 satır: */
  left: 0 !important;
  right: 0 !important;
  margin-inline: auto !important;
}

/* DİL BUTONU VE OVAL MENÜLER */
.border-gold-thin {
  background-color: #0c141d !important;
  border-radius: 12px !important;
  border: none !important;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5) !important;
}

.cursor-pointer {
  cursor: pointer;
}

.bg-dark-menu {
  background-color: #0c141d !important;
  border-radius: 12px !important;
  border: none !important;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5) !important;
}

.dropdown-text {
  color: white;
  font-size: 0.65rem !important;
  font-weight: 700;
  transition: color 0.2s ease;
}

.dropdown-item:hover .dropdown-text {
  color: #d4af37 !important;
}
</style>