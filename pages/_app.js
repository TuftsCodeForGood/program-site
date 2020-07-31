import React from 'react';
<<<<<<< HEAD
import Link from 'next/link';
import '../global.css';

function App({ Component, pageProps }) {
  return (
    <>
      <nav id="nav">
        <Link href="/">
          <img className="logo" src="/images/TempLogo.jpg" alt="Tufts Code For Good Logo"/>
        </Link>
        <ul>
          <li>
            <Link href="/about">
              <a>ABOUT</a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a>PROJECTS</a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a>FUNDING</a>
            </Link>
          </li>
        </ul>
      </nav>
      <main id="main">
        <Component {...pageProps} />
      </main>
    </>
  );
=======

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;

>>>>>>> liz/nav_bar
}


export default App;
