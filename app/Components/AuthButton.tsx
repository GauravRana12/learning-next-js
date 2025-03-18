"use client";

import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

const AuthButtons = () => {
    const { data: session } = useSession();
  return (
    <div className='flex gap-5'>
      {session && session?.user ? (
        <>
          <Link href='/startup/create'>
            <span className='font-semibold'>Create</span>
          </Link>
          <button className='text-red-700 font-semibold cursor-pointer' onClick={() => signOut()}>Logout</button>
          <Link href="/">{session?.user?.name}</Link>
        </>
      ) : (
        <button className='font-semibold ' onClick={() => signIn('github')}>Login</button>
      )}
    </div>
  )
}

export default AuthButtons;
