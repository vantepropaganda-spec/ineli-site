# Site de venda do Ineli — handoff

Estado: v1 estática pronta (index.html + src/styles.css + src/app.js + assets/). Sem build; servir com `python3 -m http.server`.

## Objetivo
Converter visitante em cadastro do teste de 7 dias (sem cartão; depois R$ 19,90/mês). CTA "Começar grátis" -> `/login?cadastro=1` do app.

## Feito na v1.1
- Seção "Em breve" (WhatsApp, Open Finance) antes do FAQ.
- Meta tags OG/Twitter, favicon PNG, apple-touch-icon e `assets/og.png` (1200x630).
- Ajustes: bloco "1 plano" maior no desktop; plano "Teste" mais compacto no mobile.

Domínio do site: https://ineli.com.br (canonical/og configurados).

## Pendências
- Definir domínio do app e preencher `APP_URL` em src/app.js.
- Criar/ligar páginas reais de `/termos` e `/politica-de-ia` (docs no Project: termos-de-uso, politica-de-uso-ia). Não criei: o texto jurídico precisa vir dos docs.
- Revisar copy do FAQ e valores de exemplo dos mockups; confirmar rendimento 0,8% a.m. da calculadora.
- Rodar inspect.mjs da skill design-taste-frontend (não rodei).
- Hospedagem (estática, qualquer uma).

## Referências
Marca: lime #c6fb3d sobre #0a0d12, Plus Jakarta Sans. Motivo: três colunas + ponto. Roadmap e docs no Project "Ineli".
No repo do app (financas-pessoais): commit local do login `?cadastro=1` ainda sem push (erro 503) — rodar `git push origin main`.
