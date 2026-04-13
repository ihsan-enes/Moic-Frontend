<template>
    <AppNavbar />

    <v-container class="py-15 mt-15 bg-light-cream">
        <v-card class="header-card text-center pa-10 mb-8 rounded-xl elevation-4 mx-auto" max-width="900">
            <span class="text-overline gold-text" style="font-size: 0.7rem !important;">{{ $t('basvuru.header.overline')
                }}</span>
            <h1 class="main-title text-white mb-3">{{ $t('basvuru.header.title') }}</h1>
            <p class="text-body-2 text-white opacity-70 mb-6 mx-auto" style="max-width: 600px">
                {{ $t('basvuru.header.desc') }}
            </p>
            <div class="d-flex justify-center flex-wrap gap-2">
                <v-chip v-for="badge in $tm('basvuru.header.badges')" :key="badge" color="#d4af37" variant="tonal"
                    size="small" class="font-weight-bold text-white">
                    {{ badge }}
                </v-chip>
            </div>
        </v-card>

        <v-row justify="center">
            <v-col cols="12" md="4" lg="3">
                <v-card class="sidebar-dark-card pa-5 rounded-xl elevation-3 mb-4">
                    <span class="text-overline gold-text" style="font-size: 0.6rem !important;">
                        {{ $t('basvuru.why.label') }}
                    </span>
                    <h2 class="sidebar-title text-white mt-1 mb-2">{{ $t('basvuru.why.title') }}</h2>
                    <p class="text-caption text-white opacity-70 font-weight-light line-height-tight">
                        {{ $t('basvuru.why.desc') }}
                    </p>
                </v-card>

                <v-card v-for="block in infoBlocks" :key="block.label"
                    class="white-info-card pa-4 rounded-xl mb-3 elevation-1">
                    <span class="text-overline gold-text-muted" style="font-size: 0.55rem !important;">{{ block.label
                        }}</span>
                    <h4 class="info-val mt-0">{{ block.val }}</h4>
                    <p class="text-caption text-grey-darken-1 mb-0 line-height-tight"
                        style="font-size: 0.7rem !important;">{{ block.sub }}</p>
                </v-card>

                <v-card class="white-info-card pa-5 rounded-xl mb-4 elevation-1">
                    <span class="text-overline gold-text-muted" style="font-size: 0.55rem !important;">{{
                        $t('basvuru.steps.label') }}</span>
                    <h3 class="info-title-small mt-1 mb-2">{{ $t('basvuru.steps.title') }}</h3>
                    <ul class="steps-list">
                        <li v-for="(step, i) in $tm('basvuru.steps.items')" :key="i"
                            class="text-caption text-grey-darken-2" style="font-size: 0.7rem !important;">
                            <v-icon size="10" color="#d4af37" class="mr-2">mdi-circle-medium</v-icon>
                            {{ step }}
                        </li>
                    </ul>
                </v-card>
            </v-col>

            <v-col cols="12" md="7" lg="7">
                <v-card class="form-card pa-8 rounded-xl elevation-3">
                    <span class="text-overline gold-text-muted" style="font-size: 0.7rem !important;">{{
                        $t('basvuru.form.overline') }}</span>
                    <h1 class="form-main-title mt-1 mb-2">{{ $t('basvuru.form.title') }}</h1>
                    <p class="text-caption text-grey-darken-1 mb-6">{{ $t('basvuru.form.desc') }}</p>

                    <v-form>
                        <v-row density="comfortable"> <v-col cols="12" sm="6">
                                <label class="input-label">{{ $t('basvuru.form.name') }}</label>
                                <v-text-field v-model="form.name" density="comfortable" variant="filled" rounded="lg"
                                    flat bg-color="#f8f9fa" :placeholder="$t('basvuru.form.name')"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <label class="input-label">{{ $t('basvuru.form.email') }}</label>
                                <v-text-field v-model="form.email" density="comfortable" variant="filled" rounded="lg"
                                    flat bg-color="#f8f9fa" placeholder="ornek@mail.com"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <label class="input-label">{{ $t('basvuru.form.school') }}</label>
                                <v-text-field v-model="form.schoolName" density="comfortable" variant="filled"
                                    rounded="lg" flat bg-color="#f8f9fa"
                                    :placeholder="$t('basvuru.form.school')"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <label class="input-label">{{ $t('basvuru.form.grade') }}</label>
                                <v-select v-model="form.grade" :items="gradesList" item-title="title" item-value="value"
                                    density="comfortable" variant="filled" rounded="lg" flat bg-color="#f8f9fa"
                                    placeholder="Sınıf Seçin"></v-select>
                            </v-col>

                            <v-col cols="12">
                                <label class="input-label">{{ $t('basvuru.form.committee') }}</label>
                                <v-select v-model="form.committee" :items="committeesList" item-title="title"
                                    item-value="value" density="comfortable" variant="filled" rounded="lg" flat
                                    bg-color="#f8f9fa" placeholder="Komite Seçin"></v-select>
                            </v-col>
                            <v-col cols="12">
                                <label class="input-label">{{ $t('basvuru.form.why_join') }}</label>
                                <v-textarea v-model="form.whyYouAreJoin" density="comfortable" variant="filled"
                                    rounded="lg" flat bg-color="#f8f9fa" rows="3"
                                    :placeholder="$t('basvuru.form.why_placeholder')"></v-textarea>
                            </v-col>
                            <v-col cols="12">
                                <label class="input-label">{{ $t('basvuru.form.exp') }}</label>
                                <v-textarea v-model="form.experience" density="comfortable" variant="filled"
                                    rounded="lg" flat bg-color="#f8f9fa" rows="2"
                                    :placeholder="$t('basvuru.form.exp_placeholder')"></v-textarea>
                            </v-col>
                        </v-row>
                        <v-btn @click="applicationSubmit()" block class="mt-4 py-4 font-weight-bold gold-btn"
                            rounded="pill">
                            {{ $t('basvuru.form.submit') }}
                        </v-btn>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
    <AppFooter></AppFooter>
