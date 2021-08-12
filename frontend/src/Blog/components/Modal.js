import React, { useEffect } from 'react'

const Modal = ({ modalData, isModalOpen, setIsModalOpen }) => {

  const data = modalData.data

  const _setIsModalOpen = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <>
      <div className={ isModalOpen ? "modal fade show d-block" : "modal fade" } id="popupModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalTitle">
                {
                  modalData.success ? 'Success Changes' : 'Error in Changes'
                }
              </h5>
              <button onClick={() => _setIsModalOpen()} type="button" className="close" data-dismiss="modal" arial-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div className="modal-body d-flex justify-content-center">

              <div className="shadow-sm rounded w-50">

                {
                  data.imgUrl ?
                  <img src={data.imgUrl} className="card-img-top" alt={data.title} />
                  : 'No Image'
                }
                <div className="card-body">

                  <h5 className="card-title">
                    {
                      data.title ?
                        data.title.length > 20
                        ? `${data.title.substring(0,20)}...`
                        : data.title
                      : 'No Title'
                    }
                  </h5>

                  <p className="card-text">
                    {
                      data.textarea ?
                      `${data.textarea.substring(0,100)}...`
                      : 'No Text'
                    }
                  </p>

                </div>

              </div>

            </div>

            <div className="modal-footer">
              <button onClick={() => _setIsModalOpen()} className="btn btn-secondary">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
