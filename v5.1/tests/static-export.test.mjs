import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const outputRoot = new URL("../out/", import.meta.url);

test("exports the v5.1 mentorship homepage and participation guide", async () => {
  await access(new URL("index.html", outputRoot));
  await access(new URL("404.html", outputRoot));
  await access(new URL("_next/", outputRoot));
  await access(new URL("logos/dku-logo.jpg", outputRoot));
  await access(new URL("mentors/giampietro-schiavo.png", outputRoot));
  await access(new URL("posters/dku-mentorship-2026-poster.png", outputRoot));
  await access(new URL("downloads/dku-global-mentorship-application-2026.docx", outputRoot));

  const html = await readFile(new URL("index.html", outputRoot), "utf8");
  const source = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");

  assert.match(html, /Global Molecular &amp; Cellular Biology Mentorship/);
  assert.match(html, /MD PARTICIPATION GUIDE/);
  assert.match(html, /13주 정규수업 형태가 아닙니다/);
  assert.match(html, /기본 신청서부터 시작하세요/);
  assert.match(html, /연구 관심 분야 및 핵심 아이디어 중심/);
  assert.match(html, /1:1 사전 상담 및 기획 지원 세션/);
  assert.match(html, /1박 최대 10만원/);
  assert.match(html, /dku\.gm2026@gmail\.com/);
  assert.match(source, /id="participation"/);
  assert.match(source, /const \[noticeOpen, setNoticeOpen\] = useState\(true\)/);
  assert.match(source, /aria-labelledby="notice-title"/);
  assert.match(source, /\/posters\/dku-mentorship-2026-poster\.png/);
});
