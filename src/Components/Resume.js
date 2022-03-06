import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import SmallTitle from "../Components/SmallTitle";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import SchoolIcon from "@material-ui/icons/School";
import ResumeItem from "../Components/ResumeItem";

function Resume() {
	const briefcase = <BusinessCenterIcon />;
	const school = <SchoolIcon />;
	return (
		<ResumeStyled>
			<Title title={"Resume"} span={"resume"} />
			<InnerLayout>
				<div className="small-title">
					<SmallTitle icon={briefcase} title={"Working Experience"} />
				</div>
				<div className="resume-content">
					<ResumeItem
						year={"2021 - now"}
						title={"Developer"}
						subTitle={
							"<quaks_Code/> - Tecnologia, Treinamento e Desenvolvimento"
						}
						text={
							"Desenvolvimento de aplicações desktop, web (back/front) e mobile. asdf asdf asdfasd fasdf asdfasdf asdfasd fasdf asdfa sdfa sdfasd fasdf asdfasdfsdfa sdfasdf asdfa sdfasd asdf asdfa sdfa sdfa sdfas dfasdf asdfdafsdfasd ffa"
						}
					/>
					<ResumeItem
						year={"2015 - 2020"}
						title={"Developer - (Laravel / React / React Native)"}
						subTitle={"Sotero Tech"}
						text={
							"Como atividade principal atuel como desenvolvedor criando novos recursos bem como dando manutenção e atualização dos recursos existentes buscando manter o sistema atualizado com as solução mais recentes possíveis. "
						}
					/>
					<ResumeItem
						year={"2018 - 2021"}
						title={"Data Analyst (Developer - Laravel 8/MySql)"}
						subTitle={"SEC - Secretaria de Educação do Estado da Bahia"}
						text={
							"Trabalhei atuando como analista de dados em uma base Oracle. Meu principal foco foi na análise de dados e criação de relatórios estratégicos para a tomada de decisão do Departamento onde estive lotado. "
						}
					/>
				</div>

				<div className="small-title u-small-title-margin">
					<SmallTitle icon={school} title={"Educational Qualifications"} />
				</div>
				<div className="resume-content ">
					<ResumeItem
						year={"2012 - 2020"}
						title={"Analysis and Systems Development"}
						subTitle={"FGV - Fundação Visconde de Cairú"}
						text={
							"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. "
						}
					/>
					<ResumeItem
						year={"2005 - 2008"}
						title={"High School Graduation"}
						subTitle={"FGV - Fundação Visconde de Cairú"}
						text={
							"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. "
						}
					/>
				</div>
			</InnerLayout>
		</ResumeStyled>
	);
}

const ResumeStyled = styled.section`
	.small-title {
		padding-bottom: 3rem;
	}
	.u-small-title-margin {
		margin-top: 4rem;
	}

	.resume-content {
		border-left: 2px solid var(--border-color);
	}
`;
export default Resume;
