<template>
  <div>
    <AppNavbar></AppNavbar>

    <div class="hero-section">
      <div class="hero-image-wrap">
        <img src="/images/committee-5.jpeg" alt="2. İngilizce Komitesi" class="hero-img" />
        <div class="hero-overlay"></div>
      </div>
      <div class="hero-content">
        <span class="hero-label">{{ $t('committee_en2.label') }}</span>
        <h1 class="hero-title">{{ $t('committee_en2.title') }}</h1>
      </div>
      <div class="hero-scroll-hint">
        <span class="scroll-line"></span>
      </div>
    </div>

    <div class="page-body">

      <section class="about-section">
        <div class="about-inner">
          <div class="section-eyebrow">
            <span class="eyebrow-line"></span>
            <span class="eyebrow-text">{{ $t('committee_en2.about_label') }}</span>
          </div>
          <p class="about-text">{{ $t('committee_en2.about_p1') }}</p>
          <p class="about-text">{{ $t('committee_en2.about_p2') }}</p>
          <p class="about-text">{{ $t('committee_en2.about_p3') }}</p>
        </div>
      </section>

      <div class="gold-divider"></div>

      <section class="guide-section">
        <div class="guide-inner">
          <div class="section-eyebrow">
            <span class="eyebrow-line"></span>
            <span class="eyebrow-text">{{ $t('committee_en2.guide_label') }}</span>
          </div>
          <h2 class="guide-title">{{ $t('committee_en2.guide_title') }}</h2>
          <p class="guide-desc">{{ $t('committee_en2.guide_desc') }}</p>
          <a href="/guides/committee-en2-study-guide.pdf" target="_blank" download class="download-btn">
            <span class="btn-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
            </span>
            <span>{{ $t('committee_en2.guide_btn') }}</span>
          </a>
        </div>
      </section>

    </div>

    <AppFooter></AppFooter>
  </div>
</template>

<script>
import AppNavbar from '@/components/AppNavbar.vue';
import AppFooter from '@/components/AppFooter.vue';

export default {
  name: 'Committee1English',
  components: {
    AppNavbar,
    AppFooter
  }
}
</script>

<style scoped>

/* ── HERO ───────────────────────────────────────────── */
.hero-section {
  position: relative;
  height: 520px;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
}

.hero-image-wrap {
  position: absolute;
  inset: 0;
}

.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transform: scale(1.04);
  transition: transform 8s ease;
}

.hero-section:hover .hero-img {
  transform: scale(1.0);
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 23, 40, 0.25) 0%,
    rgba(0, 23, 40, 0.55) 50%,
    rgba(0, 23, 40, 0.88) 100%
  );
}

.hero-content {
  position: relative;
  z-index: 2;
  padding: 0 5vw 70px;
  max-width: 860px;
}

.hero-label {
  display: inline-block;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #d4af37;
  margin-bottom: 14px;
  border: 1px solid rgba(212, 175, 55, 0.4);
  padding: 4px 12px;
  border-radius: 2px;
}

.hero-title {
  font-family: 'Times New Roman', serif;
  font-size: clamp(1.4rem, 3.5vw, 2.2rem);
  color: #ffffff;
  line-height: 1.3;
  letter-spacing: 0.5px;
  margin: 0;
  text-shadow: 0 2px 20px rgba(0,0,0,0.4);
}

.hero-scroll-hint {
  position: absolute;
  bottom: 28px;
  right: 5vw;
  z-index: 2;
  display: flex;
  align-items: center;
}

.scroll-line {
  display: block;
  width: 1px;
  height: 48px;
  background: linear-gradient(to bottom, transparent, #d4af37);
  animation: scrollPulse 2s ease infinite;
}

@keyframes scrollPulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}

/* ── PAGE BODY ──────────────────────────────────────── */
.page-body {
  background-color: #fcfaf5;
}

/* ── EYEBROW ────────────────────────────────────────── */
.section-eyebrow {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 28px;
}

.eyebrow-line {
  display: block;
  width: 36px;
  height: 2px;
  background-color: #d4af37;
  flex-shrink: 0;
}

.eyebrow-text {
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #d4af37;
}

/* ── ABOUT SECTION ──────────────────────────────────── */
.about-section {
  padding: 72px 5vw 64px;
}

.about-inner {
  max-width: 780px;
  margin: 0 auto;
}

.about-text {
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 1rem;
  line-height: 1.9;
  color: #1a2e3b;
  margin-bottom: 20px;
  text-align: justify;
}

/* ── GOLD DIVIDER ───────────────────────────────────── */
.gold-divider {
  width: 60px;
  height: 2px;
  background: linear-gradient(to right, transparent, #d4af37, transparent);
  margin: 0 auto;
}

/* ── GUIDE SECTION ──────────────────────────────────── */
.guide-section {
  padding: 64px 5vw 80px;
  background-color: #fcfaf5;
}

.guide-inner {
  max-width: 780px;
  margin: 0 auto;
}

.guide-title {
  font-family: 'Times New Roman', serif;
  font-size: clamp(1.2rem, 2.5vw, 1.6rem);
  color: #002333;
  font-weight: 700;
  margin-bottom: 16px;
  line-height: 1.4;
}

.guide-desc {
  font-size: 0.92rem;
  color: #4a5568;
  line-height: 1.7;
  margin-bottom: 36px;
  max-width: 560px;
}

/* ── DOWNLOAD BUTTON ────────────────────────────────── */
.download-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 32px;
  background-color: #002333;
  color: #d4af37;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
  border: 1px solid #002333;
  transition: background-color 0.25s, color 0.25s, border-color 0.25s;
  cursor: pointer;
}

.download-btn:hover {
  background-color: #d4af37;
  color: #002333;
  border-color: #d4af37;
}

.btn-icon {
  display: flex;
  align-items: center;
}

/* ── RESPONSIVE ─────────────────────────────────────── */
@media (max-width: 600px) {
  .hero-section {
    height: 400px;
  }
  .hero-content {
    padding: 0 20px 60px;
  }
  .about-section,
  .guide-section {
    padding-left: 20px;
    padding-right: 20px;
  }
}
</style>