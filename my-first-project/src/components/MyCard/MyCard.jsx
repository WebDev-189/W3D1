import React from "react"
import Avatar from "./../Avatar/Avatar"
import CardInfos from "./../CardInfos/CardInfos"
function MyCard(props) {
	// console.log(props)
	const now = new Date()
	const yearOfBirth = now.getFullYear() - props.student.age
	const size = Math.random() > 0.5 ? "big" : "small"
	return (
		<div className="MyCard">
			{/* <pre>{JSON.stringify(props, null, 2)}</pre> */}
			{/* <Avatar img={props.student.picture} />*/}
			<Avatar img={props.student.picture} size={size} />
			{/* <img src={props.student.picture} alt="" /> */}

			{/* <CardInfos name={props.student.name} age={props.student.age} yearOfBirth={yearOfBirth} classes={props.student.courses} /> */}
			<CardInfos
				name={props.student.name}
				age={props.student.age}
				yearOfBirth={yearOfBirth}
				classes={props.student.courses.join(", ")}
			/>
			{/* <div className="infos">
				<h3>{props.student.name}</h3>
				<p>Age: {props.student.age}</p>
				<p>Year of birth: {yearOfBirth}</p>
				<p>Followed courses: {props.student.courses.join(", ")}</p>
			</div> */}
		</div>
	)
}

export default MyCard
