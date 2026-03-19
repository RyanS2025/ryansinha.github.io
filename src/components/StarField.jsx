import { useRef, useEffect } from "react";

export default function StarField() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        const parent = canvas.parentElement;

        const resize = () => {
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;};
        resize();

        const ro = new ResizeObserver(resize)
        ro.observe(parent);

        const stars = Array.from({ length: 150 }, () => ({
            x: Math.random(),
            y: Math.random(),
            radius: Math.random() * 1.5 + 0.5,
            opacity: Math.random() * 0.7 + 0.2,
            twinkleSpeed: Math.random() * 0.005 + 0.003,
        }));

        let animationId;
        const draw = (time) => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            stars.forEach((star) => {
                const flicker = Math.sin(time * star.twinkleSpeed) * 0.3 + 0.7;
                ctx.beginPath();
                ctx.arc(
                star.x * canvas.width,
                star.y * canvas.height,
                star.radius,
                0,
                Math.PI * 2
                );
                ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * flicker})`;
                ctx.fill();
            });
            animationId = requestAnimationFrame(draw);
            };
        animationId = requestAnimationFrame(draw);

        return () => {
            cancelAnimationFrame(animationId);
            ro.disconnect();
        };
        
    },[]);

    return (
    <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none"/>);
}