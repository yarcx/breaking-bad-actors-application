import React from 'react'
import Actors from './Actors'
import Loading from '../img/spinner.gif'

export default function Characters({actors, load}) {

    console.log(actors)
    // console.log(load)
    return (
        <div className="datas">
            {load ? (
                <div className="spinner">
                    <img src={Loading} alt="Data is still Loading" />
                </div>) : (
                    <div className="characters">{
                        actors.map(actor => {
                            return <Actors actor={actor} key={actor.char_id} />
                        })}
                    </div>
            )}
        </div>
    )
}
