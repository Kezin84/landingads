<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'

const isLoaded = ref(false)
const activeCard = ref(0)
const gameCards = [
  { src: '/images/game1.png', alt: 'Tài Xỉu Live' },
  { src: '/images/game2.png', alt: 'Xóc Đĩa Live' },
  { src: '/images/game3.png', alt: 'AmaZone' },
  { src: '/images/game4.png', alt: 'Tài Xỉu MD5' },
  { src: '/images/game5.png', alt: 'Sexy Gaming' },
]

const links = {
  playNow: 'https://web.kingwin.pro/',
  ios: 'https://apps.apple.com/vn/app/tangerin-bomb/id6751195375',
  android: 'https://doawload.kingwin.pro/KINGWIN.apk',
}

const suits = ['\u2660', '\u2665', '\u2666', '\u2663']

const carouselOffset = computed(() => {
  // Each card ~140px + 16px gap, center the active card
  return -(activeCard.value * 156)
})

onMounted(() => {
  isLoaded.value = true
  setInterval(() => {
    activeCard.value = (activeCard.value + 1) % gameCards.length
  }, 1800)
})

function selectCard(idx: number) {
  activeCard.value = idx
}
</script>

<template>
  <div class="landing" :class="{ loaded: isLoaded }">

    <!-- Floating card suits -->
    <div class="suits-bg">
      <div
        v-for="i in 80"
        :key="i"
        class="suit"
        :style="{
          left: (Math.random() * 100) + '%',
          animationDelay: (Math.random() * 10) + 's',
          animationDuration: (8 + Math.random() * 10) + 's',
          fontSize: (20 + Math.random() * 35) + 'px',
        }"
      >{{ suits[i % 4] }}</div>
    </div>

    <!-- Sparkle particles -->
    <div class="sparkles">
      <div
        v-for="i in 30"
        :key="'s'+i"
        class="sparkle"
        :style="{
          left: (Math.random() * 100) + '%',
          top: (Math.random() * 100) + '%',
          animationDelay: (Math.random() * 5) + 's',
          animationDuration: (1.5 + Math.random() * 3) + 's',
          width: (3 + Math.random() * 5) + 'px',
          height: (3 + Math.random() * 5) + 'px',
        }"
      ></div>
    </div>

    <!-- Vegas BG -->
    <div class="vegas-bg">
      <img src="/images/lasvegas-bg.png" alt="" />
      <div class="vegas-overlay"></div>
    </div>

    <!-- Main Content -->
    <div class="main-content">

      <!-- Logo with radar pulse -->
      <div class="logo-area">
        <div class="radar radar-1"></div>
        <div class="radar radar-2"></div>
        <div class="radar radar-3"></div>
        <img src="/images/logo.png" alt="KINGWIN" class="main-logo" />
      </div>

      <!-- Title -->
      <h1 class="title">TINH HOA ĐỈNH CAO</h1>

      <!-- Game Cards Carousel -->
      <div class="carousel-area">
        <div class="carousel-viewport">
          <div
            class="carousel-track"
            :style="{ transform: `translateX(calc(50% - 70px + ${carouselOffset}px))` }"
          >
            <div
              v-for="(card, idx) in gameCards"
              :key="idx"
              class="game-card"
              :class="{ active: activeCard === idx }"
              @click="selectCard(idx)"
            >
              <img :src="card.src" :alt="card.alt" />
              <div class="card-glow"></div>
            </div>
          </div>
        </div>
        <div class="carousel-dots">
          <button
            v-for="(_, idx) in gameCards"
            :key="idx"
            class="c-dot"
            :class="{ active: activeCard === idx }"
            @click="selectCard(idx)"
          ></button>
        </div>
      </div>

      <!-- CTA Buttons -->
      <div class="actions">
        <!-- NHẬN CODE 3D Push Button -->
        <a :href="links.playNow" target="_blank" class="btn-3d-gold" id="btn-play">
          <span class="btn-3d-shine"></span>
          NHẬN CODE
        </a>

        <!-- Download Row -->
        <div class="download-row">
          <a :href="links.android" target="_blank" class="cta-pill cta-sub" id="btn-android">
            <span class="pill-shine"></span>
            <span class="pill-border"></span>
            <div class="pill-inner">
              <svg class="pill-icon" width="24" height="24" viewBox="0 0 24 24" fill="#3DDC84">
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" fill="none"/>
                <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24C14.86 8.32 13.47 8 12 8s-2.86.32-4.47.91L5.65 5.67c-.19-.29-.54-.37-.83-.22-.31.16-.42.54-.26.85L6.4 9.48C3.3 11.25 1.28 14.44 1 18h22c-.28-3.56-2.3-6.75-5.4-8.52zM7 15.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm10 0a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z"/>
              </svg>
              <div class="pill-text">
                <span class="pill-title">TẢI ANDROID</span>
              </div>
            </div>
          </a>
          <a :href="links.ios" target="_blank" class="cta-pill cta-sub" id="btn-ios">
            <span class="pill-shine"></span>
            <span class="pill-border"></span>
            <div class="pill-inner">
              <svg class="pill-icon" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              <div class="pill-text">
                <span class="pill-title">TẢI IOS</span>
              </div>
            </div>
          </a>
        </div>
      </div>

    </div>

    <!-- Footer -->
    <div class="mini-footer">
      <p>&copy; 2026 KINGWIN</p>
    </div>
  </div>
