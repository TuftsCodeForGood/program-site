import styles from '../components/landing_page.module.css'

function HomePage() {
  return (
  	<div className={styles.body}>
  		<div className={styles.row}>
	  		<div className={styles.column}>
		  		<h1 id={styles.TCFG}>Tufts Code <br/> for Good</h1>
		  		<button type="button" className={styles.Rectangle}>
		  			<div id={styles.LearnMore}> Learn More </div>
		  		</button>
	  		</div>
	  		<div className={styles.column}>
	  			<img src="/images/Logo.jpg" alt="Tufts Code For Good Logo" className={styles.img} />
	  		</div>
  		</div>
	</div>
  );
}

export default HomePage;
