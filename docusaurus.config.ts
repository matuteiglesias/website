import type { Config } from '@docusaurus/types';
import { themes } from 'prism-react-renderer';

const isPwaEnabled = process.env.DISABLE_PWA !== '1';

// Optional: If you're not using code samples, you can remove this line too.

const Description =
	'Senior Data & AI Engineer building reliable systems for data, documents, retrieval, and automation using Python, SQL, LLM APIs, RAG, BigQuery/GCP, and workflow automation.';
const BaseUrl = 'https://main.matuteiglesias.link';
// const Email = 'youremail@domain.com'; // Optional — comment or add your email
const Title = 'Matías Iglesias — Senior Data & AI Engineer';

const Email = 'matuteiglesias@gmail.com';

const baseTypedocOptions = {
	/* typedoc */
	includeVersion: true,

	/* typedoc-plugin-markdown */
	fileExtension: '.md',
	excludeExternals: true,
	expandParameters: true,
	parametersFormat: 'table',
	enumMembersFormat: 'table',
	indexFormat: 'table'
};

const config: Config = {
	title: Title,
	url: BaseUrl,
	baseUrl: '/',
	onBrokenLinks: 'warn',
	onBrokenMarkdownLinks: 'warn',
	onDuplicateRoutes: 'warn',
	favicon: 'favicon.ico',
	tagline: 'Python, SQL, RAG, automation, and reliable data systems',
	organizationName: 'matuteiglesias', // your GitHub username or any organization you prefer
	projectName: 'website', // name of the repo or just 'website'
	themes: [],
	markdown: {
		format: 'detect'
	},
	future: {
		v4: true,
		experimental_faster: true
	},

	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'es'], // Example: English, French, Spanish
		localeConfigs: {
			en: {
				htmlLang: 'en-US'
			},
			es: {
				htmlLang: 'es-ES'
			}
		}
	},

	plugins: [],

	presets: [
		[
			'classic',
			{
				docs: {
					sidebarPath: './sidebars.ts',
					editUrl: 'https://github.com/matuteiglesias/website/edit/main/',
					showLastUpdateAuthor: true,
					showLastUpdateTime: true
				},
				blog: false,
				theme: {
					customCss: ['./src/css/custom.css', './src/css/tippy-discord.css']
				}
			}
		]
	],

	themeConfig: {
		image: 'icons/matias-logo32.png',
		colorMode: {
			defaultMode: 'dark',
			respectPrefersColorScheme: true
		},

		metadata: [
			{ name: 'apple-mobile-web-app-capable', content: 'yes' },
			{ name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
			{ name: 'apple-mobile-web-app-title', content: Title },
			{ name: 'application-name', content: Title },
			{ name: 'audience', content: 'all' },
			{ name: 'author', content: `Sapphire Community, ${Email}` },
			{ name: 'coverage', content: 'Worldwide' },
			{ name: 'description', content: Description },
			{ name: 'designer', content: `Sapphire Community, ${Email}` },
			{ name: 'distribution', content: 'Global' },
			{ name: 'googlebot', content: 'index,follow' },
			{ name: 'HandheldFriendly', content: 'True' },
			{ name: 'identifier-URL', content: BaseUrl },
			{ name: 'keywords', content: 'Python, SQL, RAG, automation, data engineering, AI engineering, document processing, BigQuery, GCP' },
			{ name: 'msapplication-config', content: '/browserconfig.xml' },
			{ name: 'msapplication-TileColor', content: '#23529B' },
			{ name: 'msapplication-TileImage', content: '/icons/mstile-144x144.png' },
			{ name: 'owner', content: `Sapphire Community, ${Email}` },
			{ name: 'rating', content: 'safe for kids' },
			{ name: 'reply-to', content: Email },
			{ name: 'revisit-after', content: '7 days' },
			{ name: 'robots', content: 'archive,follow,imageindex,index,odp,snippet,translate' },
			{ name: 'shortlink', content: BaseUrl },
			{ name: 'subject', content: 'Personal website for Matías Iglesias, Senior Data & AI Engineer' },
			{ name: 'summary', content: Description },
			{ name: 'target', content: 'all' },
			{ name: 'theme-color', content: '#23529B' },
			{ name: 'twitter:card', content: 'summary' },
			{ name: 'twitter:creator', content: '@WolfgalVlad' },
			{ name: 'twitter:site', content: '@WolfgalVlad' },
			{ name: 'url', content: BaseUrl },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ property: 'og:description', content: Description },
			{ property: 'og:email', content: Email },
			{ property: 'og:image:alt', content: 'OpenGraphImage' },
			{ property: 'og:image:height', content: '512' },
			{ property: 'og:image:width', content: '1024' },
			{ property: 'og:locale', content: 'en_US' },
			{ property: 'og:site_name', content: Title },
			{ property: 'og:title', content: Title },
			{ property: 'og:type', content: 'website' },
			{ property: 'og:url', content: BaseUrl }
		],
		navbar: {
			title: 'Matías Iglesias',
			logo: {
				alt: 'Matías Iglesias Logo',
				src: 'icons/matias-logo32.png' // optional — replace with your logo
			},
			items: [
				{
					to: '/',
					label: 'Home',
					position: 'left',
					activeBaseRegex: '^/$'
				},
				{
					to: 'projects/media-monitor',
					label: 'Projects',
					position: 'left'
				},
				{
					to: 'docs/General/cv',
					label: 'CV',
					position: 'left'
				},
				{
					href: 'https://github.com/matuteiglesias',
					label: 'GitHub',
					position: 'right'
				},
				{
					href: 'mailto:matuteiglesias@gmail.com',
					label: 'Contact',
					position: 'right'
				},
				{
					type: 'localeDropdown',
					position: 'right' // Or 'left'
				}
			]
		},
		footer: {
			style: 'dark',
			// Optional logo (replace with your own or remove entirely)
			logo: {
				alt: 'Matías Iglesias Logo',
				src: 'icons/matias-logo32.png'
			},
			links: [], // no links needed — already featured elsewhere
			copyright: `© ${new Date().getFullYear()} Matías Iglesias. All rights reserved.`
		},
		prism: {
			defaultLanguage: 'javascript',
			additionalLanguages: ['powershell', 'batch'],
			theme: themes.github,
			darkTheme: themes.vsDark
		},
		algolia: {
			appId: 'WWVT30WAIZ',
			apiKey: 'c1639f17b4ed5183d032d2e7f22ec62f',
			indexName: 'sapphirejs',
			contextualSearch: false
		}
	}
};

export default config;
