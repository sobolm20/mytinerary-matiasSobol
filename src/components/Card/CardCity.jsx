import React from 'react'
import { Link } from 'react-router-dom'

export default function ({ cities }) {
  return (
    <div className="card col-10 col-md-5 col-xl-3">
      <img
        className="card-img-top h-75"
        src={cities.image}
        alt=""
      />
      <div className="card-body">
        <h2 className="card-title">{cities.city}</h2>
        <h3 className="card-title">{cities.country}</h3>
      </div>
      <div className="d-flex justify-end px-1 py-1">
        <Link className="btn btn-success" to={`/events/${cities._id}`}>
          Details
        </Link>
      </div>
    </div>
  )
}
