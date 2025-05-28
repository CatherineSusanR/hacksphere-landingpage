import React, { useRef, useEffect, useState } from "react";

const STAR_COUNT = 120;
const STAR_COLORS = ["#00fff7", "#00d4ff", "#fff", "#c77dff"];

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

export default function StarfieldBackground() {
  const canvasRef = useRef(null);
  const [dimensions, setDimensions] = useState({ w: window.innerWidth, h: window.innerHeight });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;
    let stars = [];
    let mouse = { x: 0.5, y: 0.5 };

    function resize() {
      setDimensions({ w: window.innerWidth, h: window.innerHeight });
    }

    function createStars() {
      stars = [];
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
          x: Math.random() * dimensions.w,
          y: Math.random() * dimensions.h,
          r: randomBetween(0.6, 2.1),
          color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
          speed: randomBetween(0.03, 0.12),
          twinkle: Math.random() * Math.PI * 2,
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, dimensions.w, dimensions.h);
      for (let star of stars) {
        let dx = (mouse.x - 0.5) * 20 * star.speed;
        let dy = (mouse.y - 0.5) * 20 * star.speed;
        let twinkle = Math.abs(Math.sin(star.twinkle + Date.now() * 0.001 * star.speed));
        ctx.beginPath();
        ctx.arc(star.x + dx, star.y + dy, star.r + twinkle * 0.7, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.shadowColor = star.color;
        ctx.shadowBlur = 8 + 8 * twinkle;
        ctx.globalAlpha = 0.6 + 0.4 * twinkle;
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.shadowBlur = 0;
      }
    }

    function animate() {
      draw();
      animationId = requestAnimationFrame(animate);
    }

    function onMouseMove(e) {
      mouse.x = e.clientX / dimensions.w;
      mouse.y = e.clientY / dimensions.h;
    }

    createStars();
    animate();

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationId);
    };
    // eslint-disable-next-line
  }, [dimensions.w, dimensions.h]);

  useEffect(() => {
    if (canvasRef.current) {
      canvasRef.current.width = dimensions.w;
      canvasRef.current.height = dimensions.h;
    }
  }, [dimensions]);

  return (
    <canvas
      ref={canvasRef}
      className="starfield-bg"
      width={dimensions.w}
      height={dimensions.h}
      aria-hidden="true"
    />
  );
}
