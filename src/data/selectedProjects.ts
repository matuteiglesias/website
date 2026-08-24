export type EvidenceStatus = 'ready' | 'missing' | 'needs-review';

export interface SelectedProject {
	slug: string;
	title: string;
	subtitle: string;
	roleSignal: string;
	problem: string;
	whatIBuilt: string;
	systemFlow: string[];
	stack: string[];
	evidence: {
		label: string;
		href?: string;
		status: EvidenceStatus;
	}[];
	proves: string[];
	status: string;
	limitations: string[];
	primaryCta?: {
		label: string;
		href: string;
	};
	secondaryCtas?: {
		label: string;
		href: string;
	}[];
	principles?: string[];
	moduleBoundaries?: {
		title: string;
		description: string;
	}[];
}

export const selectedProjects: Record<string, SelectedProject> = {
	'media-monitor': {
		slug: 'media-monitor',
		title: 'Media Monitor',
		subtitle:
			'A governed news-intelligence and editorial publishing system for Argentina, from source ingestion through explicit human publication approval and freshness-checked deployment.',
		roleSignal: 'Deployed governed news-intelligence and editorial publishing system',
		problem:
			'News monitoring becomes fragile when sources, scraped text, editorial notes, generated drafts, approval state, and public deployment are mixed into ad hoc folders or one-off scripts. A trustworthy system needs stable ownership boundaries, versioned contracts, deterministic projections, an explicit human publication gate, and public freshness truth.',
		whatIBuilt:
			'A modular monorepo that ingests monitored sources into immutable sensing runs, publishes versioned contract buses and deterministic indexes, generates editorial briefs and drafts, requires explicit human approval before producing published_article.v1, compiles publication-aware site_snapshot.v2 artifacts, evaluates freshness at request time, and supports guarded scheduled deployment to one canonical public outlet.',
		systemFlow: [
			'RSS / monitored sources',
			'immutable sensing run',
			'versioned contracts / buses',
			'deterministic access indexes',
			'editorial briefs / drafts',
			'explicit human publication gate',
			'published_article.v1',
			'site_snapshot.v2',
			'request-time freshness health',
			'scheduled guarded deployment / canonical outlet'
		],
		stack: [
			'Python',
			'Next.js / TypeScript',
			'JSON Schema / JSONL contracts',
			'pytest and Node contract tests',
			'GitHub Actions',
			'Vercel',
			'PromptFlow / LLM-assisted editorial generation',
			'PostgreSQL worker path where applicable'
		],
		evidence: [
			{
				label: 'Canonical public outlet',
				href: 'https://mediamonitor-psi.vercel.app',
				status: 'ready'
			},
			{
				label: 'Public freshness / deployment health',
				href: 'https://mediamonitor-psi.vercel.app/api/health',
				status: 'ready'
			},
			{
				label: 'Documentation and architecture map',
				href: 'https://github.com/matuteiglesias/media_monitor/tree/main/docs',
				status: 'ready'
			},
			{
				label: 'Source repository',
				href: 'https://github.com/matuteiglesias/media_monitor',
				status: 'ready'
			},
			{
				label: 'Explicit human publication gate',
				href: 'https://github.com/matuteiglesias/media_monitor/blob/main/scripts/promote_draft_to_published.py',
				status: 'ready'
			},
			{
				label: 'Publication-aware site_snapshot.v2 contract',
				href: 'https://github.com/matuteiglesias/media_monitor/blob/main/contracts/schemas/site_snapshot.v2.json',
				status: 'ready'
			},
			{
				label: 'Scheduled guarded public refresh workflow',
				href: 'https://github.com/matuteiglesias/media_monitor/blob/main/.github/workflows/scheduled-publication.yml',
				status: 'ready'
			},
			{
				label: 'Runtime contract evidence',
				href: 'https://github.com/matuteiglesias/media_monitor/actions/runs/32770941754',
				status: 'ready'
			},
			{
				label: 'C3 editorial rehearsal / human-gate readiness',
				href: 'https://github.com/matuteiglesias/media_monitor/pull/64',
				status: 'ready'
			}
		],
		proves: [
			'Design inspectable AI/data workflows across source ingestion, enrichment, editorial generation, publication approval, and deployment boundaries.',
			'Separate LLM-produced drafts from durable contract buses and from the human authority required to publish editorial content.',
			'Build deterministic read models, freshness health, scheduled control-plane guards, and deployment verification instead of treating a reachable URL as operational truth.'
		],
		status:
			'Deployed governed news-intelligence and editorial publishing system. The canonical outlet, public health contract, publication-aware snapshot, scheduled refresh control plane, and human-gated promotion machinery are implemented and evidenced. Current/live status is defined by the public health invariant, not URL reachability alone.',
		limitations: [
			'A representative Media Monitor editorial article is intentionally not claimed yet: the C3 tranche rehearsed the real promotion/index machinery without manufacturing human_approved. A real article should be linked only after explicit human approval.',
			'The scheduled refresh workflow is implemented and guarded; repeated successful production operation should be read from Actions evidence and public health rather than inferred from the cron declaration alone.',
			'Monitored external-source signals and Media Monitor editorial analysis are separate public layers by design.'
		],
		primaryCta: {
			label: 'Open Media Monitor',
			href: 'https://mediamonitor-psi.vercel.app'
		},
		secondaryCtas: [
			{ label: 'Public health', href: 'https://mediamonitor-psi.vercel.app/api/health' },
			{ label: 'Documentation', href: 'https://github.com/matuteiglesias/media_monitor/tree/main/docs' },
			{ label: 'Repository', href: 'https://github.com/matuteiglesias/media_monitor' },
			{ label: 'Back to homepage', href: '/' }
		],
		principles: [
			'Generated draft is not published analysis.',
			'Human approval is an explicit authority boundary.',
			'Public deployment consumes deterministic versioned snapshots.',
			'Freshness is evaluated at request time and exposed through health.',
			'“Live” is an evidence claim, not a synonym for “has a URL”.'
		],
		moduleBoundaries: [
			{
				title: 'news_acquire',
				description:
					'Owns source acquisition, grouping, immutable sensing-run production, and source-side contract/index materialization.'
			},
			{
				title: 'news_enrich',
				description:
					'Fetches and normalizes article text from known references, emits schema-valid scraped_article.v1 records, and keeps enrichment status observable.'
			},
			{
				title: 'news_editorial',
				description:
					'Turns digest inputs into briefs and drafts. It does not own publication authority; generated output remains pre-publication until the human gate.'
			},
			{
				title: 'human publication gate',
				description:
					'Explicit approval is required to promote a draft into published_article.v1. C3 rehearsals are isolated and cannot manufacture human_approved state.'
			},
			{
				title: 'news_site',
				description:
					'Renders site_snapshot.v2, keeps approved editorial publication separate from monitored external signals, and exposes request-time freshness and deployment identity through /api/health.'
			}
		]
	},
	'kb-contracts': {
		slug: 'kb-contracts',
		title: 'Knowledge / Data Contracts',
		subtitle: 'A contract architecture for making AI and knowledge pipelines inspectable, testable, and maintainable.',
		roleSignal: 'Reliability architecture for AI/knowledge pipelines',
		problem:
			'LLM and knowledge workflows often grow as brittle chains of scripts, folders, exports, and hidden assumptions. As soon as more repos, agents, documents, summaries, or publishers interact, the system becomes hard to debug and unsafe to extend.',
		whatIBuilt:
			'A public manual and contract catalog that defines buses, integration seams, run records, manifests, observability indexes, snapshot publishing, and contract tests for a multi-repo knowledge ecosystem.',
		systemFlow: [
			'Producers',
			'versioned bus artifacts',
			'manifests / run records',
			'observability indexes',
			'sanctioned consumers / publishing surfaces'
		],
		stack: [
			'Docusaurus',
			'TypeScript',
			'Markdown / MDX',
			'JSON / JSONL contracts',
			'schema/version conventions',
			'static publishing',
			'CI-compatible contract-test concepts'
		],
		evidence: [
			{ label: 'Public technical overview', href: '/docs/General/tech', status: 'ready' },
			{ label: 'Integration seams page', status: 'needs-review' },
			{ label: 'Run record contract', status: 'needs-review' },
			{ label: 'Observability index contract', status: 'needs-review' },
			{ label: 'Contract compliance tests', status: 'needs-review' },
			{ label: 'Producer → bus → manifest → index → consumer diagram', status: 'missing' }
		],
		proves: [
			'Design reliability layers that keep multi-repo AI/data pipelines inspectable and safe to extend.',
			'Define boundaries, contracts, observability, versioning, integration governance, and failure containment.',
			'Turn knowledge-system architecture into explicit rules rather than hidden coupling between folders and scripts.'
		],
		status: 'Public reference architecture/manual. Strong as a design and governance artifact; should be paired with Media Monitor or another implementation project to show applied use.',
		limitations: [
			'This is an architecture and governance artifact, not a standalone end-user product.',
			'Some specific manual pages and diagrams still need public links or sanitization before being marked ready.',
			'The strongest external read is in combination with an implementation project such as Media Monitor.'
		],
		primaryCta: {
			label: 'Technical overview',
			href: '/docs/General/tech'
		},
		secondaryCtas: [
			{ label: 'Media Monitor implementation', href: '/projects/media-monitor' },
			{ label: 'Back to homepage', href: '/' }
		],
		principles: [
			'Consumers read contracts and indexes, not private directories.',
			'Every pipeline run emits an audit record.',
			'Cross-repo integration is artifact-based, not code-coupled.',
			'UI surfaces read compact indexes, not raw stores.',
			'Contract tests define whether a project is integrated.'
		]
	},
	'public-data-poverty-eph': {
		slug: 'public-data-poverty-eph',
		title: 'Public Data / Poverty & EPH',
		subtitle:
			'A public-data analysis project combining Argentine household survey microdata, socioeconomic modeling, maps, and reproducible analytical outputs.',
		roleSignal: 'Research-grade public data product',
		problem:
			'Public poverty and socioeconomic data are difficult to explore when raw survey microdata, geographic units, indicators, notebooks, and visual outputs are disconnected. Analysts and citizens need reproducible paths from official/public datasets to interpretable maps, charts, and summaries.',
		whatIBuilt:
			'A poverty and socioeconomic analysis pipeline for Argentina using household survey microdata, statistical analysis, geospatial processing, predictive modeling, and public-facing outputs such as maps, charts, and tables.',
		systemFlow: [
			'Public microdata / survey inputs',
			'cleaning and harmonization',
			'socioeconomic indicators',
			'statistical / geospatial analysis',
			'maps, charts, tables',
			'public-facing atlas / documentation'
		],
		stack: [
			'Python',
			'Jupyter',
			'pandas / geopandas-style workflows',
			'statistical analysis',
			'geospatial processing',
			'public datasets',
			'HTML / static outputs'
		],
		evidence: [
			{ label: 'Repository: indice-pobreza-UBA', href: 'https://github.com/matuteiglesias/indice-pobreza-UBA', status: 'ready' },
			{ label: 'Civic/public-data overview', href: '/docs/General/civic', status: 'ready' },
			{ label: 'Screenshot of poverty map / atlas', status: 'needs-review' },
			{ label: 'Methodology section', status: 'needs-review' },
			{ label: 'Example notebook or script', status: 'needs-review' },
			{ label: 'Sample chart/table', status: 'needs-review' },
			{ label: 'Data sources page', status: 'needs-review' },
			{ label: 'Reliable live demo path', status: 'missing' }
		],
		proves: [
			'Apply research-grade analytical judgment to public socioeconomic data rather than only moving JSON artifacts.',
			'Build reproducible paths from survey microdata to indicators, geospatial analysis, and human-facing outputs.',
			'Translate economic research into inspectable maps, charts, tables, and documentation for public audiences.'
		],
		status: 'Public research/data product. Needs a sharper external case-study wrapper and a reliable demo/screenshot path before it should be treated as a flagship engineering proof.',
		limitations: [
			'This should be positioned third for AI/backend roles: it proves analytical depth and research-to-product capability, not operational AI automation first.',
			'The live demo should not be primary evidence until it is fast and reliable; use repo/docs and archived screenshots until fixed.',
			'The external wrapper should emphasize sources, pipeline, outputs, reproducibility, maps, and limits over broad research claims.'
		],
		primaryCta: {
			label: 'Repository',
			href: 'https://github.com/matuteiglesias/indice-pobreza-UBA'
		},
		secondaryCtas: [
			{ label: 'Civic data overview', href: '/docs/General/civic' },
			{ label: 'Back to homepage', href: '/' }
		],
		principles: [
			'Official/public inputs should be traceable to the indicators and outputs they produce.',
			'Notebooks and analysis artifacts need a clear path into maps, charts, tables, and documentation.',
			'Limitations and demo reliability should be stated explicitly rather than hidden behind broad claims.'
		]
	}
};
