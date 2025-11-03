import Link from '@docusaurus/Link';
import type { FC } from 'react';
import Feature from './Features/Feature';
import StatisticsFeature from './Features/StatisticsFeature';
import type { FeatureItem } from './Features/Types';
import styles from './HomepageFeatures.module.css';

import Translate, { translate } from '@docusaurus/Translate';

/**
 * Note:
 * - Use translate() when the `title` must be a plain string.
 * - Use <Translate> when you need JSX or paragraphs inside the description.
 */

const FeatureList: FeatureItem[] = [
	{
		title: translate({
			id: 'features.about.title',
			message: 'About Me'
		}),
		description: (
			<>
				<Translate id="features.about.p1">
					I’m Matías Iglesias — an independent data scientist, AI builder, and institutional innovator.
				</Translate>
				<br />
				<br />
				<Translate id="features.about.p2">
					I specialize in developing intelligent tools and public knowledge systems that bridge the gap between technology and governance in
					Latin America.
				</Translate>
				<br />
				<br />
				<Translate id="features.about.p3">Let’s explore the systems I’ve built and the ideas that drive my work.</Translate>
			</>
		)
	},
	{
		title: translate({
			id: 'features.why.title',
			message: 'What Makes Me Different'
		}),
		description: (
			<>
				<ul>
					<li>
						<Translate id="features.why.li1">AI + Data Strategy</Translate>
					</li>
					<li>
						<Translate id="features.why.li2">Automation Architect</Translate>
					</li>
					<li>
						<Translate id="features.why.li3">Technical Depth + Vision</Translate>
					</li>
					<li>
						<Translate id="features.why.li4">Institutional Experience</Translate>
					</li>
					<li>
						<Translate id="features.why.li5">Global Perspective</Translate>
					</li>
				</ul>

				<p>
					<a href="https://journal.matuteiglesias.link" target="_blank" rel="noopener noreferrer">
						<Translate id="features.why.journal">📓 Explore my daily work on my Developer Journal</Translate>
					</a>
				</p>

				<p>
					<a href="https://thesis.matuteiglesias.link" target="_blank" rel="noopener noreferrer">
						<Translate id="features.why.thesisLink">Explore my groundbreaking PhD thesis on Aggregation</Translate>
					</a>{' '}
					—{' '}
					<Translate id="features.why.thesisDesc">
						a state-of-the-art contribution in computational economics, and a robust framework for tracking micro-to-macro relationships.
					</Translate>
				</p>
			</>
		)
	},
	{
		title: 'Connect with Me',
		description: (
			<>
				You can also find me here:
				<br />
				<br />
				<ul>
					<li>
						<Link to="https://www.linkedin.com/in/matiasiglesias/">LinkedIn</Link>
					</li>
					<li>
						<Link to="https://github.com/matuteiglesias">GitHub</Link>
					</li>
					<li>
						<Link to="https://growthlab.hks.harvard.edu/people/matias-iglesias">Harvard Kennedy School</Link>
					</li>
					<li>
						<Link to="https://www.researchgate.net/profile/Matias-Iglesias-9">ResearchGate</Link>
					</li>
					<li>
						<Link to="https://ideas.repec.org/cgi-bin/htsearch2?q=++++Matias+Nehuen+Iglesias">RePEc</Link>
					</li>
					<li>
						<Link to="https://dta.santannapisa.it/t/etd-11252020-152446/">Sant&apos;Anna Pisa Thesis</Link>
					</li>
					<li>
						<Link to="https://www.rcai.it/matias-iglesias/">RCAI Italy</Link>
					</li>
				</ul>
			</>
		)
	}
];

const HomePageFeatures: FC = () => (
	<section className={styles.features}>
		<div className="container">
			<div className="row">
				{FeatureList.map((props, idx) => (
					<Feature key={idx} {...props} />
				))}
			</div>
		</div>
	</section>
);

export default HomePageFeatures;
