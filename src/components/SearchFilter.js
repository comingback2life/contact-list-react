import React from 'react'

export const SearchFilter = () => {
  return (
    <div className="row">
      <div className="col">
        <input type="text" name="" id="" className='form-control'/>
        </div>
        <div className="col">
        <select className="form-select" aria-label="Filter by Gender">
    <option selected>Filter by Gender</option>
    <option value="male">Male</option>
    <option value="female">Female</option>
  </select>
          
          
          </div>
        
        </div>
  )
}
