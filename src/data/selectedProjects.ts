export type EvidenceStatus = 'verified' | 'defined' | 'check' | 'limited' | 'ready' | 'missing' | 'needs-review';

export interface EvidenceItem {
	label: string;
	href?: string;
	status: EvidenceStatus;
}
export interface EngineeringDecision {
	decision: string;
	tradeoff: string;
}
export interface ProjectEvaluation {
	summary: string;
	tests: string[];
	recovery?: string;
}

export interface SelectedProject {
	slug: string;
	title: string;
	subtitle: string;
	roleSignal: string;
	problem: string;
	whatIBuilt: string;
	systemFlow: string[];
	stack: string[];
	evidence: EvidenceItem[];
	proves: string[];
	status: string;
	limitations: string[];
	responsibilities?: string[];
	engineeringDecisions?: EngineeringDecision[];
	evaluation?: ProjectEvaluation;
	usersContext?: string;
	deploymentType?: string;
	date?: string;
	primaryCta?: { label: string; href: string };
	secondaryCtas?: { label: string; href: string }[];
	principles?: string[];
	moduleBoundaries?: { title: string; description: string }[];
}

const mediaMonitor: SelectedProject = {
	slug: 'media-monitor',
	title: 'Media Monitor',
	subtitle: 'A governed AI-assisted news workflow with versioned contracts, deterministic tests, and an explicit publication boundary.',
	roleSignal: 'AI workflows and reliability engineering',
	problem:
		'News monitoring becomes fragile when sources, generated drafts, editorial notes, and public output share hidden assumptions. The system needs stable data ownership, observable stages, and a clear boundary between a model suggestion and something fit to publish.',
	whatIBuilt:
		'I built a modular workflow from source ingestion and immutable sensing runs through contract-backed indexes, editorial briefs and drafts, revision branches, publication-aware snapshots, and request-time freshness checks. A draft can only become published_article.v1 through an explicit promotion path.',
	responsibilities: [
		'Designed contracts and stage boundaries across ingestion, editorial generation, publication, and deployment.',
		'Implemented the guarded editorial workflow, deterministic contract checks, telemetry, and public health contract.',
		'Defined the evidence boundary: model output is a draft; publication authority remains outside the model.'
	],
	usersContext:
		'Public technical system and portfolio artifact. Adopter-acceptance tests use synthetic records and do not establish a real adopter or external client.',
	engineeringDecisions: [
		{
			decision: 'Keep model output in a draft/revision lane instead of letting it write a publication record.',
			tradeoff: 'Adds an explicit handoff, but makes authority and failure handling inspectable.'
		},
		{
			decision: 'Use versioned contract buses and deterministic read models between stages.',
			tradeoff: 'Requires schema discipline, but reduces hidden coupling.'
		},
		{
			decision: 'Expose freshness and deployment identity through a health contract.',
			tradeoff: 'Health is more than a reachable URL, but still needs current observation.'
		}
	],
	evaluation: {
		summary:
			'The repository defines tests for structured model outputs, rejection/revision branches, adopter-acceptance gating, and operator telemetry. These use simulated outputs; they are not a model benchmark or evidence of sustained production success.',
		tests: [
			'test_editorial_ai_workflow.py: simulated accept, reject, and revise paths.',
			'test_adopter_acceptance.py: prevents synthetic records from establishing adoption.',
			'test_operator_stage_telemetry.py: redacted stage failures and timelines.'
		],
		recovery: 'Rejected or revised drafts remain outside the publication contract; stage failures are represented in operator telemetry.'
	},
	deploymentType: 'Public Vercel outlet and health endpoint; current availability should be checked at the linked evidence.',
	systemFlow: [
		'RSS / monitored sources',
		'immutable sensing run',
		'versioned contracts and indexes',
		'editorial briefs / drafts',
		'reject or revise branch',
		'explicit publication boundary',
		'published_article.v1',
		'site_snapshot.v2',
		'request-time freshness health'
	],
	stack: [
		'Python',
		'Next.js / TypeScript',
		'JSON Schema / JSONL contracts',
		'pytest and Node contract tests',
		'GitHub Actions',
		'Vercel',
		'LLM-assisted editorial generation'
	],
	evidence: [
		{ label: 'Source repository', href: 'https://github.com/matuteiglesias/media_monitor', status: 'verified' },
		{
			label: 'Editorial workflow tests',
			href: 'https://github.com/matuteiglesias/media_monitor/blob/main/tests/test_editorial_ai_workflow.py',
			status: 'defined'
		},
		{
			label: 'Adopter acceptance guard',
			href: 'https://github.com/matuteiglesias/media_monitor/blob/main/tests/test_adopter_acceptance.py',
			status: 'defined'
		},
		{
			label: 'Operator telemetry tests',
			href: 'https://github.com/matuteiglesias/media_monitor/blob/main/tests/test_operator_stage_telemetry.py',
			status: 'defined'
		},
		{ label: 'Public outlet health check', href: 'https://mediamonitor-psi.vercel.app/api/health', status: 'check' },
		{ label: 'Architecture and operations docs', href: 'https://github.com/matuteiglesias/media_monitor/tree/main/docs', status: 'verified' }
	],
	proves: [
		'Design AI-assisted workflows with explicit data and authority boundaries.',
		'Separate simulated/model-produced drafts from durable contracts and publication state.',
		'Treat tests, telemetry, and freshness checks as operational evidence without calling them model-quality benchmarks.'
	],
	status: 'Implemented guarded editorial workflow; the public outlet and health endpoint are linked for current inspection.',
	limitations: [
		'The tests define simulated model behavior and rejection/revision paths; they do not measure model quality.',
		'No real client, adopter, human approval, sustained uptime, or published human-approved article is claimed.',
		'A public URL is not by itself proof of current deployment health.'
	],
	primaryCta: { label: 'Open public outlet', href: 'https://mediamonitor-psi.vercel.app' },
	secondaryCtas: [
		{ label: 'Repository', href: 'https://github.com/matuteiglesias/media_monitor' },
		{ label: 'Back to Engineering', href: '/engineering' }
	],
	principles: [
		'A generated draft is not published analysis.',
		'Publication authority is an explicit boundary.',
		'Test-defined behavior is not the same as measured model quality.'
	]
};

