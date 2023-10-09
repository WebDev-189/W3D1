import React from "react"

function Container(props) {
	return (
		<div
			style={{
				display: "flex",
				flexWrap: props.wrap ? "wrap" : "no-wrap",
				gap: `${props.space}rem`,
				justifyContent: "center",
				backgroundColor: props.backColor ? props.backColor : "white",
			}}>
			{props.children}
		</div>
	)
}

export default Container
