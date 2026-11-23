"use client";

import { useEffect, useRef, useState } from "react";

export default function DateReveal() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const gradient = ctx.createLinearGradient(0, 0, rect.width, rect.height);
    gradient.addColorStop(0, "#d9bd7d");
    gradient.addColorStop(.5, "#f3e4b9");
    gradient.addColorStop(1, "#b88c43");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, rect.width, rect.height);
    ctx.fillStyle = "#795b2c";
    ctx.font = "600 11px Georgia";
    ctx.textAlign = "center";
    ctx.fillText("✧  SCRATCH TO REVEAL  ✧", rect.width / 2, rect.height / 2 + 4);
  }, []);

  const scratch = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (revealed) return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 19, 0, Math.PI * 2);
    ctx.fill();
  };

  return (
    <div className={`date-reveal ${revealed ? "is-revealed" : ""}`}>
      <div className="date-reveal-copy">
        <span>THE WEDDING DATE</span>
        <strong>02 FEBRUARY 2027</strong>
      </div>
      {!revealed && (
        <canvas
          ref={canvasRef}
          className="date-scratch-layer"
          onPointerDown={(e) => {
            e.currentTarget.setPointerCapture(e.pointerId);
            scratch(e);
          }}
          onPointerMove={(e) => {
            if (e.buttons === 1 || e.pointerType === "touch") scratch(e);
          }}
        />
      )}
      {!revealed && (
        <button type="button" className="date-tap-reveal" onClick={() => setRevealed(true)}>
          TAP TO REVEAL THE DATE
        </button>
      )}
    </div>
  );
}