const matiasContextMcp: SelectedProject = {
	slug: 'matias-context-mcp',
	title: 'Matías Context MCP',
	subtitle: 'A local, read-only MCP gateway exposing bounded, provenance-rich context to tools that need it.',
	roleSignal: 'Agent context, security boundaries, and fail-closed startup',
	problem:
		'An agent context layer can become arbitrary filesystem access if paths, source roots, and startup assumptions are implicit. Useful context needs a narrow authority model that is inspectable before a server starts.',
	whatIBuilt:
		'I built a Python stdio MCP server exposing named, configured resources through logical URIs. Reads are bounded to registered roots, return provenance and hashes, and reject path or symlink escapes. Startup preflight fails closed when the configured profile is unsafe or incomplete.',
	responsibilities: [
		'Defined the v0.3 gateway contract and resource-only server boundary.',
		'Implemented bounded UTF-8/JSON reads, named source resolution, provenance, and root-containment checks.',
		'Added kernel, startup-preflight, and server-contract tests around security and protocol seams.'
	],
	usersContext:
		'Local development tool for configured source checkouts. Not a hosted service, enterprise agent platform, or public multi-tenant deployment.',
	engineeringDecisions: [
		{
			decision: 'Expose resources only: no arbitrary tools, prompts, writes, or remote HTTP server.',
			tradeoff: 'Less flexible, but the authority surface is easier to reason about.'
		},
		{
			decision: 'Resolve logical URIs through a named source registry rather than accepting raw paths.',
			tradeoff: 'Requires profile configuration, but prevents arbitrary filesystem selection.'
		},
		{
			decision: 'Run preflight checks and reject symlink/root escapes before serving.',
			tradeoff: 'Misconfiguration stops startup instead of being repaired implicitly.'
		}
	],
	evaluation: {
		summary:
			'Tests cover the kernel, startup preflight, and server contract. They are repository-defined checks; no hosted runtime or user-adoption result is claimed.',
		tests: [
			'tests/test_kernel.py: bounded reads, provenance, and path handling.',
			'tests/test_startup_preflight.py: configured profile and fail-closed startup.',
			'tests/test_server_contract.py: resource-only MCP behavior.'
		],
		recovery: 'Unsafe paths and incomplete profiles fail closed rather than widening access.'
	},
	deploymentType: 'Local Python stdio process; no public hosted deployment.',
	systemFlow: [
		'configured static profile',
		'named source registry',
		'logical MCP resource URI',
		'root-contained read',
		'bounded UTF-8 / JSON result',
		'provenance and hash'
	],
	stack: ['Python', 'MCP stdio transport', 'UTF-8 / JSON resources', 'pytest', 'filesystem boundary checks'],
	evidence: [
		{ label: 'Source repository', href: 'https://github.com/matuteiglesias/matias-context-mcp', status: 'verified' },
		{
			label: 'v0.3 gateway contract',
			href: 'https://github.com/matuteiglesias/matias-context-mcp/blob/main/docs/mcp_context_gateway_contract_v0_3.md',
			status: 'verified'
		},
		{ label: 'Kernel tests', href: 'https://github.com/matuteiglesias/matias-context-mcp/blob/main/tests/test_kernel.py', status: 'defined' },
		{
			label: 'Startup preflight tests',
			href: 'https://github.com/matuteiglesias/matias-context-mcp/blob/main/tests/test_startup_preflight.py',
			status: 'defined'
		},
		{
			label: 'Server contract tests',
			href: 'https://github.com/matuteiglesias/matias-context-mcp/blob/main/tests/test_server_contract.py',
			status: 'defined'
		}
	],
	proves: [
		'Build a bounded context interface for agent workflows.',
		'Use least privilege, provenance, and fail-closed checks as product behavior.',
		'Make security tradeoffs explicit instead of implying a general-purpose agent platform.'
	],
	status: 'Local implementation with inspectable contract and test surface.',
	limitations: [
		'Requires configured local source checkouts and static profiles.',
		'No arbitrary filesystem writes or tools are exposed.',
		'No public hosted deployment, multi-tenant runtime, user count, or adoption claim is made.'
	],
	primaryCta: { label: 'Inspect repository', href: 'https://github.com/matuteiglesias/matias-context-mcp' },
	secondaryCtas: [
		{
			label: 'Read the v0.3 contract',
			href: 'https://github.com/matuteiglesias/matias-context-mcp/blob/main/docs/mcp_context_gateway_contract_v0_3.md'
		},
		{ label: 'Back to Engineering', href: '/engineering' }
	]
};

