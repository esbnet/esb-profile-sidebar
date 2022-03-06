import React from "react";
import styled from "styled-components";
import Particle from "../Components/Particle";

// import FacebookIcon from '@material-ui/icons/Facebook';
import Instagram from "@material-ui/icons/Instagram";
import GithubIcon from "@material-ui/icons/GitHub";
import YoutubeIcon from "@material-ui/icons/YouTube";

function HomePage() {
	return (
		<HomePageStyled>
			<div className="particle-con">
				<Particle />
			</div>
			<div className="typography">
				<h1>
					Hi, I'm <span>Edmilson Soares</span>
				</h1>
                <br/>
				<p>
					Sou desenvolvedor fullstack residente em Salvador/BA e PROGRAMAR é
					minha paixão. Crio sites, desenvolvo aplicações web e mobile com foco na
					experiência do usuário e nas melhores práticas e padrões de
					arquitetura e design.
				</p>
                <br/>
				<div className="icons">
					<a href="https://github.com/esbnet/" className="icon i-github">
						<GithubIcon />
					</a>
					<a
						href="https://www.instagram.com/esbnet/"
						className="icon i-instagram"
					>
						<Instagram />
					</a>
					<a
						href="https://www.youtube.com/c/EdmilsonSoares/"
						className="icon i-youtube"
					>
						<YoutubeIcon />
					</a>
				</div>
			</div>
		</HomePageStyled>
	);
}

const HomePageStyled = styled.header`
	width: 100%;
	height: 100vh;
	position: relative;

	.typography {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: justify;
		width: 80%;

		.icons {
			display: flex;
			justify-content: center;
			margin-top: 1rem;
			.icon {
				border: 2px solid var(--border-color);
				display: flex;
				align-items: center;
				justify-content: center;
				border-radius: 50%;
				transition: all 0.4s ease-in-out;
				cursor: pointer;
				&:hover {
					border: 2px solid var(--primary-color);
					color: var(--primary-color);
				}
				&:not(:last-child) {
					margin-right: 1rem;
				}
				svg {
					margin: 0.5rem;
				}
			}

			.i-youtube {
				&:hover {
					border: 2px solid red;
					color: red;
				}
			}
			.i-github {
				&:hover {
					border: 2px solid #ffffff;
					color: #ffffff;
				}
			}
			.i-instagram {
				&:hover {
					border: 2px solid #5f4687;
					color: #5f4687;
				}
			}
		}
	}
`;

export default HomePage;
