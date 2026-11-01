import SelectedProjectPage from '@site/src/components/Projects/SelectedProjectPage';
import { selectedProjects } from '@site/src/data/selectedProjects';

export default function AccountingWorkflowsProject(): JSX.Element {
	return <SelectedProjectPage project={selectedProjects['accounting-workflows']} />;
}
