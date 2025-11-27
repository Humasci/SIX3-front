import { useEffect, useRef } from "react";
import gsap from "gsap";

export const CursorEffect = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    
    if (!cursor || !follower) return;

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      gsap.to(cursor, {
        x: mouseX,
        y: mouseY,
        duration: 0.1,
        ease: "power2.out"
      });

      gsap.to(follower, {
        x: mouseX,
        y: mouseY,
        duration: 0.6,
        ease: "power2.out"
      });
    };

    const handleMouseEnterInteractive = () => {
      gsap.to(cursor, {
        scale: 0.5,
        duration: 0.3,
        ease: "power2.out"
      });

      gsap.to(follower, {
        scale: 2,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseLeaveInteractive = () => {
      gsap.to([cursor, follower], {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    // Add event listeners
    document.addEventListener("mousemove", handleMouseMove);
    
    // Add interactive element listeners
    const interactiveElements = document.querySelectorAll("a, button, .service-card");
    interactiveElements.forEach(el => {
      el.addEventListener("mouseenter", handleMouseEnterInteractive);
      el.addEventListener("mouseleave", handleMouseLeaveInteractive);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      interactiveElements.forEach(el => {
        el.removeEventListener("mouseenter", handleMouseEnterInteractive);
        el.removeEventListener("mouseleave", handleMouseLeaveInteractive);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-4 h-4 bg-accent rounded-full pointer-events-none z-50 mix-blend-difference transform -translate-x-1/2 -translate-y-1/2 hidden md:block"
      />
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-8 h-8 border border-accent/50 rounded-full pointer-events-none z-40 transform -translate-x-1/2 -translate-y-1/2 hidden md:block"
      />
    </>
  );
};