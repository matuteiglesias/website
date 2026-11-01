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
								I implement AI-assisted workflows and statistical data products with explicit contracts between source records,
								computation and release. The cases below show where models operate, how outputs are checked and who retains authority.
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
									I keep generated drafts separate from durable records, make publication conditional on explicit approval, and
									restrict agent context to named, read-only resources.
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
									My data work combines survey methodology, statistical inference, reproducible pipelines and geospatial delivery,
									with explicit checks on uncertainty and model support.
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

					<section className={styles.lane}>
						<div className={styles.laneHeader}>
							<h2>
								<Translate id="engineering.additional.title">Additional technical evidence</Translate>
							</h2>
						</div>
						<ol className={styles.proofList}>
							<li className={styles.card}>
								<p>
									<Translate id="engineering.additional.census">
										I reconstructed dwelling, household and person records from Argentina’s 2022 Census RedatamX files and
										verified the relationships in one census area containing 6,992 people. This is a bounded result, not a
										completed national extraction.
									</Translate>
								</p>
								<Link to="https://rxdb-extractor.matuteiglesias.workers.dev/">
									<Translate id="engineering.additional.censusLink">Open public extractor documentation</Translate>
								</Link>
							</li>
							<li className={styles.card}>
								<p>
									<Translate id="engineering.additional.office">
										I built a compiler that turns a validated operating snapshot into typed work items, bounded execution packets
										and traceable run receipts.
									</Translate>
								</p>
								<Link to="https://github.com/matuteiglesias/office-auto-lab">
									<Translate id="engineering.additional.officeLink">Inspect Office Auto Lab</Translate>
								</Link>
							</li>
							<li className={styles.card}>
								<p>
									<Translate id="engineering.additional.thesis">
										I directed a Licenciatura en Ciencias de Datos thesis at FCEN-UBA comparing supervised-learning models on EPH
										household-survey income data.
									</Translate>
								</p>
							</li>
							<li className={styles.card}>
								<p>
									<Translate id="engineering.additional.decomposition">
										For micro-to-macro volatility accounting, I coded exact aggregate-variance identities in Python and tested
										signed covariances, inconsistent components and input-order invariance.
									</Translate>
								</p>
								<Link to="/projects/micro-to-macro-aggregation">
									<Translate id="engineering.additional.decompositionLink">Open the proof case</Translate>
								</Link>
							</li>
						</ol>
					</section>
				</div>
			</main>
		</Layout>
	);
}