</template>

<script>
import AppNavbar from '@/components/AppNavbar.vue';
import AppFooter from '@/components/AppFooter.vue';
import instance from '@/service/Api';
export default {
    computed: {
        infoBlocks() {
            return [
                { label: this.$t('basvuru.blocks.type_label'), val: this.$t('basvuru.blocks.type_val'), sub: this.$t('basvuru.blocks.type_sub') },
                { label: this.$t('basvuru.blocks.fee_label'), val: this.$t('basvuru.blocks.fee_val'), sub: this.$t('basvuru.blocks.fee_sub') },
                { label: this.$t('basvuru.blocks.elig_label'), val: this.$t('basvuru.blocks.elig_val'), sub: this.$t('basvuru.blocks.elig_sub') }
            ]
        }
    },
    components: {
        AppNavbar,
        AppFooter
    },
    data() {
        return {
            form: {
                name: null,
                email: null,
                schoolName: null,
                grade: null,
                committee: null,
                whyYouAreJoin: null,
                experience: null
            },
            gradesList: [
                { title: '9. Sınıf', value: 9 },
                { title: '10. Sınıf', value: 10 },
                { title: '11. Sınıf', value: 11 },
                { title: '12. Sınıf', value: 12 }
            ],
            committeesList: [
                { title: 'Hukuk Komitesi', value: 1 },
                { title: 'Ekonomi Komitesi', value: 2 },
                { title: 'Siyasi İşler', value: 3 }
            ]
        }
    },
    methods: {
        async applicationSubmit() {
            if (!this.form.grade || !this.form.committee) {
                alert("Lütfen sınıf ve komite seçiniz.");
                return;
            }
            try {
                const res = await instance.post("/student/CreateStudent", this.form)
            } catch (error) {
                console.log("Başvuru gönderilemedi");
            }
        }
    },
}
</script>

<style scoped>
.bg-light-cream {
    background-color: #fcfaf5;
}

.header-card {
    background: linear-gradient(135deg, #000814 0%, #024c6f 100%) !important;
}

.sidebar-dark-card {
    background: linear-gradient(135deg, #000814 0%, #024c6f 100%) !important;
}

.white-info-card {
    background-color: white !important;
}

.form-card {
    background-color: white !important;
    border-top: 4px solid #d4af37;
}

.main-title,
.sidebar-title,
.form-main-title,
.info-title-small {
    font-family: 'Times New Roman', serif;
}

.main-title {
    font-size: clamp(1.5rem, 4vw, 2.2rem);
    font-weight: 700;
}

.sidebar-title {
    font-size: 1.1rem;
    line-height: 1.2;
}

.form-main-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: #002333;
}

.info-title-small {
    font-size: 0.95rem;
    font-weight: 700;
    color: #002333;
}

.info-val {
    font-weight: 700;
    color: #333;
    font-size: 0.85rem;
}

.gold-text {
    color: #d4af37;
    letter-spacing: 1px;
    display: block;
}

.gold-text-muted {
    color: #b8860b;
    font-weight: 700;
    display: block;
}

.steps-list {
    list-style: none;
    padding: 0;
}

.steps-list li {
    margin-bottom: 4px;
    display: flex;
    align-items: center;
}

.input-label {
    font-size: 0.75rem;
    font-weight: 700;
    color: #333;
    display: block;
    margin-bottom: 4px;
}

.gold-btn {
    background-color: #d4af37 !important;
    color: #000 !important;
    transition: 0.3s;
    height: 48px !important;
}

.gold-btn:hover {
    background-color: #b8860b !important;
    transform: translateY(-1px);
}

.line-height-tight {
    line-height: 1.3 !important;
}

.gap-2 {
    gap: 0.5rem;
}

.opacity-70 {
    opacity: 0.7;
}


:deep(.v-field__input) {
    min-height: 40px !important;
    padding-top: 8px !important;
    padding-bottom: 8px !important;
    font-size: 0.85rem !important;
}
</style>