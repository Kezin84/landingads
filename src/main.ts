import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// --- Security & Anti-Zoom ---
// Ngăn chuột phải (Context menu)
document.addEventListener('contextmenu', (e) => e.preventDefault());

// Ngăn F12, DevTools và các phím tắt Zoom (Ctrl +/-)
document.addEventListener('keydown', (e) => {
  // Anti-debugging
  if (e.key === 'F12' || e.keyCode === 123) e.preventDefault();
  if (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key.toUpperCase())) e.preventDefault();
  if (e.ctrlKey && ['u', 'U', 's', 'S'].includes(e.key)) e.preventDefault();
  
  // Anti-zoom (Ctrl + '+' / '-' / '0')
  if (e.ctrlKey && ['+', '-', '0', '=', 'NumpadAdd', 'NumpadSubtract'].includes(e.key)) {
    e.preventDefault();
  }
}, { passive: false });

// Ngăn zoom bằng con lăn chuột (Ctrl + Scroll wheel)
document.addEventListener('wheel', (e) => {
  if (e.ctrlKey) e.preventDefault();
}, { passive: false });

// Ngăn Pinch to Zoom trên cảm ứng (iOS/Android)
document.addEventListener('touchmove', (e) => {
  if (e.touches.length > 1) e.preventDefault();
}, { passive: false });
// ----------------------------

createApp(App).mount('#app')
