// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/* =====================================================================
   CONFIGURACAO GLOBAL DO SITE
   Tudo o que se repete em todas as paginas esta aqui em cima.
   Depois de mudares algo, o `npm start` recarrega sozinho.
   ===================================================================== */
const PROJECT_NAME = 'PLATO';                              //  nome do projeto (menu, pagina inicial, separador)
const TAGLINE      = 'Autonomous platooning system';       //  subtitulo na pagina inicial
const VERSION      = 'v0.4.0';                             //  versao ao lado do nome ('' para esconder)
const GITHUB_URL   = 'https://github.com/JMPRH-PLATO';//  link da organizacao no GitHub
const JIRA_URL     = 'https://autonomous-control.atlassian.net/jira/';// link do quadro no Jira
const FOOTER       = 'Universidade de Aveiro · 2026/2027'; //  texto do rodape

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: PROJECT_NAME,
  tagline: TAGLINE,
  favicon: 'img/Logo.png',

  future: {v4: true},

  // Para quando publicar (GitHub Pages)
  url: 'https://jmprh-plato.github.io',
  baseUrl: '/Microsite/',
  organizationName: 'JMPRH-PLATO',
  projectName: 'plato-microsite',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  i18n: {defaultLocale: 'en', locales: ['en']},

  // Tipos de letra (Google Fonts)
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@500;600&family=IBM+Plex+Sans:wght@400;500;600&display=swap',
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'milestones',
        path: 'milestones',
        routeBasePath: 'milestones',
        sidebarPath: './sidebarsMilestones.js',
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          routeBasePath: 'notes',
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {customCss: './src/css/custom.css'},
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {defaultMode: 'dark', disableSwitch: true, respectPrefersColorScheme: false},

      navbar: {
        //title: PROJECT_NAME,
        logo: {alt: '', src: 'img/Logo.png'},
        items: [

          //ABBAS
          {to: '/', label: 'Overview', position: 'right', activeBaseRegex: '^/$'},
          {type: 'docSidebar', docsPluginId: 'milestones', sidebarId: 'milestonesSidebar', label: 'Milestones', position: 'right'},
          {to: '/calendar', label: 'Calendar', position: 'right'},
          {to: '/team', label: 'Team', position: 'right'},
          {type: 'docSidebar', sidebarId: 'notesSidebar', label: 'Notes', position: 'right'},

          //links externos
          {href: GITHUB_URL, label: 'GitHub', position: 'right', className: 'ext-link ext-link--github ext-link--first'},
          {href: JIRA_URL, label: 'Jira', position: 'right', className: 'ext-link ext-link--jira'},
        ],
      },

      footer: {
        style: 'dark',
        copyright: FOOTER,
      },

      prism: {theme: prismThemes.github, darkTheme: prismThemes.dracula},
    }),
};

export default config;
