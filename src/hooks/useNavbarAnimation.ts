import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// register gsap plugin
gsap.registerPlugin(ScrollTrigger);

const useNavbarAnimation = () => {
  const navbarRef = useRef<HTMLDivElement | null>(null);

  // Animation for hiding when scrolling down and showing when scrolling up
  useEffect(() => {
    const navbar = navbarRef.current;
    if (!navbar) return;

    const animationProps = {
      yPercent: -100,
      paused: true,
      duration: 0.3,
    };

    const navbarAnimation = gsap.from(navbar, animationProps).progress(1);

    ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        self.direction === -1
          ? navbarAnimation.play()
          : navbarAnimation.reverse();
      },
    });

    return () => {
      navbarAnimation.kill(); // Cleanup animation on unmount
    };
  }, []);

  return navbarRef;
};

export default useNavbarAnimation;
