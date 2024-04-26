import React from 'react'
import { Link } from 'react-router-dom'
export default function ErrorElement() {
  return (
    <div className='flex flex-col w-svw h-svh items-center justify-center'>
     <span >Nothing to see here</span>
     <Link to="/" className='text-blue-500' >lets go back</Link>
    </div>
   
  )
}
