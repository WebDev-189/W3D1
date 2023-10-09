import React from "react"

function Avatar(props) {
	return (
		<img
			style={{
				width: props.size === "big" ? "10rem" : "5rem",
			}}
			className="Avatar"
			src={props.img}
		/>
	)
}

export default Avatar
