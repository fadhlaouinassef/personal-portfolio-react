import { useLayoutEffect, useMemo, useState, type ReactNode } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LanguageContext } from ".";
import { translate, type Language } from "./translations";

export default function LanguageProvider({ children }: { children: ReactNode }) {
	const [language, setLanguage] = useState<Language>("en");
	const value = useMemo(() => ({
		language,
		setLanguage,
		t: language === "en" ? translate : (text: string) => text,
	}), [language]);

	useLayoutEffect(() => {
		document.documentElement.lang = language;
		// Recalculate pinned sections after translated text changes their height.
		const frame = requestAnimationFrame(() => ScrollTrigger.refresh());
		return () => cancelAnimationFrame(frame);
	}, [language]);

	return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
