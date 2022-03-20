import React from 'react'

export const Card = ({user}) => {
  return (
    <div className="col-md-6 col-lg-3 py-2"> 
    <div className="card">
  <img src={user.picture.large} className="card-img-top" alt="..."/>
  <div className="card-body">
  <h5 className="card-title">{user.name.title} {user.name.first} {user.name.last}</h5>
  <p className="card-text">
    <ul className='list-unstyled'>
      <li>Phone : {user.cell} </li>
      <li>Email: {user.email}</li>
      <li>Country : {user.location.country} </li>
      </ul></p>
  <a href="#" className="btn btn-primary">Go somewhere</a>
</div>
</div>
    </div>
  )
}
