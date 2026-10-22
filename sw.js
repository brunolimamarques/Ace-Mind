/* AceMind — service worker (versão 3.0.1 · 22/10/2026 · mascote Breu)
   Páginas e código do app: sempre busca a versão mais nova na internet; a cópia salva só é usada sem conexão.
   Fontes, bibliotecas e ícones: usa a cópia salva (os nomes dos arquivos mudam a cada versão).
   Nunca guarda respostas do banco de dados (Firebase): dados pessoais não ficam no cache.
   Ao publicar uma versão nova do site, troque o nome do CACHE abaixo. */
const CACHE = "acemind-3.0.1-2026-10-22";
const ESSENCIAIS = ["./", "index.html", "app.js", "app.css", "fonts/fonts.css", "manifest.json", "icon-192.png"];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE).then(c => Promise.all(ESSENCIAIS.map(u => c.add(new Request(u, { cache: "reload" })).catch(() => {})))).then(() => self.skipWaiting()));
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

async function guardar(req, res) {
  if (res && res.ok && res.type === "basic") {
    const copia = res.clone();
    caches.open(CACHE).then(c => c.put(req, copia)).catch(() => {});
  }
  return res;
}

self.addEventListener("fetch", event => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // Firebase e outros serviços: direto na rede, sem cache

  const codigo = req.mode === "navigate" || req.destination === "document" || /\/(app\.js|app\.css|sw\.js|manifest\.json|breu\.js|breu\.css|breu-sub15\.svg|breu-15\.svg)$/.test(url.pathname) || url.pathname.endsWith("/");
  if (codigo) {
    event.respondWith(
      fetch(req, { cache: "no-cache" })
        .then(res => guardar(req, res))
        .catch(async () => (await caches.match(req, { ignoreSearch: true })) || (req.mode === "navigate" ? (await caches.match("./")) || (await caches.match("index.html")) : null) || Response.error())
    );
    return;
  }

  event.respondWith((async () => {
    const salvo = await caches.match(req);
    if (salvo) return salvo;
    try { return await guardar(req, await fetch(req)); } catch (e) { return Response.error(); }
  })());
});

/* ── notificações push (S.O.S, lembretes, alertas da equipe) ── */
self.addEventListener("push", event => {
  let d = {};
  try { d = event.data ? event.data.json() : {}; } catch (e) { d = { corpo: event.data ? event.data.text() : "" }; }
  const titulo = String(d.titulo || "AceMind").slice(0, 80);
  const op = {
    body: String(d.corpo || "").slice(0, 240),
    tag: String(d.tag || "acemind"),
    renotify: true,
    requireInteraction: d.tipo === "sos",
    icon: "icon-192.png",
    badge: "icon-192.png",
    vibrate: d.tipo === "sos" ? [300, 120, 300, 120, 300] : [120],
    data: { destino: String(d.destino || ""), url: "./" }
  };
  event.waitUntil(self.registration.showNotification(titulo, op));
});

self.addEventListener("notificationclick", event => {
  event.notification.close();
  const destino = (event.notification.data && event.notification.data.destino) || "";
  event.waitUntil((async () => {
    const lista = await self.clients.matchAll({ type: "window", includeUncontrolled: true });
    for (const c of lista) {
      if (new URL(c.url).origin === self.location.origin) {
        await c.focus();
        c.postMessage({ tipo: "abrir", destino });
        return;
      }
    }
    await self.clients.openWindow("./" + (destino ? "#" + destino : ""));
  })());
});
