import { useState, useEffect, useRef } from 'react';

const STORAGE_KEY_POS   = 'desk-card-positions';
const STORAGE_KEY_FLIP  = 'desk-card-flipped';

export function useDraggable() {
  const [positions, setPositions] = useState({});
  const [flipped,   setFlipped]   = useState({});
  const [zOrder,    setZOrder]     = useState([]);
  const [dragging,  setDragging]   = useState(null);
  const lastMovedRef = useRef(false);

  useEffect(() => {
    try {
      const pos  = localStorage.getItem(STORAGE_KEY_POS);
      const flip = localStorage.getItem(STORAGE_KEY_FLIP);
      if (pos)  setPositions(JSON.parse(pos));
      if (flip) setFlipped(JSON.parse(flip));
    } catch (_) {}
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_POS, JSON.stringify(positions));
  }, [positions]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_FLIP, JSON.stringify(flipped));
  }, [flipped]);

  const bringForward = (id) =>
    setZOrder(z => [...z.filter(x => x !== id), id]);

  const getZ = (id) => 10 + zOrder.indexOf(id);

  const startDrag = (id, e) => {
    e.preventDefault();
    bringForward(id);
    const start = { x: e.clientX, y: e.clientY };
    const cur   = positions[id] || { x: 0, y: 0 };
    let moved   = false;

    const onMove = (ev) => {
      const dx = ev.clientX - start.x;
      const dy = ev.clientY - start.y;
      if (Math.abs(dx) + Math.abs(dy) > 4) moved = true;
      setPositions(p => ({ ...p, [id]: { x: cur.x + dx, y: cur.y + dy } }));
      setDragging(id);
    };

    const onUp = () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
      setDragging(null);
      lastMovedRef.current = moved;
      if (!moved) setFlipped(f => ({ ...f, [id]: !f[id] }));
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  };

  const cardStyle = (id, baseTransform = '') => ({
    transition: dragging === id
      ? 'none'
      : 'transform 0.5s cubic-bezier(0.2,0.8,0.2,1), box-shadow 0.25s',
    transform: `translate(${positions[id]?.x || 0}px, ${positions[id]?.y || 0}px) ${baseTransform} ${flipped[id] ? 'rotateY(180deg)' : ''}`,
    transformStyle: 'preserve-3d',
    zIndex: getZ(id),
    cursor: dragging === id ? 'grabbing' : 'grab',
    userSelect: 'none',
  });

  const reset = () => {
    setPositions({});
    setFlipped({});
    setZOrder([]);
    localStorage.removeItem(STORAGE_KEY_POS);
    localStorage.removeItem(STORAGE_KEY_FLIP);
  };

  const wasDragged = () => lastMovedRef.current;

  const flipCard = (id) => setFlipped(f => ({ ...f, [id]: !f[id] }));

  return { positions, flipped, dragging, startDrag, cardStyle, getZ, reset, wasDragged, flipCard };
}
