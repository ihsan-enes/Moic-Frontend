<template>
    <v-app>
        <AdminNavbar />
        <v-main class="bg-grey-lighten-4">
            <v-container class="py-10">
                <div class="d-flex justify-space-between align-center mb-6">
                    <h2 class="section-title">Program Akışı Yönetimi</h2>
                    <v-btn color="#d4af37" class="rounded-pill font-weight-bold px-6" prepend-icon="mdi-calendar-plus"
                        @click="openDayDialog()">
                        Yeni Gün Ekle
                    </v-btn>
                </div>

                <v-expansion-panels v-if="programData.length > 0" variant="default" class="mb-10">
                    <v-expansion-panel v-for="day in programData" :key="day.id" class="rounded-xl mb-4 elevation-2">
                        <v-expansion-panel-title >
                            <v-row no-gutters align="center">
                                <v-col cols="4" class="d-flex align-center">
                                    <v-avatar color="#001529" size="36" class="mr-3 text-white font-weight-bold">
                                        {{ day.dayNumber }}
                                    </v-avatar>
                                    <span class="font-weight-black text-dark-blue">GÜN {{ day.dayNumber }}</span>
                                </v-col>
                                <v-col cols="6" class="text-grey-darken-1 text-truncate italic">
                                    {{ day.dayDescriptionTr }}
                                </v-col>
                                <v-col cols="2" class="text-right pr-4">
                                    <v-btn icon="mdi-pencil" variant="text" size="small" color="blue"
                                        @click.stop="openDayDialog(day)"></v-btn>
                                    <v-btn icon="mdi-delete" variant="text" size="small" color="error"
                                        @click.stop="deleteDay(day.id)"></v-btn>
                                </v-col>
                            </v-row>
                        </v-expansion-panel-title>

                        <v-expansion-panel-text>
                            <div class="pa-2">
                                <div class="d-flex justify-space-between align-center mb-4">
                                    <h4 class="text-overline gold-text">GÜNLÜK AKTİVİTELER</h4>
                                    <v-btn size="small" color="success" variant="flat" class="rounded-lg"
                                        prepend-icon="mdi-plus" @click="openActivityDialog(null, day.dayNumber)">
                                        Aktivite Ekle
                                    </v-btn>
                                </div>

                                <v-table density="comfortable" class="activity-table border rounded-lg">
                                    <thead>
                                        <tr>
                                            <th class="font-weight-bold">SAAT</th>
                                            <th class="font-weight-bold">ETKİNLİK (TR)</th>
                                            <th class="font-weight-bold">AÇIKLAMA (TR)</th>
                                            <th class="text-right font-weight-bold px-6">İŞLEMLER</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="act in day.activities" :key="act.id">
                                            <td class="font-weight-bold text-blue">{{ act.time }}</td>
                                            <td>{{ act.nameTr }}</td>
                                            <td class="text-caption text-grey-darken-1">{{ act.descriptionTr }}</td>
                                            <td class="text-right px-4">
                                                <v-btn icon="mdi-pencil-outline" variant="text" size="x-small"
                                                    color="blue" @click="openActivityDialog(act)"></v-btn>
                                                <v-btn icon="mdi-close-circle-outline" variant="text" size="x-small"
                                                    color="error" @click="deleteActivity(act.id)"></v-btn>
                                            </td>
                                        </tr>
                                    </tbody>
                                </v-table>
                            </div>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>

                <v-alert v-else type="info" variant="tonal" class="rounded-xl" icon="mdi-calendar-question">
                    Henüz program tanımlanmamış.
                </v-alert>
            </v-container>

            <v-dialog v-model="dayDialog" max-width="500">
                <v-card class="rounded-xl pa-4">
                    <v-card-title class="font-weight-bold text-dark-blue">
                        {{ isEditDay ? 'Günü Güncelle' : 'Yeni Gün Tanımla' }}
                    </v-card-title>
                    <v-card-text>
                        <v-text-field v-model="editedDay.dayNumber" label="Gün Sayısı" type="number"
                            variant="outlined"></v-text-field>
                        <v-text-field v-model="editedDay.dayDescriptionTr" label="Açıklama (TR)"
                            variant="outlined"></v-text-field>
                        <v-text-field v-model="editedDay.dayDescriptionEn" label="Açıklama (EN)"
                            variant="outlined"></v-text-field>
                        <v-text-field v-model="editedDay.dayDescriptionAr" label="Açıklama (AR)" variant="outlined"
                            dir="rtl"></v-text-field>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn variant="text" @click="dayDialog = false">İptal</v-btn>
                        <v-btn color="#d4af37" variant="flat" class="px-6 rounded-pill" @click="saveDay">KAYDET</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

            <v-dialog v-model="activityDialog" max-width="750">
                <v-card class="rounded-xl pa-4">
                    <v-card-title class="font-weight-bold text-dark-blue d-flex align-center">
                        <v-icon start color="success">mdi-clock-edit-outline</v-icon>
                        {{ isEditActivity ? 'Aktiviteyi Düzenle' : 'Yeni Aktivite Ekle' }}
                    </v-card-title>

                    <v-card-text>
                        <v-row dense>
                            <v-col cols="12" sm="4">
                                <v-text-field v-model="editedActivity.time" label="Etkinlik Saati" placeholder="09:00"
                                    variant="outlined" prepend-inner-icon="mdi-clock-outline"
                                    density="comfortable"></v-text-field>
                            </v-col>

                            <v-col cols="12"><v-divider class="my-2"></v-divider></v-col>

                            <v-col cols="12">
                                <div class="text-subtitle-2 mb-2 font-weight-black text-blue">TÜRKÇE İÇERİK</div>
                                <v-text-field v-model="editedActivity.nameTr" label="Etkinlik İsmi (TR)"
                                    variant="outlined" density="comfortable"></v-text-field>
                                <v-textarea v-model="editedActivity.descriptionTr" label="Açıklama (TR)"
                                    variant="outlined" rows="2" density="comfortable"></v-textarea>
                            </v-col>

                            <v-col cols="12"><v-divider class="my-2"></v-divider></v-col>

                            <v-col cols="12">
                                <div class="text-subtitle-2 mb-2 font-weight-black text-indigo">ENGLISH CONTENT</div>
                                <v-text-field v-model="editedActivity.nameEn" label="Activity Name (EN)"
                                    variant="outlined" density="comfortable"></v-text-field>
                                <v-textarea v-model="editedActivity.descriptionEn" label="Description (EN)"
                                    variant="outlined" rows="2" density="comfortable"></v-textarea>
                            </v-col>

                            <v-col cols="12"><v-divider class="my-2"></v-divider></v-col>

                            <v-col cols="12">
                                <div class="text-subtitle-2 mb-2 font-weight-black text-amber-darken-3">المحتوى العربي
                                    (ARABIC)</div>
                                <v-text-field v-model="editedActivity.nameAr" label="اسم النشاط (AR)" variant="outlined"
                                    density="comfortable" dir="rtl"></v-text-field>
                                <v-textarea v-model="editedActivity.descriptionAr" label="الوصف (AR)" variant="outlined"
                                    rows="2" density="comfortable" dir="rtl"></v-textarea>
                            </v-col>
                        </v-row>
                    </v-card-text>

                    <v-card-actions class="pa-4">
                        <v-spacer></v-spacer>
                        <v-btn variant="text" @click="activityDialog = false">İptal</v-btn>
                        <v-btn color="success" variant="flat" class="px-8 rounded-pill font-weight-bold"
                            @click="saveActivity">KAYDET</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-main>
    </v-app>
