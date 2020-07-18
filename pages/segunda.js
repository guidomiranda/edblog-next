import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Segunda pagina</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Segunda pagina</h1>
        <Link href="/"><a>Ir al home</a></Link>
      </main>
    </div>
  )
}
