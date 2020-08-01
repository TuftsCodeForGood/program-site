import styles from '../components/landing_page.module.css'
import s from '../components/project_list.module.css'

function Projects() {
  return (
    <div className={s.body} id={s.bg}>
        <div id={s.text_container}>
          <h1 className={s.txt} id={s.title}>PROJECTS</h1>
          <h3 className={s.txt} id={s.sub}>TUFTS CODE FOR GOOD</h3>
        </div>
        <div className={s.column}>
          <div className={s.item}>
            <img src="/images/projects_logos/example1.jpg" alt="1" className={s.logo} />
          </div>
          <div className={s.item}>
            <img src="/images/projects_logos/example2.jpg" alt="2" className={s.logo} />
          </div>
          <div className={s.item}>
            <img src="/images/projects_logos/example3.jpg" alt="3" className={s.logo} />
          </div>
        </div>
        <div className={s.column}>
          <div className={s.item}>
            <img src="/images/projects_logos/example3.jpg" alt="3" className={s.logo} />
          </div>
          <div className={s.item}>
            <img src="/images/projects_logos/example2.jpg" alt="2" className={s.logo} />
          </div>
          <div className={s.item}>
            <img src="/images/projects_logos/example1.jpg" alt="1" className={s.logo} />
          </div>
        </div>
        <div className={s.column}>
          <div className={s.item}>
            <img src="/images/projects_logos/example2.jpg" alt="2" className={s.logo} />
          </div>
          <div className={s.item}>
            <img src="/images/projects_logos/example1.jpg" alt="1" className={s.logo} />
          </div>
          <div className={s.item}>
            <img src="/images/projects_logos/example3.jpg" alt="3" className={s.logo} />
          </div>
        </div>
        <div className={s.column}>
          <div className={s.item}>
            <img src="/images/projects_logos/example2.jpg" alt="2" className={s.logo} />
          </div>
          <div className={s.item}>
            <img src="/images/projects_logos/example1.jpg" alt="1" className={s.logo} />
          </div>
          <div className={s.item}>
            <img src="/images/projects_logos/example3.jpg" alt="3" className={s.logo} />
          </div>
        </div>

    </div>
  );
}

export default Projects
