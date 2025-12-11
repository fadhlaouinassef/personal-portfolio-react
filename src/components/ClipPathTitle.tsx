import type { ClipPathTitleProps } from "../types/props";

const ClipPathTitle = ({
	title,
	color,
	bg,
	className,
	borderColor,
	containerClass = "general-title",
}: ClipPathTitleProps) => {
	return (
		<div className={containerClass}>
			<div
				style={{
					clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
					borderColor: borderColor,
					backgroundColor: bg,
				}}
				className={`${className} border-[.5vw] text-nowrap opacity-0`}
			>
				<h2 className="pb-5 md:px-14 px-3 md:pt-0 pt-3" style={{ color }}>
					{title}
				</h2>
			</div>
		</div>
	);
};

export default ClipPathTitle;
