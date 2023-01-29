import React from 'react'
import { BiCollapse } from 'react-icons/bi'
import { useFormContext } from '../../context'
import './FormModal.css'

const FormModal = () => {

  const { closeForm } = useFormContext();

  return (
    <div className='formModal'>
      <div className="form-box">
        <div className="form-box--header">
          <h1>Consultation</h1>
          <BiCollapse onClick={closeForm} />
        </div>
        <form action="">
input
        </form>
      </div>
      
    </div>
  )
}

export default FormModal