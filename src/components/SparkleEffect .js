import { useEffect } from "react";

export const SparkleEffect = () => {
  useEffect(() => {
    const spark = (event) => {
      const i = document.createElement("i");
      i.style.left = event.pageX + "px";
      i.style.top = event.pageY + "px";
      i.style.transform = `scale(${Math.random() * 2 + 1})`;
      i.style.setProperty("--x", getRandomTransitionValue());
      i.style.setProperty("--y", getRandomTransitionValue());
      document.body.appendChild(i);
      setTimeout(() => {
        document.body.removeChild(i);
      }, 2000);
    };

    const getRandomTransitionValue = () => {
      return `${Math.random() * 400 - 200}px`;
    };

    document.addEventListener("mousemove", spark);
    return () => document.removeEventListener("mousemove", spark);
  }, []);

  return null; 
};
