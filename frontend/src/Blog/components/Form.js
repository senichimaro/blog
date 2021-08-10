import React, { useState } from 'react'

const Form = ({ handleSubmit }) => {
  const [state, setState] = useState({
    title:'',
    textarea:''
  })

  const _handleSubmit = () => {
    handleSubmit(state)
  }

  const handleInput = event => {
    const { name, value } = event.target
    setState({...state,[name]:value})
  }


  return (
    <div className="container">
      <form className="my-5" onSubmit={_handleSubmit}>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
          <input onChange={handleInput} name="title" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={state.title} />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
          <textarea onChange={handleInput} name="textarea" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>

      </form>
    </div>
  )
}

export default Form
