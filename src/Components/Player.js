import React, { Component } from "react";
import PropTypes from "prop-types";
function Player(props){
// console.log(props)
return (
<div>
<h1>{props.name}</h1>
<p>{props.score}</p>
{/* 
Use callback prop, 
make sure the event handler 
is a function definition 
*/}
<button onClick={() => props.incrementScore(props.id)}>+</button>
<button onClick={() => props.decrementScore(props.id)}>-</button>
</div>
)
}
export default Player
