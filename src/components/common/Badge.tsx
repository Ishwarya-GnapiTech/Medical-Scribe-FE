import React from "react";

interface BadgeProps {
  text: string;
  variant?: "success" | "warning" | "danger" | "default";
}

const Badge: React.FC<BadgeProps> = ({
  text,
  variant = "default",
}) => {
  const styles = {
    success:
      "bg-green-100 text-green-700",
    warning:
      "bg-yellow-100 text-yellow-700",
    danger:
      "bg-red-100 text-red-700",
    default:
      "bg-gray-100 text-gray-700",
  };

  return (
    <span
      className={`px-2 py-1 rounded-md text-xs font-medium ${styles[variant]}`}
    >
      {text}
    </span>
  );
};

export default Badge;