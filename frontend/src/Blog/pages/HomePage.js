import React, { useState, useEffect } from 'react'
import { getPosts } from '../../services'





import PostsCards from '../components/PostsCards'
import Loading from '../components/Loading'
import NoPosts from '../components/NoPosts'


const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [posts, setPosts] = useState([])

  async function loadPosts(){
    const response = await getPosts()
    setPosts( response.data.sort().reverse() )
    setIsLoading(false)
  }

  useEffect(() => {
    loadPosts()
  },[])




  if( !isLoading && posts.length ) return <PostsCards posts={posts} loadPosts={loadPosts} />

  if( !isLoading && !posts.length ) return <NoPosts />

  return <Loading />

}

export default HomePage
