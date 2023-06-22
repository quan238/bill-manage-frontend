import React from "react";
import "./Button.scss";

interface ButtonProps {
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => {};
  variant?: "primary" | "secondary" | "success" | "danger";
}

function Button({
  backgroundColor,
  size,
  label,
  onClick,
  variant,
}: ButtonProps) {
  return (
    <button
      className={`button button-${size} button-${variant}`}
      style={{ background: backgroundColor }}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;
