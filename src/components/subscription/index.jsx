import React from 'react'
import './subscription.css'

function Subscription() {
  return (
    <div>
      <div className="SubscriptionTabContainer">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Active</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Subscription