import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HeadTags from '@site/src/components/Home/HeadTags';
import HomePageHeader from '@site/src/components/Home/HomePageHeader';
import HomePageFeatures from '@site/src/components/Home/HomepageFeatures';
import Layout from '@theme/Layout';
import { useEffect } from 'react';
import { SWRConfig } from 'swr';

export default function Home(): JSX.Element {
	const { siteConfig } = useDocusaurusContext();

	useEffect(() => {
		console.log('%cHold Up!', `color: #23529B; font-size: 72px; font-weight: bold; -webkit-text-stroke: 2px #23529B`);
		console.log(['For more information check out\n\nhttps://en.wikipedia.org/wiki/Self-XSS'].join(' '), 'font-size: 16px;');
		console.log(
			[
				'%cWhile we do everything in our power to ensure your security,',
				'pasting anything in here could give attackers access to your private information!'
			].join(' '),
			'font-size: 18px; font-weight: bold; color: red;'
		);
	}, []);

	return (
		<>
			<HeadTags />
			<Layout title="Matías Iglesias – Data Scientist, AI Builder" description={siteConfig.tagline}>
				<SWRConfig
					value={{
						fetcher: (resource: string, init: RequestInit) => fetch(resource, init).then((res) => res.json())
					}}
				>
					<HomePageHeader />
					<main>
						<HomePageFeatures />
					</main>
				</SWRConfig>
			</Layout>
		</>
	);
}
