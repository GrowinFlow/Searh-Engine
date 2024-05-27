import React, { useContext } from 'react';
import { SearchContext } from '../context/searchContext'; // Adjust the import path accordingly

const Demo = () => {
  const { query, products, filterProducts, isLoading, error, setQuery, } = useContext(SearchContext);

  // Function to highlight matching text
  const highlightText = (text) => {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<span class="bg-purple-800 text-white py-2 font-mono font-bold">$1</span>');
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className='container mx-auto p-4 overflow-auto h-screen text-white scroll-bar'>
      <div className='my-4'>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products"
          className="p-2 bg-gray-800 text-white"
        />
      </div>
      <hr />
      <table className="min-w-full divide-y divide-gray-200 ">
        <thead className="bg-gray-50">
          <tr className='text-xl'>
            <th scope="col" className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">Id</th>
            <th scope="col" className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">Img</th>
            <th scope="col" className="px-6 py-3 text-left font-bold text-gray-500 uppercase tracking-wider">Title</th>
            <th scope="col" className="px-6 hidden md:flex py-3 text-left font-medium text-gray-500 uppercase tracking-wider">Description</th>
            <th scope="col" className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">Price</th>
          </tr>
        </thead>
        <tbody className=" divide-y divide-gray-200">
          {filterProducts.map((product) => (
            <tr key={product.product_id} className={`h-16 my-2 shadow-md rounded-md border-2 border-dashed border-slate-400 font-mono transition-transform duration-200 ease-linear delay-75 ${product.product_id % 2 === 0 ? 'bg-slate-400 text-black' : 'bg-gray-600 text-white'}`}>

              <td className="p-2 text-nowrap overflow-hidden text-ellipsis">{product.product_id}</td>
              <td className="p-2">
                <img src={product.product_feature_img} alt={product.title} className="h-12 w-12 rounded-md" />
              </td>
              <td className="p-2 text-xl font-bold w-20 text-nowrap overflow-hidden text-ellipsis" dangerouslySetInnerHTML={{ __html: highlightText(product.title) }} />
              <td className="p-2 hidden md:flex text-sm text-nowrap overflow-hidden text-ellipsis w-30 md:w-44 items-center" dangerouslySetInnerHTML={{ __html: highlightText(product.description) }} />
              <td className="p-2 font-bold w-16 text-nowrap overflow-hidden text-ellipsis">${product.discount_price}</td>
            </tr>
          ))}
        </tbody>
        
      </table>
    </div>
  );
};

export default Demo;
