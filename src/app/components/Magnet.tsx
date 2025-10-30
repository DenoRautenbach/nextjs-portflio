import { useEffect, useRef } from "react";

const Magnet = ({
  children,
  padding = 100,
  disabled = false,
  magnetStrength = 10,
  activeTransition = "transform 0.2s ease-out",
  inactiveTransition = "transform 0.4s ease-in-out",
  wrapperClassName = "",
  innerClassName = "",
  ...props
}) => {
  const magnetRef = useRef(null);
  const innerRef = useRef(null);
  let animationFrame;

  useEffect(() => {
    if (disabled) return;

    const handleMouseMove = (e) => {
      if (!magnetRef.current || !innerRef.current) return;

      const rect = magnetRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distX = Math.abs(centerX - e.clientX);
      const distY = Math.abs(centerY - e.clientY);

      const inRange =
        distX < rect.width / 2 + padding && distY < rect.height / 2 + padding;

      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        if (inRange) {
          const offsetX = (e.clientX - centerX) * (magnetStrength / 100);
          const offsetY = (e.clientY - centerY) * (magnetStrength / 100);
          innerRef.current.style.transition = activeTransition;
          innerRef.current.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0)`;
        } else {
          innerRef.current.style.transition = inactiveTransition;
          innerRef.current.style.transform = `translate3d(0, 0, 0)`;
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, [padding, disabled, magnetStrength]);

  return (
    <div
      ref={magnetRef}
      className={`relative inline-block ${wrapperClassName}`}
      {...props}
    >
      <div ref={innerRef} className={innerClassName}>
        {children}
      </div>
    </div>
  );
};

export default Magnet;
