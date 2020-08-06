import projects from '../projects.json'

const projectsBySlug = {};
for (const project of projects) {
	projectsBySlug[project.slug] = project;
}
export default projectsBySlug;