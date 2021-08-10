import React, { useState } from 'react'

import Form from '../components/Form'
import Modal from '../components/Modal'

const FormPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  const handleSubmit = async data => {
    data.preventDefault()
    console.log("handleSubmit", data);
  }


  return (
    <>
      <Form handleSubmit={handleSubmit} />
      <Modal isModalOpen={isModalOpen} handleModal={handleModal} />
    </>
  )
}

export default FormPage
