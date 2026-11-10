import * as french from "../constants";
import { useLanguage } from ".";
import { translate as t } from "./translations";

const english = {
	skillCategories: french.skillCategories.map(item => ({ ...item, name: t(item.name), skills: item.skills.map(t) })),
	experienceList: french.experienceList.map(item => ({ ...item, title: t(item.title), period: t(item.period), description: t(item.description), type: t(item.type) })),
	projectsList: french.projectsList.map(item => ({ ...item, title: t(item.title), year: t(item.year), description: t(item.description) })),
	educationList: french.educationList.map(item => ({ ...item, degree: t(item.degree), school: t(item.school), period: t(item.period), location: t(item.location) })),
	certificationsList: french.certificationsList.map(item => ({ ...item, description: t(item.description), skills: item.skills.map(t), sourceLabel: t(item.sourceLabel) })),
	languagesList: french.languagesList.map(t),
	qualitiesList: french.qualitiesList.map(t),
};

export function usePortfolio() {
	return useLanguage().language === "en" ? english : french;
}
