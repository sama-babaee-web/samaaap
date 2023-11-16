import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Header from './Components/Header'
import HomeWrapper from './Components/Home'
// import CustomCursor from './Components/CustomCursor'
export default function Home() {
  return (
    <>
      <Head>
        <title>  Sama Babaee </title>
        <meta name="description" content="Generated by sama babaee" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="img/favicon/favicon.ico" />

        <link rel="apple-touch-icon" sizes="180x180" href="img/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="img/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="img/favicon/favicon-16x16.png" />
        <link rel="manifest" href="img/favicon/site.webmanifest"/>


      </Head>
      {/* <CustomCursor /> */}
      <main className={`${styles.main}  container-xxl`} >

        <Header />
        <HomeWrapper />

      </main>
    </>
  )
}
