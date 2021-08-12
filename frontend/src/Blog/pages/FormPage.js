import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { newPost, editPost, findPost } from '../../services'

import Form from '../components/Form'
import Modal from '../components/Modal'

const FormPage = () => {

  /** Modal functionality
  */
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalData, setModalData] = useState({})

  const [ isEdit, setIsEdit ] = useState(false)
  const { id } = useParams()
  console.log("id",id);

  // if( id ) setIsEdit(true)




  /** Form functionality
  */

  const handleSubmit = async data => {
    await newPost( data )
  }

  const handleEdit = async data => {
    const response = await editPost( data )
    setModalData(response.data)
    setIsModalOpen(true)
  }


  return (
    <>
      <Form handleSubmit={handleSubmit} handleEdit={handleEdit} />
      {/*
        isEdit
        ? <Modal modalData={modalData} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        : <Modal modalData={{data:{title:'',textarea:'',imgUrl:''}}} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      */}
      {
        isModalOpen
        ? <Modal modalData={modalData} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        : <Modal modalData={{data:{title:'',textarea:'',imgUrl:''}}} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      }

    </>
  )
}

export default FormPage
