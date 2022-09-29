import React, { useState } from 'react'

import bgBack from '../../assets/images/back.png'
import gender from '../../assets/icons/Gender.svg'
import status from '../../assets/icons/Status.svg'
import origin from '../../assets/icons/Origin.svg'
import { DataCard } from '../DataCard/DataCard'

import './Card.css'
export const Card = ({character, handleChoice, flipped}) => {

    const handleClick = () => {
        handleChoice(character)
    }

  return (
    <div className={flipped ? 'card flip' : 'card'} >
            <div className='face face-back' onClick={handleClick}>
                <img src={bgBack} alt="img back" />
            </div>
            <div className='face face-front'>
                <div className='face-front_post'>
                    <img src={character.image} alt="image card" />
                    <div className='species'>
                        <p>{character.species}</p>
                    </div>
                </div>
                <div className='face-front_info'>
                    <p className='info_name'>{character.name}</p>
                    <div className='info_data'>
                        <DataCard icon={gender} type={'gender'} text={character.gender}/>
                        <DataCard icon={status} type={'status'} text={character.status}/>
                    </div>
                    <div className='info_data'>
                        <DataCard icon={origin} type={'origin'} text={character.origin}/>
                    </div>

                </div>
            </div>
    </div>
  )
}
