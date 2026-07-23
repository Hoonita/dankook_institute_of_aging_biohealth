import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const outputRoot = new URL("../out/", import.meta.url);

test("exports a deployable static homepage", async () => {
  await access(new URL("index.html", outputRoot));
  await access(new URL("404.html", outputRoot));
  await access(new URL("_next/", outputRoot));
  await access(new URL("logos/dku-logo.jpg", outputRoot));
  await access(new URL("logos/dia-logo.png", outputRoot));
  await access(new URL("mentors/giampietro-schiavo.png", outputRoot));
  await access(new URL("mentors/dennis-chan.png", outputRoot));
  await access(new URL("mentors/tiago-rito.png", outputRoot));

  const html = await readFile(new URL("index.html", outputRoot), "utf8");
  assert.match(html, /DANKOOK UNIVERSITY/);
  assert.match(html, /DANKOOK INSTITUTE OF AGING/);
  assert.match(html, /글로벌 분자·세포생물학 미래인재 양성 멘토십/);
  assert.match(html, /인간질환의 고급 분자·세포생물학적 기전/);
  assert.match(html, /인간 질환모델링과 실험적 중개연구/);
  assert.match(html, /국제학술세미나/);
  assert.match(html, /\/logos\/dku-logo\.jpg/);
  assert.match(html, /\/logos\/dia-logo\.png/);
  assert.match(html, /선발 기준/);
  assert.match(html, /연구 분야 적합성/);
  assert.match(html, /국제 연구 역량/);
  assert.match(html, /연구 진로 계획/);
  assert.match(html, /세부 기준은 내규에 따름/);
  assert.match(html, /mailto:dku_gm2026@gmail\.com/);
  assert.doesNotMatch(html, /bumlee@dankook\.ac\.kr/);
  assert.doesNotMatch(html, /href="tel:/);
  assert.doesNotMatch(html, /DANKOOK BIO ATLAS/);
});