const accountingWorkflows: SelectedProject = {
	slug: 'accounting-workflows',
	title: 'Accounting Workflows',
	subtitle: 'A governed Python pipeline turning document and source records into reproducible financial views and controlled reports.',
	roleSignal: 'Document processing, semantic data models, and replayable runs',
	problem:
		'Financial documents are difficult to reconcile when each report reinterprets source records. A useful workflow needs canonical representations, explicit semantic marts, exact-run replay, and a privacy boundary around source material.',
	whatIBuilt:
		'I developed an inspectable pipeline for document/source ingestion, canonical materialization, debt and treasury views, reconciliation, governed reports, and report-bundle publication. Each stage can be replayed for an exact run scope, while public documentation uses sanitized evidence only.',
	responsibilities: [
		'Designed canonical data representations and stage/run boundaries.',
		'Implemented validation, semantic marts, report contracts, and exact-run replay paths.',
		'Documented smoke and publication-dry-run checks while keeping private financial records out of public evidence.'
	],
	usersContext:
		'Public code and documentation for a governed workflow pattern. No client, third-party adoption, revenue, or private accounting record is represented.',
	engineeringDecisions: [
		{
			decision: 'Materialize canonical records before semantic marts or reports.',
			tradeoff: 'Adds an intermediate model, but gives reconciliation a stable comparison point.'
		},
		{
			decision: 'Scope every stage to an exact run and preserve replay metadata.',
			tradeoff: 'Run bookkeeping is deliberate, but failures can be reproduced.'
		},
		{
			decision: 'Keep public proof at contract/test/documentation level.',
			tradeoff: 'Less visual spectacle, but avoids leaking private data or implying certification.'
		}
	],
	evaluation: {
		summary:
			'The repository defines smoke, report-contract, docs-input-bridge, and run-scope tests. The audit did not observe them passing, so they are defined checks rather than production certification.',
		tests: [
			'test_governed_metrics_pipeline_smoke.py: pipeline smoke path.',
			'test_reports_contracts.py: governed report contracts.',
			'test_docs_input_bridge.py and test_run_scope_contract.py: input and exact-run boundaries.'
		],
		recovery: 'Exact-run replay and validation provide a controlled route to reproduce a failed stage.'
	},
	deploymentType: 'Inspectable code pipeline with public documentation; no enterprise production deployment claimed.',
	systemFlow: [
		'document/source inputs',
		'canonical financial records',
		'semantic marts and reconciliation',
		'governed report bundle',
		'validation and exact-run replay',
		'sanitized public documentation'
	],
	stack: ['Python', 'SQL/data transformations', 'canonical financial representations', 'semantic marts', 'pytest', 'contracted report bundles'],
	evidence: [
		{ label: 'Workflow source repository', href: 'https://github.com/matuteiglesias/accounting-workflows', status: 'verified' },
		{
			label: 'Testing guide and defined checks',
			href: 'https://github.com/matuteiglesias/accounting-workflows/blob/main/tests/TESTING.md',
			status: 'defined'
		},
		{
			label: 'Report contract',
			href: 'https://github.com/matuteiglesias/accounting-workflows/blob/main/notes/report_bundle_contract.md',
			status: 'verified'
		},
		{ label: 'Supporting documentation repository', href: 'https://github.com/matuteiglesias/accounting-docs', status: 'verified' }
	],
	proves: [
		'Design data workflows around canonical representations and semantic contracts.',
		'Make financial/document processing replayable and reconcilable by run scope.',
		'Communicate a privacy boundary instead of using private records as portfolio evidence.'
	],
	status: 'Implemented and documented pipeline pattern; test and documentation links are provided for inspection.',
	limitations: [
		'Public evidence contains no private financial data.',
		'No client, production enterprise adoption, legal/financial certification, revenue, or user count is claimed.',
		'Defined tests were not observed passing in the supplied audit.'
	],
	primaryCta: { label: 'Inspect workflow code', href: 'https://github.com/matuteiglesias/accounting-workflows' },
	secondaryCtas: [
		{ label: 'Documentation repository', href: 'https://github.com/matuteiglesias/accounting-docs' },
		{ label: 'Back to Engineering', href: '/engineering' }
	]
};

