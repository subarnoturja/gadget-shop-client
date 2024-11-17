import React from 'react'
import Searchbar from '../components/Searchbar'
import SortByPrice from '../components/SortByPrice'
import FilterBar from '../components/products/FilterBar'

const Products = () => {
  return (
    <div className='container mx-auto'>
      <h1 className='my-8 text-2xl font-semibold text-center'>All Products</h1>
      {/* Search and sort */}
      <div className='flex justify-between items-center w-full mb-6'>
        <Searchbar />
        <SortByPrice />
      </div>
      {/* content */}
      <div className='grid grid-cols-12'>
        <div className='col-span-2'>
          <FilterBar />
        </div>
        <div className='col-span-10'>Products</div>
      </div>
    </div>
  )
}

export default Products