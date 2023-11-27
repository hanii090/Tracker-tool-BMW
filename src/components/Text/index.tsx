import React from "react";

const sizeClasses = {
  txtUbuntuRegular8: "font-normal font-ubuntu",
  txtUbuntuRegular28: "font-normal font-ubuntu",
  txtUbuntuRegular9: "font-normal font-ubuntu",
  txtPublicSansMedium16: "font-medium font-publicsans",
  txtUbuntuMedium20: "font-medium font-ubuntu",
  txtPoppinsRegular10: "font-normal font-poppins",
  txtPoppinsRegular12: "font-normal font-poppins",
  txtUbuntuRegular18WhiteA700ab: "font-normal font-ubuntu",
  txtPoppinsMedium16: "font-medium font-poppins",
  txtUbuntuRegular14: "font-normal font-ubuntu",
  txtUbuntuRegular15: "font-normal font-ubuntu",
  txtUbuntuRegular16: "font-normal font-ubuntu",
  txtUbuntuRegular12WhiteA700: "font-normal font-ubuntu",
  txtUbuntuRegular18: "font-normal font-ubuntu",
  txtUbuntuMedium14: "font-medium font-ubuntu",
  txtUbuntuMedium12: "font-medium font-ubuntu",
  txtUbuntuRegular30: "font-normal font-ubuntu",
  txtPublicSansRegular14: "font-normal font-publicsans",
  txtPublicSansMedium16WhiteA700: "font-medium font-publicsans",
  txtUbuntuRegular32: "font-normal font-ubuntu",
  txtPoppinsRegular14: "font-normal font-poppins",
  txtUbuntuRegular12: "font-normal font-ubuntu",
  txtUbuntuMedium12Gray80001: "font-medium font-ubuntu",
  txtUbuntuRegular13: "font-normal font-ubuntu",
  txtUbuntuBold18: "font-bold font-ubuntu",
  txtUbuntuMedium18: "font-medium font-ubuntu",
  txtUbuntuMedium16: "font-medium font-ubuntu",
  txtUbuntuMedium15: "font-medium font-ubuntu",
  txtInterRegular12: "font-inter font-normal",
  txtPublicSansRegular14Bluegray100: "font-normal font-publicsans",
  txtUbuntuBold18WhiteA700: "font-bold font-ubuntu",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: any;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
