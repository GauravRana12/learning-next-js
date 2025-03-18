
import { auth } from '@/auth'
import { signIn, signOut } from 'next-auth/react';
import Link from 'next/link';
import React from 'react'
import AuthButtons from './AuthButton';
import Image from 'next/image';

const Navbar = async () => {
  const session = auth();
  return (
    <header className='px-5 py-3 bg-white shadow-sm font-work-sans'>
      <nav className='flex justify-between items-center'>
          <Link href="/">
            <Image src="/Logo.png" alt='logo' width={144} height={30} />
          </Link>
        <AuthButtons />
      </nav>
    </header>
  )
}

export default Navbar