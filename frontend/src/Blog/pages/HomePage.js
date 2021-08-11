import React, { useState, useEffect } from 'react'
import { getPosts } from '../../services'




import Card from '../components/Card'
import Loading from '../components/Loading'
import NoPosts from '../components/NoPosts'


const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [posts, setPosts] = useState([])

  async function loadPosts(){
    const response = await getPosts()
    // console.log("response.data",response.data.sort().reverse());
    setPosts( response.data.sort().reverse() )
  }

  useEffect(() => {
    setIsLoading(false)
    loadPosts()
  },[])


  if( !isLoading && posts.length ) return <Card posts={posts}/>

  if( !isLoading && !posts.length ) return <NoPosts />

  return <Loading />

}

export default HomePage
