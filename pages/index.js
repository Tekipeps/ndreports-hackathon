import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={styles.navbar}>
      <a href=""><img src={"/images/logo.svg"} width="100px" /></a>

      <a href="/report" className={styles.btn}>Report</a>
      </nav>

      <main className={styles.main}>
      
        <h1 className={styles.title}>
        Report environmental challenges, make <span>Niger Delta</span> better
        </h1>

        <p className={styles.description}>
        The new government is proactive about having a healthy environment. Join Us!
        </p>

        <a href="/report" className={styles.btn}>Report a challenge</a>

        <h2 className={styles.text}>Report Steps</h2>

        <div className={styles.grid}>
          <a href="/report" className={styles.card}>
            <h2>STEP 1 &rarr;</h2>
            <p>Click this link to go to the report page</p>
          </a>

          <span href="https://nextjs.org/learn" className={styles.card}>
            <h2>STEP 2 &rarr;</h2>
            <p>Fill in your details so we can reach back to you. 😊</p>
          </span>

          <span
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>STEP 3 &rarr;</h2>
            <p>Fill in the report document. Add images, videos of the environmental challenge ⚠️</p>
          </span>

          <span
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>STEP 4 &rarr;</h2>
            <p>
              Submit your form and we'll look into it. Thanks 🚨.
            </p>
          </span>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/index.png" alt="Vercel Logo" width={40} height={40} />
          </span>
        </a>
      </footer>
    </div>
  )
}
