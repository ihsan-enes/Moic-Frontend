<template>
    <v-app>
        <AdminNavbar />
        <v-main class="bg-grey-lighten-4">
            <v-container class="py-10">
                <v-btn variant="text" prepend-icon="mdi-arrow-left" class="mb-6 text-none font-weight-bold"
                    @click="$router.back()" color="#001529">
                    Listeye Dön
                </v-btn>

                <v-row justify="center">
                    <v-col cols="12" md="8">
                        <v-card v-if="detail" class="rounded-xl elevation-5 overflow-hidden">
                            <div class="pa-8 bg-admin-header text-white">
                                <div class="text-overline gold-text mb-2">MESAJ #{{ detail.id }}</div>
                                <h1 class="text-h4 font-weight-bold">{{ detail.subject }}</h1>
                            </div>

                            <v-card-text class="pa-8 bg-white">
                                <v-row>
                                    <v-col cols="12" sm="6">
                                        <div class="detail-label">GÖNDEREN</div>
                                        <div class="detail-value text-h6 text-dark-blue">{{ detail.name }}</div>
                                    </v-col>
                                    <v-col cols="12" sm="6">
                                        <div class="detail-label">E-POSTA ADRESİ</div>
                                        <div class="detail-value font-weight-bold">{{ detail.email }}</div>
                                    </v-col>
                                    <v-col cols="12" sm="6">
                                        <div class="detail-label">TELEFON</div>
                                        <div class="detail-value">{{ detail.phoneNumber || 'Belirtilmemiş' }}</div>
                                    </v-col>
                                </v-row>

                                <v-divider class="my-6"></v-divider>

                                <div class="detail-label mb-3">MESAJ İÇERİĞİ</div>
                                <div class="message-box pa-6 rounded-lg">
                                    {{ detail.message }}
                                </div>
                            </v-card-text>

                            <v-card-actions class="pa-6 bg-grey-lighten-5 justify-end">
                                <v-btn color="error" variant="flat" prepend-icon="mdi-delete" class="px-6 rounded-pill"
                                    @click="deleteThis">
                                    Mesajı Sil
                                </v-btn>
                            </v-card-actions>
                        </v-card>

                        <v-skeleton-loader v-else type="card, article"></v-skeleton-loader>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import AdminNavbar from '@/components/AdminNavbar.vue';
import adminInstance from '@/service/AdminApi';

export default {
    name: 'adminContactDetail',
    components: { AdminNavbar },
    data() {
        return {
            detail: null,
        };
    },
    mounted() {
        this.fetchDetail();
    },
    methods: {
        async fetchDetail() {
            const id = this.$route.params.id;
            try {
                const res = await adminInstance.get(`/Complaint/GetById/${id}`);
                this.detail = res.data;
            } catch (error) {
                console.error("Detay hatası:", error);
            }
        },
        async deleteThis() {
            if (confirm("Kalıcı olarak silinsin mi?")) {
                try {
                    await adminInstance.delete(`/Complaint/Delete/${this.detail.id}`);
                    this.$router.push('/adminContact');
                } catch (error) {
                    alert("Bir hata oluştu.");
                }
            }
        }
    }
};
</script>

<style scoped>
.bg-admin-header {
    background: linear-gradient(135deg, #001529 0%, #002a4d 100%) !important;
}

.gold-text {
    color: #d4af37;
    font-weight: 800;
    letter-spacing: 1.5px;
}

.detail-label {
    font-size: 0.7rem;
    font-weight: 900;
    color: #888;
    letter-spacing: 1px;
}

.text-dark-blue {
    color: #001529;
}

.message-box {
    background-color: #f8f9fa;
    border: 1px solid #eee;
    line-height: 1.6;
    white-space: pre-wrap;
    color: #444;
}

.section-title {
    font-family: 'Times New Roman', serif;
    font-size: 1.8rem;
    font-weight: 700;
    color: #001529;
}
</style>