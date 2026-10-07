# Dankook University Biohealth Mentorship v6 English

English-language static edition of the Dankook University and Dankook Institute of Aging Global Molecular and Cellular Biology Mentorship website.

## Local development

Use Node.js 22.

```bash
npm ci
npm run dev
npm run build
```

The production export is generated in `out/`.

## Netlify configuration

- Base directory: `v6_eng`
- Build command: `npm run build`
- Publish directory: `out`
- Functions directory: not used

This edition uses static export and does not require a per-request Node.js server.
