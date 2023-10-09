import "./App.css"
import clownPicture from "./assets/images/clown.png"
import React from "react"
import MyCard from "./components/MyCard/MyCard"
import Container from "./components/Container/Container"
function App() {
	const sayHello = (name) => {
		return `Hello ${name}!`
	}
	const sunny = true

	const helloLoop = sayHello("Loop")
	const aStudent = {
		name: "Bob",
		picture: "https://randomuser.me/api/portraits/men/26.jpg",
		age: 25,
		courses: ["React", "HTML", "JS", "CSS"],
	}

	const students = [
		aStudent,
		{
			name: "Alice",
			picture: "https://randomuser.me/api/portraits/women/12.jpg",
			age: 27,
			courses: ["Vue.js", "Web Components"],
		},
		{
			name: "John",
			picture: "https://randomuser.me/api/portraits/men/87.jpg",
			age: 32,
			courses: ["WebGL", "Canvas", "WebGPU"],
		},
	]

	return (
		<>
			{/* <React.Fragment> */}
			<section>
				<h1>Hello React</h1>
				<Title>React fundamentals</Title>
				{/* <h2>React fundamentals</h2>
				<hr /> */}

				{/* Images can be loaded from the /public folder or from the src folder */}
				{/* The differences is how we actually load them */}
				{/* images in the src folder needs to be imported */}
				{/* images in the public folder don't */}
				<div className="Card">
					<h3>Harold</h3>
					<img
						style={{
							width: "5rem",
						}}
						src="/images/harold.png"
						alt="hide the pain"
					/>
					<p>Lorem ipsum dolor sit amet.</p>
				</div>
				<div className="Card">
					<h3>Title</h3>
					<img
						style={{
							width: "5rem",
						}}
						src={clownPicture}
						alt="clown"
					/>
					<p>Lorem ipsum dolor sit amet.</p>
				</div>

				{/* curly bracket allow you to acces JS instead of HTML */}
				<p>{helloLoop}</p>
				<p>{sayHello("Bob")}</p>
				<h2>What can we render?</h2>
				<ul>
					<li>Array: {[1, 2, "hello"]}</li>
					<li>result of calculations: {2 ** 10 - 50}</li>
					<li>
						Result of a function (if it return a statement that we can render)
					</li>
					<li>
						If it's sunny display a sun:{" "}
						{
							sunny ? "☀️" : "☁️"
							// if (sunny) {
							//   return '☀️'
							// } else {
							//   return '☁️'
							// }
						}
					</li>
				</ul>

				<ul>
					<li>The "console log" of React for objects</li>
					<li>
						<pre>{JSON.stringify(aStudent, null, 2)}</pre>
					</li>
				</ul>

				{/* </React.Fragment> */}
			</section>

			<section>
				<Title>Creating components</Title>
				{/* <Title /> */}

				<Sum a={3} b={5} />
				<Sum a={10} b={15} />
				{Sum({ a: 31, b: 2 })}

				<Container wrap={true} space={5} backColor="red">
					<MyCard student={students[0]} />
					<MyCard student={students[1]} />
					<MyCard student={students[2]} />
				</Container>
			</section>
		</>
	)
}

export default App

function Sum(props) {
	console.log(props)

	return (
		<p>
			Sum of {props.a} + {props.b} = {props.a + props.b}
		</p>
	)
}

function Title(props) {
	console.log("In the Title component")
	console.log(props)
	return (
		<>
			<h2>{props.children}</h2>
			<hr />
		</>
	)
}

// sum(4, 5)

// function sum() {
// 	return a + b
// }
