import Link from '@docusaurus/Link';
import Translate, { translate } from '@docusaurus/Translate';
import Layout from '@theme/Layout';
import styles from './portfolio.module.css';

export default function Engineering(): JSX.Element {
	const title = translate({ id: 'engineering.title', message: 'AI & Data Engineering' });
	const description = translate({ id: 'engineering.description', message: 'Evidence-led AI, data and measurement systems.' });
	return (
		<Layout title={title} description={description}>
			<main className={styles.page}>
				<div className="container">
					<header className={styles.hero}>
						<p className={styles.eyebrow}>
							<Translate id="engineering.eyebrow">Engineering portfolio</Translate>
						</p>
						<h1>
							<Translate id="engineering.title">AI &amp; Data Engineering</Translate>
						</h1>
						<p className={styles.intro}>
							<Translate id="engineering.intro">
								I build reliable systems where modern AI workflows meet strong data models, statistical reasoning and operational
								constraints. The examples below show bounded model behavior, deterministic processing, testing and explicit authority
								boundaries.
							</Translate>
						</p>
					</header>

					<section id="ai-agent-systems" className={styles.lane}>
						<div className={styles.laneHeader}>
							<h2>
								<Translate id="engineering.ai.title">AI &amp; Agent Systems</Translate>
							</h2>
							<p>
								<Translate id="engineering.ai.intro">
									LLM-assisted systems are software: they need contextual access, testable components, failure paths and a clear
									human boundary around consequential output.
								</Translate>
							</p>
						</div>
						<div className={styles.cardGrid}>
							<article className={styles.card}>
								<h3>
									<Translate id="engineering.media.title">Media Monitor</Translate>
								</h3>
								<p>
									<Translate id="engineering.media.body">
										An end-to-end governed news workflow combining source ingestion, versioned contracts, editorial model
										integration, deterministic tests, revision branches and an explicit human publication gate.
									</Translate>
								</p>
								<p className={styles.meta}>
									<Translate id="engineering.media.evidence">Evidence: implementation, tests and public health contract.</Translate>
								</p>
								<div className={styles.links}>
									<Link to="/projects/media-monitor">
										<Translate id="engineering.case">Case study</Translate>
									</Link>
									<Link to="https://github.com/matuteiglesias/media_monitor">
										<Translate id="engineering.code">Code</Translate>
									</Link>
								</div>
							</article>
							<article className={styles.card}>
								<h3>
									<Translate id="engineering.mcp.title">Matías Context MCP</Translate>
								</h3>
								<p>
									<Translate id="engineering.mcp.body">
										A local, read-only resource gateway with bounded UTF-8/JSON reads, startup preflight, named sources,
										provenance hashes and protection against path and symlink escapes.
									</Translate>
								</p>
								<p className={styles.status}>
									<Translate id="engineering.mcp.status">Local implementation · not a hosted agent platform</Translate>
								</p>
								<div className={styles.links}>
									<Link to="/projects/matias-context-mcp">
										<Translate id="engineering.case">Case study</Translate>
									</Link>
									<Link to="https://github.com/matuteiglesias/matias-context-mcp">
										<Translate id="engineering.code">Code and tests</Translate>
									</Link>
								</div>
							</article>
						</div>
						<p className={styles.meta}>
							<Translate id="engineering.kb">Supporting pattern: </Translate>
							<Link to="/projects/kb-contracts">
								<Translate id="engineering.kb.link">Knowledge / Data Contracts</Translate>
							</Link>
							<Translate id="engineering.kb.end">, a public architecture reference rather than a flagship implementation.</Translate>
						</p>
					</section>

					<section id="data-measurement-systems" className={styles.lane}>
						<div className={styles.laneHeader}>
							<h2>
								<Translate id="engineering.data.title">Data, Measurement &amp; Decision Systems</Translate>
							</h2>
							<p>
								<Translate id="engineering.data.intro">
									I work with statistical inference, numerical and computational modeling, survey methodology, uncertainty and
									geospatial presentation—not only ETL.
								</Translate>
							</p>
						</div>
						<div className={styles.cardGrid}>
							<article className={styles.card}>
								<h3>
									<Translate id="engineering.accounting.title">Accounting Workflows</Translate>
								</h3>
								<p>
									<Translate id="engineering.accounting.body">
										A Python pipeline for source ingestion, canonical materialization, semantic marts, governed reports,
										validation and exact-run replay. Public explanation uses sanitized evidence and preserves a privacy boundary.
									</Translate>
								</p>
								<p className={styles.status}>
									<Translate id="engineering.accounting.status">Implemented pipeline · no client or certification claim</Translate>
								</p>
								<div className={styles.links}>
									<Link to="/projects/accounting-workflows">
										<Translate id="engineering.case">Case study</Translate>
									</Link>
									<Link to="https://github.com/matuteiglesias/accounting-workflows">
										<Translate id="engineering.code">Code</Translate>
									</Link>
								</div>
							</article>
							<article className={styles.card}>
								<h3>
									<Translate id="engineering.poverty.title">Argentina Poverty Measurement &amp; Atlas</Translate>
								</h3>
								<p>
									<Translate id="engineering.poverty.body">
										A governed survey-to-census statistical-geospatial pipeline with semantic alignment, model-support checks,
										explicit estimands and release boundaries between scientific production and public presentation.
									</Translate>
								</p>
								<p className={styles.status}>
									<Translate id="engineering.poverty.status">Research-grade infrastructure · release scope applies</Translate>
								</p>
								<div className={styles.links}>
									<Link to="/projects/public-data-poverty-eph">
										<Translate id="engineering.case">Case study</Translate>
									</Link>
									<Link to="https://github.com/matuteiglesias/argentina-poverty-atlas">
										<Translate id="engineering.code">Atlas code</Translate>
									</Link>
								</div>
							</article>
						</div>
					</section>

					<section className={styles.methods}>
						<h2>
							<Translate id="engineering.methods.title">Engineering methods</Translate>
						</h2>
						<p>
							<Translate id="engineering.methods.body">
								I start from the data model, the decision that a system must support, and the boundaries between sources, computation
								and authority. I favor simple, inspectable interfaces; deterministic processing where possible; bounded model or agent
								behavior where needed; and explicit tests, provenance and recovery paths. I use coding agents as collaborators in
								scoped development workflows, while retaining responsibility for design, review and release.
							</Translate>
						</p>
					</section>
				</div>
			</main>
		</Layout>
	);
}
