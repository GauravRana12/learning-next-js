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
          <button onClick={() => signOut()}>Sign out</button>
          <Link href="/">{session?.user?.name}</Link>
        </>
      ) : (
        <button onClick={() => signIn('github')}>Login</button>
      )}
    </div>
  )
}

export default AuthButtons;
