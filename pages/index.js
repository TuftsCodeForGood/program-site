import styles from '../components/landing_page.module.css'

function HomePage() {
  return (
  	<div className={styles.body}>
  		<div className={styles.row}>
	  		<div className={styles.column}>
		  		<h1 className={styles.TCFG}>Tufts Code <br/> for Good</h1>
		  		<p className={styles.text}> 
		  			Insert description of Tufts Code For Good. "Lorem ipsum 
		  			dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
		  			tempor incididunt ut labore et dolore magna aliqua. Ut enim 
		  			ad minim veniam, quis nostrud exercitation ullamco laboris 
		  			nisi ut aliquip ex ea commodo consequat. Duis aute irure 
		  			dolor in reprehenderit in voluptate velit esse cillum 
		  			dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
		  			cupidatat non proident, sunt in culpa qui officia deserunt 
		  			mollit anim id est laborum."
  				</p>
		  		<button type="button" className={styles.Rectangle}> 
		  			<div className={styles.LearnMore}> Learn More </div> 
		  		</button>
	  		</div>
	  		<div className={styles.column}>
	  			<img src="/images/TempLogo.jpg" alt="Tufts Code For Good Logo" className={styles.img} />
	  		</div>
  		</div>
	</div>
  );
}

export default HomePage;