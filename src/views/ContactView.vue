<template>
    <AppNavbar />
    <v-container class="py-15 mt-15 bg-light-cream">
        <v-row justify="center">
            <v-col cols="12" md="4" lg="3">
                <v-card class="contact-info-header pa-6 rounded-xl elevation-4 mb-4">
                    <span class="text-overline gold-text" style="font-size: 0.65rem !important;">
                        {{ $t("iletisim.sidebar.header_small") }}
                    </span>
                    <h2 class="sidebar-title mb-2">
                        {{ $t("iletisim.sidebar.header_title") }}
                    </h2>
                    <p class="text-caption opacity-70 mb-0">
                        {{ $t("iletisim.sidebar.header_desc") }}
                    </p>
                </v-card>

                <v-card
                    v-for="(item, i) in sidebarItems"
                    :key="i"
                    class="info-box pa-4 rounded-xl mb-3 elevation-1"
                >
                    <span class="text-overline gold-text-muted" style="font-size: 0.55rem !important;">
                        {{ item.label }}
                    </span>
                    <h4 class="info-val mt-0">{{ item.val }}</h4>
                    <p class="text-caption opacity-50 mb-0" style="font-size: 0.7rem !important;">
                        {{ item.sub }}
                    </p>
                </v-card>
            </v-col>

            <v-col cols="12" md="8" lg="7">
                <v-card class="form-card pa-8 rounded-xl elevation-3">
                    <span class="text-overline gold-text-muted" style="font-size: 0.7rem !important;">
                        {{ $t("iletisim.form.overline") }}
                    </span>
                    <h1 class="form-main-title mb-2">
                        {{ $t("iletisim.form.title") }}
                    </h1>
                    <p class="text-caption opacity-60 mb-6">
                        {{ $t("iletisim.form.subtitle") }}
                    </p>

                    <v-form @submit.prevent="submitForm">
                        <v-row density="comfortable">
                            <v-col cols="12" sm="6">
                                <label class="input-label">{{ $t("iletisim.form.name") }}</label>
                                <v-text-field v-model="formData.name" :placeholder="$t('iletisim.form.name')" variant="filled" rounded="lg" flat bg-color="#f5f5f5" density="comfortable"></v-text-field>
                            </v-col>

                            <v-col cols="12" sm="6">
                                <label class="input-label">{{ $t("iletisim.form.email") }}</label>
                                <v-text-field v-model="formData.email" placeholder="ornek@mail.com" variant="filled" rounded="lg" flat bg-color="#f5f5f5" density="comfortable"></v-text-field>
                            </v-col>

                            <v-col cols="12" sm="6">
                                <label class="input-label">{{ $t("iletisim.form.subject") }}</label>
                                <v-text-field v-model="formData.subject" :placeholder="$t('iletisim.form.subject')" variant="filled" rounded="lg" flat bg-color="#f5f5f5" density="comfortable"></v-text-field>
                            </v-col>

                            <v-col cols="12" sm="6">
                                <label class="input-label">{{ $t("iletisim.form.phone") }}</label>
                                <v-text-field v-model="formData.phoneNumber" placeholder="+90 ..." variant="filled" rounded="lg" flat bg-color="#f5f5f5" density="comfortable"></v-text-field>
                            </v-col>

                            <v-col cols="12">
                                <label class="input-label">{{ $t("iletisim.form.message") }}</label>
                                <v-textarea v-model="formData.message" :placeholder="$t('iletisim.form.placeholder_msg')" variant="filled" rounded="lg" flat bg-color="#f5f5f5" rows="4" density="comfortable"></v-textarea>
                            </v-col>
                        </v-row>

                        <v-btn :loading="loading" class="px-10 py-4 text-none font-weight-bold gold-submit-btn" rounded="pill" type="submit">
                            {{ $t("iletisim.form.submit") }}
                        </v-btn>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>

        <v-snackbar
            v-model="snackbar.show"
            :color="snackbar.color"
            timeout="4000"
            location="top"
            rounded="pill"
            elevation="24"
        >
            <div class="text-center d-flex align-center justify-center ga-2 font-weight-bold text-uppercase" style="letter-spacing: 1px; font-size: 0.8rem;">
                <v-icon size="20">{{ snackbar.icon }}</v-icon>
                {{ snackbar.text }}
            </div>
        </v-snackbar>
    </v-container>
    <AppFooter></AppFooter>
