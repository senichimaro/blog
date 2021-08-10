// import React, { useState, useEffect } from 'react'
// import { getProducts } from '../services/services'
import React, { useState } from 'react'



import List from '../components/List'
import Loading from '../components/Loading'
import NoProducts from '../components/NoProducts'


const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [products, setProducts] = useState([])

  // async function loadProducts(){
  //   const response = await getProducts()
  //   setIsLoading(false)
  //   setProducts(response.data)
  // }
  //
  // useEffect(() => {
  //   loadProducts()
  // },[isLoading])


  if( !isLoading && products.length ) return <List products={products}/>

  if( !isLoading && !products.length ) return <NoProducts />

  return <Loading />

}

export default HomePage
