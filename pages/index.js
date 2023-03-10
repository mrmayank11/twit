import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Sidebar from '../components/Sidebar';
import Feedbar from '../components/Feedbar';
import Rightscrollbar from '../components/Rightscrollbar';
import { fetchTweets } from '../utils/fetchTweets';
import { fetchComments } from '../utils/fetchComments';
import { Toaster } from 'react-hot-toast'
export default function Home({ tweets }) {

  return (
    <div className=' bg-white min-h-screen'>
      <Head>
        <title>twit</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Toaster />
      <main className=' h-full'>
        <div className='grid grid-cols-10 p-3 mx-2'>
          {/* sidebar */}

          <Sidebar />

          <Feedbar tweets={tweets} />

          <Rightscrollbar />
        </div>

      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const tweets = await fetchTweets();

  return {
    props: {
      tweets: tweets,
    },
  }
}
