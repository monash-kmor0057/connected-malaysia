# Connected Malaysia — How broadband transformed Malaysian digital life

### GitHub Pages

https://monash-kmor0057.github.io/connected-malaysia/

---

## Why Section 3 charts are blank on GitHub

`index.html` on GitHub already loads Section 3, but **the Vega spec files for charts 8–13 are not in the repository yet** (they return **404**). The CSV data for BQoES **is** on GitHub; only the missing JSON specs block the charts.

### Files you must upload to GitHub (`main` branch)

Upload these from your local project folder  
`connected-malaysia-main\vega\`:

| File | Section 3 chart |
|------|-----------------|
| `chart8_csi_radar.json` | 7 – CSI lines |
| `chart9_sqg_heatmap.json` | 8 – Heatmaps |
| `chart10_ipa_scatter.json` | 9 – IPA |
| `chart11_streaming.json` | 10 – Platforms (streaming) |
| `chart11_calls.json` | 10 – Platforms (video calls) |
| `chart11_gaming.json` | 10 – Platforms (gaming) |
| `chart12_dissatisfaction_stack.json` | 11 – Dissatisfaction |
| `chart13_participation.json` | 12 – Participation |
| `chart13_age.json` | 12 – Age |
| `chart13_ethnicity.json` | 12 – Ethnicity |

Also push the latest **`index.html`** and **`style.css`** from your PC (they contain Section 3 layout and fixes).

### Map tile data (Section 2 — gapless grid cells)

Upload these (~0.6–0.7 MB each; aggregated grid, not raw 64k tiles):

- `data/geo/gps_mobile_tiles_2020.json`
- `data/geo/gps_mobile_tiles_2023.json`
- `data/geo/gps_mobile_tiles_2026.json`

Regenerate locally: `node scripts/build_map_tiles_geojson.mjs`  
Also push `index.html` and `vega/chart5_map_2020.json` (and chart6/7 map specs).

Also update map specs: `vega/chart5_map_2020.json`, `chart6_map_2023.json`, `chart7_map_2026.json`

### Data already on GitHub (check only)

- `data/csv/bqoes_2024.csv`
- `data/csv/bqoes_2024_ipa.csv`
- `data/csv/chart11/chart11_video_streaming.csv`
- `data/csv/chart11/chart11_video_calls.csv`
- `data/csv/chart11/chart11_gaming.csv`

### Upload steps (GitHub website)

1. Open https://github.com/monash-kmor0057/connected-malaysia
2. Go to folder **`vega`**
3. **Add file → Upload files** → drag the 10 JSON files listed above
4. Commit to **`main`**
5. Wait 1–2 minutes, then hard-refresh the Pages site (`Ctrl+Shift+R`)

### Upload steps (git, if you use the command line)

```bash
cd "path/to/connected-malaysia-main"
git init
git remote add origin https://github.com/monash-kmor0057/connected-malaysia.git
git pull origin main
git add vega/chart8_csi_radar.json vega/chart9_sqg_heatmap.json vega/chart10_ipa_scatter.json
git add vega/chart11_streaming.json vega/chart11_calls.json vega/chart11_gaming.json
git add vega/chart12_dissatisfaction_stack.json
git add vega/chart13_participation.json vega/chart13_age.json vega/chart13_ethnicity.json
git add index.html style.css
git commit -m "Add Section 3 Vega specs and latest dashboard assets"
git push origin main
```

### Quick check after deploy

These URLs should open JSON (not 404):

- https://monash-kmor0057.github.io/connected-malaysia/vega/chart8_csi_radar.json
- https://monash-kmor0057.github.io/connected-malaysia/vega/chart9_sqg_heatmap.json

---

## Local preview

```bash
python -m http.server 8080
```

Open http://127.0.0.1:8080/index.html (do not use `file://`).
