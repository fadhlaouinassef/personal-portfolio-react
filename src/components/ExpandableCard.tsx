import { useLanguage } from "../i18n";
import { useId, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";

interface ExpandableCardProps {
	title: string;
	category: string;
	className: string;
	children: ReactNode;
	details: ReactNode;
}

export default function ExpandableCard({ title, category, className, children, details }: ExpandableCardProps) {
	const { t } = useLanguage();
	const [isOpen, setIsOpen] = useState(false);
	const sourceRef = useRef<HTMLDivElement>(null);
	const triggerRef = useRef<HTMLButtonElement>(null);
	const dialogRef = useRef<HTMLDialogElement>(null);
	const panelRef = useRef<HTMLDivElement>(null);
	const animationRef = useRef<gsap.core.Timeline | null>(null);
	const closingRef = useRef(false);
	const titleId = useId();

	useLayoutEffect(() => {
		if (!isOpen) return;
		const dialog = dialogRef.current;
		const panel = panelRef.current;
		const source = sourceRef.current;
		const trigger = triggerRef.current;
		if (!dialog || !panel || !source) return;
		const smoother = ScrollSmoother.get();
		const wasPaused = smoother?.paused() ?? false;
		const previousOverflow = document.body.style.overflow;
		smoother?.paused(true);
		document.body.style.overflow = "hidden";
		dialog.showModal();
		const from = source.getBoundingClientRect();
		const to = panel.getBoundingClientRect();
		const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		const timeline = gsap.timeline();
		animationRef.current = timeline;
		timeline.fromTo(dialog, { "--detail-backdrop-opacity": 0 }, { "--detail-backdrop-opacity": 1, duration: reduceMotion ? 0 : 0.25 }, 0);
		timeline.fromTo(panel, {
			x: from.left - to.left, y: from.top - to.top,
			scaleX: from.width / to.width, scaleY: from.height / to.height,
			transformOrigin: "top left",
		}, { x: 0, y: 0, scaleX: 1, scaleY: 1, duration: reduceMotion ? 0 : 0.55, ease: "power3.inOut" }, 0);
		timeline.fromTo(panel.querySelector(".detail-extra"), { opacity: 0, y: 12 }, {
			opacity: 1, y: 0, duration: reduceMotion ? 0 : 0.25,
		}, reduceMotion ? 0 : 0.25);
		return () => {
			timeline.kill();
			animationRef.current?.kill();
			dialog.close();
			document.body.style.overflow = previousOverflow;
			smoother?.paused(wasPaused);
			closingRef.current = false;
			trigger?.focus({ preventScroll: true });
		};
	}, [isOpen]);

	const close = () => {
		if (closingRef.current) return;
		const source = sourceRef.current;
		const panel = panelRef.current;
		if (!source || !panel) return;
		closingRef.current = true;
		animationRef.current?.kill();
		const from = source.getBoundingClientRect();
		// Read the panel's untransformed box, including when opening is interrupted.
		const to = { left: panel.offsetLeft, top: panel.offsetTop, width: panel.offsetWidth, height: panel.offsetHeight };
		const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		animationRef.current = gsap.timeline({ onComplete: () => setIsOpen(false) })
			.to(dialogRef.current, { "--detail-backdrop-opacity": 0, duration: reduceMotion ? 0 : 0.3 }, 0)
			.to(panel, {
				x: from.left - to.left, y: from.top - to.top,
				scaleX: from.width / to.width, scaleY: from.height / to.height,
				duration: reduceMotion ? 0 : 0.4, ease: "power3.inOut",
			}, 0)
			.to(panel.querySelector(".detail-extra"), { opacity: 0, duration: reduceMotion ? 0 : 0.12 }, 0);
	};

	return (
		<>
			<div ref={sourceRef} className={`expandable-card ${className}`} style={{ visibility: isOpen ? "hidden" : undefined }}>
				{children}
				<button ref={triggerRef} type="button" className="detail-trigger" aria-label={`${t("Voir les détails")} : ${title}`} aria-haspopup="dialog" aria-expanded={isOpen} onClick={() => setIsOpen(true)}>
					<span>{t("Voir les détails")}<span aria-hidden="true">↗</span></span>
				</button>
			</div>
			{isOpen && createPortal(
				<dialog ref={dialogRef} className="detail-dialog" aria-labelledby={titleId}
					onCancel={(event) => { event.preventDefault(); close(); }}
					onClick={(event) => { if (event.target === event.currentTarget) close(); }}>
					<div ref={panelRef} className="detail-panel">
						<div className="detail-toolbar">
							<span>{category}</span>
							<button type="button" className="detail-close" aria-label={t("Fermer les détails")} onClick={close} autoFocus>×</button>
						</div>
						<h2 id={titleId} className="sr-only">{title}</h2>
						<div className="detail-summary">{children}</div>
						<div className="detail-extra">{details}</div>
					</div>
				</dialog>, document.body,
			)}
		</>
	);
}
