import { useLanguage } from "../i18n";

export default function LanguageSwitch() {
	const { language, setLanguage } = useLanguage();
	return (
		<div role="group" aria-label={language === "en" ? "Language" : "Langue"} className="inline-flex shrink-0 rounded-lg border border-[#2e2a33]/25 bg-[#f4efe7] p-1">
			{(["en", "fr"] as const).map(locale => (
				<button key={locale} type="button" lang={locale} aria-label={locale === "en" ? "English" : "Français"} aria-pressed={language === locale}
					onClick={() => setLanguage(locale)}
					className={`rounded-md px-2.5 py-1.5 text-xs font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7f3b2d] ${language === locale ? "bg-[#2e2a33] text-white" : "text-[#2e2a33] hover:bg-[#d4a05c]/25"}`}>
					{locale.toUpperCase()}
				</button>
			))}
		</div>
	);
}
