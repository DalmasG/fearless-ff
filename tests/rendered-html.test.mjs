import assert from "node:assert/strict";
import test from "node:test";

test("renders the festival route and its original sections", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
  );
  const html = await response.text();
  assert.match(html, /Fearless Comedy Film Festival/);
  for (const section of ['home', 'films', 'lineup', 'about', 'schedule', 'submissions']) {
    assert.ok(html.includes(`id="${section}"`), `Missing section: ${section}`);
  }
  for (const label of ['Featured Films', 'Festival Schedule', 'Submit Your Comedy Film', 'The Last Laugh']) {
    assert.ok(html.includes(label), `Missing festival content: ${label}`);
  }
  assert.doesNotMatch(html, /Starter Project/);
});
