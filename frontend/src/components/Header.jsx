import React from 'react'
import LogoutButton from './LogoutButton'

function Header() {

  return (
    <div className='flex justify-between items-center py-4'>
        <h1 className="text-3xl font-bold text-tertiary">AlgoKeep</h1>

        <div className='text-tertiary flex gap-6'>
            <a href='/' className='cursor-pointer hover:underline'>Home</a>
            {/* <a className='cursor-pointer hover:underline'>Bookmark</a> */}
            <LogoutButton />
        </div>
    </div>
  )
}

export default Header