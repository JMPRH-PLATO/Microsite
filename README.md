# Site do projeto (Docusaurus)

## Correr
```bash
npm install     # só na primeira vez
npm start       # abre em http://localhost:3000 e recarrega sozinho
npm run build   # gera o site final na pasta build/
```

## Onde alterar (procura ✏️ nos ficheiros)
| O quê | Onde |
|---|---|
| Nome, subtítulo, versão, links GitHub/Jira, rodapé | `docusaurus.config.js` (topo do ficheiro) |
| Abas do menu | `docusaurus.config.js` → `navbar.items` |
| Descrição da página inicial | `src/pages/index.js` |
| Cores e tipos de letra | `src/css/custom.css` |
| Logótipo / imagem de fundo | `static/img/logo.svg`, `static/img/hero.jpg` |
| Milestones | um ficheiro `.md` por milestone em `milestones/` (copia `m3.md` → `m4.md`) |
| Calendar, Team | `src/pages/*.md` |
| Notes | um ficheiro `.md` por nota em `docs/` |
# Microsite
# Microsite
