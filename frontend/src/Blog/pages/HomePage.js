import React, { useState, useEffect } from 'react'
import { getPosts } from '../../services'




// import Card from '../components/Card'
// import CardFake from '../components/CardFake'

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

    // const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    // const data = await response.json()
    // setPosts( data )
  }

  useEffect(() => {
    loadPosts()
  },[])


  // if( !isLoading && posts.length ) return <Card posts={posts}/>
  // if( !isLoading && posts.length ) return <CardFake posts={posts}/>
  if( !isLoading && posts.length ) return <PostsCards posts={posts}/>

  if( !isLoading && !posts.length ) return <NoPosts />

  return <Loading />

}

export default HomePage
