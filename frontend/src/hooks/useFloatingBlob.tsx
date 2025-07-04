import { useEffect } from "react";

const getRandomPosition = () => {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  return { x, y };
};

const moveBlob = (el: HTMLDivElement) => {
  const { x, y } = getRandomPosition();
  el.style.transform = `translate(${x}px, ${y}px)`;
};

export const useFloatingBlob = (ref: React.RefObject<HTMLDivElement | null>, interval = 10000) => {
  useEffect(() => {
    if (!ref.current) return;

    moveBlob(ref.current); // início

    const timer = setInterval(() => {
      if (ref.current) moveBlob(ref.current);
    }, interval);

    return () => clearInterval(timer);
  }, [ref, interval]);
};