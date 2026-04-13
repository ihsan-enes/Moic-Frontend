<template>
    <v-app>
        <AdminNavbar />
        <v-main class="bg-grey-lighten-4">
            <v-container class="py-10">
                <v-card class="rounded-xl elevation-3 pa-6">
                    <div class="d-flex justify-space-between align-center mb-6">
                        <h2 class="section-title">İletişim Mesajları</h2>
                        <v-btn icon="mdi-refresh" variant="text" @click="fetchMessages" :loading="loading"
                            color="#001529"></v-btn>
                    </div>

                    <v-data-table :headers="headers" :items="messages" :loading="loading" hover
                        no-data-text="Henüz bir mesaj bulunmuyor.">
                        <template v-slot:item.name="{ item }">
                            <span class="font-weight-bold text-dark-blue">{{ item.name }}</span>
                        </template>

                        <template v-slot:item.actions="{ item }">
                            <div class="d-flex justify-center ga-2">
                                <v-btn icon="mdi-eye-outline" variant="tonal" color="blue" size="small"
                                    @click="viewDetails(item.id)"></v-btn>
                                <v-btn icon="mdi-delete-outline" variant="tonal" color="error" size="small"
                                    @click="deleteMessage(item.id)"></v-btn>
                            </div>
                        </template>
                    </v-data-table>
                </v-card>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import AdminNavbar from '@/components/AdminNavbar.vue';
import adminInstance from '@/service/AdminApi';

export default {
    components: { AdminNavbar },
    data() {
        return {
            loading: false,
            messages: [],
            headers: [
                { title: 'AD SOYAD', key: 'name', align: 'start' },
                { title: 'E-POSTA', key: 'email' },
                { title: 'KONU', key: 'subject' },
                { title: 'İŞLEMLER', key: 'actions', align: 'center', sortable: false },
            ],
        };
    },
    mounted() {
        this.fetchMessages();
    },
    methods: {
        async fetchMessages() {
            this.loading = true;
            try {
                const res = await adminInstance.get('/Complaint/GetAll');
                this.messages = res.data;
            } catch (error) {
                console.error("Veri çekme hatası:", error);
                if (error.response?.status === 401) alert("Oturum süreniz dolmuş!");
            } finally {
                this.loading = false;
            }
        },
        async deleteMessage(id) {
            if (confirm("Bu mesajı silmek istediğinize emin misiniz?")) {
                try {
                    await adminInstance.delete(`/Complaint/Delete/${id}`);
                    this.fetchMessages();
                } catch (error) {
                    alert("Silme işlemi başarısız.");
                }
            }
        },
        viewDetails(id) {
            this.$router.push({ name: 'adminContactDetail', params: { id } });
        }
    }
};
</script>