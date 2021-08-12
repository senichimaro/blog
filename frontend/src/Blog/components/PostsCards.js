// import React, { useState } from 'react'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { deletePost } from '../../services'



import Cards from './Cards'
import Modal from './Modal'



const PostsCard = ({ posts, loadPosts }) => {

  /** Modal functionality
  */
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalData, setModalData] = useState({})


  /** Delete functionality
  */
  const handleDelete = async idPost => {
    const response = await deletePost( idPost )
    console.log("response", response);
    if( response ){
      setModalData(response.data)
    }
    // setIsModalOpen(true)
  }

  return (
    <>
      <Cards posts={posts} handleDelete={handleDelete} />
      {/*
        <Modal modalData={modalData} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      */}
      {
        isModalOpen
        ? <Modal modalData={modalData} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        : <Modal modalData={{data:{title:'',textarea:'',imgUrl:''}}} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      }
    </>
  )
}

export default PostsCard
