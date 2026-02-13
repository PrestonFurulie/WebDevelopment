import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "cyan" | "fuchsia" | "green" | "red" | "yellow" | "violet";
  size?: "sm" | "md";
  pulse?: boolean;
}

const badgeVariants = {
  cyan: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
  fuchsia: "bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/30",
  green: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  red: "bg-red-500/10 text-red-400 border-red-500/30",
  yellow: "bg-amber-500/10 text-amber-400 border-amber-500/30",
  violet: "bg-violet-500/10 text-violet-400 border-violet-500/30",
};

const badgeSizes = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-3 py-1 text-sm",
};

export default function Badge({
  children,
  variant = "cyan",
  size = "sm",
  pulse = false,
}: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center gap-1.5 rounded-full border font-medium
        ${badgeVariants[variant]}
        ${badgeSizes[size]}
      `}
    >
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span
            className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${
              variant === "green" ? "bg-emerald-400" :
              variant === "red" ? "bg-red-400" :
              variant === "cyan" ? "bg-cyan-400" : "bg-fuchsia-400"
            }`}
          />
          <span
            className={`relative inline-flex h-2 w-2 rounded-full ${
              variant === "green" ? "bg-emerald-500" :
              variant === "red" ? "bg-red-500" :
              variant === "cyan" ? "bg-cyan-500" : "bg-fuchsia-500"
            }`}
          />
        </span>
      )}
      {children}
    </span>
  );
}
