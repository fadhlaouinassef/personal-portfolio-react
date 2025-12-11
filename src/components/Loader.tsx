import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";

interface LoaderProps {
    onComplete: () => void;
}

const Loader = ({ onComplete }: LoaderProps) => {
    const [progress, setProgress] = useState(0);

    useGSAP(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                setTimeout(onComplete, 500);
            }
        });

        // Animation du texte
        tl.from(".loader-text", {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        })
        // Animation de la barre de progression
        .to(".progress-bar", {
            width: "100%",
            duration: 2.5,
            ease: "power2.inOut",
            onUpdate: function() {
                setProgress(Math.round(this.progress() * 100));
            }
        }, "-=0.5")
        // Animation de sortie
        .to(".loader-container", {
            opacity: 0,
            scale: 0.8,
            duration: 0.8,
            ease: "power2.inOut"
        }, "+=0.3");

        // Animation des particules
        gsap.to(".particle", {
            y: -100,
            opacity: 0,
            duration: 2,
            repeat: -1,
            stagger: 0.2,
            ease: "power1.out"
        });
    });

    return (
        <div className="loader-container fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-milk via-light-brown to-mid-brown">
            <div className="text-center">
                {/* Particules décoratives */}
                <div className="absolute inset-0 overflow-hidden">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="particle absolute w-2 h-2 bg-dark-brown rounded-full opacity-20"
                            style={{
                                left: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 2}s`
                            }}
                        />
                    ))}
                </div>

                {/* Contenu principal */}
                <div className="loader-text mb-8">
                    <h1 className="text-6xl md:text-8xl font-bold text-dark-brown mb-4">
                        NF
                    </h1>
                    <p className="text-xl md:text-2xl text-dark-brown/70 font-light">
                        Portfolio en cours de chargement...
                    </p>
                </div>

                {/* Barre de progression */}
                <div className="w-64 mx-auto">
                    <div className="bg-dark-brown/20 rounded-full h-1 mb-4 overflow-hidden">
                        <div className="progress-bar h-full bg-dark-brown rounded-full w-0 transition-all"></div>
                    </div>
                    <p className="text-dark-brown/60 text-sm">{progress}%</p>
                </div>
            </div>
        </div>
    );
};

export default Loader;