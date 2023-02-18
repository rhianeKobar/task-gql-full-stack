import React from 'react';
import './Button.css';

function Button(props) {

	const handleClick = (colour) => {
		document.body.style.backgroundColor = colour;
	}

	return (
		<button title={props.title} className={`btn ${props.class}`} onClick={()=>{handleClick(props.colour)}} />
	)
}

export default Button;