const povertyAtlas: SelectedProject = {
	slug: 'public-data-poverty-eph',
	title: 'Argentina Poverty Measurement & Atlas',
	subtitle:
		'A governed survey-to-geography measurement system with explicit validation, release semantics, and a separate public presentation layer.',
	roleSignal: 'Statistical modeling, geospatial engineering, and release QA',
	problem:
		'Household surveys and census data differ in coverage and semantics. Geographically detailed measurement needs alignment, support diagnostics, estimand permissions, release contracts, and a distinction between scientific production and what an Atlas consumes.',
	whatIBuilt:
		'I connected survey/census alignment, person-level modeling, household aggregation, commissioning and validation checks, immutable release facts, and a geographic Atlas. The producer and frontend are separate so public presentation does not silently become scientific certification.',
	responsibilities: [
		'Designed the producer-to-release-to-Atlas boundary and release semantics.',
		'Worked across survey/census alignment, statistical modeling, geographic joins, and release QA.',
		'Made fixture, research, and public-release states explicit in contracts and limitations.'
	],
	usersContext:
		'Public research/software artifact for inspecting statistical-geospatial engineering. The Atlas is a release consumer, not an official statistical publication.',
	engineeringDecisions: [
		{
			decision: 'Separate scientific producer estimates from the Atlas release consumer.',
			tradeoff: 'Requires a release contract, but prevents frontend availability implying estimator validity.'
		},
		{
			decision: 'Carry estimand, permission, geography, and fixture status with release facts.',
			tradeoff: 'The model is more explicit, preserving what each release can claim.'
		},
		{
			decision: 'Use support diagnostics and validation before geographic presentation.',
			tradeoff: 'Unsupported areas or periods remain unavailable rather than being unjustifiably filled.'
		}
	],
	evaluation: {
		summary:
			'The repositories define release, join, state, and data-contract checks. The supplied evidence identifies a fixture-driven W1 implementation; a fixture supports contract QA but is not a certified estimate.',
		tests: [
			'Release and data-contract checks in the Atlas repository.',
			'Producer QA and survey/census alignment evidence in linked repositories.',
			'Frontend release state remains distinct from scientific estimator validation.'
		],
		recovery: 'Release contracts and explicit states can withhold unsupported geography/period combinations.'
	},
	deploymentType: 'Public Atlas URL plus separate producer and release repositories; inspect the current release before interpreting results.',
	systemFlow: [
		'EPH survey and census inputs',
		'semantic alignment and support diagnostics',
		'statistical estimation',
		'household aggregation',
		'release and permission QA',
		'immutable release facts',
		'Atlas geographic presentation'
	],
	stack: ['Python', 'SQL', 'TypeScript', 'survey methodology', 'statistical modeling', 'geospatial data', 'release/data contracts', 'Vercel'],
	evidence: [
		{
			label: 'Atlas repository and release implementation',
			href: 'https://github.com/matuteiglesias/argentina-poverty-atlas',
			status: 'verified'
		},
		{ label: 'Scientific producer repository', href: 'https://github.com/matuteiglesias/indice-pobreza-UBA', status: 'verified' },
		{ label: 'Public Atlas', href: 'https://pobreza-argentina.vercel.app', status: 'check' }
	],
	proves: [
		'Work across survey methodology, statistical inference, numerical modeling, and geospatial delivery—not only ETL.',
		'Separate scientific estimates, release contracts, and public presentation.',
		'Use QA and support boundaries to avoid turning a fixture or URL into an official statistic.'
	],
	status: 'Governed statistical-geospatial infrastructure with a public release consumer; each release has its own scope and state.',
	limitations: [
		'Synthetic fixture data is not a certified poverty estimate.',
		'The Atlas is not presented as official INDEC statistics, full historical coverage, or evidence of national validity from URL existence.',
		'Current geography, periods, estimands, and live behavior must be checked against release evidence.'
	],
	primaryCta: { label: 'Inspect Atlas repository', href: 'https://github.com/matuteiglesias/argentina-poverty-atlas' },
	secondaryCtas: [
		{ label: 'Open public Atlas', href: 'https://pobreza-argentina.vercel.app' },
		{ label: 'Inspect producer', href: 'https://github.com/matuteiglesias/indice-pobreza-UBA' },
		{ label: 'Back to Engineering', href: '/engineering' }
	]
};

