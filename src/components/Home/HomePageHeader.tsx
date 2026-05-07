import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import * as _clsxModule from 'clsx';

import { memo, type FC } from 'react';
import styles from './HomePageHeader.module.css';
import Translate from '@docusaurus/Translate';
const clsx: (...parts: any[]) => string =
	typeof _clsxModule === 'function'
		? (_clsxModule as unknown as (...parts: any[]) => string)
		: _clsxModule && typeof (_clsxModule as any).default === 'function'
			? ((_clsxModule as any).default as (...parts: any[]) => string)
			: (...parts: any[]) => parts.filter(Boolean).join(' ');

const HomePageHeader: FC = () => {
	const { siteConfig } = useDocusaurusContext();

	return (
		<header className={clsx('hero', styles.heroBanner)}>
			<div className="container">
				{/* Optional Logo */}
				{/* <img src="/icons/matias-logo.svg" alt="Matías Logo" className={styles.logo} /> */}

				{/* Main Title */}
				<h1 className="hero__title">{siteConfig.title}</h1>

				{/* One-liner Tagline */}
				<h2 className={styles.tagline}>
					<Translate id="homepage.tagline">Data & AI systems engineer</Translate>
				</h2>

				{/* Optional Description */}
				<p className={styles.description}>
					<Translate id="homepage.description2">I build reliable systems for data, documents, models, and automation.</Translate>
				</p>

				{/* Optional CTA Button */}
				{/* <a href="/projects" className={styles.ctaButton}>View My Projects</a> */}
			</div>
		</header>
	);
};

export default memo(HomePageHeader);
