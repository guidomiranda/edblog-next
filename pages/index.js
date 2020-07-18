import Head from 'next/head'
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Home</h1>
        <Link href="/segunda"><a>Ir a segunda</a></Link>
      </main>
    </div>
  )
}
