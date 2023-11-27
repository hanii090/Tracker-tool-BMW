import { Img, Line, Button, Text } from "components";
import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
    <div className="bg-white-A700 flex flex-col font-ubuntu sm:gap-10 md:gap-10 gap-[100px] items-center justify-start mx-auto p-[30px] sm:px-5 w-full">
    <div className="flex flex-col items-center justify-start md:px-5 w-[55%] md:w-full">
      <div className="flex md:flex-col flex-row gap-[39px] items-end justify-start w-auto md:w-full">
        <Img
          className="h-14 md:h-auto object-cover w-14"
          src="images/img_logo1.png"
          alt="logoOne"
        />
        <div className="flex flex-col items-start justify-start w-[88%] md:w-full">
          <div className="flex md:flex-col flex-row font-ubuntu gap-[22px] items-center justify-start w-auto md:w-full">
            <div className="flex sm:flex-col flex-row gap-[9px] items-center justify-start w-auto sm:w-full">
              <Text
                className="text-black-900 text-xs w-auto"
                size="txtUbuntuRegular12"
              >
                Home
              </Text>
              <Text
                className="text-black-900 text-xs w-auto"
                size="txtUbuntuRegular12"
              >
                Circular World
              </Text>
              <Text
                className="text-black-900 text-xs w-auto"
                size="txtUbuntuRegular12"
              >
                Digital Journey
              </Text>
              <Text
                className="text-black-900 text-xs w-auto"
                size="txtUbuntuRegular12"
              >
                Electic Future
              </Text>
              <Text
                className="text-black-900 text-xs w-auto"
                size="txtUbuntuRegular12"
              >
                Freude
              </Text>
              <Text
                className="text-black-900 text-xs w-auto"
                size="txtUbuntuRegular12"
              >
                Models
              </Text>
              <Text
                className="text-light_blue-800 text-xs w-auto"
                size="txtUbuntuMedium12"
              >
                Tracker Tool
              </Text>
            </div>
            <div className="flex flex-row gap-[27px] items-center justify-start w-auto">
              <Img
                className="h-[15px] w-[15px]"
                src="images/img_vector.svg"
                alt="vector"
              />
              <Line className="bg-gray-200 h-[22px] w-px" />
              <div className="flex flex-row gap-[7px] items-center justify-start w-auto">
                <Img
                  className="h-[15px] w-[15px]"
                  src="images/img_iconglobe.svg"
                  alt="iconglobe"
                />
                <Text
                  className="text-[8px] text-black-900 text-right w-auto"
                  size="txtUbuntuRegular8"
                >
                  BMW in your country
                </Text>
              </div>
            </div>
          </div>
          <Line className="bg-gray-200 h-px mt-[13px] w-full" />
          <Line className="bg-light_blue-800 h-px md:ml-[0] ml-[402px] w-[11%]" />
          <Text
            className="md:ml-[0] ml-[536px] mt-[7px] text-black-900 text-xs"
            size="txtInterRegular12"
          >
            <span className="text-black-900 font-ubuntu text-left font-normal">
              Sheer Driving{" "}
            </span>
            <span className="text-black-900 font-ubuntu text-left font-bold">
              Pleasure
            </span>
          </Text>
        </div>
      </div>
    </div>
    <div className="flex flex-col items-center justify-start mb-[374px] md:px-5 w-auto md:w-full">
      <div className="flex flex-col gap-5 items-center justify-start w-auto md:w-full">
        <div className="flex flex-col gap-[50px] items-center justify-start w-auto md:w-full">
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 uppercase w-auto"
            size="txtUbuntuRegular32"
          >
            Track your NFT history
          </Text>
          <div className="bg-gray-100 flex flex-row sm:gap-10 items-center justify-between p-[5px] w-full">
            <Text
              className="ml-[15px] text-black-900 text-lg"
              size="txtUbuntuRegular18"
            >
              Enter Serial Number
            </Text>
            <Button
              className="!text-black-900 border border-black-900 border-solid cursor-pointer font-medium leading-[normal] min-w-[145px] text-center text-lg"
              shape="square"
              color="white_A700"
              size="lg"
              variant="fill"
            >
              Track
            </Button>
          </div>
        </div>
        <Text
          className="text-base text-center text-gray-800 w-auto"
          size="txtUbuntuRegular16"
        >
          <span className="text-gray-800 font-ubuntu font-normal">
            By initiating authentication, you declare that you accept or{" "}
          </span>
          <a
            href="javascript:"
            className="text-gray-800 font-ubuntu font-normal underline"
          >
            legal Notice{" "}
          </a>
          <span className="text-gray-800 font-ubuntu font-normal">
            and{" "}
          </span>
          <a
            href="javascript:"
            className="text-gray-800 font-ubuntu font-normal underline"
          >
            Privacy Policy
          </a>
        </Text>
      </div>
    </div>
  </div>
</>
  );
};
export default Home;
