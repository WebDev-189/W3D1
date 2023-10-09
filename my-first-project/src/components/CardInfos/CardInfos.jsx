import React from "react"

function CardInfos({ name, age, yearOfBirth, classes }) {
	// const name = props.name,
	// 	age = props.age,
	// 	yearOfBirth = props.yearOfBirth,
	// 	classes = props.classes

	console.log("Card infos: ")
	// console.log(props)
	return (
		<div>
			<h3>{name}</h3>
			<p>Age: {age}</p>
			<p>Year of birth: {yearOfBirth}</p>
			<p>Classes: {classes}</p>
		</div>
	)
}

export default CardInfos
