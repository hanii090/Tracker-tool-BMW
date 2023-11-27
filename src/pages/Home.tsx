import { Img, Line, Button, Text } from "components";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const Home = () => {
  const [searchValue, setSearchValue] = useState('')
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
          <div className="relative w-full mb-4">
            <input
              aria-label="Enter Serial Number"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Enter Serial Number"
              className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-200 rounded-md dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100"
            />
            <svg
              className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
              
        
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
