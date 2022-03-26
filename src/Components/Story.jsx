import React from 'react'

import Stories from './Stories'

const Story = () => {
  return (
    <div  className='flex overflow-x-scroll 
    border-2  gap-5 mt-1 md:mt-7
   
     scrollbar-thumb-rounded-2xl
     md:
     scrollbar-w-26
     scroll-m-6
     scrollbar-track-white
     bg-white p-4' >
        <Stories/> 
    </div>
  )
}

export default Story