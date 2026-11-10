import { useLanguage } from "../i18n";
const SkillsTitle = () => {
	const { t } = useLanguage();
	return (
		<div className="flex flex-col items-center justify-center gap-6 text-center font-bold uppercase text-5xl md:text-7xl leading-tight">
			<h2>{t("Mes")} <span className="block bg-mid-brown text-milk px-4 py-2 my-5 -rotate-3">{t("compétences")}</span> {t("techniques")}</h2>
			<p className="font-paragraph font-medium normal-case text-sm md:text-base text-[#7f3b2d] tracking-normal">{t("Langages, frameworks et outils")}</p>
		</div>
	);
};

export default SkillsTitle;
