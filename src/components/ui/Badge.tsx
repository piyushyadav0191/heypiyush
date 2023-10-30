"use client";

type Props = {
  id: number;
  title: string;
  color: string;
  borderColor: string;
};

const colorMap = {
  teal: "hover:bg-teal-500 border-teal-600",
  rose: "hover:bg-rose-500 border-rose-600",
  blue: "hover:bg-blue-500 border-blue-600",
  indigo: "hover:bg-indigo-500 border-indigo-600",
  yellow: "hover:bg-yellow-500 border-yellow-600",
  purple: "hover:bg-purple-500 border-purple-600",
  green: "hover:bg-green-500 border-green-600",
  red: "hover:bg-red-500 border-red-600",
  gray: "hover:bg-gray-500 border-gray-600",
  pink: "hover:bg-pink-500 border-pink-600",
  orange: "hover:bg-orange-500 border-orange-600",
  cyan: "hover:bg-cyan-500 border-cyan-600",
  lime: "hover:bg-lime-500 border-lime-600",
  emerald: "hover:bg-emerald-500 border-emerald-600",
  violet: "hover:bg-violet-500 border-violet-600",
  fuchsia: "hover:bg-fuchsia-500 border-fuchsia-600",
  lightBlue: "hover:bg-blue-400 border-blue-300",
  warmGray: "hover:bg-warmGray-500 border-warmGray-600",
};

const Badge = ({ id, color, title }: Props) => {
  //@ts-ignore
  const colorClass = colorMap[color] || "";
  return (
    <span
      key={id}
      className={`inline-block px-3 py-2 text-sm  font-semibold text-black dark:text-white rounded-full  hover:bg-opacity-10 border-2 ${colorClass} border-opacity-50 `}
    >
      {title}
    </span>
  );
};

export default Badge;
