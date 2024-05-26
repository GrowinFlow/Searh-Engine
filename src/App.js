import React, { useState } from 'react';
import { data } from './data';
import ProductsPrev from './ProductsPrev';

function App() {
  const [query, SetQuery] = useState("")
  toString(data.id)
  const keys = ["title", "description",,]
  const search = (data) => {
    return data.filter(
      (product)=>
        keys.some(key=>product[key].toLowerCase().includes(query)))
      
  }
  return (
    <>
      <div className="container mx-auto p-4">
        <div className="input">
          <div className="max-w-md mx-auto">
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input
              onChange={(e)=>{SetQuery(e.target.value)}}
               type="search" 
               id="default-search" 
               className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Product..." required />
 </div>
          </div>
        </div>

        <br />
        
        <ProductsPrev Products={search(data)} />
      </div>
    </>
  );
}

export default App;
