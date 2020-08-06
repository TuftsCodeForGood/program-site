import styles from '../components/landing_page.module.css'
import s from '../components/project_list.module.css'
import projects from '../projects.json'
import Link from 'next/link'
import test from '../util/project.js'

function Projects() {
  const projectComponents = projects.map(project =>{
    return (
      <div className={s.column} key={project.name}>
      	  <Link href={project.link}>
	        <div className={s.item}>
	          <img src={project.logo} alt={project.name} className={s.logo} />
	        </div>
	      </Link>
      </div>
      )
  })

  return (
    <div className={s.body} id={s.bg}>
        <div id={s.text_container}>
          <h1 className={s.txt} id={s.title}>PROJECTS</h1>
          <h3 className={s.txt} id={s.sub}>TUFTS CODE FOR GOOD</h3>
        </div>
        {projectComponents}
    </div>
  );
}

export default Projects
