import { getTeamProjects } from "../../../../../../utils/api";
import { getAPIErrorMessage } from "../../../../../../utils/helper";
import { Project, Team } from "../../../../../../utils/interfaces";

// @description Get all team projects

const returnOptions = () => {
	let projects: Project[] = [];
	if (options.teams) {
		const team = options.teams as Team;
		const projectsResponse = getTeamProjects(team.gid);
		if (projectsResponse.status === 200) {
			projects = projectsResponse.response.data as Project[];
			projects = projects.map(project => ({
				...project,
				description: project.notes ? project.notes : project.name
			}));
		} else {
			// Handle API Errors
			log(getAPIErrorMessage(projectsResponse.response), "#FF5733");
		}
	}

	return {
		add: projects
	};
}

export default returnOptions;