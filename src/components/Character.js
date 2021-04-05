// Write your Character component here
import React from 'react';


function Character (props){
    const {char} = props;
    return(
        <>
        <h1>Name {char.name}</h1>
        <h2>Height: {char.height}</h2>
        <h3>Gender: {char.gender}</h3>
        </>
    )
}

export default Character;