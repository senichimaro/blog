import React from 'react'

const Modal = ({ isModalOpen, handleModal }) => {


  return (
    <>
      <div className={ isModalOpen ? "modal fade show d-block" : "modal fade" } id="popupModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalTitle">
                Modal Title
              </h5>
              <button type="button" className="close" data-dismiss="modal" arial-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div className="modal-body">
              Modal Body
            </div>

            <div className="modal-footer">
              <button onClick={handleModal} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
