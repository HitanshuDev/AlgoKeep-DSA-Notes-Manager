import React from 'react';
import { IoIosSearch } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";

function Search({ searchTerm, setSearchTerm }){

    function setCross(){
        setSearchTerm("");
    }

    return <div className='flex items-center w-full mt-4 rounded border bg-secondary h-10 py-6'>
        <IoIosSearch className='text-primary text-2xl hover:text-tertiary mx-2'/>
        <input type="text" 
        className='w-full mr-2 bg-transparent text-primary outline-none'
        placeholder='Search you saved code or type a language'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        />
        {searchTerm ? <RxCross1 onClick={setCross} className='text-white mx-2 text-xl hover:text-accent' /> : null}
    </div>
}

export default Search;