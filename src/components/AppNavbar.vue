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

  <v-app-bar flat absolute color="transparent" class="mt-4 px-2" height="100" style="overflow: visible">
    <v-container class="nav-container elevation-4 rounded-xl d-flex align-center px-2 px-md-4 flex-nowrap">
      
      <div class="logo-wrapper cursor-pointer flex-shrink-0" @click="$router.push('/')">
        <v-img src="/src/assets/images/logo.png" width="55" contain></v-img>
      </div>

      <v-spacer></v-spacer>

      <div class="hidden-md-and-down d-flex align-center h-100 flex-nowrap">
        <template v-for="(item, i) in menuItems" :key="i">
          <v-menu v-if="item.children" open-on-hover location="bottom center" transition="slide-y-transition">
            <template v-slot:activator="{ props }">
              <v-btn v-bind="props" :to="item.to" variant="text" class="custom-nav-link">
                {{ $t(item.title) }}
                <v-icon end size="x-small" class="ml-1">mdi-chevron-down</v-icon>
              </v-btn>
            </template>

            <v-list class="bg-dark-menu py-1 mt-2 shadow-xl" min-width="150">
              <v-list-item v-for="(child, j) in item.children" :key="j" :to="child.to" class="dropdown-item"
                density="compact">
                <v-list-item-title class="dropdown-text">
                  {{ $t(child.title) }}
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-btn v-else :to="item.to" variant="text" class="custom-nav-link">
            {{ $t(item.title) }}
          </v-btn>
        </template>
      </div>

      <v-menu location="bottom end">
        <template v-slot:activator="{ props }">
          <v-btn variant="outlined" color="white" v-bind="props" 
            class="ml-2 ml-lg-6 text-none rounded-pill lang-btn flex-shrink-0"
            density="comfortable">
            {{ currentLocaleName }}
            <v-icon end size="x-small">mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <v-list class="bg-dark-menu py-1">
          <v-list-item @click="changeLanguage('tr')"><v-list-item-title class="dropdown-text">TR</v-list-item-title></v-list-item>
          <v-list-item @click="changeLanguage('en')"><v-list-item-title class="dropdown-text">EN</v-list-item-title></v-list-item>
          <v-list-item @click="changeLanguage('ar')"><v-list-item-title class="dropdown-text">AR</v-list-item-title></v-list-item>
        </v-list>
      </v-menu>

      <v-btn icon="mdi-menu" variant="text" color="white" class="hidden-lg-and-up ml-2 flex-shrink-0"
        @click="drawer = !drawer"></v-btn>
        
    </v-container>
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
      this.drawer = false;
    }
  }
};
</script>

<style scoped>
.nav-container {
  background: linear-gradient(135deg, #49515d 0%, #3c424b 100%) !important;
  height: 75px;
  max-width: 1200px; /* Konteynerin çok yayılmasını engelledik */
}

.custom-nav-link {
  color: white !important;
  font-weight: 700;
  font-size: 0.7rem; /* Fontu bir tık küçülttük yer kazanmak için */
  letter-spacing: 1px;
  position: relative;
  overflow: visible !important;
  margin: 0 4px !important; /* Boşlukları daralttık */
}

/* Büyük ekranlarda biraz daha geniş boşluk verebiliriz */
@media (min-width: 1400px) {
  .custom-nav-link {
    margin: 0 10px !important;
    font-size: 0.75rem;
  }
}

.custom-nav-link :deep(.v-btn__content)::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #d4af37;
  transition: width 0.3s ease-in-out;
  border-radius: 2px;
}

.custom-nav-link:hover :deep(.v-btn__content)::after {
  width: 100%;
}

/* Dropdown ve Dil Menüsü Stilleri */
.bg-dark-menu {
  background-color: #0c141d !important;
  border-radius: 12px !important;
  border: none !important;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5) !important;
}

.dropdown-text {
  color: white;
  font-size: 0.7rem !important;
  font-weight: 700;
  text-transform: uppercase;
}

.dropdown-item:hover .dropdown-text {
  color: #d4af37 !important;
}

.lang-btn {
  border: 1px solid rgba(255, 255, 255, 0.3) !important;
  min-width: 65px;
}

.cursor-pointer {
  cursor: pointer;
}
</style>