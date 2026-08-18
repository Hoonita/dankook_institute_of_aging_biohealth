import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the v5.1 mentorship homepage and participation guide", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /글로벌 석학 멘토십 프로그램/);
  assert.match(html, /접수 메일주소 확인/);
  assert.match(html, /dku_gm2026@gmail\.com/);
  assert.match(html, /dku\.gm2026@gmail\.com/);
  assert.match(html, /MD PARTICIPATION GUIDE/);
  assert.match(html, /13주 정규수업 형태가 아닙니다/);
  assert.match(html, /1박 최대 10만원/);
  assert.match(html, /aria-labelledby="notice-title"/);
  assert.match(html, /확인했습니다/);
  assert.match(html, /DANKOOK UNIVERSITY/);
});
