# Dankook University Biohealth Mentorship v6

단국대학교·단국노화연구소 글로벌 분자·세포생물학 멘토십 웹사이트입니다. v6는 분자·세포생물학 단일 통합 트랙과 9–12월 월별 프로그램 일정을 안내합니다.

## 프로젝트 구성

- `app/`: Sites 배포용 v6 애플리케이션
- `v6/`: Netlify 정적 배포용 v6 애플리케이션
- `v5.1/`: 이전 운영 버전

## Sites 빌드

```bash
npm ci
npm run build
npm test
```

Sites 배포용 결과는 `dist/`에 생성됩니다.
