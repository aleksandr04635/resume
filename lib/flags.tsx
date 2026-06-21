import React, { SVGProps } from "react";

export function UkraineFlag(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="120"
      height="80"
      viewBox="0 0 3 2"
      {...props} // Дозволяє перевизначати width, height, className тощо
    >
      <rect width="3" height="1" fill="#0057B7" />
      <rect y="1" width="3" height="1" fill="#FFD700" />
    </svg>
  );
}

export function GreatBritainFlag(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="120"
      height="80"
      viewBox="0 0 60 40" // Оптимізований viewBox для складних ліній Union Jack
      {...props}
    >
      {/* Синє тло */}
      <rect width="60" height="40" fill="#012169" />

      {/* Білі діагоналі */}
      <path d="M0,0 L60,40 M0,40 L60,0" stroke="#fff" strokeWidth="6" />

      {/* Червоні тонкі діагоналі (ірландський хрест) */}
      <path
        d="M0,0 L30,20 M60,40 L30,20 M0,40 L30,20 M60,0 L30,20"
        stroke="#C8102E"
        strokeWidth="2"
      />

      {/* Широкий білий прямий хрест */}
      <path d="M30,0 L30,40 M0,20 L60,20" stroke="#fff" strokeWidth="10" />

      {/* Червоний прямий хрест (англійський хрест святого Георгія) */}
      <path d="M30,0 L30,40 M0,20 L60,20" stroke="#C8102E" strokeWidth="6" />
    </svg>
  );
}

export function GermanyFlag(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3 2"
      width="120"
      height="80"
      {...props} // Тепер стоїть в кінці і дозволяє легко масштабувати прапор через пропси
    >
      {/* Верхня чорна смуга */}
      <rect width="3" height="0.666" fill="#000000" />

      {/* Середня червона смуга */}
      <rect y="0.666" width="3" height="0.666" fill="#DD0000" />

      {/* Нижня золота/жовта смуга */}
      <rect y="1.333" width="3" height="0.666" fill="#FFCC00" />
    </svg>
  );
}
