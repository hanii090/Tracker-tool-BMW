import React from "react";

import { Button, Img, Line, Text } from "components";

type MapProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Map: React.FC<MapProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
          <div className="flex flex-row gap-5 items-center justify-start w-auto">
            <Text
              className="sm:text-2xl md:text-[26px] text-[28px] text-gray-800_01 w-auto"
              size="txtUbuntuRegular28"
            >
              Map
            </Text>
            <Line className="bg-gray-200 h-[22px] w-px" />
            <div className="flex flex-row gap-[9px] items-center justify-start w-auto">
              <Text
                className="capitalize text-[15px] text-gray-800 w-auto"
                size="txtUbuntuRegular15"
              >
                Manufactured In
              </Text>
              <Text
                className="text-gray-900_02 text-lg w-auto"
                size="txtUbuntuMedium18"
              >
                Frankfurt
              </Text>
            </div>
          </div>
          <div className="flex flex-row gap-[15px] items-start justify-start w-auto">
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[147px]"
              rightIcon={
                <div className="h-[18px] mb-px ml-2.5 w-[18px] outline-gray-800_01 outline-[0.5px] outline p-1.5 rounded-[50%] flex justify-center items-center">
                  <Img
                    className="h-[5px]"
                    src="images/img_vector_gray_800_01.svg"
                    alt="Vector"
                  />
                </div>
              }
              shape="square"
              color="black_900"
              size="md"
              variant="outline"
            >
              <div className="capitalize font-medium font-ubuntu text-left text-sm">
                Google map
              </div>
            </Button>
            <Img
              className="h-[43px] w-11"
              src="images/img_frame1000004659.svg"
              alt="frame1000004659"
            />
          </div>
        </div>
        <Img
          className="h-[562px] sm:h-auto object-cover w-full"
          src="images/img_rectangle20891.png"
          alt="rectangle20891"
        />
      </div>
    </>
  );
};

Map.defaultProps = {};

export default Map;
