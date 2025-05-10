import React from 'react'

type courseParams = {
  params: {
    courseId: string;
  };
};
const page = ({params}:courseParams) => {
    const {courseId}=params;
  return (
    <div>{courseId}</div>
  )
}

export default page