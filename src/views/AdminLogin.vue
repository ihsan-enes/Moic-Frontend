<template>
    <v-container fluid class="fill-height login-bg pa-0">
        <v-row align="center" justify="center" class="ma-0">
            <v-col cols="12" sm="8" md="4" lg="3">
                <div class="text-center mb-8">
                    <v-img src="/images/logo.png" width="90" class="mx-auto mb-4" contain></v-img>
                    <v-btn to="/" variant="text" color="white" prepend-icon="mdi-arrow-left"
                        class="text-none opacity-60">
                        Siteye Geri Dön
                    </v-btn>
                </div>

                <v-card class="login-card pa-8 pa-md-10 rounded-xl elevation-24">
                    <div class="text-center mb-10">
                        <span class="text-overline gold-text">YÖNETİM SİSTEMİ GİRİŞİ</span>
                        <p class="text-caption text-grey-darken-1 mt-1">Lütfen yetkili bilgilerinizi giriniz.</p>
                    </div>

                    <v-form @submit.prevent="handleLogin">
                        <label class="input-label">Kullanıcı Adı</label>
                        <v-text-field v-model="form.userName" placeholder="Kullanıcı adınızı yazın" variant="filled"
                            rounded="lg" flat bg-color="#f8f9fa" prepend-inner-icon="mdi-account-outline" class="mb-3"
                            density="comfortable" hide-details></v-text-field>

                        <label class="input-label mt-4">Şifre</label>
                        <v-text-field v-model="form.password" :type="showPassword ? 'text' : 'password'"
                            placeholder="••••••••" variant="filled" rounded="lg" flat bg-color="#f8f9fa"
                            prepend-inner-icon="mdi-lock-outline"
                            :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                            @click:append-inner="showPassword = !showPassword" density="comfortable"
                            hide-details></v-text-field>

                        <v-btn block size="large" rounded="pill" class="login-btn py-7 font-weight-bold mt-8"
                            type="submit" :loading="loading">
                            SİSTEME GİRİŞ YAP
                        </v-btn>
                    </v-form>
                </v-card>

                <div class="text-center mt-10 text-white opacity-30 text-caption">
                    &copy; 2026 TR MOIC Yönetim Paneli v1.0
                </div>
            </v-col>
        </v-row>

        <v-snackbar v-model="snackbar.show" :color="snackbar.color" timeout="3000" location="top" rounded="pill"
            elevation="24">
            <div class="text-center d-flex align-center justify-center ga-2 font-weight-bold text-uppercase"
                style="letter-spacing: 1px;">
                <v-icon size="20">{{ snackbar.icon }}</v-icon>
                {{ snackbar.text }}
            </div>
        </v-snackbar>
    </v-container>
</template>

<script>
import instance from '@/service/Api';

export default {
    data() {
        return {
            showPassword: false,
            loading: false,
            form: {
                userName: '',
                password: ''
            },
            snackbar: {
                show: false,
                text: '',
                color: '',
                icon: ''
            }
        }
    },
    methods: {
    async handleLogin() {
        if (!this.form.userName || !this.form.password) return;

        this.loading = true;
        try {
            const res = await instance.post('/Auth/login', this.form);

            this.showNotification("Giriş Başarılı!", "success", "mdi-check-circle");

            
            localStorage.setItem('adminToken', res.data.token); 
            localStorage.setItem('adminUser', JSON.stringify({
                userName: res.data.userName,
                roles: res.data.roles
            }));

            setTimeout(() => {
                this.$router.push("/adminContact");
            }, 1000);

        } catch (error) {
            this.loading = false;

        if (error.response?.status === 429) {
            this.showNotification("Çok fazla deneme! 10 dk bekleyin.", "error", "mdi-clock-alert");
        } 
        else if (error.message?.includes('429') || error.toString().includes('429')) {
            this.showNotification("Çok fazla deneme! 10 dk bekleyin.", "error", "mdi-clock-alert");
        }
        else if (error.response?.status === 401) {
            this.showNotification("Hatalı kullanıcı adı veya şifre!", "error", "mdi-alert-circle");
        } 
        else {
            this.showNotification("Sistemle bağlantı kurulamadı!", "error", "mdi-wifi-off");
        }
        }
    },
    showNotification(text, color, icon) {
        this.snackbar.text = text;
        this.snackbar.color = color;
        this.snackbar.icon = icon;
        this.snackbar.show = true;
    }
}
}
</script>

<style scoped>
.login-bg {
    background: linear-gradient(135deg, #000814 0%, #001D2D 100%) !important;
    min-height: 100vh;
}

.login-card {
    background-color: white !important;
    border-top: 5px solid #d4af37;
}

.admin-title {
    font-family: 'Times New Roman', serif;
    font-size: 1.8rem;
    font-weight: 700;
    color: #002333;
    letter-spacing: 1px;
}

.input-label {
    display: block;
    font-size: 0.75rem;
    font-weight: 800;
    color: #333;
    margin-bottom: 6px;
    letter-spacing: 0.5px;
}

.login-btn {
    background-color: #d4af37 !important;
    color: #000 !important;
    font-size: 0.9rem;
    letter-spacing: 1px;
    transition: all 0.3s ease;
}

.login-btn:hover {
    background-color: #b8860b !important;
    transform: translateY(-2px);
}

.gold-text {
    color: #d4af37;
    font-weight: 800;
    letter-spacing: 2px;
}
</style>