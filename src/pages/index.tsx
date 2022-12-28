import { useSession } from 'next-auth/react'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Header from '../components/header'
export default function Home() {
  const router = useRouter()
  const { status } = useSession({
    required: true,
    onUnauthenticated: () => {
      router.push('/auth/signin')
    }
  })
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div>Index Page</div>
    </>
  )
}
