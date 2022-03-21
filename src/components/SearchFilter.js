import React from 'react'

export const SearchFilter = ({handleOnGenderChange,handleOnSearch}) => {
  return (
    <div className="row">
      <div className="col">
        <input type="text" name="" id="" className='form-control' onChange={handleOnSearch}/>
        </div>
        <div className="col">
        <select className="form-select" aria-label="Filter by Gender" onChange={handleOnGenderChange}>
    <option defaultValue>Filter by Gender</option>
    <option value="male">Male</option>
    <option value="female">Female</option>
  </select>
          
          
          </div>
        
        </div>
  )
}
