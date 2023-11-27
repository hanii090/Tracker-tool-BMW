import React from "react";

import { Button, Img, Line, Text } from "components";

type AttributesProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Attributes: React.FC<AttributesProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start md:ml-[0] ml-[7px] w-[99%] md:w-full">
          <div className="flex flex-col gap-[17px] items-center justify-start w-full">
            <div className="flex flex-row md:gap-10 items-center justify-between w-full">
              <Text
                className="text-black-900 text-lg"
                size="txtUbuntuRegular18"
              >
                Attributes
              </Text>
              <Img
                className="h-[25px] w-[25px]"
                src="images/img_arrowdown.svg"
                alt="arrowdown"
              />
            </div>
            <Line className="bg-gray-600_6c h-px w-full" />
          </div>
        </div>
        <div className="flex sm:flex-col flex-row sm:gap-10 gap-[86px] items-center justify-center md:ml-[0] ml-[7px] mt-[19px] w-auto md:w-full">
          <div className="flex flex-row gap-[30px] items-start justify-start w-auto">
            <Text
              className="capitalize text-[15px] text-gray-800 w-auto"
              size="txtUbuntuRegular15"
            >
              Date:
            </Text>
            <Text
              className="capitalize text-base text-gray-900_02 w-auto"
              size="txtUbuntuMedium16"
            >
              10:10 PM Jul 18 2023
            </Text>
          </div>
          <Line className="bg-gray-600_7e h-[26px] sm:h-px sm:w-full w-px" />
          <div className="flex flex-row gap-[30px] items-center justify-center w-auto">
            <Text
              className="capitalize text-[15px] text-gray-800 w-auto"
              size="txtUbuntuRegular15"
            >
              Updated by
            </Text>
            <div className="flex flex-row gap-2 items-center justify-center w-auto">
              <Img
                className="h-8 md:h-auto rounded-[50%] w-8"
                src="images/img_image_32x32.png"
                alt="image"
              />
              <Text
                className="capitalize text-base text-gray-900_02 w-auto"
                size="txtUbuntuMedium16"
              >
                Adam cikc
              </Text>
            </div>
          </div>
        </div>
        <div className="gap-6 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 items-start justify-start md:ml-[0] ml-[7px] mt-6 w-auto md:w-full">
          <div className="bg-light_blue-800 flex flex-col h-[121px] md:h-auto items-center justify-start py-[30px] shadow-bs w-full">
            <div className="flex flex-col items-center justify-start w-auto">
              <div className="flex flex-col gap-4 items-center justify-start w-auto">
                <Text
                  className="capitalize text-[15px] text-center text-white-A700 w-auto"
                  size="txtUbuntuMedium15"
                >
                  Serial ID
                </Text>
                <Text
                  className="capitalize text-center text-lg text-white-A700 w-auto"
                  size="txtUbuntuBold18WhiteA700"
                >
                  GALHB130
                </Text>
              </div>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-col h-[121px] md:h-auto items-center justify-start py-[30px] w-full">
            <div className="flex flex-col gap-4 items-center justify-start w-auto">
              <Text
                className="capitalize text-[15px] text-gray-800 w-auto"
                size="txtUbuntuRegular15"
              >
                Serial
              </Text>
              <Text
                className="text-gray-900_02 text-lg w-auto"
                size="txtUbuntuMedium18"
              >
                HB130
              </Text>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-col h-[121px] md:h-auto items-center justify-start py-[30px] w-full">
            <div className="flex flex-col gap-4 items-center justify-start w-auto">
              <Text
                className="capitalize text-[15px] text-gray-800 w-auto"
                size="txtUbuntuRegular15"
              >
                Nose
              </Text>
              <Text
                className="text-gray-900_02 text-lg w-auto"
                size="txtUbuntuMedium18"
              >
                Rose Lychee...
              </Text>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-col h-[121px] md:h-auto items-center justify-start py-[30px] w-full">
            <div className="flex flex-col gap-4 items-center justify-start w-auto">
              <Text
                className="capitalize text-[15px] text-gray-800 w-auto"
                size="txtUbuntuRegular15"
              >
                Serial ID
              </Text>
              <Text
                className="text-gray-900_02 text-lg w-auto"
                size="txtUbuntuMedium18"
              >
                GALHB130
              </Text>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-col h-[121px] md:h-auto items-center justify-start py-[30px] w-full">
            <div className="flex flex-col gap-4 items-center justify-start w-auto">
              <Text
                className="capitalize text-[15px] text-gray-800 w-auto"
                size="txtUbuntuRegular15"
              >
                Serial ID
              </Text>
              <Text
                className="text-gray-900_02 text-lg w-auto"
                size="txtUbuntuMedium18"
              >
                GALHB130
              </Text>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-col h-[121px] md:h-auto items-center justify-start py-[30px] w-full">
            <div className="flex flex-col gap-4 items-center justify-start w-auto">
              <Text
                className="capitalize text-[15px] text-gray-800 w-auto"
                size="txtUbuntuRegular15"
              >
                Serial ID
              </Text>
              <Text
                className="text-gray-900_02 text-lg w-auto"
                size="txtUbuntuMedium18"
              >
                GALHB130
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-[15px] items-start justify-start mb-[7px] md:ml-[0] ml-[410px] mt-[30px] w-auto">
          <Button
            className="flex h-10 items-center justify-center w-10"
            shape="square"
            color="black_900_02"
            size="md"
            variant="outline"
          >
            <Img
              className="h-3"
              src="images/img_group1000004439.svg"
              alt="group1000004439"
            />
          </Button>
          <Button
            className="cursor-pointer font-bold font-ubuntu h-10 leading-[normal] text-center text-xs w-10"
            shape="square"
            color="black_900_02"
            size="md"
            variant="fill"
          >
            01
          </Button>
          <Button
            className="cursor-pointer font-medium font-ubuntu h-10 leading-[normal] text-center text-xs w-10"
            shape="square"
            color="black_900_02"
            size="md"
            variant="outline"
          >
            02
          </Button>
          <Button
            className="cursor-pointer font-medium font-ubuntu h-10 leading-[normal] text-center text-xs w-10"
            shape="square"
            color="black_900_02"
            size="md"
            variant="outline"
          >
            03
          </Button>
          <Button
            className="cursor-pointer font-medium font-ubuntu h-10 leading-[normal] text-center text-xs w-10"
            shape="square"
            color="black_900_02"
            size="md"
            variant="outline"
          >
            04
          </Button>
          <Button
            className="cursor-pointer font-medium font-ubuntu h-10 leading-[normal] text-center text-xs w-10"
            shape="square"
            color="black_900_02"
            size="md"
            variant="outline"
          >
            05
          </Button>
          <Button
            className="flex h-10 items-center justify-center w-10"
            shape="square"
            color="black_900_02"
            size="md"
            variant="outline"
          >
            <Img
              className="h-3"
              src="images/img_group1000004438.svg"
              alt="group1000004438"
            />
          </Button>
        </div>
      </div>
    </>
  );
};

Attributes.defaultProps = {};

export default Attributes;
