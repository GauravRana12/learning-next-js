import Link from 'next/link'
import React from 'react'

const page = () => {
  const coursesList=[
    {name:"HTML",
     courseId:"1"
    },
    {name:"JS",
     courseId:"2"
    },
    {name:"HTML",
     courseId:"3"
    }
  ]
  return (
    <div className='flex gap-2'>
      {coursesList.map((course,idx)=>{
        return <Link href={`courses/${course.name}`}>{course.name}</Link>
      })}
      
    </div>
  )
}

export default page