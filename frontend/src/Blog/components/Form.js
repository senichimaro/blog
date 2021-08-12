import React, { useState, useRef, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { findPost } from '../../services'

const Form = ({ handleSubmit, handleEdit }) => {
  const [imgFile, setImgFile] = useState('')
  const [isImgVisible, setIsImgVisible] = useState(false)
  const [imgSrc, setImgSrc] = useState('')
  const [formValues, setFormValues] = useState({
    title:'',
    textarea:''
  })

  // In case of edit it's needed _id
  const [ isEdit, setIsEdit ] = useState(false)
  const { id } = useParams()

  async function loadPost(){
    if ( id ){
      const response = await findPost( id )
      const { title, textarea, imgUrl } = response.data.data
      setFormValues({title:title, textarea:textarea})
      updateImgVisibility( imgUrl, true )
      setIsEdit(true)      
    }
  }

  const _handleEdit = event => {
    event.preventDefault()
    if(!isImgVisible) handleEdit({...formValues, _id:id})
    else handleEdit({...formValues, image:imgFile, _id:id})
  }

  useEffect(() => {
    loadPost()
  },[])

  const inputFileRef = useRef()

  const _handleSubmit = event => {
    event.preventDefault()
    handleSubmit({...formValues, image:imgFile})
  }

  const handleInput = event => {
    const { name, value } = event.target
    setFormValues({...formValues,[name]:value})
  }

  const handleImgChange = event => {
    setImgFile(inputFileRef.current.files[0])
    updateImgVisibility( URL.createObjectURL(event.target.files[0]), true )
  }

  const handleDiscardImg = () => {
    updateImgVisibility( '', false )
  }

  const updateImgVisibility = ( imgSrc, visibility ) => {
    setIsImgVisible(visibility)
    setImgSrc(imgSrc)
  }


  return (
    <div className="container">
      <form className="my-5" onSubmit={isEdit ? _handleEdit : _handleSubmit}>

        <div className="mb-3">
          {
            !isImgVisible
            ? (
                <>
                  <label htmlFor="image" className="form-label">Image</label>
                  <input ref={inputFileRef} onChange={handleImgChange} type="file" className="form-control" name="image" id="image" aria-describedby="image" aria-label="Upload" />
                </>
              )
            : (
                <>
                  <img src={imgSrc} className="img-fluid w-25" alt="previewer" />
                  <span className="d-block" onClick={handleDiscardImg} style={{cursor:'pointer'}}>
                    Discard Image
                    <i className="bi bi-trash-fill"></i>
                  </span>
                </>
              )

          }
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
          <input onChange={handleInput} name="title" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={formValues.title} />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Textarea</label>
          <textarea onChange={handleInput} value={formValues.textarea} name="textarea" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>

      </form>
    </div>
  )
}

export default Form
