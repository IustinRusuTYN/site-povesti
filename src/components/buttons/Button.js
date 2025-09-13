import React, { useContext } from "react";
import { ThemeContext } from "../../context/themecontext";

const buttonVariants = {
  primary: {
    light: "bg-blue-600 text-white hover:bg-blue-700",
    dark: "bg-blue-500 text-white hover:bg-blue-600",
  },
  secondary: {
    light: "bg-white text-black border border-black hover:bg-gray-200",
    dark: "bg-gray-700 text-white border border-gray-600 hover:bg-gray-600",
  },
  danger: {
    light: "bg-red-600 text-white hover:bg-red-700",
    dark: "bg-red-500 text-white hover:bg-red-600",
  },
  success: {
    light: "bg-green-600 text-white hover:bg-green-700",
    dark: "bg-green-500 text-white hover:bg-green-600",
  },
  warning: {
    light: "bg-yellow-400 text-black hover:bg-yellow-500",
    dark: "bg-yellow-500 text-black hover:bg-yellow-600",
  },
  info: {
    light: "bg-cyan-400 text-black hover:bg-cyan-500",
    dark: "bg-cyan-500 text-black hover:bg-cyan-600",
  },
};

export default function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}) {
  const { darkMode } = useContext(ThemeContext);
  const variantClasses = buttonVariants[variant][darkMode ? "dark" : "light"];

  return (
    <button
      className={`px-6 py-3 rounded-md font-medium transition ${variantClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
