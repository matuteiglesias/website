// body?

// <!-- Google Tag Manager (noscript) -->
// <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M6XT2K6T"
// height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
// <!-- End Google Tag Manager (noscript) -->

import Head from '@docusaurus/Head';
import { memo, type FC } from 'react';

const HeadTags: FC = () => {
	return (
		<Head>
			<script
				dangerouslySetInnerHTML={{
					__html: `
				(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
				new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
				j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
				'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
				})(window,document,'script','dataLayer','GTM-M6XT2K6T');
				`
				}}
			/>

			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'BreadcrumbList',
						itemListElement: [
							{
								'@type': 'ListItem',
								position: 1,
								name: 'Home',
								item: 'https://main.matuteiglesias.link/'
							},
							{
								'@type': 'ListItem',
								position: 2,
								name: 'General',
								item: 'https://main.matuteiglesias.link/docs/General/'
							},
							{
								'@type': 'ListItem',
								position: 3,
								name: 'Welcome',
								item: 'https://main.matuteiglesias.link/docs/General/Welcome'
							}
						]
					})
				}}
			/>

			{/* Basic Metadata */}
			<meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
			<meta name="description" content="MI — Data Scientist, AI Builder, Institutional Innovator." />
			<meta name="author" content="Matías Iglesias" />

			{/* Canonical URL */}
			<link rel="canonical" href="https://main.matuteiglesias.link" />
			<link rel="alternate" hrefLang="en" href="https://main.matuteiglesias.link/" />
			<link rel="alternate" hrefLang="es" href="https://main.matuteiglesias.link/es/" />
			<link rel="alternate" hrefLang="pt" href="https://main.matuteiglesias.link/pt/" />

			{/* Preconnect and Fonts */}
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
			<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;700&display=swap" />

			{/* Icons */}
			<link rel="apple-touch-icon" sizes="57x57" href="/icons/apple-icon-57x57.png" />
			<link rel="apple-touch-icon" sizes="60x60" href="/icons/apple-icon-60x60.png" />
			<link rel="apple-touch-icon" sizes="72x72" href="/icons/apple-icon-72x72.png" />
			<link rel="apple-touch-icon" sizes="76x76" href="/icons/apple-icon-76x76.png" />
			<link rel="apple-touch-icon" sizes="114x114" href="/icons/apple-icon-114x114.png" />
			<link rel="apple-touch-icon" sizes="120x120" href="/icons/apple-icon-120x120.png" />
			<link rel="apple-touch-icon" sizes="144x144" href="/icons/apple-icon-144x144.png" />
			<link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-icon-152x152.png" />
			<link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-icon-180x180.png" />
			<link rel="icon" type="image/png" sizes="192x192" href="/icons/android-icon-192x192.png" />
			<link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
			<link rel="icon" type="image/png" sizes="96x96" href="/icons/favicon-96x96.png" />
			<link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
			<link rel="shortcut icon" href="/icons/favicon.ico" />
			<link rel="manifest" href="/icons/manifest.json" />
			<meta name="msapplication-TileColor" content="#ffffff" />
			<meta name="msapplication-TileImage" content="/icons/ms-icon-144x144.png" />
			<meta name="theme-color" content="#ffffff" />

			{/* Optional SEO Enhancements */}
			<meta property="og:title" content="Matías Iglesias — Data Scientist, AI Builder" />
			<meta property="og:description" content="Building intelligent tools and public knowledge systems in Latin America." />
			<meta property="og:url" content="https://main.matuteiglesias.link" />
			<meta property="og:type" content="website" />
			<meta property="og:image" content="/icons/android-icon-192x192.png" />

			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content="Matías Iglesias — Data Scientist, AI Builder" />
			<meta name="twitter:description" content="Building intelligent tools and public knowledge systems in Latin America." />
			<meta name="twitter:image" content="/icons/android-icon-192x192.png" />
		</Head>
	);
};

export default memo(HeadTags);