</template>

<style scoped>
/* ===== LAYOUT ===== */
.landing {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  background: #1a0530;
}

/* ===== FLOATING SUITS ===== */
.suits-bg {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.suit {
  position: absolute;
  bottom: -40px;
  color: rgba(224, 64, 251, 0.15);
  animation: card-float linear infinite;
  user-select: none;
  filter: blur(0.5px);
}

/* ===== SPARKLE PARTICLES ===== */
.sparkles {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 1;
}

.sparkle {
  position: absolute;
  background: radial-gradient(circle, rgba(224, 64, 251, 0.9), rgba(255, 255, 255, 0.6), transparent);
  border-radius: 50%;
  animation: sparkle-move ease-out infinite;
}

/* ===== LAS VEGAS BG (brighter) ===== */
.vegas-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.vegas-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 70%;
  opacity: 0.45;
  animation: color-shift 8s ease-in-out infinite;
}

.vegas-overlay {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 50% 20%, rgba(224, 64, 251, 0.15) 0%, transparent 55%),
    radial-gradient(ellipse at 30% 70%, rgba(124, 77, 255, 0.1) 0%, transparent 50%),
    radial-gradient(ellipse at 70% 60%, rgba(255, 64, 129, 0.08) 0%, transparent 50%),
    linear-gradient(180deg,
      rgba(26, 5, 48, 0.35) 0%,
      rgba(26, 5, 48, 0.15) 25%,
      rgba(26, 5, 48, 0.2) 50%,
      rgba(26, 5, 48, 0.85) 100%
    );
}

/* ===== MAIN CONTENT ===== */
.main-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 44px 24px 24px;
  width: 100%;
  max-width: 700px;
  flex: 1;
}

/* ===== LOGO ===== */
.logo-area {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
  animation: bounce-in 1s ease-out;
  width: 240px;
  height: 240px;
}

/* Radar pulse rings */
.radar {
  position: absolute;
  border-radius: 50%;
  border: 2px solid rgba(255, 215, 0, 0.7);
  animation: radar-expand 2.4s ease-out infinite;
}

.radar-1 {
  width: 150px;
  height: 150px;
  animation-delay: 0s;
}

.radar-2 {
  width: 150px;
  height: 150px;
  animation-delay: 0.8s;
}

.radar-3 {
  width: 150px;
  height: 150px;
  animation-delay: 1.6s;
}

.main-logo {
  width: 150px;
  height: 150px;
  border-radius: 30px;
  animation: float 4s ease-in-out infinite;
  filter:
    drop-shadow(0 0 40px rgba(224, 64, 251, 0.5))
    drop-shadow(0 0 80px rgba(124, 77, 255, 0.25))
    drop-shadow(0 15px 35px rgba(0,0,0,0.5));
  position: relative;
  z-index: 2;
}

