import Link from '@docusaurus/Link';
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
	return (
		<header className={clsx('hero', styles.heroBanner)}>
			<div className="container">
				<h1 className="hero__title">
					<Translate id="homepage.title">Matías Iglesias, Senior Data & AI Engineer</Translate>
				</h1>

				<h2 className={styles.tagline}>
					<Translate id="homepage.tagline">Reliable systems for data, documents, retrieval, and automation.</Translate>
				</h2>

				<p className={styles.description}>
					<Translate id="homepage.description2">
						I design and build reliable software for AI workflows, documents and complex data, from ingestion and validation to controlled
						delivery.
					</Translate>
				</p>

				<p className={styles.description}>
					<Translate id="homepage.intro.background">
						My background in economics and physics, together with institutional work, helps me reason about measurement, reliability and
						real-world constraints.
					</Translate>
				</p>

				<div className={styles.ctaGroup} aria-label="Primary links">
					<Link className="button button--primary button--lg" to="/engineering">
						<Translate id="homepage.cta.engineering">Explore Engineering</Translate>
					</Link>
					<Link className="button button--secondary button--lg" to="/docs/General/cv">
						<Translate id="homepage.cta.cv">Read CV</Translate>
					</Link>
				</div>

				<div className={styles.secondaryLinks} aria-label="Secondary links">
					<Link to="/research">
						<Translate id="homepage.secondary.research">Research</Translate>
					</Link>
					<Link to="mailto:matuteiglesias@gmail.com">
						<Translate id="homepage.secondary.contact">Contact</Translate>
					</Link>
				</div>
			</div>
		</header>
	);
};

export default memo(HomePageHeader);
