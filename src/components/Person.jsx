import React from 'react'

export const Person = (props) => {
  return (
    <fieldset>
        <legend></legend>
        <h2>{props.lastName}, {props.firstName}</h2>
        <p>Age: {props.age}</p>
        <p>Hair Color: {props.hairColor}</p>
    </fieldset>
  )
}

export default Person