import React from "react";
import "./App.css";
import profile from "./img/marcus_peters.jpg";
import cornellIMG from "./img/cornell.png";
import drewsIMG from "./img/Drews.jpg";

import TypingAnimation from "./typecode";
import TypingAnimation2 from "./typecodeMulti";
import ImageSwapper from "./imageSwoop";
import Links from './links'

import cornell from './img/cornell.jpg'
import friends from './img/friends.jpg'
import rugby from './img/rugby.jpg'
import collaboration from './img/collaboration.png'

import Project from "./project";

const sentences = [
	"I love to play sports, especially rugby!             ",
	"I am obsessed with my guitar          ",
	"I enjoy problem solving with friends          ",
];

const images = [rugby, profile, collaboration];



function App() {
	return (
		<div>
			<title>Marcus Peters</title>
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
					<img src={cornell} alt="Cornell University" className="mainimg" />
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