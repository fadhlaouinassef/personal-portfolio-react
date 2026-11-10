import { createContext, useContext } from "react";
import type { Language } from "./translations";

export const LanguageContext = createContext<{
	language: Language;
	setLanguage: (language: Language) => void;
	t: (text: string) => string;
} | null>(null);

export function useLanguage() {
	const context = useContext(LanguageContext);
	if (!context) throw new Error("useLanguage must be used within LanguageProvider");
	return context;
}