</template>

<script>
import AdminNavbar from '@/components/AdminNavbar.vue';
import instance from '@/service/Api';           // Herkese açık GET için
import adminInstance from '@/service/AdminApi'; // Yetkili CRUD için

export default {
    name: 'adminProgramFlow',
    components: { AdminNavbar },
    data() {
        return {
            programData: [],
            dayDialog: false,
            activityDialog: false,
            isEditDay: false,
            isEditActivity: false,
            editedDay: { dayId: null, dayNumber: null, dayDescriptionTr: '', dayDescriptionEn: '', dayDescriptionAr: '' },
            editedActivity: { id: null, time: '', nameTr: '', nameEn: '', nameAr: '', descriptionTr: '', descriptionEn: '', descriptionAr: '', dayNumber: null }
        }
    },
    mounted() { this.fetchProgram(); },
    methods: {
        async fetchProgram() {
            try {
                const res = await instance.get('/ProgramFlow');
                this.programData = res.data;
            } catch (e) { console.error(e); }
        },

        // --- GÜN İŞLEMLERİ ---
        openDayDialog(day = null) {
            if (day) {
                this.isEditDay = true;
                this.editedDay = { dayId: day.id, dayNumber: day.dayNumber, dayDescriptionTr: day.dayDescriptionTr, dayDescriptionEn: day.dayDescriptionEn, dayDescriptionAr: day.dayDescriptionAr };
            } else {
                this.isEditDay = false;
                this.editedDay = { dayId: null, dayNumber: null, dayDescriptionTr: '', dayDescriptionEn: '', dayDescriptionAr: '' };
            }
            this.dayDialog = true;
        },
        async saveDay() {
            try {
                if (this.isEditDay) {
                    await adminInstance.put('/ProgramFlow/day', this.editedDay);
                } else {
                    await adminInstance.post('/ProgramFlow/day', this.editedDay);
                }
                this.dayDialog = false;
                this.fetchProgram();
            } catch (e) { alert("Gün kaydedilemedi."); }
        },
        async deleteDay(id) {
            if (confirm("Günü silerseniz içindeki tüm aktiviteler silinir! Emin misiniz?")) {
                try {
                    await adminInstance.delete(`/ProgramFlow/day/${id}`);
                    this.fetchProgram();
                } catch (e) { alert("Hata."); }
            }
        },

        // --- AKTİVİTE İŞLEMLERİ ---
        openActivityDialog(act = null, dayNumber = null) {
            if (act) {
                this.isEditActivity = true;
                this.editedActivity = { ...act };
            } else {
                this.isEditActivity = false;
                this.editedActivity = { id: null, time: '', nameTr: '', nameEn: '', nameAr: '', descriptionTr: '', descriptionEn: '', descriptionAr: '', dayNumber: dayNumber };
            }
            this.activityDialog = true;
        },
        async saveActivity() {
            try {
                if (this.isEditActivity) {
                    await adminInstance.put('/ProgramFlow/activity', this.editedActivity);
                } else {
                    await adminInstance.post('/ProgramFlow/activity', this.editedActivity);
                }
                this.activityDialog = false;
                this.fetchProgram();
            } catch (e) { alert("Aktivite kaydedilemedi."); }
        },
        async deleteActivity(id) {
            if (confirm("Bu aktiviteyi silmek istediğinize emin misiniz?")) {
                try {
                    await adminInstance.delete(`/ProgramFlow/activity/${id}`);
                    this.fetchProgram();
                } catch (e) { alert("Hata."); }
            }
        }
    }
}
</script>

<style scoped>
.section-title {
    font-family: 'Times New Roman', serif;
    font-size: 1.8rem;
    font-weight: 700;
    color: #001529;
}

.text-dark-blue {
    color: #001529;
}

.gold-text {
    color: #d4af37;
    font-weight: 800;
}

.activity-table th {
    background-color: #f8f9fa !important;
    font-size: 0.75rem !important;
    color: #555;
}

.italic {
    font-style: italic;
    font-size: 0.9rem;
}

/* Panellerin üzerindeki ve altındaki tüm hayalet çizgileri kaldırır */
.v-expansion-panel::before,
.v-expansion-panel::after {
    display: none !important;
}
</style>