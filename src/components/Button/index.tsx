import React from "react";

const shapes = { circle: "rounded-[50%]", square: "rounded-none" } as const;
const variants = {
  fill: {
    white_A700: "bg-white-A700",
    gray_400_4c: "bg-gray-400_4c text-gray-900_02",
    black_900_02: "bg-black-900_02 text-white-A700",
  },
  outline: {
    black_900: "border border-black-900 border-solid text-gray-800_01",
    gray_800_01: "border border-gray-800_01 border-solid text-gray-800_01",
    black_900_02: "border border-black-900_02 border-solid text-black-900_02",
  },
} as const;
const sizes = {
  xs: "p-[7px]",
  sm: "p-2.5",
  md: "pl-3 pr-[13px] py-[13px]",
  lg: "p-[19px]",
} as const;

export type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
