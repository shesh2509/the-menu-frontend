import React from 'react'

export default function Error({error}) {
  return (
    <div>
        <div className="alert alert-danger mt-5" role="alert" style={{width:'500px',margin:'auto'}}>
            {error}
        </div>  
    </div>
  )
}
