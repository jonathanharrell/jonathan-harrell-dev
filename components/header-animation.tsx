"use client";

import {CSSProperties, useEffect, useRef} from "react";
import init from "@/lib/animation";

interface HeaderAnimationProps {
  className?: string;
  style?: CSSProperties;
}

export const HeaderAnimation = ({className, style}: HeaderAnimationProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    let destroy: (() => void) | undefined;

    if (canvasRef.current) {
      destroy = init(canvasRef.current);
    }

    return () => {
      if (destroy) destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      role="presentation"
      className={className}
      style={style}
    />
  );
};