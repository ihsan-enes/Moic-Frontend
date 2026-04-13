<template>
  <AppNavbar />
  <v-container class="py-16 mt-16" style="max-width: 1000px">
    <div class="text-center mb-10">
      <span class="text-overline gold-text d-block mb-1" style="font-size: 0.7rem !important">{{ $t("rules.overline") }}</span>
      <h1 class="rules-main-title mb-2">{{ $t("rules.title") }}</h1>
      <p class="rules-desc mx-auto text-grey-darken-1" style="max-width: 600px">
        {{ $t("rules.description") }}
      </p>
    </div>

    <v-row density="comfortable" :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
      <v-col v-for="n in 6" :key="n" cols="12" md="6" class="pa-2">
        <v-card class="rule-card rounded-lg pa-6 elevation-1 h-100">
          <h3 class="rule-cat-title mb-4">{{ $t(`rules.cat${n}.title`) }}</h3>
          <ul class="rule-list">
            <li class="mb-2">{{ $t(`rules.cat${n}.i1`) }}</li>
            <li class="mb-2">{{ $t(`rules.cat${n}.i2`) }}</li>
            <li>{{ $t(`rules.cat${n}.i3`) }}</li>
          </ul>
        </v-card>
      </v-col>
    </v-row>

    <v-card class="note-banner rounded-lg mt-8 pa-6 elevation-2 mx-auto" max-width="900">
      <div class="d-flex align-center mb-1">
        <v-icon color="white" start size="small">mdi-alert-circle-outline</v-icon>
        <h4 class="note-title text-white ml-2">{{ $t("rules.note.title") }}</h4>
      </div>
      <p class="note-text text-white opacity-80 mb-0">{{ $t("rules.note.desc") }}</p>
    </v-card>
  </v-container>
  <AppFooter />
</template>

<script>
import AppFooter from '@/components/AppFooter.vue';
import AppNavbar from '@/components/AppNavbar.vue';
export default {
  name: "rules",
  components: { AppNavbar, AppFooter }
}
</script>

<style scoped>
.gold-text { color: #b8860b; font-weight: 700; letter-spacing: 1.5px; }
.rules-main-title { font-family: "Times New Roman", serif; font-size: clamp(1.5rem, 4vw, 2.2rem); color: #001d3d; font-weight: 700; }
.rules-desc { font-size: 0.9rem; line-height: 1.5; }
.rule-card { background-color: white !important; border: 1px solid rgba(0,0,0,0.05) !important; }
.rule-cat-title { font-family: "Times New Roman", serif; font-size: 1.1rem; color: #003566; font-weight: 700; border-bottom: 1px solid #f0f0f0; padding-bottom: 8px; }
.rule-list { padding-left: 18px; color: #444; font-size: 0.85rem; line-height: 1.4; }
.rule-list li::before { content: "•"; color: #003566; font-weight: bold; display: inline-block; width: 1em; margin-left: -1em; }
[dir="rtl"] .rule-list { padding-left: 0; padding-right: 18px; }
.note-banner { background: #001d3d !important; }
.note-title { font-family: "Times New Roman", serif; font-size: 1.1rem; }
.note-text { font-size: 0.85rem; line-height: 1.5; }
</style>