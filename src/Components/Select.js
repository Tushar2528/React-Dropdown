import React, { useState } from 'react';
import Dropdown from "./Dropdown" ;

const Select = () => {

    const [flg, setFlg] = useState(false);
    const items = ["Yes", "Probably not"];

    const toggleHover = () => {

        setFlg(!flg);
    }

  return (
    <div>
        <h1 className='text-5xl m-8'>Should you use a dropdown?</h1>
        <h1 className='text-3xl border-black bg-white w-56 py-4 ml-[38%] mb-4 hover:cursor-pointer rounded-xl' onMouseEnter={toggleHover} onMouseLeave={toggleHover}>Select ⬇️</h1>
        {flg && <Dropdown items={items}/>}
    </div>
  )
}

export default Select