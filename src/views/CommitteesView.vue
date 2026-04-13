<template>
    <AppNavbar></AppNavbar>

    <v-container class="py-10 mt-10 bg-light-cream" fluid>
        <div class="text-center mb-6 px-4">
            <span class="text-overline gold-text" style="font-size: 0.6rem !important;">TR MOIC</span>
            <h1 class="page-main-title mb-3">{{ $t('komiteler.header_title') }}</h1>
            <p class="text-caption opacity-70 mx-auto max-width-p">{{ $t('komiteler.header_desc') }}</p>

            <v-divider class="my-5 mx-auto" max-width="100" color="#d4af37"></v-divider>

            <h2 class="section-sub-title mb-1">{{ $t('komiteler.list_title') }}</h2>
            <p class="text-caption opacity-70 mx-auto max-width-p">{{ $t('komiteler.list_desc') }}</p>
        </div>

        <v-container>
            <v-row justify="center" class="ga-y-4">
                <v-col cols="12" sm="6" md="4" lg="3">
                    <v-card class="committee-card rounded-lg" height="320">
                        <v-img src="/src/assets/images/committee-1.jpg" cover class="fill-height align-center text-center">
                            <div class="card-overlay"></div>
                        </v-img>
                    </v-card>
                </v-col>

                <v-col cols="12" sm="6" md="4" lg="3">
                    <v-card class="committee-card rounded-lg" height="320">
                        <v-img src="/src/assets/images/committee-2.jpg" cover class="fill-height align-center text-center">
                            <div class="card-overlay"></div>
                            
                        </v-img>
                    </v-card>
                </v-col>

                <v-col cols="12" sm="6" md="4" lg="3">
                    <v-card class="committee-card rounded-lg" height="320">
                        <v-img src="/src/assets/images/committee-3.jpg" cover class="fill-height align-center text-center">
                            <div class="card-overlay"></div>
                            
                        </v-img>
                    </v-card>
                </v-col>

                <v-col cols="12" sm="6" md="4" lg="3">
                    <v-card class="committee-card rounded-lg" height="320">
                        <v-img src="/src/assets/images/committee-4.jpg" cover class="fill-height align-center text-center">
                            <div class="card-overlay"></div>
                            
                        </v-img>
                    </v-card>
                </v-col>

                <v-col cols="12" sm="6" md="4" lg="3">
                    <v-card class="committee-card rounded-lg" height="320">
                        <v-img src="/src/assets/images/committee-5.jpg" cover class="fill-height align-center text-center">
                            <div class="card-overlay"></div>
                            
                        </v-img>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-container>
    <AppFooter></AppFooter>
</template>

<script>
import AppNavbar from '@/components/AppNavbar.vue';
import AppFooter from '@/components/AppFooter.vue';
export default {
    name: 'committees',
    components: {
        AppNavbar,
        AppFooter
    }
}
</script>

<style scoped>
.bg-light-cream { background-color: #fcfaf5; }


.page-main-title {
    font-family: 'Times New Roman', serif;
    font-size: clamp(1.7rem, 3vw, 2.2rem); 
    color: #002333;
    letter-spacing: 1.5px;
}

.section-sub-title {
    font-family: 'Times New Roman', serif;
    font-size: 1.40rem; 
    color: #002333;
    font-weight: 700;
}

.max-width-p { max-width: 550px; line-height: 1.3; }


.committee-card {
    position: relative;
    transition: all 0.3s ease;
    cursor: pointer;
    border: 1px solid rgba(0,0,0,0.05);
}

.committee-card:hover {
    transform: translateY(-4px);
}

.card-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    
    z-index: 1;
}

.card-content { position: relative; z-index: 2; color: white; }

.mid-title {
    font-family: 'Times New Roman', serif;
    font-size: 1.05rem; 
    line-height: 1.2;
    font-weight: 700;
}

.bottom-name {
    font-size: 0.7rem;
    font-weight: 700;
    margin-bottom: 2px;
}

.director-text {
    font-size: 0.65rem;
    color: #d4af37;
}

.director-text span { color: white; }


.border-gold { border: 1px solid rgba(212, 175, 55, 0.8) !important; }

.gold-text { color: #d4af37; letter-spacing: 1.2px; font-weight: 700; }
</style>