</template>

<script>
import AppFooter from "@/components/AppFooter.vue";
import AppNavbar from "@/components/AppNavbar.vue";
import instance from "@/service/Api"; 

export default {
    components: { AppNavbar, AppFooter },
    data() {
        return {
            loading: false, 
            formData: {
                name: '',
                email: '',
                phoneNumber: '',
                subject: '', 
                message: ''
            },
            snackbar: {
                show: false,
                text: '',
                color: '',
                icon: ''
            }
        };
    },
    computed: {
        sidebarItems() {
            return [
                {
                    label: this.$t("iletisim.sidebar.email_label"),
                    val: this.$t("iletisim.sidebar.email_val"),
                    sub: this.$t("iletisim.sidebar.email_sub"),
                },
                {
                    label: this.$t("iletisim.sidebar.time_label"),
                    val: this.$t("iletisim.sidebar.time_val"),
                    sub: this.$t("iletisim.sidebar.time_sub"),
                },
                {
                    label: this.$t("iletisim.sidebar.topics_label"),
                    val: this.$t("iletisim.sidebar.topics_val"),
                    sub: this.$t("iletisim.sidebar.topics_sub"),
                },
            ];
        },
    },
    methods: {
        async submitForm() {
            if (!this.formData.name || !this.formData.email || !this.formData.message) {
                this.showNotification("Lütfen zorunlu alanları doldurunuz.", "warning", "mdi-alert");
                return;
            }

            this.loading = true;
            try {
                const response = await instance.post('/Complaint/Create', this.formData);
                
                if (response.status === 200 || response.status === 201) {
                    this.showNotification("Mesajınız başarıyla iletildi!", "success", "mdi-check-all");
                    this.resetForm(); 
                }
            } catch (error) {
                console.error("Hata:", error);

                // --- RATE LIMIT (429) KONTROLÜ ---
                if (error.response?.status === 429 || error.message?.includes('429')) {
                    this.showNotification(
                        "Çok fazla mesaj gönderdiniz! Lütfen 3 dakika bekleyin.", 
                        "error", 
                        "mdi-clock-alert"
                    );
                } else {
                    this.showNotification("Mesaj gönderilirken bir hata oluştu.", "error", "mdi-wifi-off");
                }
            } finally {
                this.loading = false;
            }
        },
        showNotification(text, color, icon) {
            this.snackbar.text = text;
            this.snackbar.color = color;
            this.snackbar.icon = icon;
            this.snackbar.show = true;
        },
        resetForm() {
            this.formData = { name: '', email: '', phoneNumber: '', subject: '', message: '' };
        }
    }
};
</script>

<style scoped>
/* Mevcut stillerin aynen korunuyor... */
.bg-light-cream { background-color: #fcfaf5; }
.contact-info-header { background: linear-gradient(135deg, #001529 0%, #002333 100%) !important; color: white; }
.sidebar-title { font-family: "Times New Roman", serif; font-size: 1.2rem; }
.info-box { background-color: white !important; }
.info-val { color: #333; font-weight: 700; font-size: 0.9rem; }
.form-card { background-color: white !important; border-top: 4px solid #d4af37; }
.form-main-title { font-family: "Times New Roman", serif; font-size: 1.6rem; font-weight: 700; color: #002333; }
.input-label { display: block; font-size: 0.75rem; font-weight: 700; color: #333; margin-bottom: 4px; }
.gold-submit-btn { background-color: #d4af37 !important; color: #333 !important; transition: all 0.3s ease; height: 44px !important; }
.gold-submit-btn:hover { background-color: #b8860b !important; transform: translateY(-1px); }
.gold-text { color: #d4af37; letter-spacing: 1.5px; }
.gold-text-muted { color: #b8860b; letter-spacing: 0.5px; font-weight: 700; }
:deep(.v-field__input) { min-height: 38px !important; font-size: 0.85rem !important; }
</style>