<template>
  <AppNavbarHome />
  <v-img
    src="/images/school.png"
    height="100vh"
    cover
    class="align-center"
  >
    <div class="hero-overlay"></div>
    <v-container class="relative-content text-center text-white" fluid>
      <v-row  justify="center">
        <v-col cols="12" md="8">
          <p class="text-caption font-weight-light mb-4 letter-spacing-custom opacity-70">
          {{ $t('giris.first') }}
        </p>

        <h1 class="main-title mb-6">
          {{ $t('giris.second') }}
        </h1>

        <p class="text-body-1 mb-10 font-weight-medium">
          {{ $t('giris.third') }}
        </p>

        <v-btn 
          color="#d4af37" 
          rounded="pill" 
          size="x-large" 
          class="px-10 text-none font-weight-bold mb-10 hover-shift-btn"
        >
          {{ $t('giris.fourth') }}
        </v-btn>

        <p class="text-subtitle-2 font-italic opacity-60 max-width-text mx-auto">
          {{ $t('giris.fifth') }}
        </p>
        </v-col>
      </v-row>
    </v-container>
  </v-img>
  <v-container class="py-15 text-center" >
    <v-card class="info-card mb-10 rounded-xl elevation-2 mx-auto" max-width="900"> <v-row no-gutters>
        <v-col cols="12" md="5" class="pa-0 d-flex align-center justify-center w-100 bg-white">
          <v-img 
            src="/images/OİC.jpg" 
            width="100%" 
            max-width="260"
            min-height="260" 
            cover
          ></v-img> </v-col>
        
        <v-col cols="12" md="7" class="pa-10 content-side">
          <span class="text-overline gold-text">{{ $t('hakkinda.oic_small') }}</span>
          <h2 class="section-title mb-3">{{ $t('hakkinda.oic_title') }}</h2>
          <p style="font-size: 0.84rem;" class="text-body-2 text-justify opacity-80 font-weight-light">
            {{ $t('hakkinda.oic_desc') }}
          </p>
        </v-col>
      </v-row>
    </v-card>

    <v-card class="info-card rounded-xl elevation-2 mx-auto" max-width="900">
      <v-row no-gutters>
        <v-col cols="12" class="pa-10 content-side">
          <span class="text-overline gold-text">{{ $t('hakkinda.moic_small') }}</span>
          <h2 class="section-title mb-3">{{ $t('hakkinda.moic_title') }}</h2>
          <p style="font-size: 0.84rem;" class="text-justify opacity-80 font-weight-light">
            {{ $t('hakkinda.moic_desc') }}
          </p>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
  <AppFooter></AppFooter>
</template>

<script>
import AppFooter from "@/components/AppFooter.vue";
import AppNavbarHome from "@/components/AppNavbarHome.vue";
export default {
  name: ["home"],
  components: {
    AppNavbarHome,
    AppFooter
  },
};
</script>

<style>
.info-card {
  background-color: #f9f7f2 !important;
  overflow: hidden;
}

.content-side {
  position: relative;
  
}
.content-side::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px; 

  background: linear-gradient(
    to right, 
    #e8d1a1 0%,   
    #ae902d 50%,  
    #5b5952 100%  
  ) !important;
}

.section-title {
  font-family: 'Times New Roman', serif;
  font-size: 1.6rem; /* 1.8'den 1.6'ya çektik, başlık da biraz zarifleşti */
  font-weight: 700;
  color: #002333; 
  letter-spacing: 1px;
}

.opacity-80 {
  opacity: 0.85;
  line-height: 1.6; /* Satır aralığını biraz daraltarak metni topladık */
}

.gold-text {
  color: #b8860b;
  font-weight: 700;
  letter-spacing: 2px;
}

.opacity-80 {
  opacity: 0.85;
  line-height: 1.7;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.7)
  );
  z-index: 1;
}

.relative-content {
  position: relative;
  z-index: 2;
}
.hover-shift-btn {
  background-size: 200% auto !important; 
  background-image: linear-gradient(to right, #b8860b 0%, #f1c40f 50%, #b8860b 100%) !important;
  color: white !important;
  transition: 0.5s !important; 
  box-shadow: 0 4px 15px rgba(0,0,0,0.2) !important;
}

.hover-shift-btn:hover {
  background-position: right center !important; 
  color: white !important;
  box-shadow: 0 4px 20px rgba(212, 175, 55, 0.5) !important; 
  transform: translateY(-2px); 
}

.main-title {
  font-family: 'Times New Roman', serif; 
  font-size: clamp(2rem, 5vw, 4.5rem); 
  line-height: 1.1;
  font-weight: 700;
  text-transform: uppercase;
}

.spacing-custom {
  letter-spacing: 2px !important;
}

.opacity-80 {
  opacity: 0.8;
}
</style>