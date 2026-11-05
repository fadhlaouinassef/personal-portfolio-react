import { useEffect, useState } from "react";

const roles = [
	"Développeur Full Stack & Étudiant Ingénieur",
	"Passionné d’intelligence artificielle",
	"Créateur d’applications web modernes",
	"Explorateur Data Science & Machine Learning",
];

export default function Typewriter() {
	const [text, setText] = useState(roles[0]);
	useEffect(() => {
		const media = window.matchMedia("(prefers-reduced-motion: reduce)");
		let timer: ReturnType<typeof setTimeout>;
		let role = 0;
		let length = roles[0].length;
		let deleting = true;
		const tick = () => {
			length += deleting ? -1 : 1;
			setText(roles[role].slice(0, length));
			let delay = deleting ? 28 : 55;
			if (length === 0) { role = (role + 1) % roles.length; deleting = false; delay = 350; }
			else if (length === roles[role].length && !deleting) { deleting = true; delay = 2400; }
			timer = setTimeout(tick, delay);
		};
		const start = () => {
			clearTimeout(timer);
			setText(roles[0]);
			if (media.matches) return;
			role = 0; length = roles[0].length; deleting = true;
			timer = setTimeout(tick, 2400);
		};
		start();
		media.addEventListener("change", start);
		return () => { clearTimeout(timer); media.removeEventListener("change", start); };
	}, []);
	return (
		<p className="hero-typewriter text-[#c86b2a] font-paragraph text-lg md:text-xl font-semibold mb-6 uppercase tracking-[0.2em]">
			<span className="sr-only">{roles.join(". ")}</span>
			<span aria-hidden="true">{text}<span className="typewriter-caret">|</span></span>
		</p>
	);
}
