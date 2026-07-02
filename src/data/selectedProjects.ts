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
		subtitle: 'An AI/data intelligence pipeline for turning raw news inputs into structured briefs, drafts, and human-reviewable outputs.',
		roleSignal: 'Operational AI/data automation system',
		problem:
			'News monitoring becomes fragile when sources, scraped text, editorial notes, generated drafts, and publishing surfaces are mixed into ad hoc folders or one-off scripts. The system needs stable boundaries: acquisition, enrichment, editorial generation, contracts, handoff, and public snapshots.',
		whatIBuilt:
			'A modular monorepo pipeline that ingests news references, groups them into digest artifacts, enriches article text, generates editorial briefs/drafts, validates contract buses, and exposes compact handoff/public surfaces.',
		systemFlow: [
			'RSS / news references',
			'news_acquire',
			'news_ref.v1 / news_digest_group.v1',
			'news_enrich',
			'scraped_article.v1',
			'news_editorial',
			'news_piece_brief.v1 / draft buses',
			'editorial_latest.json',
			'public snapshot / demo surface'
		],
		stack: [
			'Python',
			'Make',
			'JSONL',
			'schema contracts',
			'PromptFlow / LLM runtime',
			'Docusaurus / static public surfaces',
			'Vercel-style public snapshot deployment',
			'PostgreSQL worker path where applicable'
		],
		evidence: [
			{ label: 'Architecture flow and module boundaries', status: 'ready' },
			{ label: 'Sanitized public/demo snapshot surface', status: 'needs-review' },
			{ label: 'Sample editorial handoff packet or editorial_latest.json shape', status: 'needs-review' },
			{ label: 'Sample bus row or schema contract', status: 'needs-review' },
			{ label: 'Runbook references for acquisition, enrichment, and editorial lanes', status: 'needs-review' },
			{ label: 'Smoke-test or dry-run command when the public artifact is available', status: 'missing' }
		],
		proves: [
			'Design inspectable AI/data workflows across acquisition, enrichment, editorial generation, and publishing boundaries.',
			'Separate LLM runtime output from stable contract buses and human handoff surfaces.',
			'Expose fallback visibility and operational status instead of hiding fragile assumptions in scripts.'
		],
		status: 'Working internal/prototype system with public/demo surfaces. Some modules preserve legacy compatibility while owner-module boundaries and contracts are being hardened.',
		limitations: [
			'Public artifacts should remain sanitized and scoped; the page does not claim an enterprise production deployment.',
			'Some evidence items are marked needs-review until screenshots, samples, or runbooks are safe to publish.',
			'Legacy compatibility paths still exist while the owner-module boundaries continue to harden.'
		],
		primaryCta: {
			label: 'GitHub profile',
			href: 'https://github.com/matuteiglesias'
		},
		secondaryCtas: [{ label: 'Back to homepage', href: '/' }],
		moduleBoundaries: [
			{
				title: 'news_acquire',
				description:
					'Owns raw acquisition boundaries such as RSS dumps, digest maps, digest JSONLs, master references/indexes, acquisition quarantine, and buses including news_ref.v1 and news_digest_group.v1.'
			},
			{
				title: 'news_enrich',
				description:
					'Fetches and normalizes article text from known references, emits schema-valid scraped_article.v1 records, and keeps enrichment status observable for manual, batch, worker, and recovery paths.'
			},
			{
				title: 'news_editorial',
				description:
					'Turns digest runtime inputs into editorial briefs, drafts, and handoff indexes. The stable contract is not raw LLM output; it is schema-valid buses and a compact decision surface for human review.'
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
