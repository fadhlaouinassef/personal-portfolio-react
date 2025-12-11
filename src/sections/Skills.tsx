import SkillsSlider from "../components/SkillsSlider";
import SkillsTitle from "../components/SkillsTitle";

const Skills = () => {
	return (
		<section id="skills" className="skills-section">
			<div className="h-full flex lg:flex-row flex-col items-center relative">
				<div className="lg:w-[57%] flex-none h-80 lg:h-full md:mt-20 xl:mt-0">
					<SkillsTitle />
				</div>
				<div className="h-full flex-1 min-w-0">
					<SkillsSlider />
				</div>
			</div>
		</section>
	);
};

export default Skills;