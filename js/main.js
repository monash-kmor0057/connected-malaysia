/* js/main.js — Connected Malaysia visualisation loader */

const CHARTS = [
  // Section 1 — Growth
  { id: 'chart1', spec: 'vega/01_growth/chart1.json' },
  { id: 'chart2', spec: 'vega/01_growth/chart2_states.json' },
  { id: 'chart3', spec: 'vega/01_growth/chart3_urban_rural.json' },

  // Section 2 — Usage
  { id: 'chart4', spec: 'vega/02_usage/chart4_activities.json' },
  { id: 'chart5', spec: 'vega/02_usage/chart5_platforms.json' },
  { id: 'chart6', spec: 'vega/02_usage/chart6_devices.json' },

  // Section 3 — Experience
  { id: 'chart7', spec: 'vega/03_experience/chart7_csi.json' },
  { id: 'chart8', spec: 'vega/03_experience/chart8_sqg.json' },
  { id: 'chart9', spec: 'vega/03_experience/chart9_ipa.json' },

  // Section 4 — Speed maps (Ookla)
  { id: 'chart10a', spec: 'vega/04_speed/chart10_ookla_2020.json' },
  { id: 'chart10b', spec: 'vega/04_speed/chart10_ookla_2023.json' },
  { id: 'chart10c', spec: 'vega/04_speed/chart10_ookla_2026.json' },

  // Section 4 — Speed charts
  { id: 'chart11', spec: 'vega/04_speed/chart11_state_speed.json' },
  { id: 'chart12', spec: 'vega/04_speed/chart12_ranking.json' },
];

const EMBED_OPTS = {
  actions: false,
  renderer: 'svg',
  theme: 'none',
};

/* ── Load all charts ─────────────────────────────────────────────── */
async function loadAllCharts() {
  for (const { id, spec } of CHARTS) {
    const el = document.getElementById(id);
    if (!el) continue;
    try {
      await vegaEmbed(`#${id}`, spec, EMBED_OPTS);
    } catch (err) {
      console.warn(`Chart ${id} failed:`, err.message);
      el.innerHTML = `<p style="color:#888;font-size:13px;padding:16px;">Chart unavailable: ${err.message}</p>`;
    }
  }
}

/* ── Active nav highlight on scroll ─────────────────────────────── */
function initNavScroll() {
  const sections = ['#section1', '#section2', '#section3', '#section4', '#takeaways'];
  const links = document.querySelectorAll('.nav-links a');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = '#' + entry.target.id;
        links.forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === id);
        });
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px' });

  sections.forEach(s => {
    const el = document.querySelector(s);
    if (el) observer.observe(el);
  });
}

/* ── Init ────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  loadAllCharts();
  initNavScroll();
});
