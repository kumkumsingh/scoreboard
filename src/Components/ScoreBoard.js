import React, { Component } from "react";
import Player from "./Player";
export default class Scoreboard extends Component {
state = {
players: [
{ id: 1, name: "Arien", score: 2 },
{ id: 2, name: "David", score: 5 },
{ id: 3, name: "Mimi", score: 4 },
]
}
incrementScore = (playerId) => {
// console.log(playerId)
// update the player score 
// 1st challenge: which player got clicked??? X
// 2nd challenge how to update the scores in the array
const updatedPlayers = this.state.players
.map(player => {
// console.log('playerId', playerId)
// console.log('player', player)
// If id matches, update the player
if(player.id === playerId){
return {
...player,
score: player.score + 1
}
}
// otherwise, don't update 
return player
})
// console.log('result?', updatedPlayers)
this.setState({ players: updatedPlayers }) // -> calls render
}
decrementScore = (playerId) => {
const updatePlayersList = this.state.players
.map(player => {
if(player.id === playerId && player.id !== -1){
return {
...player, 
score: player.score -1
}
}
return player })
this.setState({ players: updatePlayersList }) 
}
render() {
return (
<div>
{/* Rendering a collection using an array of objects */}
{ this.state.players
.sort((player1, player2) => player2.score - player1.score)
.map((player) => {
//console.log('console.log in map:', player) 
return<Player 
key={player.id}
id={player.id}
name={player.name} 
score={player.score} 
incrementScore={this.incrementScore}
decrementScore={this.decrementScore}
/>
})}
</div>
)
}

}
