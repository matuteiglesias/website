import { useColorMode } from '@docusaurus/theme-common';
import styles from '@site/src/components/Home/LoadingSkeleton.module.css';
import * as _clsxModule from 'clsx';

import type { CSSProperties, FC } from 'react';
const clsx: (...parts: any[]) => string =
	typeof _clsxModule === 'function'
		? (_clsxModule as unknown as (...parts: any[]) => string)
		: _clsxModule && typeof (_clsxModule as any).default === 'function'
			? ((_clsxModule as any).default as (...parts: any[]) => string)
			: (...parts: any[]) => parts.filter(Boolean).join(' ');

const LoadingSkeleton: FC<CSSProperties> = (props) => {
	const { colorMode } = useColorMode();

	return (
		<div
			className={clsx(styles.loadingSkeleton, {
				[styles.lightLoadingSkeleton]: colorMode === 'light',
				[styles.darkLoadingSkeleton]: colorMode === 'dark'
			})}
			style={props}
		/>
	);
};

export default LoadingSkeleton;
