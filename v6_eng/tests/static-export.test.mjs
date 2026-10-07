import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const outputRoot = new URL("../out/", import.meta.url);

test("exports the English v6 mentorship website", async () => {
  await access(new URL("index.html", outputRoot));
  await access(new URL("404.html", outputRoot));
  await access(new URL("_next/", outputRoot));
  await access(new URL("logos/dku-logo.jpg", outputRoot));
  await access(new URL("mentors/giampietro-schiavo.png", outputRoot));
  await access(new URL("posters/dku-mentorship-2026-poster.png", outputRoot));
  await access(new URL("downloads/dku-global-mentorship-application-2026.docx", outputRoot));

  const html = await readFile(new URL("index.html", outputRoot), "utf8");
  const source = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");

  assert.match(html, /<html lang="en">/);
  assert.match(html, /Global Molecular and Cellular Biology Mentorship/);
  assert.match(html, /INTEGRATED RESEARCH PROGRAM/);
  assert.match(html, /Second 1:1 online mentoring session/);
  assert.match(html, /Domestic mini-programs 2 and 3/);
  assert.match(html, /International symposium/);
  assert.match(html, /Start with a Basic Application/);
  assert.match(html, /August 31, 2026/);
  assert.match(html, /dku\.gm2026@gmail\.com/);
  assert.doesNotMatch(source, /[가-힣]/);
  assert.match(source, /id="participation"/);
});
