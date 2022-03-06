import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import ProgressBar from "./ProgressBar";

function Skills() {
	return (
		<SkillsStyled>
			<Title title={"Hard Skills"} span={"my skills"} />
			<br />
			<p>
				Valorizo o negócio ou a marca para a qual desenvolvendo. Por isso me
				esforço ao máximo em trazer suas ideias a realidade.
			</p>

			<InnerLayout>
				<div className="skills">
					<ProgressBar title={"Javascript"} width={"80%"} text={"80%"} />
					<ProgressBar title={"Node.js"} width={"75%"} text={"75%"} />
					<ProgressBar title={"React JS"} width={"70%"} text={"70%"} />
					<ProgressBar title={"React Native"} width={"70%"} text={"70%"} />
					<ProgressBar title={"HTML5"} width={"95%"} text={"95%"} />
					<ProgressBar title={"CSS3"} width={"95%"} text={"95%"} />
					<ProgressBar title={"Docker"} width={"60%"} text={"60%"} />
					<ProgressBar title={"GitHub"} width={"80%"} text={"80%"} />
					<ProgressBar title={"CI/CD"} width={"40%"} text={"40%"} />
					<ProgressBar title={"Test"} width={"55%"} text={"55%"} />
				</div>
			</InnerLayout>

			<Title title={"Soft Skills"} span={"my skills"} />
			<br />
			<p>
				Tenho paixão pelo que faço e por isso estou em uma crescente constante
				curva de aprendizagem para melhorar cada vez mais e entregar o melhor
				possível aos meus clientes.{" "}
			</p>
			<InnerLayout>
				<div className="skills">
					<ProgressBar
						title={"Pensamento Crítico"}
						width={"80%"}
						text={"80%"}
					/>
					<ProgressBar
						title={"Resolução de Problemas Complexos"}
						width={"80%"}
						text={"80%"}
					/>
					<ProgressBar title={"Criatividade"} width={"80%"} text={"80%"} />
					<ProgressBar title={"Foco"} width={"80%"} text={"80%"} />
				</div>
			</InnerLayout>
		</SkillsStyled>
	);
}

const SkillsStyled = styled.section`
	.skills {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-row-gap: 2rem;
		grid-column-gap: 3rem;
		@media screen and (max-width: 700px) {
			grid-template-columns: repeat(1, 1fr);
		}
	}
`;

export default Skills;
