// src/components/ui/Button.js
import React, { useContext } from "react";
import { ThemeContext } from "../../context/themecontext";
import { Loader2 } from "lucide-react";

const buttonVariants = {
  // Primary - Gradient Purple to Pink (brand colors)
  primary: {
    light:
      "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl",
    dark: "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-purple-500/50",
  },

  // Secondary - Gradient Indigo to Purple
  secondary: {
    light:
      "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 shadow-md hover:shadow-lg",
    dark: "bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600 shadow-md hover:shadow-indigo-500/50",
  },

  // Outline - Purple Border
  outline: {
    light:
      "border-2 border-purple-600 text-purple-600 bg-transparent hover:bg-purple-50",
    dark: "border-2 border-purple-400 text-purple-400 bg-transparent hover:bg-purple-900/20",
  },

  // Ghost - Subtle hover
  ghost: {
    light: "text-purple-600 bg-transparent hover:bg-purple-50",
    dark: "text-purple-400 bg-transparent hover:bg-purple-900/20",
  },

  // Danger - Red gradient
  danger: {
    light:
      "bg-gradient-to-r from-red-600 to-pink-600 text-white hover:from-red-700 hover:to-pink-700 shadow-md hover:shadow-lg",
    dark: "bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-red-600 hover:to-pink-600 shadow-md hover:shadow-red-500/50",
  },

  // Success - Green gradient
  success: {
    light:
      "bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700 shadow-md hover:shadow-lg",
    dark: "bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600 shadow-md hover:shadow-green-500/50",
  },

  // Warning - Yellow/Orange
  warning: {
    light:
      "bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:from-yellow-600 hover:to-orange-600 shadow-md",
    dark: "bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 hover:from-yellow-500 hover:to-orange-500 shadow-md",
  },

  // Info - Cyan/Blue
  info: {
    light:
      "bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:from-cyan-700 hover:to-blue-700 shadow-md",
    dark: "bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 shadow-md",
  },

  // Dark - Solid dark
  dark: {
    light: "bg-gray-900 text-white hover:bg-gray-800 shadow-md",
    dark: "bg-gray-700 text-white hover:bg-gray-600 shadow-md",
  },

  // Light - Solid light
  light: {
    light:
      "bg-white text-gray-900 border border-gray-300 hover:bg-gray-50 shadow-sm",
    dark: "bg-gray-800 text-white border border-gray-700 hover:bg-gray-700 shadow-sm",
  },
};

const sizeVariants = {
  xs: "px-3 py-1.5 text-xs gap-1",
  sm: "px-4 py-2 text-sm gap-1.5",
  md: "px-6 py-2.5 text-base gap-2",
  lg: "px-8 py-3 text-lg gap-2.5",
  xl: "px-10 py-4 text-xl gap-3",
};

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  fullWidth = false,
  disabled = false,
  loading = false,
  icon: Icon,
  iconPosition = "left",
  type = "button",
  ...props
}) {
  const { darkMode } = useContext(ThemeContext);

  const variantClasses =
    buttonVariants[variant]?.[darkMode ? "dark" : "light"] || "";
  const sizeClasses = sizeVariants[size] || sizeVariants.md;

  const baseClasses = `
    inline-flex items-center justify-center
    font-semibold rounded-lg
    transition-all duration-300
    focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    transform hover:scale-105 active:scale-95
  `;

  const combinedClassName = `
    ${baseClasses}
    ${variantClasses}
    ${sizeClasses}
    ${fullWidth ? "w-full" : ""}
    ${className}
  `;

  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={combinedClassName.trim()}
      {...props}
    >
      {/* Loading Spinner */}
      {loading && (
        <Loader2
          className="animate-spin"
          size={size === "xs" ? 14 : size === "sm" ? 16 : 18}
        />
      )}

      {/* Icon Left */}
      {!loading && Icon && iconPosition === "left" && (
        <Icon
          size={
            size === "xs"
              ? 14
              : size === "sm"
              ? 16
              : size === "lg"
              ? 18
              : size === "xl"
              ? 24
              : 18
          }
        />
      )}

      {/* Children */}
      <span>{children}</span>

      {/* Icon Right */}
      {!loading && Icon && iconPosition === "right" && (
        <Icon
          size={
            size === "xs"
              ? 14
              : size === "sm"
              ? 16
              : size === "lg"
              ? 18
              : size === "xl"
              ? 24
              : 18
          }
        />
      )}
    </button>
  );
}
