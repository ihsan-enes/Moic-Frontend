<template>
  <div>
    <AppNavbar></AppNavbar>

    <v-container class="py-10 mt-10 bg-light-cream" fluid>
      <div class="text-center mb-6 px-4">
        <span class="text-overline gold-text" style="font-size: 0.6rem !important;">TR MOIC</span>
        <h1 class="page-main-title mb-3">{{ $t('komiteler.header_title') }}</h1>
        <p class="text-caption opacity-70 mx-auto max-width-p">{{ $t('komiteler.header_desc') }}</p>

        <v-divider class="my-5 mx-auto" max-width="100" color="#d4af37"></v-divider>

        <h2 class="section-sub-title mb-1">{{ $t('komiteler.list_title') }}</h2>
        <p class="text-caption opacity-70 mx-auto max-width-p">{{ $t('komiteler.list_desc') }}</p>
      </div>

      <v-container>
        <v-row justify="center" class="ga-6">
          
          <v-col cols="12" sm="auto" class="d-flex justify-center">
            <v-card class="committee-card rounded-lg" width="300" height="250">
              <v-img src="/images/committee-1.jpg" cover class="fill-height align-center text-center">
                <div class="card-overlay"></div>
                <div class="card-content">
                   <div class="mid-title">{{ $t("komiteler.c1_title") }}</div>
                </div>
                <div class="bottom-title">{{ $t("komiteler.c1_lang") }}</div>
              </v-img>
            </v-card>
          </v-col>

          <v-col cols="12" sm="auto" class="d-flex justify-center">
            <v-card class="committee-card rounded-lg" width="300" height="250">
              <v-img src="/images/committee-2.jpg" cover class="fill-height align-center text-center">
                <div class="card-overlay"></div>
                <div class="card-content">
                   <div class="mid-title">{{ $t("komiteler.c2_title") }}</div>
                </div>
                <div class="bottom-title">{{ $t("komiteler.c2_lang") }}</div>
              </v-img>
            </v-card>
          </v-col>

          <v-col cols="12" sm="auto" class="d-flex justify-center">
            <v-card class="committee-card rounded-lg" width="300" height="250">
              <v-img src="/images/committee-3.jpg" cover class="fill-height align-center text-center">
                <div class="card-overlay"></div>
                <div class="card-content">
                   <div class="mid-title">{{ $t("komiteler.c3_title") }}</div>
                </div>
                <div class="bottom-title">{{ $t("komiteler.c3_lang") }}</div>
              </v-img>
            </v-card>
          </v-col>

          <v-col cols="12" sm="auto" class="d-flex justify-center">
            <v-card class="committee-card rounded-lg" width="300" height="250">
              <v-img src="/images/committee-4.jpg" cover class="fill-height align-center text-center">
                <div class="card-overlay"></div>
                <div class="card-content">
                   <div class="mid-title">{{ $t("komiteler.c4_title") }}</div>
                </div>
                <div class="bottom-title">{{ $t("komiteler.c4_lang") }}</div>
              </v-img>
            </v-card>
          </v-col>

          <v-col cols="12" sm="auto" class="d-flex justify-center">
            <v-card class="committee-card rounded-lg" width="300" height="250">
              <v-img src="/images/committee-5.jpg" cover class="fill-height align-center text-center">
                <div class="card-overlay"></div>
                <div class="card-content">
                   <div class="mid-title">{{ $t("komiteler.c5_title") }}</div>
                </div>
                <div class="bottom-title">{{ $t("komiteler.c5_lang") }}</div>
              </v-img>
            </v-card>
          </v-col>

        </v-row>
      </v-container>
    </v-container>

    <AppFooter></AppFooter>
  </div>
</template>

<script>
import AppNavbar from '@/components/AppNavbar.vue';
import AppFooter from '@/components/AppFooter.vue';

export default {
  name: 'committees',
  components: {
    AppNavbar,
    AppFooter
  }
}
</script>

<style scoped>

.bottom-title {
  position: absolute;
  bottom: 15px; 
  left: 0;
  right: 0;
  font-size: 0.9rem;
  font-weight: bold;
  color: white;
  text-align: center;
}

.bg-light-cream { 
  background-color: #fcfaf5; 
}

.page-main-title {
  font-family: 'Times New Roman', serif;
  font-size: clamp(1.7rem, 3vw, 2.2rem); 
  color: #002333;
  letter-spacing: 1.5px;
}

.section-sub-title {
  font-family: 'Times New Roman', serif;
  font-size: 1.40rem; 
  color: #002333;
  font-weight: 700;
}

.max-width-p { 
  max-width: 550px; 
  line-height: 1.3; 
}

.committee-card {
  position: relative;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;
  border: 1px solid rgba(0,0,0,0.05);
  width: 300px !important;
  height: 250px !important;
  max-width: 100%;
}

.committee-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 30px rgba(0,35,51,0.2) !important;
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0,35,51,0.1) 0%, rgba(0,35,51,0.2) 100%);
  z-index: 1;
}

.card-content { 
  position: relative; 
  z-index: 2; 
  color: white; 
  padding: 16px;
}

.mid-title {
  font-family: 'Times New Roman', serif;
  font-size: 0.8rem; 
  line-height: 1.2;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.gold-text { 
  color: #d4af37; 
  letter-spacing: 1.2px; 
  font-weight: 700; 
}
</style>