import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input(props: InputProps) {
  return (
    <input
      className={`bg-zinc-900 py-3 ${
        props.type === "time" ? "px-1 pl-4" : "px-4"
      } rounded text-sm placeholder:text-zinc-500`}
      {...props}
    />
  );
}
