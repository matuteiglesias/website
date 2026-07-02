import { useEffect } from 'react';

export default function GitHubRedirect(): JSX.Element {
	useEffect(() => {
		window.location.href = 'https://github.com/matuteiglesias';
	}, []);

	return <></>;
}
