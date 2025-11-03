import * as _clsxModule from 'clsx';

import { memo, type FC } from 'react';
import styles from './Feature.module.css';
import type { FeatureItem } from './Types';
const clsx: (...parts: any[]) => string =
	typeof _clsxModule === 'function'
		? (_clsxModule as unknown as (...parts: any[]) => string)
		: _clsxModule && typeof (_clsxModule as any).default === 'function'
			? ((_clsxModule as any).default as (...parts: any[]) => string)
			: (...parts: any[]) => parts.filter(Boolean).join(' ');

const Feature: FC<FeatureItem> = ({ title, description }) => (
	<div className={clsx('col', 'col--4', styles.feature)}>
		<div className="text--left padding-horiz--md">
			<h3>{title}</h3>
			<div>{description}</div>
		</div>
	</div>
);

export default memo(Feature);
