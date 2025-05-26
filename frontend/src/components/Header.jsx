import React from 'react'

function Header() {
  return (
    <div className='flex justify-between items-center py-4'>
        <h1 className="text-3xl font-bold text-tertiary">AlgoNotes</h1>

        <div className='text-tertiary flex gap-6'>
            <div className='cursor-pointer hover:underline'>Home</div>
            <div className='cursor-pointer hover:underline'>Bookmark</div>
            <div className='cursor-pointer hover:underline'>About</div>
        </div>
    </div>
  )
}

export default Header