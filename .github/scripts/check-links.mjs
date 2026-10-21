// Monthly link check: every http(s) address in index.html and photos.js is
// requested once; dead ones (404, 410, 5xx, no answer) are reported, and
// ones a site refuses to robots (401, 403, 429) are listed apart, to check
// by hand. Writes link-report.md and exits 1 when any link is dead.
import { readFileSync, writeFileSync } from 'node:fs';

const files = ['index.html', 'photos.js'];
const skip = [/^https:\/\/fonts\.(googleapis|gstatic)\.com/, /^https:\/\/api\.github\.com/, /\{|\}|\$|'|…/];
const urls = new Set();
for (const f of files) {
  let src = '';
  try { src = readFileSync(f, 'utf8'); } catch { continue; }
  for (const m of src.matchAll(/https?:\/\/[^\s"'<>`)\]\\]+/g)) {
    const u = m[0].replace(/[.,;:]+$/, '');
    if (!skip.some(r => r.test(u))) urls.add(u);
  }
  /* the Gerador de Preços units are written as GDP_BASE + '/path' */
  const base = (/const GDP_BASE = '([^']+)'/.exec(src) || [])[1];
  if (base) for (const m of src.matchAll(/GDP_BASE \+ '(\/[^']+)'/g)) urls.add(base + m[1]);
}
const UA = 'Mozilla/5.0 (link check; construction-advisor-pt)';
async function probe(u) {
  for (const method of ['HEAD', 'GET']) {
    try {
      const r = await fetch(u, { method, redirect: 'follow', headers: { 'User-Agent': UA }, signal: AbortSignal.timeout(20000) });
      if (r.ok) return { u, s: r.status, ok: true };
      if (method === 'HEAD' && (r.status === 405 || r.status === 403 || r.status === 404)) continue;   // some servers refuse HEAD
      return { u, s: r.status, ok: false };
    } catch (e) {
      if (method === 'GET') return { u, s: 0, ok: false, err: e.cause?.code || e.name };
    }
  }
}
const list = [...urls];
const res = [];
for (let i = 0; i < list.length; i += 8) res.push(...await Promise.all(list.slice(i, i + 8).map(probe)));
const blocked = res.filter(r => !r.ok && [401, 403, 429].includes(r.s));
const dead = res.filter(r => !r.ok && ![401, 403, 429].includes(r.s));
const day = new Date().toISOString().slice(0, 10);
const md = [`Link check of ${day}: ${res.length} addresses, ${dead.length} dead, ${blocked.length} refused to the checker.`, ''];
if (dead.length) md.push('### Dead', '', ...dead.map(r => `- ${r.u} — ${r.s || r.err}`), '');
if (blocked.length) md.push('### Refused to the checker (open by hand)', '', ...blocked.map(r => `- ${r.u} — ${r.s}`), '');
writeFileSync('link-report.md', md.join('\n'));
console.log(md.join('\n'));
process.exit(dead.length ? 1 : 0);
