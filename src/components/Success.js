import React from 'react'

export default function Success({success}) {
  return (
    <div className='text-center'>
        <div className="alert alert-success mt-5" role="alert" style={{width:'500px', margin:'auto'}}>
            {success}
        </div>  
    </div>
  )
}
