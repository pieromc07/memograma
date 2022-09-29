import React from 'react'

import './Button.css'

export const Button = ({ text, handleClick }) => {

	const handleShow = () => {
		handleClick()
	}

	return (
		<button className='button' onClick={handleShow}>
			{text}
		</button>
	)
}
