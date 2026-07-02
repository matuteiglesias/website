import SelectedProjectPage from '@site/src/components/Projects/SelectedProjectPage';
import { selectedProjects } from '@site/src/data/selectedProjects';

export default function PublicDataPovertyEphProject(): JSX.Element {
	return <SelectedProjectPage project={selectedProjects['public-data-poverty-eph']} />;
}
