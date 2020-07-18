import Head from 'next/head'
import Header from '../components/sections/Header'

const Home = () => (
  <div>
    <Head>
      <title>Home | {process.env.SITE_NAME} </title>
    </Head>
    
    <main>
      <h1>{process.env.SITE_NAME}</h1>
    </main>
  </div>
)

export default Home