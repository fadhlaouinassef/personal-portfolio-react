import { skillCategories } from "../constants";

const SkillsSlider = () => (
	<div className="skills-cards">
		{skillCategories.map((category) => (
			<article key={category.name} className="skills-category">
				<img src={`/images/${category.color}-bg.svg`} alt="" className="absolute inset-0 w-full h-full object-cover" />
				<div className="relative z-10 p-8 md:p-10 flex flex-col justify-center items-center text-center h-full">
					<h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">{category.name}</h3>
					<ul className="flex flex-wrap justify-center gap-3">
						{category.skills.map((skill) => (
							<li key={skill} className="px-4 py-2 bg-white/20 rounded-full text-white text-sm md:text-base font-paragraph">{skill}</li>
						))}
					</ul>
				</div>
			</article>
		))}
	</div>
);

export default SkillsSlider;
