import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Head Smart</title>
        <meta name="description" content="A way to organize parts" />
      </Head>

      <Link href={"/parts"}><button>go to parts page</button></Link>
    </>
  )
}
