<template>
  <v-navigation-drawer
    v-model="drawer"
    location="right"
    temporary
    class="bg-admin-dark"
    width="280"
  >
    <div class="pa-6">
      <div class="text-overline gold-text mb-4">ADMİN MENÜ</div>
      <v-list nav class="pa-0">
        <v-list-item to="/adminApplication" prepend-icon="mdi-account-details" class="mb-2 rounded-lg drawer-item">
          <v-list-item-title class="font-weight-bold">BAŞVURU İŞLEMLERİ</v-list-item-title>
        </v-list-item>

        <v-list-item to="/adminProgramFlow" prepend-icon="mdi-calendar-clock" class="mb-2 rounded-lg drawer-item">
          <v-list-item-title class="font-weight-bold">PROGRAM AKIŞI</v-list-item-title>
        </v-list-item>

        <v-list-item to="/adminContact" prepend-icon="mdi-email-outline" class="mb-2 rounded-lg drawer-item">
          <v-list-item-title class="font-weight-bold">İLETİŞİM MESAJLARI</v-list-item-title>
        </v-list-item>

        <v-list-item to="/adminTeam" prepend-icon="mdi-account-group" class="mb-2 rounded-lg drawer-item">
          <v-list-item-title class="font-weight-bold">EKİP ÜYELERİ</v-list-item-title>
        </v-list-item>
      </v-list>

      <v-divider class="my-4 border-opacity-25"></v-divider>
      
      <v-btn block color="error" variant="tonal" prepend-icon="mdi-logout" @click="logout" class="rounded-pill">
        ÇIKIŞ YAP
      </v-btn>
    </div>
  </v-navigation-drawer>

  <v-app-bar flat class="admin-app-bar px-md-10" height="70">
    <div class="d-flex align-center cursor-pointer" @click="$router.push('/')">
      <v-img src="/images/logo.png" width="45" contain class="mr-3"></v-img>
      <div class="admin-logo-text hidden-xs">TR MOIC <span class="gold-text ml-1">PANEL</span></div>
    </div>

    <v-spacer></v-spacer>

    <div class="hidden-sm-and-down">
      <v-btn to="/adminApplication" variant="text" class="admin-nav-btn mx-1">BAŞVURU</v-btn>
      <v-btn to="/adminProgramFlow" variant="text" class="admin-nav-btn mx-1">PROGRAM</v-btn>
      <v-btn to="/adminContact" variant="text" class="admin-nav-btn mx-1">MESAJLAR</v-btn>
      <v-btn to="/adminTeam" variant="text" class="admin-nav-btn mx-1">EKİP</v-btn>
      
      <v-btn icon="mdi-logout" color="error" class="ml-4" @click="logout" size="small"></v-btn>
    </div>

    <v-app-bar-nav-icon 
      class="hidden-md-and-up text-white" 
      @click="drawer = !drawer"
    ></v-app-bar-nav-icon>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("adminToken");
      this.$router.push("/adminLogin");
    }
  }
};
</script>

<style scoped>
/* Üst Bar Stili */
.admin-app-bar {
  background-color: #001529 !important; /* Kurumsal lacivert */
  color: white !important;
  border-bottom: 2px solid #d4af37 !important; /* İnce bir altın şerit */
}

.admin-logo-text {
  font-weight: 900;
  letter-spacing: 1px;
  font-size: 1.1rem;
}

/* Masaüstü Butonlar */
.admin-nav-btn {
  font-size: 0.75rem !important;
  font-weight: 700 !important;
  letter-spacing: 1px;
  color: rgba(255, 255, 255, 0.8) !important;
}

.admin-nav-btn:hover {
  color: #d4af37 !important;
}

/* Yan Menü (Mobile) */
.bg-admin-dark {
  background-color: #000814 !important;
  color: white !important;
}

.drawer-item {
  color: white !important;
}

:deep(.v-list-item--active) {
  color: #d4af37 !important;
  background-color: rgba(212, 175, 55, 0.1) !important;
}

/* Yardımcı Sınıflar */
.gold-text {
  color: #d4af37;
}

.cursor-pointer {
  cursor: pointer;
}
</style>