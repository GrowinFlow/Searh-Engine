import { queries } from '@testing-library/react';
import React from 'react';

function ProductsPrev(props) {
  const Products = props.Products;

  return (
    <>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Id</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Img</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Title</th>
            <th scope="col" className="px-6 hidden md:flex py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">

          {Products.map((product) => (
            <tr key={product.id} className="h-16 my-2 shadow-md rounded-md border-2 border-dashed border-slate-400 font-mono transition-transform duration-200 ease-linear delay-75">
              <td className="p-2 text-nowrap overflow-hidden text-ellipsis">{product.id}</td>
              <td className="p-2">
                <img src={product.product_feature_img} alt={product.title} className="h-12 w-12 rounded-md" />
              </td>
              <td className="p-2 text-xl font-bold w-20 text-nowrap overflow-hidden text-ellipsis">{product.title}</td>
              <td className="p-2 hidden md:flex text-sm text-nowrap overflow-hidden text-ellipsis w-30 md:w-44 items-center">{product.description}</td>
              <td className="p-2 text-blue-700 font-medium w-16 text-nowrap overflow-hidden text-ellipsis">${product.discount_price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ProductsPrev;
