// Auth.
import { auth } from '@/auth';

// DB.
import { prisma } from '@/lib/prisma';

// Components.
import Image from 'next/image'

export default async function Explore() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        explore
      </div>
    </main>
  )
}
