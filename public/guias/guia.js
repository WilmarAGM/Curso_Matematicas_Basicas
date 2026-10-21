/* Guía interactiva: recuadros editables, «Comprobar», apuntes (texto + dibujo) y copia de seguridad.
   Todo se guarda solo en el dispositivo: localStorage (respuestas y textos) e IndexedDB (dibujos). */
(() => {
  'use strict';
  const DATOS = JSON.parse(document.getElementById('datos-guia').textContent);
  const GUIA = DATOS.guia;
  const RESP = DATOS.respuestas;
  const CLAVE = `mo:${GUIA}`;

  // ------------------------------------------------------------------ estado guardado
  let estado = { v: {}, vf: {}, ab: {}, ap: {}, apl: {}, total: 0, llenos: 0 };
  try { Object.assign(estado, JSON.parse(localStorage.getItem(CLAVE) || '{}')); } catch { /* sin datos previos */ }
  let tGuardar = null;
  function guardar() {
    clearTimeout(tGuardar);
    tGuardar = setTimeout(() => {
      try { localStorage.setItem(CLAVE, JSON.stringify(estado)); } catch { avisoGlobal('No se pudo guardar: el almacenamiento del navegador está lleno o bloqueado.'); }
    }, 250);
  }
  function avisoGlobal(txt) {
    const p = document.createElement('p');
    p.className = 'aviso';
    p.style.cssText = 'position:fixed;left:10px;right:10px;bottom:10px;background:#fff;padding:10px;border:2px solid #b84c1e;border-radius:8px;z-index:50';
    p.textContent = txt;
    document.body.appendChild(p);
    setTimeout(() => p.remove(), 6000);
  }

  // ------------------------------------------------------------------ evaluador de expresiones (x, n)
  const FUN = { sin: Math.sin, sen: Math.sin, cos: Math.cos, tan: Math.tan, exp: Math.exp, ln: Math.log, log: Math.log10,
                sqrt: Math.sqrt, raiz: Math.sqrt, cbrt: Math.cbrt, abs: Math.abs, arctan: Math.atan, atan: Math.atan };
  function normalizar(t) {
    return String(t).trim().toLowerCase()
      .replace(/,/g, '.').replace(/[·×]/g, '*').replace(/−/g, '-').replace(/÷/g, '/').replace(/√/g, 'sqrt')
      .replace(/π/g, 'pi').replace(/\*\*/g, '^').replace(/[_\s]/g, '');
  }
  function tokens(t) {
    const out = [];
    let i = 0;
    while (i < t.length) {
      const c = t[i];
      if (/[0-9.]/.test(c)) {
        let j = i; while (j < t.length && /[0-9.]/.test(t[j])) j++;
        if (t[j] === 'e' && /[-+0-9]/.test(t[j + 1] || '') && /[0-9]/.test(t[j + 1] === '-' || t[j + 1] === '+' ? t[j + 2] || '' : t[j + 1])) {
          j += 2; while (j < t.length && /[0-9]/.test(t[j])) j++;
        }
        const v = Number(t.slice(i, j));
        if (Number.isNaN(v)) throw new Error('número');
        out.push({ k: 'num', v }); i = j;
      } else if (/[a-z]/.test(c)) {
        let j = i; while (j < t.length && /[a-z]/.test(t[j])) j++;
        let w = t.slice(i, j);
        // separar palabras: funciones conocidas, pi, e, y variables de una letra
        while (w) {
          const f = Object.keys(FUN).sort((a, b) => b.length - a.length).find((n) => w.startsWith(n));
          if (f) { out.push({ k: 'fun', v: f }); w = w.slice(f.length); continue; }
          if (w.startsWith('pi')) { out.push({ k: 'num', v: Math.PI }); w = w.slice(2); continue; }
          out.push({ k: 'var', v: w[0] }); w = w.slice(1);
        }
        i = j;
      } else if ('+-*/^()!'.includes(c)) { out.push({ k: c }); i++; } else { throw new Error('símbolo'); }
    }
    return out;
  }
  function parsear(texto) {
    const tk = tokens(normalizar(texto));
    let p = 0;
    const ver = () => tk[p];
    const comer = (k) => { if (ver() && ver().k === k) { p++; return true; } return false; };
    const empiezaFactor = (t) => t && (t.k === 'num' || t.k === 'var' || t.k === 'fun' || t.k === '(');
    function expr() {
      let a = term();
      for (;;) {
        if (comer('+')) { const l = a, r = term(); a = (s) => l(s) + r(s); } else if (comer('-')) { const l = a, r = term(); a = (s) => l(s) - r(s); } else return a;
      }
    }
    function term() {
      let a = unario();
      for (;;) {
        if (comer('*')) { const l = a, r = unario(); a = (s) => l(s) * r(s); } else if (comer('/')) { const l = a, r = unario(); a = (s) => l(s) / r(s); } else if (empiezaFactor(ver())) { const l = a, r = potencia(); a = (s) => l(s) * r(s); } else return a;
      }
    }
    function unario() {
      if (comer('-')) { const r = unario(); return (s) => -r(s); }
      if (comer('+')) return unario();
      return potencia();
    }
    function potencia() {
      let b = postfijo();
      if (comer('^')) { const e = unario(); const l = b; b = (s) => Math.pow(l(s), e(s)); }
      return b;
    }
    function postfijo() {
      let a = atomo();
      while (comer('!')) { const l = a; a = (s) => { let r = 1; for (let k = 2; k <= Math.round(l(s)); k++) r *= k; return r; }; }
      return a;
    }
    function atomo() {
      const t = ver();
      if (!t) throw new Error('incompleto');
      p++;
      if (t.k === 'num') return () => t.v;
      if (t.k === 'var') {
        if (t.v === 'e') return () => Math.E;
        return (s) => { if (!(t.v in s)) throw new Error('variable'); return s[t.v]; };
      }
      if (t.k === 'fun') { const f = FUN[t.v]; const arg = ver() && ver().k === '(' ? atomo() : unario(); return (s) => f(arg(s)); }
      if (t.k === '(') { const a = expr(); if (!comer(')')) throw new Error('paréntesis'); return a; }
      throw new Error('inesperado');
    }
    const f = expr();
    if (p !== tk.length) throw new Error('sobra');
    return f;
  }
  // valores positivos: muchas respuestas tienen logaritmos o raíces de las variables
  const MUESTRAS = [{ x: 0.37, y: 1.3, z: 2.2, t: 0.8, a: 1.7, b: 2.9, m: 1.15, n: 2.3 }, { x: 1.91, y: 0.6, z: 3.1, t: 2.4, a: 0.9, b: 1.2, m: 3.4, n: 4.1 },
                    { x: 2.6, y: 2.7, z: 0.45, t: 1.6, a: 2.3, b: 0.7, m: 0.6, n: 7.7 }, { x: 3.7, y: 1.9, z: 1.4, t: 3.3, a: 1.1, b: 3.6, m: 2.2, n: 1.4 }];
  const cerca = (a, b, rel = 1e-6) => Number.isFinite(a) && Number.isFinite(b) && Math.abs(a - b) <= rel * Math.max(1, Math.abs(b));
  function igualExpr(fu, fe) {
    return MUESTRAS.every((s) => cerca(fu(s), fe(s)));
  }
  // intervalos: «[-1,3)», «(-inf,5]», «[-2,1] U (2,7]», «vacío»; se compara la forma escrita, sin espacios
  function normIntervalo(t) {
    let s = String(t).trim().toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\s+/g, '').replace(/−/g, '-');
    if (/^(∅|ø|\{\}|vacio|conjuntovacio|ninguno|nohay)$/.test(s)) return '∅';
    if (/^(r|ℝ|reales|todoslosreales)$/.test(s)) return '(-∞,∞)';
    s = s.replace(/infinito|inf|oo/g, '∞').replace(/\+∞/g, '∞').replace(/<=|=</g, '≤').replace(/>=|=>/g, '≥')
      .replace(/^\{x[|:/]/, '').replace(/\}$/, '').replace(/[u∪]|\bo\b/g, '∪').replace(/;/g, ',');
    return s.split('∪').sort().join('∪');
  }
  // conjunto de soluciones: «1; 10000», «0 y ln 4», «sin solución»; cada parte es una expresión numérica
  function igualConjunto(texto, esperado, tol) {
    const t = String(texto).trim().toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
    if (!esperado.length) return /^(∅|ø|\{\}|no|sin|ningun|vacio|notiene|nohay)/.test(t.replace(/\s+/g, ''));
    const partes = t.split(/;|\by\b|\s+o\s+|,(?=\s*[-+a-z(√π0-9])/).map((p) => p.replace(/^\s*x\s*=\s*/, '').trim()).filter(Boolean);
    if (partes.length !== esperado.length) return false;
    const vals = partes.map((p) => parsear(p)({}));
    const usados = new Set();
    return esperado.every((e) => {
      const k = vals.findIndex((v, i) => !usados.has(i) && Math.abs(v - e) <= tol * Math.max(1, Math.abs(e)));
      if (k < 0) return false;
      usados.add(k); return true;
    });
  }
  const sinTildes = (t) => normalizar(t).normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\*/g, '');

  // ------------------------------------------------------------------ campos
  const campos = [];          // {id, input, bloque, idx, hoja}
  function crearCampo(el, id, esTexto) {
    const r = el.getBoundingClientRect();
    const inp = document.createElement('input');
    inp.type = 'text';
    inp.className = 'campo' + (esTexto ? ' texto' : '');
    inp.autocomplete = 'off'; inp.spellcheck = false;
    inp.setAttribute('autocapitalize', 'off'); inp.setAttribute('autocorrect', 'off');
    inp.setAttribute('aria-label', 'Recuadro para completar');
    inp.dataset.id = id;
    const minimo = Math.max(esTexto ? 110 : 34, Math.round(r.width));
    inp.style.minWidth = minimo + 'px';
    const ajustar = () => { inp.style.width = `max(${minimo}px, ${inp.value.length + 1.5}ch)`; };
    inp.value = estado.v[id] || '';
    ajustar();
    inp.addEventListener('input', () => {
      ajustar();
      inp.classList.remove('ok', 'mal', 'vacio', 'abierta');
      if (inp.value.trim()) estado.v[id] = inp.value; else delete estado.v[id];
      actualizarProgreso();
      guardar();
    });
    if (esTexto) el.replaceWith(inp); else el.replaceChildren(inp);
    return inp;
  }

  // número de orden del recuadro en el texto fuente (lo pone el generador: clase «nK» o data-n)
  const orden = (el) => Number(el.dataset.n || (el.className.match(/\bn(\d+)\b/) || [])[1] || 0);

  function prepararCampos() {
    const lista = [...document.querySelectorAll('.hueco, .blank')].filter((el) => !el.closest('.sol'))
      .map((el) => ({ el, n: orden(el) })).sort((a, b) => a.n - b.n);
    const cuenta = {};
    lista.forEach(({ el }) => {
      const bloqueEl = el.closest('[data-bloque]');
      const hoja = el.closest('.hoja')?.dataset.hoja;
      const bloque = bloqueEl ? bloqueEl.dataset.bloque : `hoja${hoja}`;
      const idx = (cuenta[bloque] = (cuenta[bloque] ?? -1) + 1);
      const id = `${bloque}-${idx}`;
      const input = crearCampo(el, id, el.classList.contains('blank'));
      campos.push({ id, input, bloque, idx, hoja });
    });
  }

  // ------------------------------------------------------------------ comprobar
  function comprobarBloque(bloque, zona) {
    const spec = RESP[bloque];
    const cs = campos.filter((c) => c.bloque === bloque).sort((a, b) => a.idx - b.idx);
    let bien = 0, evaluables = 0, vacios = 0;
    const marcar = (c, clase) => { c.input.classList.remove('ok', 'mal', 'vacio', 'abierta'); c.input.classList.add(clase); };
    cs.forEach((c, i) => {
      const sp = spec[i] || {};
      const val = c.input.value.trim();
      if ('p' in sp) return; // lo evalúa su grupo
      if ('m' in sp) { marcar(c, val ? 'abierta' : 'vacio'); if (!val) vacios++; return; }
      if ('g' in sp) {
        const grupo = sp.g.map((k) => cs[k]);
        evaluables++;
        if (grupo.some((g) => !g.input.value.trim())) { grupo.forEach((g) => marcar(g, 'vacio')); vacios++; return; }
        let ok = false;
        try {
          const fs = grupo.map((g) => parsear(g.input.value));
          const fe = parsear(sp.e);
          const comb = (s) => fs.slice(1).reduce((acc, f) => (sp.op === '/' ? acc / f(s) : acc * f(s)), fs[0](s));
          ok = igualExpr(comb, fe);
        } catch { ok = false; }
        grupo.forEach((g) => marcar(g, ok ? 'ok' : 'mal'));
        if (ok) bien++;
        return;
      }
      evaluables++;
      if (!val) { marcar(c, 'vacio'); vacios++; return; }
      let ok = false;
      try {
        if ('n' in sp) {
          const v = parsear(val.replace(/^\s*[a-zA-Z]\s*=\s*/, ''))({});
          ok = Number.isFinite(v) && Math.abs(v - sp.n) <= sp.t * Math.max(1, Math.abs(sp.n) > 1000 ? Math.abs(sp.n) / 1000 : 1);
        } else if ('e' in sp) {
          ok = igualExpr(parsear(val), parsear(sp.e));
        } else if ('s' in sp) {
          ok = sp.s.map(sinTildes).includes(sinTildes(val));
        } else if ('i' in sp) {
          ok = [].concat(sp.i).map(normIntervalo).includes(normIntervalo(val));
        } else if ('c' in sp) {
          ok = igualConjunto(val, sp.c, sp.t || 1e-3);
        }
      } catch { ok = false; }
      marcar(c, ok ? 'ok' : 'mal');
      if (ok) bien++;
    });
    const res = zona.querySelector('.resultado');
    res.classList.toggle('todo-bien', bien === evaluables && evaluables > 0);
    res.textContent = `${bien} de ${evaluables} correctas` + (vacios ? ` · ${vacios} sin llenar` : '') +
      (cs.some((c, i) => 'm' in (spec[i] || {})) ? ' · las respuestas abiertas (azul) compáralas con la solución' : '');
  }

  function botonSolucion(contenedor, sol, texto = 'Ver solución') {
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'btn mini'; b.textContent = texto;
    b.addEventListener('click', () => {
      sol.hidden = !sol.hidden;
      sol.classList.add('sol-visible');
      b.textContent = sol.hidden ? texto : 'Ocultar solución';
    });
    return b;
  }

  function prepararBloques() {
    document.querySelectorAll('[data-bloque]').forEach((bl) => {
      const id = bl.dataset.bloque;
      const spec = RESP[id];
      const sol = [...bl.children].find((e) => e.classList.contains('sol')) || bl.querySelector(':scope > .sol');
      const zona = document.createElement('div');
      zona.className = 'zona-bloque';
      if (spec && spec.vf) prepararVF(bl, id, spec.vf, zona);
      else if (Array.isArray(spec)) {
        const b = document.createElement('button');
        b.type = 'button'; b.className = 'btn principal mini'; b.textContent = 'Comprobar';
        const res = document.createElement('span'); res.className = 'resultado';
        zona.append(b);
        let solBtn = null;
        b.addEventListener('click', () => {
          comprobarBloque(id, zona);
          if (sol && !solBtn) { solBtn = botonSolucion(zona, sol); zona.insertBefore(solBtn, res); }
        });
        zona.append(res);
      } else if (sol) zona.append(botonSolucion(zona, sol));
      if (!zona.children.length) return;
      if (sol) bl.insertBefore(zona, sol); else bl.append(zona);
    });
  }

  function prepararVF(bl, id, claves, zona) {
    const marcas = bl.querySelectorAll('.tf > .vf');
    const elegidos = estado.vf[id] || [];
    const grupos = [];
    marcas.forEach((m, i) => {
      const g = document.createElement('span');
      g.className = 'vf-btns';
      ['V', 'F'].forEach((letra) => {
        const b = document.createElement('button');
        b.type = 'button'; b.textContent = letra;
        b.setAttribute('aria-pressed', String(elegidos[i] === letra));
        b.addEventListener('click', () => {
          g.querySelectorAll('button').forEach((x) => x.setAttribute('aria-pressed', 'false'));
          b.setAttribute('aria-pressed', 'true');
          g.classList.remove('ok', 'mal');
          (estado.vf[id] = estado.vf[id] || [])[i] = letra;
          guardar();
        });
        g.append(b);
      });
      m.replaceWith(g);
      grupos.push(g);
    });
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'btn principal mini'; b.textContent = 'Comprobar';
    const res = document.createElement('span'); res.className = 'resultado';
    b.addEventListener('click', () => {
      let bien = 0;
      grupos.forEach((g, i) => {
        const r = (estado.vf[id] || [])[i];
        g.classList.remove('ok', 'mal');
        if (!r) return;
        const ok = r === claves[i];
        g.classList.add(ok ? 'ok' : 'mal');
        if (ok) bien++;
      });
      res.textContent = `${bien} de ${claves.length} correctas · ahora justifica las que fallaste`;
    });
    zona.append(b, res);
  }

  // ------------------------------------------------------------------ problemas abiertos y retos
  function prepararAbiertos() {
    document.querySelectorAll('[data-abierto]').forEach((ab) => {
      const pid = ab.dataset.abierto;
      const sol = ab.querySelector(':scope > .sol');
      const ta = document.createElement('textarea');
      ta.className = 'mi-solucion';
      ta.placeholder = 'Tu estrategia y tu solución: ¿por dónde empezaste y por qué?';
      ta.value = estado.ab[pid] || '';
      ta.addEventListener('input', () => { estado.ab[pid] = ta.value; guardar(); });
      const zona = document.createElement('div'); zona.className = 'zona-bloque';
      if (sol) {
        const b = document.createElement('button');
        b.type = 'button'; b.className = 'btn mini'; b.textContent = 'Ver solución';
        const aviso = document.createElement('span'); aviso.className = 'aviso';
        let insistio = false;
        b.addEventListener('click', () => {
          if (sol.hidden && ta.value.trim().length < 15 && !insistio) {
            aviso.textContent = 'Escribe primero tu estrategia. Si de verdad te trabaste, vuelve a tocar el botón.';
            insistio = true; return;
          }
          aviso.textContent = '';
          sol.hidden = !sol.hidden; sol.classList.add('sol-visible');
          b.textContent = sol.hidden ? 'Ver solución' : 'Ocultar solución';
        });
        zona.append(b, aviso);
      }
      if (sol) { ab.insertBefore(ta, sol); ab.insertBefore(zona, sol); } else ab.append(ta, zona);
    });
    document.querySelectorAll('.reto').forEach((r) => {
      const sol = r.querySelector(':scope > .sol');
      if (!sol) return;
      const zona = document.createElement('div'); zona.className = 'zona-bloque';
      zona.append(botonSolucion(zona, sol, 'Ver idea'));
      r.insertBefore(zona, sol);
    });
  }

  // ------------------------------------------------------------------ apuntes: texto + lienzo
  const DB = 'guias-mo';
  function abrirDB() {
    return new Promise((ok, mal) => {
      const r = indexedDB.open(DB, 1);
      r.onupgradeneeded = () => r.result.createObjectStore('lienzos');
      r.onsuccess = () => ok(r.result);
      r.onerror = () => mal(r.error);
    });
  }
  async function idb(modo, fn) {
    const db = await abrirDB();
    return new Promise((ok, mal) => {
      const tx = db.transaction('lienzos', modo);
      const r = fn(tx.objectStore('lienzos'));
      tx.oncomplete = () => ok(r && r.result);
      tx.onerror = () => mal(tx.error);
    });
  }
  const leerLienzo = (k) => idb('readonly', (s) => s.get(k));
  const escribirLienzo = (k, v) => idb('readwrite', (s) => s.put(v, k));

  const COLORES = ['#1a1412', '#b84c1e', '#2a6b6e', '#2d5c3e'];
  function prepararApuntes() {
    document.querySelectorAll('details.apuntes').forEach((d) => {
      const hoja = d.dataset.hoja;
      const sum = d.querySelector('summary');
      if ((estado.ap[hoja] || '').trim() || estado.apl[hoja]) sum.classList.add('tiene');
      let listo = false;
      d.addEventListener('toggle', () => { if (d.open && !listo) { listo = true; construirApuntes(d, hoja, sum); } });
    });
  }

  function construirApuntes(d, hoja, sum) {
    const barra = document.createElement('div'); barra.className = 'lienzo-barra';
    const lienzo = document.createElement('canvas'); lienzo.className = 'lienzo';
    const W = 1000;
    lienzo.width = W; lienzo.height = 700;
    const ctx = lienzo.getContext('2d');
    let color = COLORES[0], borrar = false, mover = false, vioLapiz = false;
    const pila = [];

    const boton = (txt, titulo, fn, extra = '') => {
      const b = document.createElement('button'); b.type = 'button'; b.innerHTML = txt; b.title = titulo; b.setAttribute('aria-label', titulo);
      if (extra) b.className = extra;
      b.addEventListener('click', fn); barra.append(b); return b;
    };
    const coloresBtn = COLORES.map((c, i) => {
      const b = boton('', `Lápiz ${i + 1}`, () => { color = c; borrar = false; refrescar(); }, 'color');
      b.style.background = c; return b;
    });
    const bBorrar = boton('⌫', 'Borrador', () => { borrar = !borrar; refrescar(); });
    const bMover = boton('✋', 'Desplazar la página (no dibujar con el dedo)', () => { mover = !mover; lienzo.classList.toggle('mover', mover); refrescar(); });
    boton('↶', 'Deshacer', () => { const img = pila.pop(); if (img) { ctx.putImageData(img, 0, 0); guardarLienzo(); } });
    boton('＋', 'Más espacio', () => {
      const copia = ctx.getImageData(0, 0, lienzo.width, lienzo.height);
      lienzo.height += 500; ctx.putImageData(copia, 0, 0); guardarLienzo();
    });
    boton('🗑', 'Limpiar el dibujo', () => {
      if (!confirm('¿Borrar todo el dibujo de esta hoja?')) return;
      pila.push(ctx.getImageData(0, 0, lienzo.width, lienzo.height));
      ctx.clearRect(0, 0, lienzo.width, lienzo.height); guardarLienzo();
    });
    function refrescar() {
      coloresBtn.forEach((b, i) => b.setAttribute('aria-pressed', String(!borrar && COLORES[i] === color)));
      bBorrar.setAttribute('aria-pressed', String(borrar));
      bMover.setAttribute('aria-pressed', String(mover));
    }
    refrescar();

    let tGuardarL = null;
    function guardarLienzo() {
      clearTimeout(tGuardarL);
      tGuardarL = setTimeout(() => lienzo.toBlob(async (blob) => {
        try {
          await escribirLienzo(`${GUIA}:${hoja}`, { h: lienzo.height, blob });
          estado.apl[hoja] = true; sum.classList.add('tiene'); guardar();
        } catch { avisoGlobal('No se pudo guardar el dibujo en este dispositivo.'); }
      }, 'image/png'), 400);
    }

    let dibujando = false, ultimo = null;
    const punto = (e) => {
      const r = lienzo.getBoundingClientRect();
      const k = lienzo.width / r.width;
      return { x: (e.clientX - r.left) * k, y: (e.clientY - r.top) * k, p: e.pressure || 0.5 };
    };
    lienzo.addEventListener('pointerdown', (e) => {
      if (e.pointerType === 'pen') vioLapiz = true;
      if (e.pointerType === 'touch' && (mover || vioLapiz)) return; // con lápiz, la palma no dibuja
      e.preventDefault();
      lienzo.setPointerCapture(e.pointerId);
      pila.push(ctx.getImageData(0, 0, lienzo.width, lienzo.height));
      if (pila.length > 8) pila.shift();
      dibujando = true; ultimo = punto(e);
    });
    lienzo.addEventListener('pointermove', (e) => {
      if (!dibujando) return;
      const q = punto(e);
      ctx.globalCompositeOperation = borrar ? 'destination-out' : 'source-over';
      ctx.strokeStyle = color; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
      ctx.lineWidth = borrar ? 28 : 1.6 + 3.2 * (e.pointerType === 'pen' ? q.p : 0.5);
      ctx.beginPath(); ctx.moveTo(ultimo.x, ultimo.y); ctx.lineTo(q.x, q.y); ctx.stroke();
      ultimo = q;
    });
    const fin = () => { if (dibujando) { dibujando = false; guardarLienzo(); } };
    lienzo.addEventListener('pointerup', fin);
    lienzo.addEventListener('pointercancel', fin);

    const ta = document.createElement('textarea');
    ta.className = 'mi-texto'; ta.placeholder = 'Apuntes en texto…';
    ta.value = estado.ap[hoja] || '';
    ta.addEventListener('input', () => {
      estado.ap[hoja] = ta.value; guardar();
      sum.classList.toggle('tiene', !!ta.value.trim() || !!estado.apl[hoja]);
    });
    const caja = document.createElement('div'); caja.className = 'ap-texto'; caja.append(ta);
    d.append(barra, lienzo, caja);

    leerLienzo(`${GUIA}:${hoja}`).then(async (v) => {
      if (!v || !v.blob) return;
      lienzo.height = v.h || lienzo.height;
      const img = await createImageBitmap(v.blob);
      ctx.drawImage(img, 0, 0);
    }).catch(() => {});
  }

  // ------------------------------------------------------------------ progreso, índice y menú
  function actualizarProgreso() {
    const llenos = campos.filter((c) => c.input.value.trim()).length;
    estado.total = campos.length; estado.llenos = llenos;
    document.querySelector('.barra-prog').style.width = campos.length ? `${(100 * llenos) / campos.length}%` : '0';
    const porHoja = {};
    campos.forEach((c) => { const h = (porHoja[c.hoja] = porHoja[c.hoja] || [0, 0]); h[0]++; if (c.input.value.trim()) h[1]++; });
    document.querySelectorAll('.indice a[href^="#h"]').forEach((a) => {
      const h = porHoja[a.getAttribute('href').slice(2)];
      a.classList.toggle('hecho', !!h && h[0] === h[1]);
    });
  }

  function prepararMenu() {
    const nav = document.querySelector('.indice');
    const btn = document.querySelector('.barra .menu');
    btn.addEventListener('click', () => {
      nav.style.top = document.querySelector('.barra').offsetHeight + 'px';
      nav.style.maxHeight = `calc(100vh - ${document.querySelector('.barra').offsetHeight}px)`;
      nav.hidden = !nav.hidden; btn.setAttribute('aria-expanded', String(!nav.hidden)); });
    nav.addEventListener('click', (e) => { if (e.target.closest('a[href^="#"]')) { nav.hidden = true; btn.setAttribute('aria-expanded', 'false'); } });
    nav.querySelector('[data-accion="exportar"]').addEventListener('click', exportar);
    nav.querySelector('[data-accion="importar"]').addEventListener('change', (e) => importar(e.target.files[0]));
    nav.querySelector('[data-accion="borrar"]').addEventListener('click', borrarTodo);
  }

  // ------------------------------------------------------------------ copia de seguridad
  const aDataURL = (blob) => new Promise((ok) => { const r = new FileReader(); r.onload = () => ok(r.result); r.readAsDataURL(blob); });
  async function exportar() {
    const lienzos = {};
    for (const hoja of Object.keys(estado.apl)) {
      try { const v = await leerLienzo(`${GUIA}:${hoja}`); if (v && v.blob) lienzos[hoja] = { h: v.h, png: await aDataURL(v.blob) }; } catch { /* sin dibujo */ }
    }
    const datos = { guia: GUIA, fecha: new Date().toISOString(), estado, lienzos };
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([JSON.stringify(datos)], { type: 'application/json' }));
    a.download = `mi-trabajo-${GUIA}.json`;
    document.body.append(a); a.click(); a.remove();
  }
  async function importar(archivo) {
    if (!archivo) return;
    try {
      const datos = JSON.parse(await archivo.text());
      if (datos.guia !== GUIA) { avisoGlobal('Ese archivo es de otra guía.'); return; }
      localStorage.setItem(CLAVE, JSON.stringify(datos.estado));
      for (const [hoja, v] of Object.entries(datos.lienzos || {})) {
        const blob = await (await fetch(v.png)).blob();
        await escribirLienzo(`${GUIA}:${hoja}`, { h: v.h, blob });
      }
      location.reload();
    } catch { avisoGlobal('No se pudo leer el archivo de copia.'); }
  }
  async function borrarTodo() {
    if (!confirm('¿Borrar todas tus respuestas, apuntes y dibujos de esta guía en este dispositivo?')) return;
    localStorage.removeItem(CLAVE);
    try { await idb('readwrite', (s) => { Object.keys(estado.apl).forEach((h) => s.delete(`${GUIA}:${h}`)); }); } catch { /* nada que borrar */ }
    location.reload();
  }

  // ------------------------------------------------------------------ fórmulas y tablas que se deslizan
  // marca .mas-der / .mas-izq mientras quede contenido oculto a ese lado (el CSS desvanece ese borde)
  const DESLIZABLES = '.mb, table.t, .fig, .pasos > span:not(.p), pre.code, .sol, .trampas > div';
  function marcar(el) {
    const resto = el.scrollWidth - el.clientWidth;
    el.classList.toggle('mas-izq', resto > 2 && el.scrollLeft > 2);
    el.classList.toggle('mas-der', resto > 2 && el.scrollLeft < resto - 2);
  }
  function prepararDeslizables() {
    const ro = 'ResizeObserver' in window ? new ResizeObserver((es) => es.forEach((e) => marcar(e.target))) : null;
    document.querySelectorAll(DESLIZABLES).forEach((el) => {
      marcar(el);
      el.addEventListener('scroll', () => marcar(el), { passive: true });
      if (ro) ro.observe(el);
    });
    // un campo crece al escribir: puede aparecer (o desaparecer) contenido oculto
    document.addEventListener('input', (e) => { const el = e.target.closest?.(DESLIZABLES); if (el) marcar(el); });
    window.addEventListener('resize', () => document.querySelectorAll(DESLIZABLES).forEach(marcar));
  }

  // ------------------------------------------------------------------ inicio
  function iniciar() {
    prepararCampos();
    prepararBloques();
    prepararAbiertos();
    prepararApuntes();
    prepararMenu();
    prepararDeslizables();
    actualizarProgreso();
    guardar();
  }
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(iniciar); else iniciar();
})();
