import React from "react";

import { Img, Text } from "components";

type FooterProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col gap-2.5 items-center justify-start mx-auto my-[39px] w-auto">
          <Text
            className="text-center text-lg text-white-A700_ab w-auto"
            size="txtUbuntuRegular18WhiteA700ab"
          >
            Powered by
          </Text>
          <Img
            className="h-[55px] w-[163px]"
            src="images/img_white.svg"
            alt="white"
          />
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