/* ===== TITLE ===== */
.title {
  font-family: 'Bevan', 'Playfair Display', serif;
  font-size: clamp(2.5rem, 6vw, 4rem);
  white-space: nowrap;
  font-weight: 900;
  letter-spacing: 2px;
  margin-bottom: 6px;
  text-align: center;
  animation: slideUp 0.6s ease-out 0.3s both, shimmer 3s linear infinite;
  background: linear-gradient(135deg, #f9a826 0%, #ffd700 25%, #ffffff 50%, #ffd700 75%, #f9a826 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  filter: drop-shadow(0 4px 6px rgba(0,0,0,0.6)) drop-shadow(0 0 15px rgba(255, 215, 0, 0.4));
}

/* ===== GAME CARDS CAROUSEL ===== */
.carousel-area {
  width: 100%;
  margin-bottom: 28px;
  animation: scaleIn 0.8s ease-out 0.5s both;
}

.carousel-viewport {
  width: 100%;
  overflow: hidden;
  padding: 16px 0;
  mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
  -webkit-mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
}

.carousel-track {
  display: flex;
  gap: 16px;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
}

.game-card {
  position: relative;
  flex-shrink: 0;
  width: 140px;
  border-radius: 16px;
  overflow: visible;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transform: scale(0.85);
  opacity: 0.5;
  filter: brightness(0.6) saturate(0.7);
  padding: 3px;
}

/* Animated neon border on every card */
.game-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 16px;
  padding: 2.5px;
  background: conic-gradient(
    from var(--border-angle, 0deg),
    #e040fb, #7c4dff, #00bcd4, #e040fb, #7c4dff, #e040fb
  );
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  animation: rotate-border 2.5s linear infinite;
  opacity: 0.5;
  transition: opacity 0.4s;
}

.game-card.active {
  transform: scale(1);
  opacity: 1;
  filter: brightness(1) saturate(1);
  z-index: 3;
}

.game-card.active::before {
  opacity: 1;
  filter: drop-shadow(0 0 8px rgba(224, 64, 251, 0.5));
}

.game-card.active .card-glow {
  opacity: 1;
}

.game-card:hover {
  transform: scale(0.92);
  opacity: 0.75;
  filter: brightness(0.8) saturate(0.9);
}

.game-card.active:hover {
  transform: scale(1.05);
  opacity: 1;
  filter: brightness(1.05) saturate(1.1);
}

.game-card img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 13px;
}

.card-glow {
  position: absolute;
  inset: -4px;
  border-radius: 19px;
  background: radial-gradient(ellipse, rgba(224, 64, 251, 0.25), transparent 70%);
  z-index: -1;
  opacity: 0;
  transition: opacity 0.4s;
}

.carousel-dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 12px;
}

.c-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  border: 1.5px solid rgba(224, 64, 251, 0.2);
  cursor: pointer;
  transition: all 0.35s;
  padding: 0;
}

.c-dot.active {
  background: #e040fb;
  border-color: #e040fb;
  box-shadow: 0 0 10px rgba(224, 64, 251, 0.6);
  transform: scale(1.4);
  width: 20px;
  border-radius: 4px;
}

.c-dot:hover {
  background: rgba(224, 64, 251, 0.4);
}

/* ===== CTA BUTTONS ===== */
.actions {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;
  animation: slideUp 0.7s ease-out 0.7s both;
}

/* --- Pill Button Base --- */
.cta-pill {
  position: relative;
  display: block;
  border-radius: 60px;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 3px;
}

/* Gradient neon border */
.pill-border {
  position: absolute;
  inset: 0;
  border-radius: 60px;
  background: linear-gradient(135deg, #e040fb, #7c4dff, #00bcd4, #e040fb);
  background-size: 300% 300%;
  animation: gradient-shift 5s ease infinite;
  z-index: 0;
}

@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Glass inner */
.pill-inner {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  border-radius: 57px;
  background: rgba(20, 5, 50, 0.75);
  backdrop-filter: blur(16px);
  padding: 16px 32px;
}

/* Shine sweep */
.pill-shine {
  position: absolute;
  top: 0;
  left: -100%;
  width: 50%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.15), transparent);
  animation: slide-shine 3.5s ease-in-out infinite;
  z-index: 3;
  pointer-events: none;
  border-radius: 60px;
}

