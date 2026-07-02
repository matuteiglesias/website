import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import type { EvidenceStatus, SelectedProject } from '@site/src/data/selectedProjects';
import styles from './SelectedProjectPage.module.css';

const statusClassNames: Record<EvidenceStatus, string> = {
	ready: styles.ready,
	missing: styles.missing,
	'needs-review': styles.needsReview
};

type SelectedProjectPageProps = {
	project: SelectedProject;
};

function EvidenceStatusBadge({ status }: { status: EvidenceStatus }): JSX.Element {
	return <span className={`${styles.statusBadge} ${statusClassNames[status]}`}>{status}</span>;
}

export default function SelectedProjectPage({ project }: SelectedProjectPageProps): JSX.Element {
	const ctas = [project.primaryCta, ...(project.secondaryCtas ?? [])].filter((cta): cta is { label: string; href: string } => Boolean(cta));

	return (
		<Layout title={project.title} description={project.subtitle}>
			<main className={styles.page}>
				<div className="container">
					<header className={styles.hero}>
						<p className={styles.eyebrow}>Proof capsule</p>
						<h1>{project.title}</h1>
						<p className={styles.roleSignal}>{project.roleSignal}</p>
						<p className={styles.subtitle}>{project.subtitle}</p>
						{ctas.length > 0 ? (
							<div className={styles.links}>
								{ctas.map((cta, index) => (
									<Link key={cta.href} className={`button ${index === 0 ? 'button--primary' : 'button--secondary'}`} to={cta.href}>
										{cta.label}
									</Link>
								))}
							</div>
						) : null}
					</header>

					<div className={styles.grid}>
						<div>
							<section className={styles.card}>
								<h2>Problem</h2>
								<p>{project.problem}</p>
							</section>

							<section className={styles.card}>
								<h2>What I built</h2>
								<p>{project.whatIBuilt}</p>
							</section>

							<section className={styles.card}>
								<h2>What this proves</h2>
								<ul>
									{project.proves.map((item) => (
										<li key={item}>{item}</li>
									))}
								</ul>
							</section>

							{project.principles ? (
								<section className={styles.card}>
									<h2>Key principles</h2>
									<ul>
										{project.principles.map((item) => (
											<li key={item}>{item}</li>
										))}
									</ul>
								</section>
							) : null}

							{project.moduleBoundaries ? (
								<section className={styles.card}>
									<h2>Module boundaries</h2>
									{project.moduleBoundaries.map((module) => (
										<div key={module.title}>
											<h3>{module.title}</h3>
											<p>{module.description}</p>
										</div>
									))}
								</section>
							) : null}
						</div>

						<aside>
							<section className={styles.flowCard}>
								<h2>System flow</h2>
								<ol className={styles.flowList}>
									{project.systemFlow.map((item) => (
										<li key={item}>{item}</li>
									))}
								</ol>
							</section>

							<section className={styles.card}>
								<h2>Stack</h2>
								<ul className={styles.metaList}>
									{project.stack.map((item) => (
										<li key={item}>{item}</li>
									))}
								</ul>
							</section>

							<section className={styles.card}>
								<h2>Evidence to inspect</h2>
								<ul className={styles.evidenceList}>
									{project.evidence.map((item) => (
										<li key={item.label}>
											{item.href ? <Link to={item.href}>{item.label}</Link> : item.label}
											<EvidenceStatusBadge status={item.status} />
										</li>
									))}
								</ul>
							</section>

							<section className={styles.card}>
								<h2>Status</h2>
								<p className={styles.status}>{project.status}</p>
								<h3>Limitations</h3>
								<ul>
									{project.limitations.map((item) => (
										<li key={item}>{item}</li>
									))}
								</ul>
							</section>
						</aside>
					</div>
				</div>
			</main>
		</Layout>
	);
}
