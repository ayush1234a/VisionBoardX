import React, { useRef, useEffect } from "react";

const Whiteboard = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let painting = false;

    const startPosition = (e) => {
      painting = true;
      draw(e);
    };

    const endPosition = () => {
      painting = false;
      ctx.beginPath();
    };

    const draw = (e) => {
      if (!painting) return;
      ctx.lineWidth = 5;
      ctx.lineCap = "round";
      ctx.strokeStyle = "black";

      ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    };

    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", endPosition);
    canvas.addEventListener("mousemove", draw);

    return () => {
      canvas.removeEventListener("mousedown", startPosition);
      canvas.removeEventListener("mouseup", endPosition);
      canvas.removeEventListener("mousemove", draw);
    };
  }, []);

  return (
    <div>
      <h2>Whiteboard</h2>
      <canvas ref={canvasRef} width={800} height={400} style={{ border: "1px solid black" }}></canvas>
    </div>
  );
};

export default Whiteboard;
