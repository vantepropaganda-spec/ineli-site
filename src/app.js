// Endereço do app. Vazio = mesmo domínio. Defina, por exemplo, "https://app.ineli.com.br".
const APP_URL = "";
document.querySelectorAll("[data-cta]").forEach(a => {
  const h = a.getAttribute("href");
  if (h && h.startsWith("/")) a.href = APP_URL + h;
});

// aparecer ao rolar
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const rev = document.querySelectorAll(".reveal");
if (reduce || !("IntersectionObserver" in window)) rev.forEach(e => e.classList.add("in"));
else {
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .12 });
  rev.forEach(e => io.observe(e));
}

// calculadora
const BRL = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
const $ = id => document.getElementById(id);
const meter = $("meter");
for (let i = 0; i < 16; i++) meter.appendChild(document.createElement("i"));
function calc() {
  const meta = +$("meta").value, n = +$("prazo").value, i = 0.008;
  const pmt = meta * i / (Math.pow(1 + i, n) - 1);
  $("metaOut").textContent = BRL.format(meta);
  $("prazoOut").textContent = n >= 24 && n % 12 === 0 ? `${n} meses (${n / 12} anos)` : `${n} meses`;
  $("parcela").textContent = BRL.format(pmt);
  [...meter.children].forEach((b, k) => {
    const m = Math.round(n * (k + 1) / 16);
    const acc = pmt * (Math.pow(1 + i, m) - 1) / i;
    b.style.height = Math.max(6, acc / meta * 100) + "%";
  });
}
$("meta").addEventListener("input", calc);
$("prazo").addEventListener("input", calc);
calc();

// vitrine: índice com prévia
const facts = [
  "Saldo, entradas e saídas do mês na primeira tela.",
  "Metas com foto e progresso. Guarde um valor quando quiser.",
  "Aportes e retiradas registrados, com a evolução do total.",
  "Pergunte em português e receba a conta feita com seus lançamentos."
];
const tabs = [...document.querySelectorAll(".index button")];
const panes = [...document.querySelectorAll(".show-pane")];
const colors = ["var(--lime)", "var(--paper)", "var(--deep-2)", "var(--lime)"];
function pick(i) {
  tabs.forEach((t, k) => t.setAttribute("aria-selected", k === i));
  panes.forEach((p, k) => p.classList.toggle("on", k === i));
  $("fact").textContent = facts[i];
  $("badge").style.background = colors[i];
}
tabs.forEach((t, k) => { t.addEventListener("click", () => pick(k)); t.addEventListener("pointerenter", e => { if (e.pointerType === "mouse") pick(k); }); });
