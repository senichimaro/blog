import React, { useState } from 'react'
import { newPost } from '../../services'

import Form from '../components/Form'
import Modal from '../components/Modal'

const FormPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(true)

  const handleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  const handleSubmit = async data => {
    // const response = await newPost( data )
    await newPost( data )
  }


  return (
    <>
      <Form handleSubmit={handleSubmit} />
      <Modal isModalOpen={isModalOpen} handleModal={handleModal} />
    </>
  )
}

export default FormPage
