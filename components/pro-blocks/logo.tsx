// components/Logo.tsx
import React from "react";

interface LogoProps {
  width?: number;          // ancho opcional
  height?: number;         // alto opcional
  className?: string;      // clases adicionales de Tailwind
}

export const Logo: React.FC<LogoProps> = ({
  width,
  height,
  className = "",
}) => {
  return (
    <img
      src="/repeatlogo.png"            // ruta de tu logo en /public/images/
      alt="Logo"
      width={width}                     // ancho opcional
      height={height}                   // alto opcional
      className={`object-contain ${className}`}
    />
  );
};
