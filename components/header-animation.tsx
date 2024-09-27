"use client";

import { useEffect, useRef } from "react";
import init from "@/lib/animation";

export const HeaderAnimation = ({ className, style }) => {
  const canvasRef = useRef<HTMLCanvasElement|null>(null)

  useEffect(() => {
    let destroy

    if (canvasRef.current) {
      destroy = init(canvasRef.current)
    }

    return () => {
      if (destroy) destroy()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      role="presentation"
      className={className}
      style={style}
    />
  )
}