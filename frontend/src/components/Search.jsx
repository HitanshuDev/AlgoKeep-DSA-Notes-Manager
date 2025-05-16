import React from 'react';
import { IoIosSearch } from "react-icons/io";

function Search(){
    return <div className='flex items-center w-full mt-4 rounded border bg-secondary h-10'>
        <IoIosSearch className='text-primary text-2xl hover:text-tertiary mx-2'/>
        <input type="text" 
        className='w-full mr-2 bg-transparent text-primary outline-none'
        placeholder='Search you saved code or type a languauge'
        />
    </div>
}

export default Search;