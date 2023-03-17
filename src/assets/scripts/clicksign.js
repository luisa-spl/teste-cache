function Clicksign(i) {
  function n(n) { let t; (e[(t = n).name || t] || []).forEach((t) => { t(n.data); }); } let o; let r; const t = `${window.location.protocol}//${window.location.host}`; var e = {}; const u = function (t) { n(t.data); }; return {
   endpoint: 'https://app.clicksign.com', origin: t, mount(t) { const n = `/sign/${i}`; var e = `?embedded=true&origin=${this.origin}`; var e = this.endpoint + n + e; return r = document.getElementById(t), (o = document.createElement('iframe')).setAttribute('src', e), o.setAttribute('style', 'width: 100%; height: 100%;'), o.setAttribute('allow', 'camera'), window.addEventListener('message', u), r.appendChild(o); }, unmount() { return o && (r.removeChild(o), o = r = null, window.removeEventListener('message', n)), !0; }, on(t, n) { return e[t] || (e[t] = []), e[t].push(n); }, trigger: n,
  };
  }
