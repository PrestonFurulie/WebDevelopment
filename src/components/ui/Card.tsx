import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: "cyan" | "fuchsia" | "violet";
  hoverable?: boolean;
}

const glowColors = {
  cyan: "hover:shadow-[0_0_30px_rgba(0,255,255,0.15)]",
  fuchsia: "hover:shadow-[0_0_30px_rgba(255,0,255,0.15)]",
  violet: "hover:shadow-[0_0_30px_rgba(123,47,190,0.15)]",
};

export default function Card({
  children,
  className = "",
  glowColor = "cyan",
  hoverable = true,
}: CardProps) {
  return (
    <div
      className={`
        rounded-xl border border-[#1A1A3E]
        bg-gradient-to-br from-[#12122A] to-[#0D0D2B]
        p-6 transition-all duration-300
        ${hoverable ? `${glowColors[glowColor]} hover:border-cyan-500/20` : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`mb-4 ${className}`}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h3 className={`text-lg font-semibold text-white ${className}`}>
      {children}
    </h3>
  );
}

export function CardContent({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`text-[#8888AA] ${className}`}>
      {children}
    </div>
  );
}
