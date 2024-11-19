import React, { useEffect, useState } from 'react'
import Searchbar from '../components/Searchbar'
import SortByPrice from '../components/SortByPrice'
import FilterBar from '../components/products/FilterBar'
import axios from 'axios'
import LoadingPage from './LoadingPage'
import ProductCard from '../components/ProductCard'

const Products = () => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState("")
  const [sort, setSort] = useState("asc")
  const [brand, setBrand] = useState("")
  const [category, setCategory] = useState("")

  useEffect(() => {
    setLoading(true)
    const fetch = async() => {
      axios.get(`http://localhost:5000/all-products`).then(res => {
        setProducts(res.data)
        setLoading(false)
      })
    }
    fetch();
  }, [])

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.search.value)
    e.target.search.value = "";
  }

  const handleReset = () => {
    setSearch("")
    setBrand("")
    setCategory("")
    setSort("asc")
    window.location.reload();
  }

  return (
    <div className='container mx-auto'>
      <h1 className='my-8 text-2xl font-semibold text-center'>All Products</h1>
      {/* Search and sort */}
      <div className='flex justify-between items-center w-full mb-6'>
        <Searchbar handleSearch={handleSearch} />
        <SortByPrice setSort={setSort} />
      </div>
      {/* content */}
      <div className='grid grid-cols-12 gap-4'>
        <div className='col-span-2'>
          <FilterBar 
          setBrand={setBrand} 
          setCategory={setCategory} 
          handleReset={handleReset}
          />
        </div>
        {/* Products */}
        <div className='col-span-10'>
          { 
            loading ? (
              <LoadingPage />
            ) : (
              <>
                {
                  products.length === 0 ? 
                  <div className='w-full h-full flex items-center justify-center'>
                    <h1 className='text-3xl font-bold'>No Product Found</h1>
                  </div> : 
                  <div className='min-h-screen grid grid-cols-3 gap-2'>
                    {
                      products.map(product => (
                        <ProductCard 
                        key={product._id} 
                        product={product}
                        />
                      ))
                    }
                  </div>
                }
              </>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Products