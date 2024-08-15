import { Button } from "antd";

export default function MyButton({ className = "px-6 py-2", children, onClick, type }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`font-[700] bg-[#A51535] bg-opacity-95 rounded text-white hover:bg-opacity-100 ${className}`}
    >
      {children}
    </button>
  );
}
