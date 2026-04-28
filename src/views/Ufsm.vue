<template>
  <AppNavbar />
  <v-container class="py-15 mt-15">
    <v-card class="ufsm-header-card d-flex flex-column align-center justify-center text-center pa-8 mb-12 rounded-xl elevation-6 mx-auto" max-width="1000">
      <div class="overlay"></div>
      <div class="content-z">
        <span class="text-overline gold-text mb-2 d-block">{{ $t("ufsm.overline") }}</span>
        <h1 class="ufsm-main-title text-white mb-4">{{ $t("ufsm.title") }}</h1>
      </div>
    </v-card>

    <v-card class="content-card rounded-xl mx-auto pa-10 elevation-2 mb-10" max-width="900" :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
      <p class="mb-6 text-body-1 custom-paragraph">{{ $t("ufsm.p1") }}</p>
      <p class="mb-6 text-body-1 custom-paragraph">{{ $t("ufsm.p2") }}</p>
      <p class="mb-6 text-body-1 custom-paragraph">{{ $t("ufsm.p3") }}</p>
      <p class="text-body-1 custom-paragraph">{{ $t("ufsm.p4") }}</p>
    </v-card>
  </v-container>
  <AppFooter />
</template>

<script>
import AppFooter from '@/components/AppFooter.vue';
import AppNavbar from '@/components/AppNavbar.vue';
export default {
  name: "ufsm",
  components: { AppNavbar, AppFooter }
}
</script>

<style scoped>
.ufsm-header-card { position: relative; min-height: 400px; background-image: url('/images/ufsm.jpg'); background-size: cover; background-position: center; border: none !important; }
.overlay { position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(to bottom, rgba(0,29,61,0.40) 0%, rgba(0,29,61,0.85) 100%); z-index: 1; }
.content-z { position: relative; z-index: 2; }
.ufsm-main-title { font-family: "Times New Roman", serif; font-size: clamp(2.5rem, 6vw, 4rem); font-weight: 700; }
.gold-text { color: #d4af37; font-weight: 800; }
.content-card { background-color: white !important; z-index: 3; position: relative; }
.custom-paragraph { color: #444; font-size: 1.05rem !important; text-align: justify; }
[dir="rtl"] .custom-paragraph { text-align: right; }
</style>