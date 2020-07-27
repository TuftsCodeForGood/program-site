import styles from '../components/project_list.module.css'

function HomePage() {
  return (
  	<div className={styles.body} id={styles.bg}>
  		<div id={styles.text_container}>
	  		<h1 className={styles.txt} id={styles.title}>PROJECTS</h1>
	  		<h3 className={styles.txt} id={styles.sub}>TUFTS CODE FOR GOOD</h3>
  		</div>
  		<div className={styles.column}>
  			<div className={styles.item}>
  				<img src="/images/projects_logos/example1.jpg" alt="1" className={styles.logo} />
			</div>
			<div className={styles.item}>
  				<img src="/images/projects_logos/example2.jpg" alt="2" className={styles.logo} />
  			</div>
  			<div className={styles.item}>
  				<img src="/images/projects_logos/example3.jpg" alt="3" className={styles.logo} />
  			</div>
  		</div>
   		<div className={styles.column}>
  			<div className={styles.item}>
  				<img src="/images/projects_logos/example3.jpg" alt="3" className={styles.logo} />
  			</div>
  			<div className={styles.item}>
  				<img src="/images/projects_logos/example2.jpg" alt="2" className={styles.logo} />
  			</div>
  			<div className={styles.item}>
  				<img src="/images/projects_logos/example1.jpg" alt="1" className={styles.logo} />
  			</div>
  		</div>
    	<div className={styles.column}>
  			<div className={styles.item}>
  				<img src="/images/projects_logos/example2.jpg" alt="2" className={styles.logo} />
  			</div>
  			<div className={styles.item}>
  				<img src="/images/projects_logos/example1.jpg" alt="1" className={styles.logo} />
  			</div>
  			<div className={styles.item}>
  				<img src="/images/projects_logos/example3.jpg" alt="3" className={styles.logo} />
  			</div>
		</div>
    	<div className={styles.column}>
  			<div className={styles.item}>
  				<img src="/images/projects_logos/example2.jpg" alt="2" className={styles.logo} />
  			</div>
  			<div className={styles.item}>
  				<img src="/images/projects_logos/example1.jpg" alt="1" className={styles.logo} />
  			</div>
  			<div className={styles.item}>
  				<img src="/images/projects_logos/example3.jpg" alt="3" className={styles.logo} />
  			</div>
		</div>
	</div>
  );
}

export default HomePage;