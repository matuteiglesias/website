import SelectedProjectPage from '@site/src/components/Projects/SelectedProjectPage';
import { selectedProjects } from '@site/src/data/selectedProjects';

export default function MicroToMacroAggregationProject(): JSX.Element {
	return <SelectedProjectPage project={selectedProjects['micro-to-macro-aggregation']} />;
}
