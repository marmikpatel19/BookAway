import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <>
      <li className="card-item">
        <Link className="card-item-link" to={props.path}>
          <figure className="card-item-img-wrap" data-category={props.label}>
            <img className="card-item-img" src={props.src} alt={props.alt} />
          </figure>
          <div className="card-item-info">
            <h5 className="card-item-text">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default Card;
