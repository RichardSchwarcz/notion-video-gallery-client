import Head from 'next/head'
import Link from 'next/link'
import { buttonVariants } from '~/components/ui/button'

import Image from 'next/image'
import Database from '../assets/Database.webp'
import { cn } from '~/lib/utils'

export default function Home() {
  return (
    <>
      <Head>
        <title>Notion Video Gallery</title>
        <meta name="description" content="Sync youtube playlists with notion" />
      </Head>
      <div className="flex border-b-[1px] p-4 pr-20 gap-8 justify-end items-center ">
        <Link href={''}>Docs</Link>
        <Link href={''}>Pricing</Link>
        <Link
          href="/authentication"
          className={cn(buttonVariants({ variant: 'default' }))}
        >
          Get Started
        </Link>
      </div>
      {/* HERO SECTION */}
      <div className="flex m-10 border">
        <p className="text-3xl font-extrabold leading-normal pt-10 pl-10 w-1/3">
          Sync your youtube playlists with Notion databases!
        </p>
        <Image width={500} height={400} alt="Picture" src={Database} />
      </div>
      {/* HOW IT WORKS */}
      <div className="text-xl font-extrabold flex justify-center">
        How it works
      </div>
    </>
  )
}

