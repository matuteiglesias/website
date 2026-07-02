import { useEffect } from 'react';

export default function ContactRedirect(): JSX.Element {
	useEffect(() => {
		window.location.href = 'mailto:matuteiglesias@gmail.com';
	}, []);

	return <></>;
}
