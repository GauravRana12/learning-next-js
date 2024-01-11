import Link from "next/link"


const Links = () => {
    const links=[
        {
            to:'/',
            page:'Home'
        },
        {
            to:'/about',
            page:'About'
        },
        {
            to:'/contact',
            page:'Contact'
        },
        {
            to:'/blog',
            page:'Blogs'
        }
    ]
  return (
    <div>
     {links.map((li)=>(
        <Link href={li.to} key={li.title}>{li.page}</Link>
     ))}
    </div>
  )
}

export default Links