import React from 'react'

export const Card = ({user}) => {
  return (
    <div className="col-md-6 col-lg-3 py-2"> 
    <div className="card">
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
  <h5 className="card-title">Card title</h5>
  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" className="btn btn-primary">Go somewhere</a>
</div>
</div>
    </div>
  )
}
