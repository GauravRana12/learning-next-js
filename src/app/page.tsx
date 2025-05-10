import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (
   <div>
    <Link href={'/about'}>About</Link>
    <Link href={'/contact'}>Contact</Link>
    <Link href={'/courses'}>Courses</Link>
    <h1>Home</h1>    
   </div>
  );
}
