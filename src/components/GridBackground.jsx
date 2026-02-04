import { useEffect, useRef } from 'react';

const GridBackground = ({ isDarkMode }) => {
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);
  const mousePosRef = useRef({ x: 0, y: 0 });
  const gridPointsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    const initializeGrid = () => {
      const gridSize = 50;
      gridPointsRef.current = [];
      const width = canvas.width;
      const height = canvas.height;

      for (let x = 0; x <= width + gridSize; x += gridSize) {
        for (let y = 0; y <= height + gridSize; y += gridSize) {
          gridPointsRef.current.push({
            x,
            y,
            originalX: x,
            originalY: y,
          });
        }
      }
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initializeGrid();
    };

    const updateGridPoints = () => {
      const wobbleRadius = 150;
      const wobbleStrength = 30;
      const mousePos = mousePosRef.current;

      gridPointsRef.current.forEach((point) => {
        const dx = point.originalX - mousePos.x;
        const dy = point.originalY - mousePos.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < wobbleRadius) {
          const influence = 1 - distance / wobbleRadius;
          const wobble = Math.sin(influence * Math.PI) * wobbleStrength;

          const angle = Math.atan2(dy, dx);
          point.x = point.originalX + Math.cos(angle) * wobble * influence;
          point.y = point.originalY + Math.sin(angle) * wobble * influence;
        } else {
          // Smoothly return to original position
          point.x += (point.originalX - point.x) * 0.1;
          point.y += (point.originalY - point.y) * 0.1;
        }
      });
    };

    const drawGrid = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Grid color based on mode
      const gridColor = isDarkMode ? "rgba(255, 255, 255, 0.15)" : "rgba(110, 109, 109, 0.25)";

      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 1;

      const gridSize = 50;
      const points = gridPointsRef.current;

      // Draw horizontal lines
      // Efficient drawing: iterate rows/cols
      // Actually, original script iterated *points* and filtered them for every line. That's O(N*Lines). 
      // We can optimize or keep original logic for fidelity. The original logic was:
      /*
      for (let y = 0; y <= this.canvas.height + gridSize; y += gridSize) {
        // filter points on this Y
      }
      */
      // To keep it simple and faithful, I'll use a similar approach but maybe slightly optimized if easy.
      // The original script's filter approach is creating arrays every frame. Let's stick to the logic but maybe just connect points.

      // Let's replicate original drawing logic for exact visual match.
      for (let y = 0; y <= canvas.height + gridSize; y += gridSize) {
        ctx.beginPath();
        // Find points that belong to this horizontal line (approx originalY == y)
        // Since we pushed them in order, we could optimize, but let's just filter.
        const pointsOnLine = points
          .filter((p) => Math.abs(p.originalY - y) < 1)
          .sort((a, b) => a.originalX - b.originalX);

        if (pointsOnLine.length > 0) {
          ctx.moveTo(pointsOnLine[0].x, pointsOnLine[0].y);
          for (let i = 1; i < pointsOnLine.length; i++) {
            ctx.lineTo(pointsOnLine[i].x, pointsOnLine[i].y);
          }
        }
        ctx.stroke();
      }

      // Draw vertical lines
      for (let x = 0; x <= canvas.width + gridSize; x += gridSize) {
        ctx.beginPath();
        const pointsOnLine = points
          .filter((p) => Math.abs(p.originalX - x) < 1)
          .sort((a, b) => a.originalY - b.originalY);

        if (pointsOnLine.length > 0) {
          ctx.moveTo(pointsOnLine[0].x, pointsOnLine[0].y);
          for (let i = 1; i < pointsOnLine.length; i++) {
            ctx.lineTo(pointsOnLine[i].x, pointsOnLine[i].y);
          }
        }
        ctx.stroke();
      }
    };

    const animate = () => {
      updateGridPoints();
      drawGrid();
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleResize = () => {
      resizeCanvas();
    };

    // Init
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isDarkMode]); // Re-run if dark mode changes to update color immediately

  return <canvas ref={canvasRef} id="gridCanvas" />;
};

export default GridBackground;
