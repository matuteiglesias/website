import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import type { EvidenceStatus, SelectedProject } from '@site/src/data/selectedProjects';
import { selectedProjectsEs } from '@site/src/data/selectedProjects';
import styles from './SelectedProjectPage.module.css';

const statusClassNames: Record<EvidenceStatus, string> = { verified: styles.ready, defined: styles.defined, check: styles.needsReview, limited: styles.needsReview, ready: styles.ready, missing: styles.missing, 'needs-review': styles.needsReview };
function EvidenceStatusBadge({ status }: { status: EvidenceStatus }): JSX.Element {
	const labels: Record<EvidenceStatus, JSX.Element> = { verified: <Translate id="project.evidence.verified">Verified link</Translate>, defined: <Translate id="project.evidence.defined">Test defined</Translate>, check: <Translate id="project.evidence.check">Check current state</Translate>, limited: <Translate id="project.evidence.limited">Limited</Translate>, ready: <Translate id="project.evidence.verified">Verified link</Translate>, missing: <Translate id="project.evidence.missing">Not linked</Translate>, 'needs-review': <Translate id="project.evidence.check">Check current state</Translate> };
	return <span className={`${styles.statusBadge} ${statusClassNames[status]}`}>{labels[status]}</span>;
}

const spanishLinkLabels: Record<string,string> = {
  "Open public outlet": "Abrir sitio público",
  "Repository": "Repositorio",
  "Back to Engineering": "Volver a Ingeniería",
  "Inspect workflow code": "Ver código del pipeline",
  "Documentation repository": "Repositorio de documentación",
  "Inspect Atlas repository": "Ver repositorio del Atlas",
  "Open public Atlas": "Abrir Atlas público",
  "Inspect producer": "Ver producer",
  "Inspect repository": "Ver repositorio",
  "Read the v0.3 contract": "Leer contrato v0.3",
  "Public Atlas": "Atlas público",
  "Source repository": "Repositorio fuente",
  "Technical overview": "Vista técnica",
  "Public technical overview": "Descripción técnica pública",
  "Media Monitor implementation": "Implementación de Media Monitor",
  "Workflow source repository": "Repositorio del workflow",
  "Testing guide and defined checks": "Guía de testing y checks definidos",
  "Report contract": "Contrato de informes",
  "Supporting documentation repository": "Repositorio de documentación adicional",
  "v0.3 gateway contract": "Contrato v0.3 del gateway",
  "Kernel tests": "Tests del kernel",
  "Startup preflight tests": "Tests de preflight",
  "Server contract tests": "Tests del contrato del servidor",
  "Architecture and operations docs": "Arquitectura y operaciones",
  "Editorial workflow tests": "Tests del workflow editorial",
  "Adopter acceptance guard": "Control de aceptación de adopters",
  "Operator telemetry tests": "Tests de telemetría operativa",
  "Public outlet health check": "Health check público",
  "Atlas repository and release implementation": "Repositorio del Atlas e implementación de releases",
  "Scientific producer repository": "Repositorio del producer científico",
  "Inspect source repository": "Ver repositorio fuente",
  "Read thesis archive": "Leer archivo de tesis",
  "Back to Research": "Volver a Investigación",
  "Scaling decomposition tests": "Tests de descomposición de scaling",
  "Variance identity tests": "Tests de identidad de varianza",
  "Thesis archive": "Archivo de tesis"
};

