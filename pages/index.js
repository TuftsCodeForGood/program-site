import styles from '../components/landing_page.module.css'
import Link from 'next/link'

function HomePage() {
  return (
  	<div className={styles.body}>
  		<div className={styles.row}>
	  		<div className={styles.column}>
		  		<h1 id={styles.TCFG}>TUFTS CODE <br/> FOR GOOD</h1>
		  		<Link href="/about">
	  				<div id={styles.learnContainer}>
	  					<span id={styles.learn}> Learn more </span>
  						<div id={styles.arrowContainer}>
  							<div className={styles.arrow} />
						</div>
					</div>
		  		</Link>
	  		</div>
	  		<div className={styles.column}>
	  			<img src="/images/Logo.jpg" alt="Tufts Code For Good Logo" className={styles.img} />
	  		</div>
  		</div>
	</div>
  );
}

export default HomePage;
