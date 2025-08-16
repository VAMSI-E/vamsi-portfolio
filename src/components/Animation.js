import React, { useEffect, useRef, useState } from "react";
import './Animation.css';

const statsData = [
  { id: 1, title: "Years of Experience", number: 3, suffix: "+" },
  { id: 2, title: "Projects Completed", number: 15, suffix: "+" },
  { id: 3, title: "Technologies Mastered", number: 7, suffix: "+" },
  { id: 4, title: "Happy Clients", number: 12, suffix: "+" },
];

export const Animation = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateNumbers();
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [hasAnimated]);

  const animateNumbers = () => {
    statsData.forEach((stat, index) => {
      let start = 0;
      const end = stat.number;
      const duration = 1000;
      const increment = end / (duration / 10);

      const interval = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(interval);
        }

        setCounts(prev => {
          const updated = [...prev];
          updated[index] = Math.floor(start);
          return updated;
        });
      }, 10);
    });
  };

  return (
    <div ref={sectionRef} className="stats-section">
      <div className="stats About-me-container">
        <div className="stats-overlay">
          <div className="statsbar">
            {statsData.map((stat, index) => (
              <div key={stat.id} className="stat-box">
                <div className="stat-number">
                  {counts[index]}
                  <span className="suffix">{stat.suffix}</span>
                </div>
                <div className="stat-title">
                  {stat.title.split('\n').map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
