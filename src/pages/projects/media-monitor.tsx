import SelectedProjectPage from '@site/src/components/Projects/SelectedProjectPage';
import { selectedProjects } from '@site/src/data/selectedProjects';

export default function MediaMonitorProject(): JSX.Element {
	return <SelectedProjectPage project={selectedProjects['media-monitor']} />;
}
