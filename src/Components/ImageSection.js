import React from "react";
import styled from "styled-components";
import resume from "../img/resume.jpg";
import PrimaryButton from "./PrimaryButton";

function ImageSection() {
	return (
		<ImageSectionStyled>
			<div className="left-content">
				<img src={resume} alt="" />
			</div>
			<div className="right-content">
				<h4>
					I am <span>Edmilson Soares</span>
				</h4>
				<p className="paragraph">
					Por acreditar que a inclusão digital precisa ser acessível a todos, me
					emprenho ao máximo no que faço e compartilho minha aprendizagem com
					todos.
				</p>
				<div className="about-info">
					<div className="info-title">
						<p>Full Name</p>
						<p>Age</p>
						<p>Nationality </p>
						<p>Languages </p>
						<p>Location</p>
						<p>Service</p>
					</div>
					<div className="info">
						<p>: Edmilson Soares</p>
						<p>: 51</p>
						<p>: Brasilian </p>
						<p>: Portuguese, English </p>
						<p>: Salvador, Bahia, Brazil</p>
						<p>: Freelance</p>
					</div>
				</div>
				<PrimaryButton title={"Download Cv"} />
			</div>
		</ImageSectionStyled>
	);
}

const ImageSectionStyled = styled.div`
	margin-top: 5rem;
	display: flex;
	@media screen and (max-width: 1000px) {
		flex-direction: column;
		.left-content {
			margin-bottom: 2rem;
		}
	}
	.left-content {
		width: 100%;
		img {
			width: 95%;
			object-fit: cover;
		}
	}
	.right-content {
		width: 100%;
		h4 {
			font-size: 2rem;
			color: var(--white-color);
			span {
				font-size: 2rem;
			}
		}
		.paragraph {
			padding: 1rem 0;
		}
		.about-info {
			display: flex;
			padding-bottom: 1.4rem;
			.info-title {
				padding-right: 3rem;
				p {
					font-weight: 600;
				}
			}
			.info-title,
			.info {
				p {
					padding: 0.3rem 0;
				}
			}
		}
	}
`;
export default ImageSection;
