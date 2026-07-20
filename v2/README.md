# Dankook University Biohealth Mentorship v2

Netlify 배포용 단국대학교·단국노화연구소 글로벌 분자·세포생물학 멘토십 정적 웹사이트입니다.

## 로컬 실행

Node.js 22를 사용합니다.

```bash
npm ci
npm run dev
npm run build
```

`npm run build`는 정적 배포 결과를 `out/`에 생성합니다.

## Netlify 설정

- Base directory: `v2`
- Build command: `npm run build`
- Publish directory: `out`
- Functions directory: 사용하지 않음

저장소의 `v2/netlify.toml`에도 같은 설정이 선언되어 있습니다. Netlify UI의 **Build plugins**에 `@netlify/plugin-nextjs`가 설치되어 있다면 제거하고, UI에 남아 있는 `.next` publish 설정도 삭제해야 합니다.

이 버전은 정적 내보내기를 사용하므로 Cloudflare Worker, vinext, D1, R2 또는 요청별 Node.js 서버를 필요로 하지 않습니다.
