import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  glow?: boolean;
  children: React.ReactNode;
}

const variants = {
  primary:
    "bg-gradient-to-r from-cyan-500 to-fuchsia-600 text-white hover:from-cyan-400 hover:to-fuchsia-500",
  secondary:
    "border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400",
  ghost: "text-[#B0B0D0] hover:text-white hover:bg-white/5",
  danger:
    "bg-red-600/20 border border-red-500/30 text-red-400 hover:bg-red-600/30",
};

const sizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-base",
  lg: "px-8 py-3.5 text-lg",
};

export default function Button({
  variant = "primary",
  size = "md",
  glow = false,
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        inline-flex items-center justify-center rounded-lg font-medium
        transition-all duration-200 ease-out
        focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:ring-offset-2 focus:ring-offset-[#0D0D2B]
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variants[variant]}
        ${sizes[size]}
        ${glow ? "shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:shadow-[0_0_30px_rgba(0,255,255,0.5)]" : ""}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
