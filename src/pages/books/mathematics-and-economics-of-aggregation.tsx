import Link from '@docusaurus/Link';
import Translate, { translate } from '@docusaurus/Translate';
import Layout from '@theme/Layout';
import styles from './aggregation-book.module.css';

const chapters = [
	'What is an economic aggregate?',
	'Heterogeneity, weights and concentration',
	'Micro shocks and aggregate moments',
	'Covariance and comovement',
	'Nonlinear transformations',
	'Economic networks and propagation',
	'Scale, population paths and diversification',
	'Measuring and validating aggregates'
];

export default function AggregationBook(): JSX.Element {
	const title = translate({ id: 'book.aggregation.title', message: 'Mathematics and Economics of Aggregation' });
	const description = translate({
		id: 'book.aggregation.meta',
		message:
			'A book by Matías Iglesias (2026) exploring economic aggregation, concentration, stochastic dependence, networks, scaling and validation.'
	});
	return (
		<Layout title={title} description={description}>
			<main className={styles.page}>
				<div className="container">
					<p>
						<Link to="/research">
							<Translate id="book.aggregation.back">← Research</Translate>
						</Link>
					</p>
					<div className={styles.hero}>
						<div
							className={styles.cover}
							role="img"
							aria-label="Book cover: Mathematics and Economics of Aggregation, Matías Iglesias, 2026"
						>
							<span className={styles.topline}>MATHEMATICAL ECONOMICS · 2026</span>
							<div className={styles.rule} />
							<span className={styles.coverTitle}>
								Mathematics
								<br />
								and Economics
								<br />
								of Aggregation
							</span>
							<span className={styles.symbol} aria-hidden="true">
								Σ
							</span>
							<span className={styles.author}>MATÍAS IGLESIAS</span>
						</div>
						<div>
							<p className={styles.eyebrow}>
								<Translate id="book.aggregation.label">BOOK · 2026</Translate>
							</p>
							<h1>Mathematics and Economics of Aggregation</h1>
							<p className={styles.byline}>Matías Iglesias · 2026</p>
							<p className={styles.lead}>
								<Translate id="book.aggregation.lead">
									A mathematical journey from heterogeneous microeconomic observations to meaningful aggregate quantities—and an
									account of the assumptions required to interpret them.
								</Translate>
							</p>
							<p className={styles.summary}>
								<Translate id="book.aggregation.summary">
									The book connects aggregation operators, weights and concentration, stochastic moments, covariance, nonlinear
									transformations, economic networks and population scaling. Its central concern is the boundary between an exact
									mathematical identity and a substantive economic inference.
								</Translate>
							</p>
							<div className={styles.facts}>
								<span>
									<strong>8</strong> <Translate id="book.aggregation.chapters">chapters</Translate>
								</span>
								<span>
									<strong>32</strong> <Translate id="book.aggregation.sections">sections</Translate>
								</span>
								<span>
									<strong>2026</strong> <Translate id="book.aggregation.year">authored</Translate>
								</span>
							</div>
							<div className={styles.actions}>
								<Link className="button button--primary" to="/research">
									<Translate id="book.aggregation.research">Research context</Translate>
								</Link>
								<a
									className="button button--secondary"
									href="mailto:matuteiglesias@gmail.com?subject=Mathematics%20and%20Economics%20of%20Aggregation"
								>
									<Translate id="book.aggregation.contact">Contact the author</Translate>
								</a>
							</div>
						</div>
					</div>
					<section className={styles.section}>
						<h2>
							<Translate id="book.aggregation.about">About the book</Translate>
						</h2>
						<p>
							<Translate id="book.aggregation.aboutBody">
								Written for mathematically inclined economists, physicists and quantitative researchers, this book connects formal
								aggregation with the empirical challenges of defining populations, measuring economic size, modeling comovement and
								interpreting large-scale regularities. Its worked examples distinguish mathematical consequences from assumptions
								about economic behavior.
							</Translate>
						</p>
					</section>
					<section className={styles.section}>
						<h2>
							<Translate id="book.aggregation.contents">Contents</Translate>
						</h2>
						<ol className={styles.toc}>
							{chapters.map((chapter, i) => (
								<li key={chapter}>
									<b>{String(i + 1).padStart(2, '0')}</b>
									<span>{chapter}</span>
								</li>
							))}
						</ol>
					</section>
					<p className={styles.note}>
						<Translate id="book.aggregation.publication">
							Publication arrangements are being developed. For academic and professional inquiries, contact the author.
						</Translate>
					</p>
				</div>
			</main>
		</Layout>
	);
}
