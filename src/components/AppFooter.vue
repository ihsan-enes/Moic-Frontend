<template>
  <v-footer class="footer-main text-white pa-0">
    <v-container>
      <v-row>
        <v-col cols="12" md="4" class="pr-md-10">
          <v-img src="/images/logo.png" max-width="125" class="mx-auto"></v-img>
          <h3 class="footer-title my-0">{{ $t('footer.title') }}</h3>
          <p class="text-body-2 mb-0 opacity-70 line-height-relaxed" style="font-size:small;">
            {{ $t('footer.description') }}
          </p>
        </v-col>

        <v-col cols="12" sm="4" md="2">
          <h4 class="column-title mb-6">{{ $t('footer.quick_links') }}</h4>
          <ul class="footer-list">
            <li><router-link to="/">{{ $t('navbar.about') }}</router-link></li>
            <li><router-link to="/committees">{{ $t('navbar.committees') }}</router-link></li>
            <li><router-link to="/application">{{ $t('navbar.apply') }}</router-link></li>
            <li><router-link to="/contact">{{ $t('navbar.contact') }}</router-link></li>
          </ul>
        </v-col>

        <v-col cols="12" sm="4" md="3">
          <h4 class="column-title mb-6">{{ $t('footer.contact') }}</h4>
          <div class="contact-item mb-3">
            <v-icon color="#d4af37" start size="18">mdi-email-outline</v-icon>
            <span class="text-body-2">fsmmoic@gmail.com</span>
          </div>
          <div class="contact-item mb-3">
            <v-icon color="#d4af37" start size="18">mdi-map-marker-outline</v-icon>
            <span class="text-body-2">{{ $t('footer.address') }}</span>
          </div>
          <div class="contact-item">
            <v-icon color="#d4af37" start size="18">mdi-phone-outline</v-icon>
            <span class="text-body-2">+90 541 557 29 97 </span>
          </div>
        </v-col>

        <v-col cols="12" sm="4" md="3">
          <h4 class="column-title mb-6">{{ $t('footer.social') }}</h4>
          <ul class="footer-list">
            <li><a
                href="https://www.instagram.com/moic.fatih?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><v-icon
                  start size="16">mdi-instagram</v-icon> {{ $t("footer.instagram") }}</a></li>
            <li @click="copyEmail()"><a href="#"><v-icon start size="16">mdi-email</v-icon> {{ $t("footer.email") }}</a></li>
             <v-snackbar v-model="snackbar" timeout="2000" color="success" rounded="pill">
              Mail adresi panoya kopyalandı!
            </v-snackbar>
            <li><a
                href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x14caba1ebd38f40d:0x67b511d912d37f69?sa=X&ved=1t:8290&ictx=111"><v-icon
                  start size="16">mdi-map-marker</v-icon> {{ $t("footer.location") }}</a></li>
          </ul>
        </v-col>
      </v-row>

      <v-divider class="my-8 border-opacity-25"></v-divider>

      <div class="text-center text-caption opacity-60">
        {{ $t('footer.copyright') }}
      </div>
    </v-container>
  </v-footer>
</template>
<script>

export default {
  data: () => ({
    snackbar: false,
    emailToCopy: 'fsmmoic@gmail.com'
  }),
  methods: {
    async copyEmail() {
      try {
        await navigator.clipboard.writeText(this.emailToCopy);
        this.snackbar = true;
      } catch (err) {
        console.error('Kopyalama başarısız:', err);

      }
    },

  }
}


</script>

<style scoped>
.footer-main {
  max-height: fit-content;
  background: linear-gradient(135deg, #001529 0%, #002333 100%) !important;
  border-top: 1px solid rgba(212, 175, 55, 0.2);
}

.footer-title {
  font-family: 'Times New Roman', serif;
  font-size: 1.1rem;
  letter-spacing: 1px;
  font-weight: 700;
  color: #fff;
}

.column-title {
  font-family: 'Times New Roman', serif;
  font-size: 0.9rem;
  letter-spacing: 2px;
  font-weight: 700;
  text-transform: uppercase;
  color: #fff;
  position: relative;
}


.column-title::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 50px;
  height: 1px;
  background-color: #d4af37;
}

.footer-list {
  list-style: none;
  padding: 0;
}

.footer-list li {
  margin-bottom: 12px;
}

.footer-list a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.footer-list a:hover {
  color: #d4af37;
  padding-left: 5px;
}

.contact-item {
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.7);
}

.opacity-70 {
  opacity: 0.7;
}

.opacity-60 {
  opacity: 0.6;
}

.line-height-relaxed {
  line-height: 1.8;
}
</style>