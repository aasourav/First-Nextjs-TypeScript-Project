import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Article from './components/Article'
import Footer from './components/Footer'
import LatestCourse from './components/LatestCourse'
import NavBar from './components/NavBar'

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </Head>
      <main className='flex flex-col h-full bg-blue-50'>
        <NavBar/>
        <Article/> 
        <LatestCourse/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}
