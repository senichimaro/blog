import React, { useState, useRef } from 'react'

const Form = ({ handleSubmit }) => {
  const [imgFile, setImgFile] = useState('')
  const [isImgVisible, setIsImgVisible] = useState(false)
  const [imgSrc, setImgSrc] = useState('')
  const [formValues, setFormValues] = useState({
    title:'',
    textarea:''
  })

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
    setImgSrc( URL.createObjectURL(event.target.files[0]) )
    setIsImgVisible(true)
  }

  const handleDiscardImg = () => {
    setIsImgVisible(false)
    setImgSrc('')
  }


  return (
    <div className="container">
      <form className="my-5" onSubmit={_handleSubmit}>

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
          <textarea onChange={handleInput} name="textarea" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>

      </form>
    </div>
  )
}

export default Form
