import english from "./en.json";

export type Language = "en" | "fr";

export function translate(text: string): string {
	return (english as Record<string, string>)[text] ?? text;
}
