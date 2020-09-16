import React from 'react'

export default function Actors({ actor }) {
  
  return (
    <div className="card middle" key={actor.char_id}>
      <div className="card-face card__face--front">
        <img className="Image" src={actor.img} alt="actors-face" />
      </div>

      <div className="card-face card__face--back">
        <div className="content">
          <h1 className="name">
            <span>Name: </span>
            {actor.name}
          </h1>
          <h3 className="name">
            <span>Nickname:</span>
            {actor.nickname}
          </h3>
          <p className="name">
            <span>Character portrayed:</span>
            {actor.portrayed}
          </p>
          <p className="name">
            <span>Nicname:</span> { actor.status}
          </p>
        </div>
      </div>
    </div>
  );
}
