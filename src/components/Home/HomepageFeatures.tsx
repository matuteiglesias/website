import Link from '@docusaurus/Link';
import type { FC } from 'react';
import styles from './HomepageFeatures.module.css';

import Translate from '@docusaurus/Translate';

const HomePageFeatures: FC = () => (
	<main className={styles.features}>
		<section className="container">
			<div className={styles.sectionGrid}>
				<div>
					<h2>
						<Translate id="features.build.title">What I build</Translate>
					</h2>
					<ul className={styles.checkList}>
						<li>
							<Translate id="features.build.li1">Data pipelines and structured datasets</Translate>
						</li>
						<li>
							<Translate id="features.build.li2">RAG and document-processing workflows</Translate>
						</li>
						<li>
							<Translate id="features.build.li3">Automation layers for repeated operational work</Translate>
						</li>
						<li>
							<Translate id="features.build.li4">Dashboards and decision surfaces</Translate>
						</li>
						<li>
							<Translate id="features.build.li5">Validation, contracts, and reproducible workflows</Translate>
						</li>
					</ul>
				</div>

				<div>
					<h2>
						<Translate id="features.links.title">Background links</Translate>
					</h2>
					<p>
						<Link to="https://journal.matuteiglesias.link">
							<Translate id="features.links.journal">Developer journal / build log</Translate>
						</Link>
					</p>
					<p>
						<Link to="https://thesis.matuteiglesias.link">
							<Translate id="features.links.thesis">PhD thesis and research background</Translate>
						</Link>
					</p>
				</div>
			</div>
		</section>

		<section className="container">
			<h2 id="selected-projects">
				<Translate id="features.projects.title">Selected projects</Translate>
			</h2>
			<div className={styles.projectGrid}>
				<article className={styles.projectCard}>
					<h3>Media Monitor</h3>
					<p>
						<Translate id="features.projects.media.desc">
							An AI/data automation system that turns raw news inputs into structured briefs, drafts, and human-reviewable outputs.
						</Translate>
					</p>
					<ul>
						<li>
							<Translate id="features.projects.media.bullet1">Python automation</Translate>
						</li>
						<li>
							<Translate id="features.projects.media.bullet2">data contracts and validation</Translate>
						</li>
						<li>
							<Translate id="features.projects.media.bullet3">publishing/deploy workflow</Translate>
						</li>
						<li>
							<Translate id="features.projects.media.bullet4">operational handoff design</Translate>
						</li>
					</ul>
					<Link to="/projects/media-monitor">
						<Translate id="features.projects.media.link">View proof capsule</Translate>
					</Link>
				</article>

				<article className={styles.projectCard}>
					<h3>Knowledge / Data Contracts</h3>
					<p>
						<Translate id="features.projects.contracts.desc">
							A contracts layer for making AI and knowledge workflows inspectable, testable, and maintainable across repositories.
						</Translate>
					</p>
					<ul>
						<li>
							<Translate id="features.projects.contracts.bullet1">schemas</Translate>
						</li>
						<li>
							<Translate id="features.projects.contracts.bullet2">run records</Translate>
						</li>
						<li>
							<Translate id="features.projects.contracts.bullet3">integration seams</Translate>
						</li>
						<li>
							<Translate id="features.projects.contracts.bullet4">smoke tests</Translate>
						</li>
					</ul>
					<Link to="/projects/kb-contracts">
						<Translate id="features.projects.contracts.link">View proof capsule</Translate>
					</Link>
				</article>

				<article className={styles.projectCard}>
					<h3>Public Data / Poverty &amp; EPH Work</h3>
					<p>
						<Translate id="features.projects.publicData.desc">
							Applied economic and public-data systems combining survey data, reproducible analysis, and decision-oriented outputs.
						</Translate>
					</p>
					<ul>
						<li>
							<Translate id="features.projects.publicData.bullet1">Python data processing</Translate>
						</li>
						<li>
							<Translate id="features.projects.publicData.bullet2">public microdata</Translate>
						</li>
						<li>
							<Translate id="features.projects.publicData.bullet3">reproducible research workflows</Translate>
						</li>
						<li>
							<Translate id="features.projects.publicData.bullet4">analytical reporting</Translate>
						</li>
					</ul>
					<Link to="/projects/public-data-poverty-eph">
						<Translate id="features.projects.publicData.link">View proof capsule</Translate>
					</Link>
				</article>
			</div>
		</section>
	</main>
);

export default HomePageFeatures;
