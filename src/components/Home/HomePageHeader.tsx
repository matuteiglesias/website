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
					<Translate id="homepage.title">Matías Iglesias — Senior Data & AI Engineer</Translate>
				</h1>

				<h2 className={styles.tagline}>
					<Translate id="homepage.tagline">Reliable systems for data, documents, retrieval, and automation.</Translate>
				</h2>

				<p className={styles.description}>
					<Translate id="homepage.description2">
						I build Python/SQL systems that turn messy information into usable infrastructure: data pipelines, document-processing
						workflows, retrieval systems, dashboards, and AI-assisted automation tools.
					</Translate>
				</p>

				<p className={styles.description}>
					<Translate id="homepage.intro.background">
						My background combines software/data engineering with scientific training in economics and physics. I’m strongest where data,
						software, research judgment, and operational usefulness need to meet.
					</Translate>
				</p>

				<div className={styles.ctaGroup} aria-label="Primary links">
					<Link className="button button--primary button--lg" to="/docs/General/projects">
						<Translate id="homepage.cta.projects">View selected projects</Translate>
					</Link>
					<Link className="button button--secondary button--lg" to="/docs/General/cv">
						<Translate id="homepage.cta.cv">Read CV</Translate>
					</Link>
					<Link className="button button--secondary button--lg" to="https://github.com/matuteiglesias">
						GitHub
					</Link>
				</div>

				<div className={styles.secondaryLinks} aria-label="Secondary links">
					<Link to="https://www.linkedin.com/in/matiasiglesias/">LinkedIn</Link>
					<Link to="https://journal.matuteiglesias.link">
						<Translate id="homepage.secondary.journal">Developer Journal / Build Log</Translate>
					</Link>
					<Link to="https://thesis.matuteiglesias.link">
						<Translate id="homepage.secondary.thesis">Thesis and research background</Translate>
					</Link>
				</div>
			</div>
		</header>
	);
};

export default memo(HomePageHeader);
