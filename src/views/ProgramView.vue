<template>
    <AppNavbar />
    <v-container class="py-15 mt-15 bg-light-cream mt-8">
        <v-card class="header-card text-center pa-8 mb-8 rounded-xl elevation-4 mx-auto" max-width="800">
            <span class="text-overline gold-text" style="font-size: 0.65rem !important">
                {{ $t("program.header.overline") }}
            </span>
            <h1 class="main-program-title text-white">
                {{ $t("program.header.title") }}
            </h1>
            <p class="text-caption text-white opacity-70 mx-auto" style="max-width: 450px">
                {{ $t("program.header.desc") }}
            </p>
        </v-card>

        <div v-if="loading" class="text-center py-10">
            <v-progress-circular indeterminate color="#d4af37"></v-progress-circular>
        </div>

        <div v-else v-for="day in programData" :key="day.id" class="mb-6">
            <v-card class="timeline-card rounded-xl mx-auto pa-6" max-width="800">
                <span class="text-overline gold-text mb-1 d-block" style="font-size: 1.2rem !important">
                    {{ day.dayNumber }}.{{ $t("program.gun")}}
                </span>

                <h2 class="day-title mb-4">
                    {{ getTranslated(day, 'dayDescription') }}
                </h2>

                <div v-for="(item, index) in day.activities" :key="item.id">
                    <v-row no-gutters class="py-2.5 align-start pb-5" align="center">
                        <v-col cols="12" sm="2">
                            <span class="time-text">{{ item.time }}</span>
                        </v-col>
                        <v-col cols="12" sm="10">
                            <h4 class="event-name mb-0">
                                {{ getTranslated(item, 'name') }}
                            </h4>
                            <p class="event-info opacity-70 mb-0">
                                {{ getTranslated(item, 'description') }}
                            </p>
                        </v-col>
                    </v-row>
                    <v-divider v-if="index !== day.activities.length - 1" class="opacity-10"></v-divider>
                </div>
            </v-card>
        </div>
    </v-container>
    <AppFooter></AppFooter>
</template>

<script>
import AppFooter from "@/components/AppFooter.vue";
import AppNavbar from "@/components/AppNavbar.vue";
import instance from "@/service/Api"; // Senin kurduğun normal instance

export default {
    components: {
        AppNavbar,
        AppFooter
    },
    name: "Program",
    data() {
        return {
            programData: [],
            loading: true
        };
    },
    mounted() {
        this.fetchProgram();
    },
    methods: {
        async fetchProgram() {
            this.loading = true;
            try {
                const res = await instance.get('/ProgramFlow');
                // Günleri numarasına göre sırala (opsiyonel)
                this.programData = res.data.sort((a, b) => a.dayNumber - b.dayNumber);
            } catch (error) {
                console.error("Program çekilemedi:", error);
            } finally {
                this.loading = false;
            }
        },
        // Dile göre doğru alanı getiren metod
        getTranslated(obj, field) {
            if (!obj) return '';
            const locale = this.$i18n.locale; // tr, en, ar
            const langSuffix = locale.charAt(0).toUpperCase() + locale.slice(1); // Tr, En, Ar
            const key = `${field}${langSuffix}`;
            return obj[key] || obj[`${field}Tr`] || '';
        }
    }
};
</script>

<style scoped>
/* TÜM STİLLER ESKİSİ GİBİ KALDI */
.bg-light-cream {
    background-color: #fcfaf5;
}

.header-card {
    background: linear-gradient(135deg, #000814 0%, #024c6f 100%) !important;
}

.main-program-title {
    font-family: "Times New Roman", serif;
    font-size: clamp(1.6rem, 3.5vw, 2.2rem);
    letter-spacing: 1px;
    font-weight: 700;
    margin-bottom: 8px;
}

.timeline-card {
    background-color: white !important;
    border-left: 4px solid #d4af37;
}

.day-title {
    font-family: "Times New Roman", serif;
    font-size: 1.25rem;
    color: #002333;
}

.time-text {
    color: #b8860b;
    font-weight: 700;
    font-size: 0.9rem;
}

.event-name {
    font-size: 0.95rem;
    font-weight: 700;
    color: #333;
}

.event-info {
    font-size: 0.8rem;
    line-height: 1.4;
}

.gold-text {
    color: #d4af37;
    letter-spacing: 1.2px;
}

.opacity-70 {
    opacity: 0.7;
}

.opacity-10 {
    opacity: 0.1;
}
</style>