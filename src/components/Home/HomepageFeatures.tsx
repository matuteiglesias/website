import Link from '@docusaurus/Link';
import type { FC } from 'react';
import Feature from './Features/Feature';
import StatisticsFeature from './Features/StatisticsFeature';
import type { FeatureItem } from './Features/Types';
import styles from './HomepageFeatures.module.css';

const FeatureList: FeatureItem[] = [
	{
		title: 'About Me',
		description: (
			<>
				I’m Matías Iglesias — an independent data scientist, AI builder, and institutional innovator.
				<br />
				<br />
				I specialize in developing intelligent tools and public knowledge systems that bridge the gap between technology and governance in
				Latin America.
				<br />
				<br />
				Let’s explore the systems I’ve built and the ideas that drive my work.
			</>
		)
	},
	{
		title: 'What Makes Me Different',
		description: (
			<>
				<ul>
					<li>AI + Data Strategy</li>
					<li>Automation Architect</li>
					<li>Technical Depth + Vision</li>
					<li>Institutional Experience</li>
					<li>Global Perspective</li>
				</ul>
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
					<li>
						<Link to="https://cenital.com/author/matias-nehuen-iglesias/">Cenital</Link>
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
