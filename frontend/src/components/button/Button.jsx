import React from 'react';
import './Button.css';

function Button(props) {

	const handleClick = (colour) => {
		document.body.style.backgroundColor = colour;
	}

	return (
		<button key={props.idx} title={props.title} className={`btn ${props.style}`} onClick={()=>{handleClick(props.colour)}} />
	)
}

export default Button;