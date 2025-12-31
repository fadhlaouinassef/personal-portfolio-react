import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    
    if (!cursor || !follower) return;

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out"
      });
      
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const onMouseEnter = () => {
      gsap.to([cursor, follower], {
        opacity: 1,
        duration: 0.3
      });
    };

    const onMouseLeave = () => {
      gsap.to([cursor, follower], {
        opacity: 0,
        duration: 0.3
      });
    };

    const onMouseDown = () => {
      gsap.to(cursor, {
        scale: 0.8,
        duration: 0.1
      });
      gsap.to(follower, {
        scale: 1.2,
        duration: 0.1
      });
    };

    const onMouseUp = () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.1
      });
      gsap.to(follower, {
        scale: 1,
        duration: 0.1
      });
    };

    // Gestion des éléments interactifs
    const handleHoverables = () => {
      const hoverables = document.querySelectorAll('a, button, [data-hover]');
      
      hoverables.forEach(el => {
        el.addEventListener('mouseenter', () => {
          gsap.to(cursor, {
            scale: 1.5,
            duration: 0.3,
            ease: "back.out(1.7)"
          });
          gsap.to(follower, {
            scale: 0.8,
            duration: 0.3,
            ease: "back.out(1.7)"
          });
        });
        
        el.addEventListener('mouseleave', () => {
          gsap.to(cursor, {
            scale: 1,
            duration: 0.3,
            ease: "back.out(1.7)"
          });
          gsap.to(follower, {
            scale: 1,
            duration: 0.3,
            ease: "back.out(1.7)"
          });
        });
      });
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
    
    // Observer pour les nouveaux éléments
    const observer = new MutationObserver(handleHoverables);
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    
    handleHoverables();

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef}
        className="custom-cursor fixed w-3 h-3 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          transform: 'translate(-50%, -50%)',
          opacity: 0
        }}
      />
      <div 
        ref={followerRef}
        className="custom-cursor-follower fixed w-8 h-8 border border-white rounded-full pointer-events-none z-[9998] mix-blend-difference"
        style={{
          transform: 'translate(-50%, -50%)',
          opacity: 0
        }}
      />
    </>
  );
};

export default CustomCursor;