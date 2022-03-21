import React from 'react'
import "./card.css"
export const Card = ({user}) => {
  return (
    <div className="col-md-6 col-lg-3 py-2"> 
    <div className="card">
  <img src={user.picture.large} className="card-img-top" alt="..."/>
  <div className="card-body">
  <h5 className="card-title">{user.name.title} {user.name.first} {user.name.last}</h5>
  <div className="card-text">
    <ul className='list-unstyled'>
      <li><i className="fa-solid fa-mobile-retro"></i> {user.cell} </li>
      <li><i className="fa-solid fa-location-dot"></i> {user.location.country} </li>
      <li className='text-center'>{user.email}</li>
      </ul>
      </div>
  <a href="#" className="btn btn-primary">Go somewhere</a>
</div>
</div>
    </div>
  )
}
