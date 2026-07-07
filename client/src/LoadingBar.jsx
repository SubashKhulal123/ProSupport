import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./LoadingBar.css";

export default function LoadingBar() {
  const { pathname } = useLocation();
  const [active, setActive] = useState(false);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setActive(true);
    setWidth(0);

    const t1 = setTimeout(() => setWidth(70), 50);
    const t2 = setTimeout(() => setWidth(95), 400);
    const t3 = setTimeout(() => {
      setWidth(100);
      setTimeout(() => {
        setActive(false);
        setWidth(0);
      }, 300);
    }, 800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [pathname]);

  if (!active && width === 0) return null;

  return (
    <div
      className="loading-bar"
      style={{ width: `${width}%`, opacity: width === 100 ? 0 : 1 }}
    />
  );
}