import { useEffect } from "react";
import gsap from "gsap";

interface CVViewerProps {
	isOpen: boolean;
	onClose: () => void;
}

const CVViewer = ({ isOpen, onClose }: CVViewerProps) => {
	useEffect(() => {
		if (isOpen) {
			// Empêcher le scroll du body
			document.body.style.overflow = "hidden";
			
			// Animation d'ouverture
			gsap.fromTo(
				".cv-overlay",
				{ opacity: 0 },
				{ opacity: 1, duration: 0.3 }
			);
			gsap.fromTo(
				".cv-container",
				{ opacity: 0, y: 50 },
				{ opacity: 1, y: 0, duration: 0.4, delay: 0.1 }
			);
		} else {
			// Réactiver le scroll du body
			document.body.style.overflow = "auto";
		}
		
		return () => {
			document.body.style.overflow = "auto";
		};
	}, [isOpen]);

	const handleDownload = () => {
		const link = document.createElement("a");
		link.href = "/CV_NassefFadhlaoui.pdf";
		link.download = "CV_NassefFadhlaoui.pdf";
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	if (!isOpen) return null;

	return (
		<div className="cv-overlay fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4">
			<div className="cv-container bg-white rounded-lg shadow-2xl w-full max-w-5xl h-[90vh] flex flex-col">
				{/* Header */}
				<div className="flex justify-between items-center p-6 border-b border-gray-200">
					<h2 className="text-2xl font-bold text-gray-800">Mon CV</h2>
					<div className="flex gap-3">
						<button
							onClick={handleDownload}
							className="px-6 py-2.5 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2 font-medium"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
								/>
							</svg>
							Télécharger
						</button>
						<button
							onClick={onClose}
							className="px-4 py-2.5 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium"
						>
							✕ Fermer
						</button>
					</div>
				</div>

				{/* PDF Viewer */}
				<div className="flex-1 overflow-auto p-4">
					<iframe
						src="/CV_NassefFadhlaoui.pdf"
						className="w-full h-full rounded-lg border border-gray-300"
						title="CV Nassef Fadhlaoui"
					/>
				</div>
			</div>
		</div>
	);
};

export default CVViewer;
