import React from 'react'

const dropdown = ({items}) => {
  return (
    <div className='mr-[20%]'>
      {items.map((item) => <div className=' px-10 text-2xl bg-white w-72 py-4 ml-[38%] border-black '>{item}</div>)}

    </div>
  )
}

export default dropdown