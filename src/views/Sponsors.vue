<template>
  <AppNavbar />

  <v-container class="py-15 mt-15" style="max-width: 950px">
    
    <v-card class="header-banner rounded-lg pa-8 text-center mb-8 elevation-3">
      <span class="text-overline gold-text mb-1 d-block" style="font-size: 0.7rem !important">{{ $t("sponsors.header.overline") }}</span>
      <h1 class="main-title text-white mb-2">{{ $t("sponsors.header.title") }}</h1>
      <p class="subtitle text-white opacity-80 mx-auto text-body-2" style="max-width: 600px">
        {{ $t("sponsors.header.subtitle") }}
      </p>
    </v-card>

    <v-card class="rounded-lg pa-7 mb-8 elevation-1 border-light">
      <span class="text-overline gold-text mb-1 d-block" style="font-size: 0.7rem !important">{{ $t("sponsors.thanks.overline") }}</span>
      <h2 class="section-title mb-3">{{ $t("sponsors.thanks.title") }}</h2>
      <p class="text-caption text-grey-darken-2 line-height-relaxed mb-0">
        {{ $t("sponsors.thanks.desc") }}
      </p>
    </v-card>

    <v-row density="comfortable" dir="ltr">
      
      <v-col cols="12" md="6" class="pa-2">
        <v-card class="sponsor-card rounded-lg h-100 pa-5 elevation-1">
          <v-sheet color="white" height="140" class="rounded-lg d-flex align-center justify-center mb-4 overflow-hidden border pa-4">
              <v-img src="/images/ilim_yayma.png" contain max-height="100%"></v-img>
          </v-sheet>
          <span class="text-overline gold-text d-block mb-1" style="font-size: 0.65rem !important">{{ $t("sponsors.s1.label") }}</span>
          <h3 class="sponsor-title mb-2">{{ $t("sponsors.s1.title") }}</h3>
          <p class="text-caption text-grey-darken-1 mb-0">{{ $t("sponsors.s1.desc") }}</p>
        </v-card>
      </v-col>

      <v-col cols="12" md="6" class="pa-2">
        <v-card class="sponsor-card rounded-lg h-100 pa-5 elevation-1">
          <v-sheet color="white" height="140" class="rounded-lg d-flex align-center justify-center mb-4 overflow-hidden border pa-4">
              <v-img src="/images/onder.png" contain max-height="100%"></v-img>
          </v-sheet>
          <span class="text-overline gold-text d-block mb-1" style="font-size: 0.65rem !important">{{ $t("sponsors.s2.label") }}</span>
          <h3 class="sponsor-title mb-2">{{ $t("sponsors.s2.title") }}</h3>
          <p class="text-caption text-grey-darken-1 mb-0">{{ $t("sponsors.s2.desc") }}</p>
        </v-card>
      </v-col>

    </v-row>

    <v-card class="info-banner rounded-lg mt-8 pa-6 elevation-2">
      <div class="d-flex align-center mb-1">
        <v-icon color="white" start size="small">mdi-information-outline</v-icon>
        <h4 class="text-white text-subtitle-2 font-weight-bold ml-2">{{ $t("sponsors.info.title") }}</h4>
      </div>
      <p class="text-white opacity-70 mb-0 text-caption">{{ $t("sponsors.info.desc") }}</p>
    </v-card>

  </v-container>

  <AppFooter />
</template>

<script>
import AppFooter from '@/components/AppFooter.vue';
import AppNavbar from '@/components/AppNavbar.vue';

export default {
  name: "SponsorsView",
  components: { AppNavbar, AppFooter }
}
</script>

<style scoped>
.header-banner { background: linear-gradient(135deg, #001d3d 0%, #003566 100%) !important; }
.main-title { font-family: "Times New Roman", serif; font-size: 2.2rem; font-weight: 700; }
.gold-text { color: #b8860b !important; font-weight: 700; letter-spacing: 1.2px; }
.section-title { font-family: "Times New Roman", serif; font-size: 1.15rem; color: #001d3d; font-weight: 700; }
.sponsor-card { background-color: white !important; transition: all 0.3s ease; border: 1px solid rgba(0,0,0,0.05) !important; }
.sponsor-card:hover { transform: translateY(-3px); box-shadow: 0 6px 15px rgba(0,0,0,0.1) !important; }
.sponsor-title { font-family: "Times New Roman", serif; font-size: 1.1rem; color: #003566; font-weight: 700; }
.info-banner { background-color: #001d3d !important; }
.line-height-relaxed { line-height: 1.5; }
.border-light { border: 1px solid rgba(0,0,0,0.05) !important; }

/* Arapça için metin yönü düzeltmeleri */
[dir="rtl"] .text-left { text-align: right !important; }
[dir="rtl"] .ml-2 { margin-right: 8px !important; margin-left: 0 !important; }
</style>