.pill-icon {
  flex-shrink: 0;
  color: #e0b0ff;
  filter: drop-shadow(0 0 8px rgba(224, 64, 251, 0.5));
}

.pill-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.2;
}

.pill-label {
  font-size: 0.7rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.65);
  text-transform: uppercase;
  letter-spacing: 2px;
}

.pill-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.15rem;
  font-weight: 800;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 1.5px;
}

/* --- 3D Gold Push Button --- */
.btn-3d-gold {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px 36px;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  font-weight: 900;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #fff;
  background: linear-gradient(180deg, #ffe066, #f9a826, #d96200);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 16px;
  cursor: pointer;
  overflow: hidden;
  text-decoration: none;
  box-shadow:
    0 6px 0 #933800,
    0 8px 20px rgba(0, 0, 0, 0.6),
    0 0 25px rgba(249, 168, 38, 0.35),
    inset 0 1px 0 rgba(255, 255, 255, 0.4);
  transition: all 0.12s ease;
  transform: translateY(0);
  animation: btn-pulse 1.5s ease-in-out infinite;
  text-shadow:
    0 2px 4px rgba(147, 56, 0, 0.9),
    0 0 15px rgba(255, 255, 255, 0.5);
}

.btn-3d-gold:hover {
  transform: translateY(-2px);
  box-shadow:
    0 8px 0 #933800,
    0 14px 30px rgba(0, 0, 0, 0.6),
    0 0 40px rgba(249, 168, 38, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.5);
  background: linear-gradient(180deg, #ffea8a, #fdbc4b, #e67300);
}

.btn-3d-gold:active {
  transform: translateY(4px);
  box-shadow:
    0 2px 0 #933800,
    0 3px 8px rgba(0, 0, 0, 0.5),
    0 0 15px rgba(249, 168, 38, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.btn-3d-shine {
  position: absolute;
  top: 0;
  left: -100%;
  width: 60%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  animation: slide-shine 3s ease-in-out infinite;
  z-index: 1;
  pointer-events: none;
}

.cta-pill:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow:
    0 10px 40px rgba(224, 64, 251, 0.4),
    0 0 60px rgba(124, 77, 255, 0.15);
}

.cta-pill:hover .pill-inner {
  background: rgba(30, 10, 65, 0.8);
}

.cta-pill:active {
  transform: translateY(-1px) scale(0.98);
}

/* --- Download Row --- */
.download-row {
  display: flex;
  gap: 12px;
  width: 100%;
}

.cta-sub {
  flex: 1;
}

.cta-sub .pill-inner {
  padding: 14px 22px;
}

.cta-sub .pill-label {
  font-size: 0.62rem;
  letter-spacing: 1.5px;
}

.cta-sub .pill-title {
  font-size: 0.95rem;
  letter-spacing: 1px;
}

.cta-sub .pill-icon {
  width: 24px;
  height: 24px;
}

.cta-sub {
  flex: 1;
}

/* ===== FOOTER ===== */
.mini-footer {
  position: relative;
  z-index: 2;
  padding: 14px;
  text-align: center;
  animation: fadeIn 1s ease-out 1s both;
}

.mini-footer p {
  font-size: 0.72rem;
  color: rgba(255, 255, 255, 0.22);
}

/* ===== RESPONSIVE ===== */
@media (max-width: 480px) {
  .main-content {
    padding: 28px 16px 16px;
  }

  .main-logo {
    width: 110px;
    height: 110px;
    border-radius: 22px;
  }

  .logo-area {
    width: 200px;
    height: 200px;
  }

  .radar {
    width: 110px;
    height: 110px;
  }

  .title {
    font-size: clamp(1.6rem, 7vw, 2.6rem);
    letter-spacing: 1px;
  }

  .btn-3d-gold {
    padding: 16px 24px;
    font-size: 1.2rem;
  }

  .download-row {
    flex-direction: row;
    gap: 8px;
  }

  .cta-sub .pill-inner {
    padding: 12px 10px;
    gap: 6px;
  }

  .cta-sub .pill-title {
    font-size: 0.8rem;
  }
}

@media (min-height: 900px) {
  .main-content {
    justify-content: center;
  }
}
</style>
