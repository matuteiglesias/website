import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import clsx from 'clsx';
import { memo, type FC } from 'react';
import styles from './HomePageHeader.module.css';

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
				<h2 className={styles.tagline}>Data Scientist, AI Builder, and Institutional Innovator</h2>

				{/* Optional Description */}
				<p className={styles.description}>Building intelligent tools and public knowledge systems in Latin America.</p>

				{/* Optional CTA Button */}
				{/* <a href="/projects" className={styles.ctaButton}>View My Projects</a> */}
			</div>
		</header>
	);
};

export default memo(HomePageHeader);
