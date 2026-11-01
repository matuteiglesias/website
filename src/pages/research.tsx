import Link from '@docusaurus/Link';
import Translate, { translate } from '@docusaurus/Translate';
import Layout from '@theme/Layout';
import styles from './portfolio.module.css';

export default function Research(): JSX.Element {
	const title = translate({ id: 'research.title', message: 'Research' });
	const description = translate({
		id: 'research.description',
		message: 'Independent research on aggregation, measurement and economic geography.'
	});
	return (
		<Layout title={title} description={description}>
			<main className={styles.page}>
				<div className="container">
					<header className={styles.hero}>
						<p className={styles.eyebrow}>
							<Translate id="research.eyebrow">Research programme</Translate>
						</p>
						<h1>
							<Translate id="research.title">Research</Translate>
						</h1>
						<p className={styles.intro}>
							<Translate id="research.identity">
								I pursue an independent research programme on how aggregation, heterogeneity, volatility, normalization and spatial
								support shape economic quantities and decisions.
							</Translate>
						</p>
					</header>

					<section className={styles.lane}>
						<div className={styles.laneHeader}>
							<h2>
								<Translate id="research.question.title">Core question</Translate>
							</h2>
							<p>
								<Translate id="research.question.body">
									What changes when observations are grouped, weighted, normalized or located in space—and which conclusions survive
									those transformations?
								</Translate>
							</p>
						</div>
						<div className={styles.cardGrid}>
							<article className={styles.card}>
								<h3>
									<Translate id="research.pillar.aggregation">Aggregation, heterogeneity &amp; volatility</Translate>
								</h3>
								<p>
									<Translate id="research.pillar.aggregation.body">
										The central pillar: understanding how distributions, composition and temporal variation affect aggregate
										indicators.
									</Translate>
								</p>
							</article>
							<article className={styles.card}>
								<h3>
									<Translate id="research.pillar.lq">Specialization &amp; location quotients</Translate>
								</h3>
								<p>
									<Translate id="research.pillar.lq.body">
										Measurement of specialization under finite samples, probabilistic structure and size-related distortions.
									</Translate>
								</p>
							</article>
							<article className={styles.card}>
								<h3>
									<Translate id="research.pillar.geo">Geographic correlations &amp; spatial support</Translate>
								</h3>
								<p>
									<Translate id="research.pillar.geo.body">
										How normalization, geography and support affect correlations and interpretation in economic data.
									</Translate>
								</p>
							</article>
						</div>
					</section>

					<section className={styles.lane}>
						<div className={styles.laneHeader}>
							<h2>
								<Translate id="research.outputs.title">Selected outputs</Translate>
							</h2>
						</div>
						<div className={styles.cardGrid}>
							<article className={styles.card}>
								<p className={styles.status}>
									<Translate id="research.status.published">Published peer-reviewed</Translate>
								</p>
								<h3>
									<Translate id="research.lq.title">Measuring Size Distortions of Location Quotients</Translate>
								</h3>
								<p>
									<Translate id="research.lq.body">
										International Economics, 2021. A peer-reviewed study of size distortions in location quotients.
									</Translate>
								</p>
								<Link to="https://doi.org/10.1016/j.inteco.2021.05.005">
									<Translate id="research.doi">Read the DOI record</Translate>
								</Link>
							</article>
							<article className={styles.card}>
								<p className={styles.status}>
									<Translate id="research.status.thesis">Doctoral thesis</Translate>
								</p>
								<h3>
									<Translate id="research.thesis.title">Essays in the Economics of Aggregation</Translate>
								</h3>
								<p>
									<Translate id="research.thesis.body">
										The doctoral thesis is a separate academic output, not an additional journal publication.
									</Translate>
								</p>
							</article>
							<article className={styles.card}>
								<p className={styles.status}>
									<Translate id="research.status.manuscript">Current manuscript</Translate>
								</p>
								<h3>
									<Translate id="research.manuscript.title">Concentration Is Not Scaling</Translate>
								</h3>
								<p>
									<Translate id="research.manuscript.body">
										A current manuscript with formal and empirical work on aggregation. It is not presented as an arXiv preprint
										or journal publication.
									</Translate>
								</p>
							</article>
							<article className={styles.card}>
								<p className={styles.status}>
									<Translate id="research.status.working">Working paper</Translate>
								</p>
								<h3>
									<Translate id="research.geo.title">
										The Overlooked Insights from Correlation Structures in Economic Geography
									</Translate>
								</h3>
								<p>
									<Translate id="research.geo.body">
										A 2021 working paper on geographic correlation structures, distinct from the peer-reviewed LQ paper.
									</Translate>
								</p>
							</article>
						</div>
					</section>

					<section className={styles.lane}>
						<div className={styles.laneHeader}>
							<h2>
								<Translate id="research.applied.title">Applied and computational work</Translate>
							</h2>
						</div>
						<div className={styles.cardGrid}>
							<article className={styles.card}>
								<p className={styles.status}>
									<Translate id="research.status.progress">Research in progress</Translate>
								</p>
								<h3>
									<Translate id="research.poverty.title">Poverty measurement</Translate>
								</h3>
								<p>
									<Translate id="research.poverty.body">
										Survey and geographic measurement work with explicit uncertainty, interpretation and external-validity limits.
									</Translate>
								</p>
								<Link to="/projects/public-data-poverty-eph">
									<Translate id="research.engineering">See the engineering evidence</Translate>
								</Link>
							</article>
							<article className={styles.card}>
								<p className={styles.status}>
									<Translate id="research.status.software">Software / research artifact</Translate>
								</p>
								<h3>
									<Translate id="research.abm.title">K+S-inspired agent-based model revival</Translate>
								</h3>
								<p>
									<Translate id="research.abm.body">
										A computational reconstruction with bounded software evidence; model equivalence, calibration and scientific
										validity remain open.
									</Translate>
								</p>
							</article>
						</div>
					</section>

					<section className={styles.methods}>
						<h2>
							<Translate id="research.methods.title">Methods and academic record</Translate>
						</h2>
						<p>
							<Translate id="research.methods.body">
								The programme combines analytical derivation, simulation, statistical measurement, reproducible computation and
								careful separation of estimands, evidence and interpretation.
							</Translate>
						</p>
						<p>
							<Translate id="research.methods.portalIntro">
								The full research portal collects the thesis and related materials.
							</Translate>{' '}
							<Link to="https://thesis.matuteiglesias.link/">
								<Translate id="research.methods.portal">Explore the full research programme</Translate>
							</Link>
						</p>
					</section>
				</div>
			</main>
		</Layout>
	);
}
