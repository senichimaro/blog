import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { findPost } from '../../services/index'

const BlogPost = () => {
  const { id } = useParams()

  const [post, setPost] = useState({})

  const loadPost = async () => {
    const response = await findPost( id )
    console.log("response",response.data.data);
    setPost( response.data.data )
  }

  useEffect(() => {
    loadPost()
  },[])

  return (
    <>
      <p>id: {post._id}</p>
      <p>title: {post.title}</p>
      <p>body: <br />{post.textarea}</p>
    </>
  )
}

export default BlogPost
