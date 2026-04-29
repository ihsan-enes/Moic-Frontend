<template>
    <v-app>
        <AdminNavbar />
        <v-main class="bg-grey-lighten-4">
            <v-container class="py-10">
                <v-card class="rounded-xl elevation-3 pa-6">
                    <div class="d-flex justify-space-between align-center mb-6">
                        <h2 class="section-title">Ekip Üyeleri</h2>
                        <v-btn color="#d4af37" class="rounded-pill font-weight-bold" prepend-icon="mdi-plus"
                            @click="openDialog()">
                            Yeni Üye Ekle
                        </v-btn>
                    </div>

                    <v-data-table :headers="headers" :items="members" :loading="loading" hover>
                        <template v-slot:item.photoUrl="{ item }">
                            <v-avatar size="50" class="my-2 border-gold">
                                <v-img :src="'https://images.fatihmoic.com/' + item.photoUrl" cover>
                                    <template v-slot:placeholder><v-icon color="grey">mdi-account</v-icon></template>
                                </v-img>
                            </v-avatar>
                        </template>

                        <template v-slot:item.actions="{ item }">
                            <div class="d-flex ga-2">
                                <v-btn icon="mdi-pencil" variant="text" color="blue" size="small"
                                    @click="openDialog(item)"></v-btn>
                                <v-btn icon="mdi-delete" variant="text" color="error" size="small"
                                    @click="deleteMember(item.id)"></v-btn>
                            </div>
                        </template>
                    </v-data-table>
                </v-card>
            </v-container>

            <v-dialog v-model="dialog" max-width="600px" persistent>
                <v-card class="rounded-xl pa-4">
                    <v-card-title class="text-h5 font-weight-bold text-dark-blue">
                        {{ isEdit ? 'Üye Düzenle' : 'Yeni Üye Ekle' }}
                    </v-card-title>
                    <v-card-text>
                        <v-form ref="form">
                            <v-text-field v-model="editedItem.memberName" label="Ad Soyad" variant="outlined"
                                class="mb-2"></v-text-field>
                            <v-textarea v-model="editedItem.memberDescription" label="Açıklama" variant="outlined"
                                rows="3" class="mb-2"></v-textarea>
                            <v-file-input v-model="editedItem.file" label="Yeni Fotoğraf (Opsiyonel)" variant="outlined"
                                prepend-icon="mdi-camera" accept="image/*" hint="Değiştirmek istemiyorsanız boş bırakın"
                                persistent-hint></v-file-input>
                        </v-form>
                    </v-card-text>
                    <v-card-actions class="pa-4">
                        <v-spacer></v-spacer>
                        <v-btn variant="text" @click="dialog = false">İptal</v-btn>
                        <v-btn color="#d4af37" variant="flat" class="rounded-pill px-6" :loading="saveLoading"
                            @click="saveMember">
                            Kaydet
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-main>
    </v-app>
</template>

<script>
import AdminNavbar from '@/components/AdminNavbar.vue';
// 1. İki instance'ı da içeri alıyoruz
import instance from '@/service/Api';           // Normal kullanıcılar için (Token istemez)
import adminInstance from '@/service/AdminApi'; // Admin işlemleri için (Token'lı)

export default {
    name: 'adminTeam',
    components: { AdminNavbar },
    data() {
        return {
            loading: false,
            saveLoading: false,
            dialog: false,
            isEdit: false,
            members: [],
            headers: [
                { title: 'FOTOĞRAF', key: 'photoUrl', sortable: false },
                { title: 'AD SOYAD', key: 'name' },
                { title: 'AÇIKLAMA', key: 'description' },
                { title: 'İŞLEMLER', key: 'actions', align: 'end', sortable: false },
            ],
            editedItem: {
                memberId: null,
                memberName: '',
                memberDescription: '',
                photoUrl: '',
                file: null
            }
        };
    },
    mounted() { this.fetchMembers(); },
    methods: {
        // 2. Burayı normal instance ile güncelledik
        async fetchMembers() {
            this.loading = true;
            try {
                // Herkese açık endpoint, normal instance yeterli
                const res = await instance.get('/TeamMembers/GetAll');
                this.members = res.data;
            } catch (error) { 
                console.error("Liste çekilemedi:", error); 
            } finally { 
                this.loading = false; 
            }
        },

        openDialog(item = null) {
            if (item) {
                this.isEdit = true;
                this.editedItem = {
                    memberId: item.id,
                    memberName: item.name,
                    memberDescription: item.description,
                    photoUrl: item.photoUrl,
                    file: null
                };
            } else {
                this.isEdit = false;
                this.editedItem = { memberId: null, memberName: '', memberDescription: '', photoUrl: '', file: null };
            }
            this.dialog = true;
        },

        async saveMember() {
            this.saveLoading = true;
            const formData = new FormData();
            formData.append('MemberId', this.editedItem.memberId);
            formData.append('MemberName', this.editedItem.memberName);
            formData.append('MemberDescription', this.editedItem.memberDescription);
            formData.append('ImageUrl', this.editedItem.photoUrl || '');

            try {
                if (this.isEdit) {
                    if (this.editedItem.file) {
                        const fileToUpload = Array.isArray(this.editedItem.file) 
                                             ? this.editedItem.file[0] 
                                             : this.editedItem.file;
                        formData.append('Image', fileToUpload);
                    }
                    // GÜNCELLEME: adminInstance (Token'lı)
                    await adminInstance.put('/TeamMembers/Update', formData);
                } else {
                    const fileToUpload = Array.isArray(this.editedItem.file) 
                                         ? this.editedItem.file[0] 
                                         : this.editedItem.file;
                    if (fileToUpload) formData.append('ImgFile', fileToUpload);
                    
                    // EKLEME: adminInstance (Token'lı)
                    await adminInstance.post('/TeamMembers/Create', formData);
                }

                this.dialog = false;
                this.fetchMembers(); // Listeyi güncelle
                alert("Başarıyla kaydedildi!");
            } catch (error) {
                console.error("Hata detayı:", error.response?.data);
                alert("Bir sorun oluştu. Detaylar konsolda.");
            } finally {
                this.saveLoading = false;
            }
        },

        async deleteMember(id) {
            if (confirm("Bu üyeyi silmek istediğinize emin misiniz?")) {
                try {
                    // SİLME: adminInstance (Token'lı)
                    await adminInstance.delete(`/TeamMembers/Delete/${id}`);
                    this.fetchMembers();
                } catch (error) { 
                    alert("Silme başarısız."); 
                }
            }
        }
    }
};
</script>