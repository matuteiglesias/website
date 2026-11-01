import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import type { FC } from 'react';
import styles from './HomepageFeatures.module.css';

const ProjectCard = ({
	category,
	title,
	description,
	status,
	caseHref,
	codeHref,
	titleId,
	descriptionId,
	statusId,
	caseId
}: {
	category: 'ai' | 'data';
	title: string;
	description: string;
	status: string;
	caseHref: string;
	codeHref: string;
	titleId: string;
	descriptionId: string;
	statusId: string;
	caseId: string;
}): JSX.Element => (
	<article className={styles.projectCard}>
		<p className={styles.category}>
			<Translate id={`features.projects.${category}.label`}>{category === 'ai' ? 'AI workflow' : 'Data system'}</Translate>
		</p>
		<h3>
			<Translate id={titleId}>{title}</Translate>
		</h3>
		<p>
			<Translate id={descriptionId}>{description}</Translate>
		</p>
		<p className={styles.status}>
			<Translate id={statusId}>{status}</Translate>
		</p>
		<div className={styles.projectLinks}>
			<Link to={caseHref}>
				<Translate id={caseId}>Case study</Translate>
			</Link>
			<Link to={codeHref}>
				<Translate id="features.projects.code">Code</Translate>
			</Link>
		</div>
	</article>
);

const HomePageFeatures: FC = () => (
	<main className={styles.features}>
		<section className="container">
			<div className={styles.institutionalStrip}>
				<div>
					<strong>
						<Translate id="features.seniority.title">Background</Translate>
					</strong>
				</div>
				<div>
					<Translate id="features.seniority.items">
						Independent engineering and consulting · public-sector data work · World Bank consulting · PhD Economics · MSc Physics
					</Translate>
				</div>
			</div>
		</section>

		<section className="container">
			<h2 id="selected-projects">
				<Translate id="features.projects.title">Four proof points</Translate>
			</h2>
			<div className={styles.projectGrid}>
				<ProjectCard
					category="ai"
					title="Media Monitor"
					description="A governed AI-assisted news workflow with versioned data contracts, deterministic tests and an explicit publication boundary."
					status="Public system · runtime health linked"
					caseHref="/projects/media-monitor"
					codeHref="https://github.com/matuteiglesias/media_monitor"
					titleId="features.projects.media.title"
					descriptionId="features.projects.media.desc"
					statusId="features.projects.media.status"
					caseId="features.projects.media.link"
				/>
				<ProjectCard
					category="ai"
					title="Matías Context MCP"
					description="A local, read-only MCP gateway exposing governed context as bounded, provenance-rich resources."
					status="Local implementation · code and tests"
					caseHref="/projects/matias-context-mcp"
					codeHref="https://github.com/matuteiglesias/matias-context-mcp"
					titleId="features.projects.mcp.title"
					descriptionId="features.projects.mcp.desc"
					statusId="features.projects.mcp.status"
					caseId="features.projects.mcp.link"
				/>
				<ProjectCard
					category="data"
					title="Accounting Workflows"
					description="A Python pipeline that turns source records into reproducible financial views and controlled reports, with exact-run replay."
					status="Implemented pipeline · sanitized evidence"
					caseHref="/projects/accounting-workflows"
					codeHref="https://github.com/matuteiglesias/accounting-workflows"
					titleId="features.projects.accounting.title"
					descriptionId="features.projects.accounting.desc"
					statusId="features.projects.accounting.status"
					caseId="features.projects.accounting.link"
				/>
				<ProjectCard
					category="data"
					title="Argentina Poverty Measurement & Atlas"
					description="A governed survey-to-geography measurement system with explicit validation and release boundaries."
					status="Research-grade infrastructure · release scope applies"
					caseHref="/projects/public-data-poverty-eph"
					codeHref="https://github.com/matuteiglesias/argentina-poverty-atlas"
					titleId="features.projects.publicData.title"
					descriptionId="features.projects.publicData.desc"
					statusId="features.projects.publicData.status"
					caseId="features.projects.publicData.link"
				/>
			</div>
		</section>

		<section className="container">
			<div className={styles.methodNote}>
				<h2>
					<Translate id="features.methods.title">How I engineer</Translate>
				</h2>
				<p>
					<Translate id="features.methods.body">
						I start from the data model, the decision that a system must support, and the boundaries between sources, computation and
						authority. I favor simple, inspectable interfaces; deterministic processing where possible; bounded model or agent behavior
						where needed; and explicit tests, provenance and recovery paths.
					</Translate>
				</p>
				<Link to="/engineering">
					<Translate id="features.methods.link">Read the engineering approach</Translate>
				</Link>
			</div>
		</section>

		<section className="container">
			<div className={styles.researchTeaser}>
				<h2>
					<Translate id="features.research.title">Research</Translate>
				</h2>
				<p>
					<Translate id="features.research.body">
						An independent research programme on aggregation, heterogeneity, volatility and spatial measurement, including a 2021
						peer-reviewed paper and current manuscripts and applied work in progress.
					</Translate>
				</p>
				<Link to="/research">
					<Translate id="features.research.link">Explore research</Translate>
				</Link>
			</div>
		</section>
	</main>
);

export default HomePageFeatures;
