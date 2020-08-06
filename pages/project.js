import styles from '../components/landing_page.module.css'
import p from '../components/project_page.module.css'
import slugs from '../util/project.js'

function Project() {
  return (
    <div className={p.body} id={p.bg}>
        <div className={p.head_rect}>
          <h1 className={p.txt} id={p.title}>Firehouse Spice Company</h1>
          <a href="https://firehousespiceco.com" className={p.txt} id={p.sub}>firehousespiceco.com</a>
        </div>
        <div className={p.row}>
          <div className={p.column}>
              <div className={p.item}>
                <img src="/images/projects/firehouse_spice/example1.png" alt="1" className={p.image} />
                <h4 className={p.txt} id={p.image_title}>IMAGE TITLE</h4>
              </div>
          </div>
          <div className={p.column}>
            <div className={p.details}>
              <p className={p.txt} id={p.detail}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </div>
        <div className={p.row}>
          <div className={p.column}>
            <div className={p.details}>
              <p className={p.txt} id={p.detail}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
          <div className={p.column}>
            <div className={p.item}>
              <img src="/images/projects/firehouse_spice/example2.jpeg" alt="1" className={p.logo} />
              <h4 className={p.txt} id={p.image_title}>IMAGE TITLE</h4>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Project
