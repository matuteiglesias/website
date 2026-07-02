import Link from '@docusaurus/Link';

interface Props {
	href: string;
	src?: string;
	alt?: string;
	title?: string;
	meta?: string;
	docHref?: string;
}

export default function Deployment({ href, src, alt, title, meta, docHref }: Props) {
	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				gap: '10px',
				marginTop: '6px',
				marginBottom: '2px',
				fontSize: '0.95rem',
				lineHeight: 1.35
			}}
		>
			<Link to={href} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block' }}>
				<img
					src={src}
					alt={alt}
					width={120}
					height={75}
					loading="lazy"
					style={{ borderRadius: 6, boxShadow: '0 1px 3px rgba(0,0,0,.15)', objectFit: 'cover' }}
				/>
			</Link>
			<div>
				<strong>Deployment: </strong>
				<Link to={href} target="_blank" rel="noopener noreferrer">
					{title}
				</Link>
				{meta ? <div style={{ opacity: 0.8, fontSize: '.9rem' }}>{meta}</div> : null}
				{docHref ? (
					<div style={{ opacity: 0.8, fontSize: '.9rem' }}>
						Docs:{' '}
						<Link to={docHref} target="_blank" rel="noopener noreferrer">
							{docHref}
						</Link>
					</div>
				) : null}
			</div>
		</div>
	);
}