const kbContracts: SelectedProject = {
	slug: 'kb-contracts',
	title: 'Knowledge / Data Contracts',
	subtitle: 'A contract architecture for making AI and knowledge pipelines inspectable, testable, and maintainable.',
	roleSignal: 'Supporting reliability architecture for AI/data pipelines',
	problem: 'LLM and knowledge workflows become brittle when repos, agents, documents, exports, and publishers share hidden assumptions.',
	whatIBuilt:
		'A public manual and contract catalog defining buses, integration seams, run records, observability indexes, snapshot publishing, and contract-test concepts for a multi-repo knowledge ecosystem.',
	systemFlow: [
		'Producers',
		'versioned bus artifacts',
		'manifests / run records',
		'observability indexes',
		'sanctioned consumers / publishing surfaces'
	],
	stack: ['Docusaurus', 'TypeScript', 'Markdown / MDX', 'JSON / JSONL contracts', 'static publishing'],
	evidence: [{ label: 'Public technical overview', href: '/docs/General/tech', status: 'ready' }],
	proves: [
		'Design reliability layers that keep multi-repo AI/data pipelines inspectable.',
		'Define boundaries, versioning, observability, and failure containment.'
	],
	status: 'Public reference architecture/manual; supporting case rather than a flagship implementation.',
	limitations: ['This is an architecture artifact, not a standalone end-user product.'],
	primaryCta: { label: 'Technical overview', href: '/docs/General/tech' },
	secondaryCtas: [
		{ label: 'Media Monitor implementation', href: '/projects/media-monitor' },
		{ label: 'Back to Engineering', href: '/engineering' }
	]
};

export const selectedProjects: Record<string, SelectedProject> = {
	'media-monitor': mediaMonitor,
	'matias-context-mcp': matiasContextMcp,
	'accounting-workflows': accountingWorkflows,
	'public-data-poverty-eph': povertyAtlas,
	'kb-contracts': kbContracts
};

