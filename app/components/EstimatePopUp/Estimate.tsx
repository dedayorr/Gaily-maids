import { Modal } from 'flowbite-react'
import React from 'react'

interface EstimateProps {
    showModal: boolean;
  }
  

const Estimate: React.FC<EstimateProps> = ({ showModal }) => {
  return (
    <div>
    {showModal && (
        <Modal
          show={showModal}
        //   onClose={toggleModal}
        >
          <Modal.Header>
            Estimate Modal
          </Modal.Header>
          <Modal.Body>
            <p>This is the content of the modal</p>
          </Modal.Body>
          <Modal.Footer>
            <button
            //   onClick={toggleModal}
              className="bg-red-500 text-white p-2 rounded"
            >
              Close
            </button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  )
}

export default Estimate