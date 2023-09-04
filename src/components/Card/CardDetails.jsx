import React from 'react'
import { Link } from 'react-router-dom'


export default function Details ({ cities }) {
  return (
    <div className="card mb-3" style="max-width: 540px;">
    <div className="row g-0">
      <div className="col-md-4">
        <img className="img-fluid rounded-start" src={cities.image}  alt="..."/>
      </div>
      <div className="col-md-8">
        <div className="card-body">
            <h2 className="card-title">{cities.city}</h2>  
            <h3 className="card-title">{cities.country}</h3>  
            <h5 className="card-title">{cities.currency}</h5>
            <p className="card-text">{cities.language}</p>
            <p className="card-text"><small class="text-body-secondary">{cities.dishes}</small></p>
        </div>
        <div className="d-flex justify-end px-1 py-1">
            <Link className="btn btn-success" to={`/events/${cities._id}`}>
            Return
            </Link>
       </div>
      </div>
    </div>
    </div>
  )
}