export type ProjectTranslation = Partial<Omit<SelectedProject, 'slug' | 'evidence' | 'stack' | 'primaryCta' | 'secondaryCtas'>>;
export const selectedProjectsEs: Record<string, ProjectTranslation> = {
	'media-monitor': {
		systemFlow: [
			'RSS / fuentes monitoreadas',
			'sensing run inmutable',
			'contratos e índices versionados',
			'briefs y borradores editoriales',
			'rama de rechazo o revisión',
			'límite explícito de publicación',
			'published_article.v1',
			'site_snapshot.v2',
			'health check de frescura'
		],
		title: 'Media Monitor',
		subtitle: 'Un workflow de noticias asistido por IA, con contratos versionados, tests deterministas y un límite explícito de publicación.',
		roleSignal: 'Workflows de IA y confiabilidad',
		problem:
			'El monitoreo se vuelve frágil cuando fuentes, borradores generados, notas editoriales y salida pública comparten supuestos ocultos. El sistema necesita ownership claro, etapas observables y un límite entre sugerencia del modelo y algo listo para publicar.',
		whatIBuilt:
			'Construí un workflow modular desde la ingesta y sensing runs inmutables hasta índices con contratos, briefs y borradores, ramas de revisión, snapshots de publicación y checks de frescura. Un borrador solo puede convertirse en published_article.v1 mediante una ruta explícita.',
		responsibilities: [
			'Diseñé contratos y límites entre ingesta, generación editorial, publicación y deployment.',
			'Implementé el workflow controlado, checks deterministas, telemetría y health contract público.',
			'Definí que la salida del modelo es un borrador; la autoridad de publicación queda fuera del modelo.'
		],
		usersContext:
			'Sistema técnico público y artefacto de portfolio. Los tests de adopters usan registros sintéticos y no prueban adopter real ni cliente externo.',
		engineeringDecisions: [
			{
				decision: 'Mantener la salida del modelo en borrador/revisión.',
				tradeoff: 'Agrega un handoff, pero hace inspeccionables la autoridad y los fallos.'
			},
			{
				decision: 'Usar contratos versionados y read models deterministas.',
				tradeoff: 'Exige disciplina de schemas, pero reduce acoplamiento oculto.'
			},
			{
				decision: 'Exponer frescura e identidad mediante health contract.',
				tradeoff: 'La salud es más que una URL, aunque requiere observación actual.'
			}
		],
		evaluation: {
			summary:
				'El repo define tests para outputs estructurados, rechazo/revisión, acceptance gating y telemetría. Usan outputs simulados; no son benchmark del modelo ni evidencia de éxito productivo sostenido.',
			tests: [
				'test_editorial_ai_workflow.py: rutas simuladas de aceptación, rechazo y revisión.',
				'test_adopter_acceptance.py: evita que registros sintéticos prueben adopción.',
				'test_operator_stage_telemetry.py: fallos y timelines con redacción.'
			],
			recovery: 'Los borradores rechazados quedan fuera del contrato de publicación; los fallos aparecen en telemetría.'
		},
		deploymentType: 'Outlet público y health endpoint en Vercel; comprobar disponibilidad actual en la evidencia.',
		status: 'Workflow editorial controlado implementado; outlet y health endpoint disponibles para inspección.',
		limitations: [
			'Los tests no miden calidad del modelo.',
			'No se afirma cliente, adopter, aprobación humana, uptime sostenido ni artículo aprobado.',
			'Una URL no prueba por sí sola la salud actual.'
		],
		proves: [
			'Diseñar workflows asistidos por IA con límites de datos y autoridad.',
			'Separar borradores de contratos durables y estado de publicación.',
			'Tratar tests y telemetría como evidencia operativa, no benchmark de modelo.'
		],
		principles: [
			'Un borrador generado no es análisis publicado.',
			'La autoridad de publicación es explícita.',
			'Tests definidos no equivalen a calidad medida.'
		]
	},
	'matias-context-mcp': {
		systemFlow: [
			'profile de configuración local',
			'registro de fuentes autorizadas',
			'URI lógica de recurso MCP',
			'lectura acotada al root',
			'respuesta UTF-8 / JSON con límites',
			'provenance y hash'
		],
		title: 'Matías Context MCP',
		subtitle: 'Una pasarela MCP local y de solo lectura que expone contexto acotado y trazable.',
		roleSignal: 'Contexto para agentes, seguridad y startup fail-closed',
		problem:
			'Una capa de contexto puede volverse acceso arbitrario al filesystem si paths, roots y supuestos de startup quedan implícitos. El contexto útil necesita autoridad acotada e inspeccionable.',
		whatIBuilt:
			'Construí un server MCP Python por stdio que expone resources nombrados mediante URIs lógicas. Las lecturas quedan dentro de roots registrados, devuelven provenance y hashes, y rechazan escapes de path o symlink. El preflight falla cerrado ante un profile inseguro o incompleto.',
		responsibilities: [
			'Definí el contrato v0.3 y el límite resource-only.',
			'Implementé reads acotados UTF-8/JSON, sources nombradas, provenance y root containment.',
			'Agregué tests de kernel, startup-preflight y server-contract.'
		],
		usersContext:
			'Herramienta local para checkouts configurados; no es servicio hosted, plataforma enterprise ni deployment público multi-tenant.',
		engineeringDecisions: [
			{
				decision: 'Exponer solo resources: sin tools, prompts, writes ni HTTP remoto.',
				tradeoff: 'Es menos flexible, pero la autoridad es más revisable.'
			},
			{
				decision: 'Resolver URIs mediante registro de sources, no paths crudos.',
				tradeoff: 'Requiere configuración, pero evita ubicaciones arbitrarias.'
			},
			{ decision: 'Rechazar escapes antes de servir.', tradeoff: 'La mala configuración detiene startup en vez de repararse.' }
		],
		evaluation: {
			summary: 'Los tests cubren kernel, startup preflight y server contract. Son checks definidos; no se afirma runtime hosted ni adopción.',
			tests: [
				'tests/test_kernel.py: reads, provenance y paths.',
				'tests/test_startup_preflight.py: profile y startup fail-closed.',
				'tests/test_server_contract.py: comportamiento resource-only.'
			],
			recovery: 'Paths inseguros y profiles incompletos fallan cerrado.'
		},
		deploymentType: 'Proceso local Python por stdio; sin deployment hosted público.',
		status: 'Implementación local con contrato y tests inspeccionables.',
		limitations: [
			'Requiere checkouts y profiles locales.',
			'No expone writes ni tools arbitrarios.',
			'No se afirma deployment hosted, usuarios ni adopción.'
		],
		proves: [
			'Construir una interfaz de contexto acotada.',
			'Usar least privilege, provenance y fail-closed.',
			'Hacer explícitos los tradeoffs de una plataforma de agentes.'
		]
	},
	'accounting-workflows': {
		systemFlow: [
			'documentos y registros de origen',
			'registros financieros canónicos',
			'semantic marts y reconciliación',
			'paquete de informes controlados',
			'validación y exact-run replay',
			'documentación pública sanitizada'
		],
		title: 'Accounting Workflows',
		subtitle: 'Un pipeline gobernado en Python que transforma documentos y registros en vistas financieras reproducibles e informes controlados.',
		roleSignal: 'Procesamiento documental, modelos semánticos y runs reproducibles',
		problem:
			'Los documentos financieros son difíciles de reconciliar cuando cada informe reinterpreta los registros. El workflow necesita representaciones canónicas, semantic marts, exact-run replay y privacidad.',
		whatIBuilt:
			'Desarrollé un pipeline para ingesta, materialización canónica, vistas, reconciliación, informes gobernados y report bundles. Cada etapa puede repetirse para un run exacto; la documentación pública usa evidencia sanitizada.',
		responsibilities: [
			'Diseñé representaciones canónicas y límites de etapa/run.',
			'Implementé validación, semantic marts, contratos y exact-run replay.',
			'Documenté checks sin exponer registros privados.'
		],
		usersContext: 'Código y documentación pública para un patrón gobernado. No se representa cliente, adopción, revenue ni registro privado.',
		engineeringDecisions: [
			{
				decision: 'Materializar registros canónicos antes de marts o informes.',
				tradeoff: 'Agrega un modelo, pero estabiliza la reconciliación.'
			},
			{ decision: 'Acotar cada etapa a un run exacto.', tradeoff: 'Exige bookkeeping, pero permite reproducir fallos.' },
			{ decision: 'Mantener prueba pública en contratos, tests y docs.', tradeoff: 'Evita filtrar datos o sugerir certificación.' }
		],
		evaluation: {
			summary:
				'El repo define smoke, report-contract, docs-input-bridge y run-scope tests. La auditoría no observó passing; son checks definidos, no certificación.',
			tests: [
				'test_governed_metrics_pipeline_smoke.py: smoke.',
				'test_reports_contracts.py: contratos.',
				'test_docs_input_bridge.py y test_run_scope_contract.py: input y exact-run.'
			],
			recovery: 'Replay y validación permiten reproducir una etapa fallida.'
		},
		deploymentType: 'Pipeline inspeccionable con docs públicas; sin deployment enterprise productivo.',
		status: 'Pipeline implementado y documentado; tests y docs disponibles para inspección.',
		limitations: [
			'No contiene datos financieros privados.',
			'No se afirma cliente, adopción, certificación, revenue ni usuarios.',
			'Los tests definidos no fueron observados pasando.'
		],
		proves: [
			'Diseñar workflows con representaciones canónicas.',
			'Hacer reproducible el procesamiento por run.',
			'Comunicar un límite de privacidad.'
		]
	},
	'public-data-poverty-eph': {
		systemFlow: [
			'encuestas EPH y datos censales',
			'alineación semántica y diagnóstico de soporte',
			'estimación estadística',
			'agregación por hogar',
			'QA de release y permisos',
			'facts inmutables del release',
			'visualización geográfica en el Atlas'
		],
		title: 'Medición de pobreza y Atlas de Argentina',
		subtitle: 'Un sistema de medición de encuesta a geografía con validación explícita, semántica de release y capa pública separada.',
		roleSignal: 'Modelado estadístico, ingeniería geoespacial y QA de releases',
		problem:
			'Encuestas y censos difieren en cobertura y semántica. La medición geográfica necesita alignment, soporte, permisos del estimand, contratos de release y separar producción científica de consumo del Atlas.',
		whatIBuilt:
			'Conecté alignment encuesta/censo, modelado, agregación, validación, facts inmutables de release y Atlas geográfico. Producer y frontend están separados para que la presentación no implique certificación científica.',
		responsibilities: [
			'Diseñé el límite producer-release-Atlas.',
			'Trabajé en alignment, modelado estadístico, joins y QA de release.',
			'Hice explícitos estados de fixture, research y public release.'
		],
		usersContext:
			'Artefacto público de investigación/software. El Atlas consume releases; no es publicación oficial ni prueba de cobertura completa.',
		engineeringDecisions: [
			{
				decision: 'Separar producer científico de consumidor Atlas.',
				tradeoff: 'Requiere release contract, pero evita confundir disponibilidad con validez.'
			},
			{ decision: 'Transportar estimand, permission, geography y fixture status.', tradeoff: 'Hace explícito qué puede afirmar cada release.' },
			{
				decision: 'Validar soporte antes de mostrar geografía.',
				tradeoff: 'Áreas sin soporte quedan sin datos antes que recibir extrapolación.'
			}
		],
		evaluation: {
			summary:
				'Los repos definen checks de release, joins, estados y data contracts. La evidencia identifica implementación W1 con fixtures; un fixture no es estimación certificada.',
			tests: [
				'Checks de release y data contract del Atlas.',
				'QA del producer y alignment encuesta/censo.',
				'El estado frontend queda separado de la validación científica.'
			],
			recovery: 'Los contratos permiten retener combinaciones sin soporte.'
		},
		deploymentType: 'Atlas público y repos separados de producer/release; revisar el release actual.',
		status: 'Infraestructura estadística-geoespacial gobernada con consumidor público.',
		limitations: [
			'Fixtures sintéticos no son estimaciones certificadas.',
			'No es estadística oficial INDEC ni prueba de cobertura o validez nacional.',
			'Geografía, períodos, estimands y live behavior requieren verificación del release.'
		],
		proves: [
			'Trabajar con metodología de encuestas, inferencia, modelado y geospatial delivery.',
			'Separar estimaciones, releases y presentación.',
			'Usar QA y límites de soporte.'
		]
	},
	'kb-contracts': {
		systemFlow: [
			'productores',
			'artefactos versionados en buses',
			'manifests y run records',
			'índices de observabilidad',
			'consumidores y superficies de publicación autorizados'
		],
		title: 'Contratos de conocimiento y datos',
		subtitle: 'Una arquitectura de contratos para hacer inspeccionables, testeables y mantenibles los pipelines de IA y conocimiento.',
		roleSignal: 'Arquitectura de soporte para pipelines de IA/datos',
		problem: 'Los workflows de LLM y conocimiento se vuelven frágiles con supuestos ocultos.',
		whatIBuilt: 'Un manual público y catálogo de contratos para buses, seams de integración, run records, observabilidad y snapshots.',
		status: 'Manual público de referencia; caso de soporte, no flagship.',
		limitations: ['Es un artefacto de arquitectura, no un producto end-user.'],
		proves: ['Diseñar capas de confiabilidad inspeccionables.', 'Definir límites, versionado y observabilidad.']
	}
};
