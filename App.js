import React from "react";
import "./App.css";
import profile from "./marcus_peters.jpg";
import cornellIMG from "./cornell.png";
import drewsIMG from "./Drews.jpg";

import TypingAnimation from "./typecode";
import TypingAnimation2 from "./typecodeMulti";
import ImageSwapper from "./imageSwoop";
import Links from './links'

import Project from "./project";

const sentences = [
	"I love to play sports...           ",
	"and I love to play my guitar          ",
	"I love spending time with my friends             ",
];
const images = [profile, profile, profile];

function App() {
	return (
		<div>
			<div className="container">
				<div className="text-container">
					<h1>
						<TypingAnimation
							text="Hi, I'm Marcus!"
							typingDelay={100}
							erasingDelay={50}
							delay={2000}
						/>
					</h1>
				</div>
				<div className="image-container">
					<img src={profile} alt="Marcus" className="mainimg" />
				</div>
			</div>

			<div className="container">
				<div className="image-container">
					<img src={cornellIMG} alt="Cornell University" className="mainimg" />
				</div>
				<div className="text-container">
					<h1>
						<TypingAnimation
							text="I'm a Software Developer at Cornell University."
							typingDelay={100}
							erasingDelay={50}
							delay={2000}
						/>
					</h1>
				</div>
			</div>

			<div className="container2">
				<div className="text-container">
					<h1>
						<TypingAnimation2
							sentences={sentences}
							typingDelay={100}
							erasingDelay={100}
							delay={5000}
						/>
					</h1>
				</div>

				<div className="image-container">
					<ImageSwapper images={images} />
				</div>
			</div>

			<div className="container3">
				<div>
					<h1 className="project-title">My projects</h1>
				</div>
				<div>
					<Project />
				</div>
			</div>
			<div className="container4">
				<div>
					<h1 className="link-title">My Links</h1>
				</div>
				<div>
					<Links />
				</div>
			</div>
		</div>
	);
}
export default App;
