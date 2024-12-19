import { Calculator } from 'lucide-react'
import React from 'react'

const Dropdown = () => {
  return (
    <label className='flex flex-col border-2 rounded-lg min-w-[200px]'>
        <Calculator className='m-4' />
        <select name="typeOfContent" id="typeOfContent" className='p-4  outline-none'>
            Type Of Content
            <option value="" className='border-red-500 outline-none bg-white text-black border-x-2 hover:bg-green-500'>Type Of Content</option>
            <option value="cringe" className='border-red-500 outline-none bg-white text-black border-x-2'>Cringe</option>
            <option value="sports" className='border-red-500 outline-none bg-white text-black border-x-2'>Sports</option>
            <option value="vlogs" className='border-red-500 outline-none bg-white text-black border-x-2'>Vlogs</option>
        </select>
    </label>
  )
}

export default Dropdown