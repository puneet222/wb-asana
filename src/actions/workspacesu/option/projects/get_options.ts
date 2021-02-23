import { getWorkspaceProjects } from "../../../../utils/api";
import { getAPIErrorMessage } from "../../../../utils/helper";
import { Project, Workspace } from "../../../../utils/interfaces";

// @description Get all workspace projects

const returnOptions = () => {
	let projects: Project[] = [];
	if (options.workspaces) {
		const workspace = options.workspaces as Workspace;
		const projectsResponse = getWorkspaceProjects(workspace.gid);
		if (projectsResponse.status === 200) {
			projects = projectsResponse.response.data as Project[];
			projects = projects.map(project => ({
				...project,
				description: getProjectDescription(project)
			}));
		} else {
			log(getAPIErrorMessage(projectsResponse.response), "#FF5733");
		}
	}

	return {
		add: projects
	};
}

const getProjectDescription = (project: Project) => {
	let description = project.notes ? project.notes : project.name;
	description += ` ${project.archived ? "(Archived)" : ""}`;
	return description;
}

export default returnOptions;