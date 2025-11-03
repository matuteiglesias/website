import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import styles from '@site/src/components/Docs/Link.module.css';
import * as _clsxModule from 'clsx';

import type { FC } from 'react';
const clsx: (...parts: any[]) => string =
	typeof _clsxModule === 'function'
		? (_clsxModule as unknown as (...parts: any[]) => string)
		: _clsxModule && typeof (_clsxModule as any).default === 'function'
			? ((_clsxModule as any).default as (...parts: any[]) => string)
			: (...parts: any[]) => parts.filter(Boolean).join(' ');

interface Props {
	linkName: string;
	href: string;
	noRightMargin: boolean;
}

const SimpleLink: FC<Props> = ({ href, linkName, noRightMargin = false }) => (
	<a href={href} className={styles.link}>
		{linkName}
		<ArrowTopRightOnSquareIcon className={clsx(styles.linkIcon, { [styles.linkIconNoMarginRight]: noRightMargin })} />
	</a>
);

export default SimpleLink;
