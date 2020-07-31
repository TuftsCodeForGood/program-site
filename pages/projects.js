import styles from '../components/landing_page.module.css'

function Projects() {
  return (
    <div className={styles.body}>
      <div className={styles.row}>
        <div className={styles.column}>

         <div className={styles.nav_bar}>
            <a href ="/"><img src="/images/TempLogo.jpg" alt="Tufts Code For
            Good Logo" width= "181px" height="61px" border="solid 1px #979797"/>
            </a>
            <a href="/about" className={styles.nav_bar}>ABOUT</a>
            <a href="/projects" className={styles.nav_bar}>PROJECTS</a>
            <a href="/funding" className={styles.nav_bar}>FUNDING</a>
          </div>

          <h1 className={styles.TCFG}>Projects</h1>
          <p className={styles.text}>
            "Lorem ipsum  dolor sit amet, consectetur adipiscing elit, sed do
            tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum."
          </p>

        </div>
      </div>
    </div>
  );
}

export default Projects
