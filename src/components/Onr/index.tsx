import React from "react";

import { Button, Img, Line, Text } from "components";

type OnrProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Onr: React.FC<OnrProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-gray-100 flex md:flex-col flex-row md:gap-5 sm:gap-[] sm:gap-x-[] sm:gap-y-[] items-center sm:justify-center justify-start p-[18px] w-full">
          <div className="flex flex-row gap-2.5 items-center justify-start md:ml-[0] ml-[15px] w-auto">
            <Button
              className="flex h-[34px] items-center justify-center w-[34px]"
              shape="circle"
              color="white_A700"
              size="xs"
              variant="fill"
            >
              <Img
                className="h-5"
                src="images/img_linearmoney.svg"
                alt="linearmoney"
              />
            </Button>
            <Text
              className="text-center text-gray-800_01 text-sm w-auto"
              size="txtUbuntuMedium14"
            >
              Brought
            </Text>
          </div>
          <Text
            className="md:ml-[0] ml-[198px] text-center text-gray-800_01 text-sm"
            size="txtUbuntuMedium14"
          >
            555.3
          </Text>
          <div className="flex flex-row gap-2.5 items-center justify-start md:ml-[0] ml-[133px] w-auto">
            <div className="flex flex-col h-[34px] items-center justify-start w-[34px]">
              <Img
                className="h-[34px] md:h-auto rounded-[50%] w-[34px]"
                src="images/img_image_34x34.png"
                alt="image"
              />
            </div>
            <Text
              className="text-center text-gray-800_01 text-sm w-auto"
              size="txtUbuntuMedium14"
            >
              Adam wick
            </Text>
            <Img
              className="h-[25px] rounded-[5px] w-[25px]"
              src="images/img_lineararrows.svg"
              alt="lineararrows"
            />
          </div>
          <Text
            className="md:ml-[0] ml-[125px] text-center text-gray-800_01 text-sm"
            size="txtUbuntuMedium14"
          >
            0×5dd...4f12
          </Text>
          <Text
            className="md:ml-[0] ml-[119px] text-center text-gray-800_01 text-sm"
            size="txtUbuntuMedium14"
          >
            10:10 PM 17 July 2023
          </Text>
        </div>
        <Line className="bg-gray-600_6c h-px w-full" />
      </div>
    </>
  );
};

Onr.defaultProps = {};

export default Onr;
