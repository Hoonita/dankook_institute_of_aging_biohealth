# Dankook University Biohealth Mentorship v5.0

단국대학교·단국노화연구소 글로벌 분자·세포생물학 멘토십 웹사이트입니다. 메인 페이지 접속 시 신청서 접수 이메일 주소 정정 공지를 우선 안내합니다.

## 프로젝트 구성

- `app/`: Sites 배포용 v5 애플리케이션
- `v5/`: Netlify 정적 배포용 v5 애플리케이션
- `v4/`: 이전 운영 버전

## Sites 빌드

```bash
npm ci
npm run build
npm test
```

Sites 배포용 결과는 `dist/`에 생성됩니다.