type SelectedProjectPageProps = { project: SelectedProject };
export default function SelectedProjectPage({ project }: SelectedProjectPageProps): JSX.Element {
	const { i18n } = useDocusaurusContext();
	const copy = i18n.currentLocale === 'es' ? { ...project, ...(selectedProjectsEs[project.slug] ?? {}) } : project;
	const ctas = [copy.primaryCta, ...(copy.secondaryCtas ?? [])].filter((cta): cta is { label: string; href: string } => Boolean(cta));
	const displayLinkLabel = (label: string) => i18n.currentLocale === 'es' ? (spanishLinkLabels[label] ?? label) : label;
	return <Layout title={copy.title} description={copy.subtitle}><main className={styles.page}><div className="container">
		<header className={styles.hero}><p className={styles.eyebrow}><Translate id="project.eyebrow">Proof capsule</Translate></p><h1>{copy.title}</h1><p className={styles.roleSignal}>{copy.roleSignal}</p><p className={styles.subtitle}>{copy.subtitle}</p>{ctas.length > 0 && <div className={styles.links}>{ctas.map((cta, index) => <Link key={cta.href} className={`button ${index === 0 ? 'button--primary' : 'button--secondary'}`} to={cta.href}>{displayLinkLabel(cta.label)}</Link>)}</div>}</header>
		<div className={styles.grid}><div>
			<section className={styles.card}><h2><Translate id="project.problem">Problem</Translate></h2><p>{copy.problem}</p></section>
			<section className={styles.card}><h2><Translate id="project.built">What I built</Translate></h2><p>{copy.whatIBuilt}</p></section>
			{copy.responsibilities && <section className={styles.card}><h2><Translate id="project.role">My role and ownership</Translate></h2><ul>{copy.responsibilities.map((item) => <li key={item}>{item}</li>)}</ul></section>}
			{copy.engineeringDecisions && <section className={styles.card}><h2><Translate id="project.decisions">Key decisions</Translate></h2>{copy.engineeringDecisions.map((item) => <div className={styles.decision} key={item.decision}><h3>{item.decision}</h3><p><strong><Translate id="project.tradeoff">Tradeoff:</Translate></strong> {item.tradeoff}</p></div>)}</section>}
			{copy.evaluation && <section className={styles.card}><h2><Translate id="project.reliability">Reliability &amp; testing</Translate></h2><p>{copy.evaluation.summary}</p><ul>{copy.evaluation.tests.map((item) => <li key={item}>{item}</li>)}</ul>{copy.evaluation.recovery && <p><strong><Translate id="project.recovery">Recovery:</Translate></strong> {copy.evaluation.recovery}</p>}</section>}
			<section className={styles.card}><h2><Translate id="project.proves">What this proves</Translate></h2><ul>{copy.proves.map((item) => <li key={item}>{item}</li>)}</ul></section>
			{copy.principles && <section className={styles.card}><h2><Translate id="project.principles">Key principles</Translate></h2><ul>{copy.principles.map((item) => <li key={item}>{item}</li>)}</ul></section>}
			{copy.moduleBoundaries && <section className={styles.card}><h2><Translate id="project.boundaries">Module boundaries</Translate></h2>{copy.moduleBoundaries.map((item) => <div key={item.title}><h3>{item.title}</h3><p>{item.description}</p></div>)}</section>}
		</div><aside>
			{copy.usersContext && <section className={styles.card}><h2><Translate id="project.context">Users and context</Translate></h2><p>{copy.usersContext}</p>{copy.deploymentType && <p className={styles.meta}><strong><Translate id="project.deployment">Deployment:</Translate></strong> {copy.deploymentType}</p>}</section>}
			<section className={styles.flowCard}><h2><Translate id="project.flow">System flow</Translate></h2><ol className={styles.flowList}>{copy.systemFlow.map((item) => <li key={item}>{item}</li>)}</ol></section>
			<section className={styles.card}><h2><Translate id="project.stack">Stack</Translate></h2><ul className={styles.metaList}>{copy.stack.map((item) => <li key={item}>{item}</li>)}</ul></section>
			<section className={styles.card}><h2><Translate id="project.evidence">Evidence</Translate></h2><ul className={styles.evidenceList}>{copy.evidence.map((item) => <li key={item.label}>{item.href ? <Link to={item.href}>{displayLinkLabel(item.label)}</Link> : displayLinkLabel(item.label)}<EvidenceStatusBadge status={item.status} /></li>)}</ul></section>
			<section className={styles.card}><h2><Translate id="project.status">Status and limits</Translate></h2><p className={styles.status}>{copy.status}</p><h3><Translate id="project.limitations">Limitations</Translate></h3><ul>{copy.limitations.map((item) => <li key={item}>{item}</li>)}</ul></section>
		</aside></div>
	</div></main></Layout>;
}
