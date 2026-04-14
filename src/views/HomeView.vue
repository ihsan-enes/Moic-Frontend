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
      <v-row justify="center">
        <v-col cols="12" sm="10" md="8">
          <p class="hero-caption mb-4 letter-spacing-custom opacity-70">
            {{ $t('giris.first') }}
          </p>

          <h1 class="main-title mb-6">
            {{ $t('giris.second') }}
          </h1>

          <p class="hero-body mb-8 font-weight-medium">
            {{ $t('giris.third') }}
          </p>

          <v-btn 
            color="#d4af37" 
            rounded="pill" 
            :size="$vuetify.display.smAndDown ? 'large' : 'x-large'" 
            class="px-8 px-md-10 text-none font-weight-bold mb-8 hover-shift-btn"
          >
            {{ $t('giris.fourth') }}
          </v-btn>

          <p class="hero-italic font-italic opacity-60 mx-auto">
            {{ $t('giris.fifth') }}
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-img>

  <v-container class="py-15 text-center">
    <v-card class="info-card mb-10 rounded-xl elevation-2 mx-auto" max-width="900">
      <v-row no-gutters>
        <v-col cols="12" md="5" class="pa-0 d-flex align-center justify-center bg-white">
          <v-img 
            src="/images/OİC.jpg" 
            width="100%" 
            max-height="260"
            cover
          ></v-img>
        </v-col>
        <v-col cols="12" md="7" class="pa-6 pa-md-10 content-side">
          <span class="text-overline gold-text">{{ $t('hakkinda.oic_small') }}</span>
          <h2 class="section-title mb-3">{{ $t('hakkinda.oic_title') }}</h2>
          <p class="text-body-2 text-justify opacity-80 font-weight-light info-text">
            {{ $t('hakkinda.oic_desc') }}
          </p>
        </v-col>
      </v-row>
    </v-card>

    <v-card class="info-card rounded-xl elevation-2 mx-auto" max-width="900">
      <v-row no-gutters>
        <v-col cols="12" class="pa-6 pa-md-10 content-side">
          <span class="text-overline gold-text">{{ $t('hakkinda.moic_small') }}</span>
          <h2 class="section-title mb-3">{{ $t('hakkinda.moic_title') }}</h2>
          <p class="text-justify opacity-80 font-weight-light info-text">
            {{ $t('hakkinda.moic_desc') }}
          </p>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
  <AppFooter></AppFooter>
</template>

<script>
import AppFooter from '@/components/AppFooter.vue';
import AppNavbarHome from '@/components/AppNavbarHome.vue';


export default{
  name:"home",
  components:{
    AppNavbarHome,
    AppFooter
  }
}

</script>

<style scoped>
/* ANA BAŞLIK AYARI */
.main-title {
  font-family: 'Times New Roman', serif;
  /* Telefondan PC'ye dinamik font boyutu: Min 1.4rem, Max 2.5rem */
  font-size: clamp(1.4rem, 6vw, 2.5rem); 
  line-height: 1.2;
  font-weight: 700;
  text-transform: uppercase;
}

/* Üst küçük başlık */
.hero-caption {
  font-size: clamp(0.7rem, 2vw, 0.9rem);
  text-transform: uppercase;
}

/* Hero altındaki açıklama metni */
.hero-body {
  font-size: clamp(0.9rem, 3vw, 1.1rem);
  max-width: 600px;
  margin: 0 auto;
}

/* En alttaki italik yazı */
.hero-italic {
  font-size: 0.8rem;
  max-width: 400px;
}

/* Bilgi kartlarındaki metin boyutu fix */
.info-text {
  font-size: 0.85rem !important;
  line-height: 1.6;
}

.letter-spacing-custom {
  letter-spacing: 2px !important;
}

/* MOBİL ÖZEL DOKUNUŞLAR (MEDIA QUERY) */
@media (max-width: 600px) {
  .main-title {
    letter-spacing: 1px;
    margin-bottom: 15px !important;
  }
  .hero-body {
    margin-bottom: 30px !important;
  }
  .pa-10 {
    padding: 24px !important; /* Mobilde kart içindeki çok geniş boşluğu daralttık */
  }
}

/* DİĞER STİLLER */
.info-card { background-color: #f9f7f2 !important; overflow: hidden; }
.content-side { position: relative; }
.content-side::before {
  content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 3px;
  background: linear-gradient(to right, #e8d1a1 0%, #ae902d 50%, #5b5952 100%) !important;
}
.section-title { font-family: 'Times New Roman', serif; font-size: 1.5rem; font-weight: 700; color: #002333; letter-spacing: 1px; }
.gold-text { color: #b8860b; font-weight: 700; letter-spacing: 2px; }
.hero-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)); z-index: 1; }
.relative-content { position: relative; z-index: 2; }
.hover-shift-btn { background-size: 200% auto !important; background-image: linear-gradient(to right, #b8860b 0%, #f1c40f 50%, #b8860b 100%) !important; color: white !important; transition: 0.5s !important; box-shadow: 0 4px 15px rgba(0,0,0,0.2) !important; }
.hover-shift-btn:hover { background-position: right center !important; transform: translateY(-2px); box-shadow: 0 4px 20px rgba(212, 175, 55, 0.5) !important; }
</style>