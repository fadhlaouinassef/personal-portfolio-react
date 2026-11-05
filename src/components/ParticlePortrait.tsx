import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const portraits = ["/images/Nassef.png", "/images/file_00000000d2648246b288a916b6c5fa61 (2).png"];
const columns = 72;
const count = columns * columns;

// Adapt the supplied image/globe morph to Canvas so it also works without WebGPU.
export default function ParticlePortrait() {
	const stageRef = useRef<HTMLDivElement>(null);
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const changeRef = useRef<() => void>(() => {});
	const [active, setActive] = useState(0);
	const [ready, setReady] = useState(false);

	useEffect(() => {
		const stage = stageRef.current;
		const canvas = canvasRef.current;
		const context = canvas?.getContext("2d");
		if (!stage || !canvas || !context) return;
		const images = Array.from(stage.querySelectorAll("img"));
		const media = window.matchMedia("(prefers-reduced-motion: reduce)");
		let disposed = false;
		let visible = false;
		let current = 0;
		let samples: Uint8ClampedArray[] = [];
		let timer: ReturnType<typeof setTimeout>;
		let timeline: gsap.core.Timeline | null = null;
		let size = stage.clientWidth;
		const state = { progress: 0 };
		const sphere = Array.from({ length: count }, (_, i) => {
			const y = 1 - (i / (count - 1)) * 2;
			const radius = Math.sqrt(1 - y * y);
			const angle = i * 2.39996323;
			return { x: Math.cos(angle) * radius, y, z: Math.sin(angle) * radius };
		});

		const draw = () => {
			if (samples.length !== 2) return;
			context.clearRect(0, 0, size, size);
			const progress = state.progress;
			const globe = Math.sin(progress * Math.PI);
			const rotation = progress * Math.PI * 1.25;
			const cos = Math.cos(rotation), sin = Math.sin(rotation);
			const source = samples[current], target = samples[1 - current];
			for (let i = 0; i < count; i++) {
				const offset = i * 4;
				const alpha = (source[offset + 3] * (1 - progress) + target[offset + 3] * progress) / 255;
				if (alpha < 0.02) continue;
				const point = sphere[i];
				const z = -point.x * sin + point.z * cos;
				const perspective = 2.5 / (2.5 - z * 0.4);
				const sx = (point.x * cos + point.z * sin) * size * 0.34 * perspective + size / 2;
				const sy = point.y * size * 0.34 * perspective + size / 2;
				const x = ((i % columns) + 0.5) / columns * size;
				const y = (Math.floor(i / columns) + 0.5) / columns * size;
				const pixelSize = size / columns * (1.05 - globe * 0.35);
				const r = Math.round(source[offset] * (1 - progress) + target[offset] * progress);
				const g = Math.round(source[offset + 1] * (1 - progress) + target[offset + 1] * progress);
				const b = Math.round(source[offset + 2] * (1 - progress) + target[offset + 2] * progress);
				context.fillStyle = `rgba(${r},${g},${b},${alpha * (1 - globe * (z < 0 ? 0.65 : 0))})`;
				context.fillRect(x + (sx - x) * globe - pixelSize / 2, y + (sy - y) * globe - pixelSize / 2, pixelSize, pixelSize);
			}
		};

		const schedule = () => {
			clearTimeout(timer);
			if (visible && !document.hidden && !media.matches && !timeline?.isActive()) timer = setTimeout(change, 6000);
		};
		function change() {
			if (samples.length !== 2 || (timeline && timeline.progress() < 1)) return;
			clearTimeout(timer);
			const next = 1 - current;
			if (media.matches) {
				gsap.set(images[current], { opacity: 0 });
				gsap.set(images[next], { opacity: 1 });
				current = next; setActive(next); return;
			}
			state.progress = 0;
			draw();
			timeline = gsap.timeline({ onComplete: () => {
				current = next;
				setActive(next);
				schedule();
			} });
			timeline.set(canvas, { opacity: 1 })
				.to(images[current], { opacity: 0, duration: 0.16 }, 0)
				.to(state, { progress: 1, duration: 2.2, ease: "power2.inOut", onUpdate: draw }, 0)
				.to(images[next], { opacity: 1, duration: 0.2 }, 2)
				.to(canvas, { opacity: 0, duration: 0.2 }, 2);
		}
		changeRef.current = change;
		const resize = new ResizeObserver(() => {
			size = stage.clientWidth;
			const ratio = Math.min(window.devicePixelRatio || 1, 2);
			canvas.width = Math.round(size * ratio);
			canvas.height = Math.round(size * ratio);
			context.setTransform(ratio, 0, 0, ratio, 0, 0);
			if (timeline?.isActive()) draw();
		});
		resize.observe(stage);
		const updatePlayback = () => {
			if (!visible || document.hidden) { clearTimeout(timer); timeline?.pause(); }
			else { timeline?.resume(); schedule(); }
		};
		const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; updatePlayback(); }, { threshold: 0.15 });
		observer.observe(stage);
		const reduceMotion = () => { if (media.matches) timeline?.progress(1); schedule(); };
		media.addEventListener("change", reduceMotion);
		document.addEventListener("visibilitychange", updatePlayback);
		Promise.all(portraits.map(async (url) => {
			const image = new Image();
			image.src = url;
			await image.decode();
			const sample = document.createElement("canvas");
			sample.width = columns; sample.height = columns;
			const sampleContext = sample.getContext("2d", { willReadFrequently: true });
			if (!sampleContext) throw new Error("Canvas unavailable");
			sampleContext.drawImage(image, 0, 0, columns, columns);
			return sampleContext.getImageData(0, 0, columns, columns).data;
		})).then((data) => {
			if (disposed) return;
			samples = data; setReady(true); schedule();
		}).catch(() => { /* Keep the original portrait if the effect cannot load. */ });
		return () => {
			disposed = true; clearTimeout(timer); timeline?.kill();
			resize.disconnect(); observer.disconnect();
			media.removeEventListener("change", reduceMotion);
			document.removeEventListener("visibilitychange", updatePlayback);
			changeRef.current = () => {};
		};
	}, []);

	return (
		<div className="portrait-container">
			<div ref={stageRef} className="particle-portrait">
				{portraits.map((src, index) => <img key={src} src={src} alt={index === active ? "Portrait de Nassef Fadhlaoui" : ""} aria-hidden={index !== active} className="portrait-photo" style={{ opacity: index === active ? 1 : 0 }} fetchPriority={index === 0 ? "high" : "auto"} />)}
				<canvas ref={canvasRef} className="portrait-particles" aria-hidden="true" />
				<button type="button" disabled={!ready} className="portrait-switch" aria-label="Passer à l’autre portrait avec une transition de particules" onClick={() => changeRef.current()}>
					<span>Changer de portrait <span aria-hidden="true">↻</span></span>
				</button>
			</div>
			<div className="portrait-pagination" aria-hidden="true"><span className={active === 0 ? "active" : ""} /><span className={active === 1 ? "active" : ""} /></div>
		</div>
	);
}
