<template>
    <AppNavbar />

    <v-container class="py-16 mt-16" style="max-width: 1000px">

        <div class="text-center mb-10">
            <span class="text-overline gold-text d-block mb-1">{{ $t("team.overline") }}</span>
            <h1 class="team-main-title mb-2">{{ $t("team.title") }}</h1>
            <p class="team-subtitle mx-auto text-grey-darken-1" style="max-width: 600px">
                {{ $t("team.subtitle") }}
            </p>
        </div>

        <div v-if="loading" class="text-center py-10">
            <v-progress-circular indeterminate color="#b8860b"></v-progress-circular>
            <p class="mt-4 text-caption gold-text">{{ $t("team.loading") }}</p>
        </div>

        <v-row v-else density="comfortable" :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
            <v-col v-for="member in teamMembers" :key="member.id" cols="12" sm="6" md="3" class="pa-2">
                <v-card class="member-card rounded-xl overflow-hidden elevation-2 h-100 text-center pb-4">
                    <v-img :src="getImageUrl(member.photoUrl)" height="220" cover class="bg-grey-lighten-3">
                        <template v-slot:placeholder>
                            <v-row class="fill-height ma-0" align="center" justify="center">
                                <v-icon size="large" color="grey-lighten-1">mdi-account</v-icon>
                            </v-row>
                        </template>
                    </v-img>

                    <v-card-text class="pa-3">
                        <h3 class="member-name mb-1">{{ member.name }}</h3>
                        <p class="member-role text-grey-darken-1">
                            {{ member.description }}
                        </p>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>

    </v-container>

    <AppFooter />
</template>

<script>
import AppFooter from '@/components/AppFooter.vue';
import AppNavbar from '@/components/AppNavbar.vue';
import instance from '@/service/Api';
export default {
    name: "TeamView",
    components: { AppNavbar, AppFooter },
    data: () => ({
        teamMembers: [],
        loading: true
    }),
    async mounted() {
        await this.fetchTeam();
    },
    methods: {
        async fetchTeam() {
            try {
                this.loading = true;
                // Tam istediğin endpoint
                const response = await instance.get('/TeamMembers/GetAll');
                this.teamMembers = response.data;
            } catch (error) {
                console.error("Ekip verisi çekilemedi:", error);
            } finally {
                this.loading = false;
            }
        },
        getImageUrl(photoUrl) {
            if (!photoUrl) return '/src/assets/images/placeholder-user.jpg';
            const bucketName = "moik-team-photos";
            return `https://storage.googleapis.com/${bucketName}/${photoUrl}`;
        }
    }
}
</script>

<style scoped>
.gold-text {
    color: #b8860b !important;
    font-weight: 700;
    letter-spacing: 1.5px;
}

.team-main-title {
    font-family: "Times New Roman", serif;
    font-size: clamp(1.8rem, 4vw, 2.5rem);
    color: #001d3d;
    font-weight: 700;
    text-transform: uppercase;
}

.team-subtitle {
    font-size: 0.9rem;
    line-height: 1.5;
}

.member-card {
    background-color: #fff !important;
    transition: all 0.3s ease;
    border: 1px solid rgba(0, 0, 0, 0.03) !important;
}

.member-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1) !important;
}

.member-name {
    font-family: "Times New Roman", serif;
    font-size: 1rem;
    color: #001d3d;
    font-weight: 800;
    line-height: 1.2;
}

.member-role {
    font-size: 0.7rem;
    line-height: 1.3;
    font-weight: 500;
}
</style>