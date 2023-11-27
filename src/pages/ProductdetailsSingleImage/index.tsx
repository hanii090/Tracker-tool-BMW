import React from "react";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import Footer from "components/Footer";
import Onr from "components/Onr";

const salesItemsTypeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ProductdetailsSingleImagePage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-ubuntu gap-5 items-center justify-end mx-auto pt-[30px] w-full">
        <div className="flex flex-col items-center justify-start md:px-5 w-[53%] md:w-full">
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
        <div className="flex flex-col items-center justify-start w-full">
          <Text
            className="bg-indigo-50 h-10 justify-center max-w-[1440px] md:max-w-full sm:px-5 px-[35px] py-3 text-[13px] text-center text-gray-900 w-full"
            size="txtUbuntuRegular13"
          >
            <span className="text-gray-900 font-ubuntu font-normal">
              This product no more exists and on 11/11/23 it was made invalid
              and by{" "}
            </span>
            <a
              href="javascript:"
              className="text-light_blue-800 font-ubuntu font-normal underline"
            >
              username123
            </a>
          </Text>
          <div className="h-[2184px] max-w-[1236px] mt-[50px] mx-auto md:px-5 relative w-full">
            <div className="flex flex-col items-center justify-start mb-[-150px] mx-auto w-full z-[1]">
              <div className="flex md:flex-col flex-row md:gap-[50px] items-start justify-between w-full">
                <div className="flex md:flex-1 flex-col items-center justify-start w-1/2 md:w-full">
                  <div className="h-[525px] relative w-full">
                    <Img
                      className="h-[525px] m-auto object-cover w-full"
                      src="images/img_frame7.png"
                      alt="rectangleOne"
                    />
                    <div className="absolute flex flex-col md:gap-10 gap-[338px] h-max inset-y-[0] items-end justify-start my-auto right-[3%] w-2/5">
                      <Button
                        className="flex h-[42px] items-center justify-center mr-[3px] shadow-bs2 w-[42px]"
                        shape="square"
                        color="white_A700"
                        size="xs"
                        variant="fill"
                      >
                        <Img
                          className="h-7"
                          src="images/img_group1000004735.svg"
                          alt="group1000004735"
                        />
                      </Button>
                      <div className="flex flex-row items-end justify-evenly w-full">
                        <div
                          className="bg-cover bg-no-repeat flex flex-col h-[110px] items-start justify-end p-3 shadow-bs3 w-[87%]"
                          style={{
                            backgroundImage:
                              "url('images/img_group1000004737.svg')",
                          }}
                        >
                          <div className="flex flex-col gap-[13px] items-start justify-start ml-0.5 md:ml-[0] mt-0.5 w-[89%] md:w-full">
                            <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                              <div className="flex flex-col h-[34px] items-center justify-start w-[34px]">
                                <Img
                                  className="h-[34px] md:h-auto rounded-[50%] w-[34px]"
                                  src="images/img_image_34x34.png"
                                  alt="image_Three"
                                />
                              </div>
                              <Text
                                className="text-center text-gray-800_01 text-sm w-auto"
                                size="txtUbuntuMedium14"
                              >
                                Adam wick
                              </Text>
                            </div>
                            <div className="flex flex-col font-poppins gap-[5px] items-start justify-start w-auto">
                              <Text
                                className="text-[10px] text-black-900_90 w-auto"
                                size="txtPoppinsRegular10"
                              >
                                Image Changed
                              </Text>
                              <Text
                                className="text-black-900 text-xs w-auto"
                                size="txtPoppinsRegular12"
                              >
                                Sat 20 Sep 2023 at 10:36pm
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Img
                          className="h-[30px] mb-0.5 mt-[78px] w-[30px]"
                          src="images/img_boldessentional.svg"
                          alt="boldessentional"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col gap-[30px] items-center justify-start w-[47%] md:w-full">
                  <div className="flex flex-col gap-[39px] items-start justify-start w-full">
                    <div className="flex flex-col gap-10 items-start justify-start w-auto sm:w-full">
                      <div className="flex flex-row gap-3.5 items-center justify-start w-auto">
                        <div className="bg-gray-100 flex flex-col h-[54px] items-center justify-start p-1 rounded-[50%] w-[54px]">
                          <Img
                            className="h-[45px] md:h-auto rounded-[50%] w-[45px]"
                            src="images/img_image.png"
                            alt="image_Five"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Text
                            className="text-black-900 text-lg tracking-[0.36px] w-[97px]"
                            size="txtUbuntuBold18"
                          >
                            Jacob & Co
                          </Text>
                          <Text
                            className="text-gray-800 text-sm tracking-[0.28px] w-auto"
                            size="txtUbuntuRegular14"
                          >
                            Creator
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-5 items-start justify-start w-auto sm:w-full">
                        <Text
                          className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 uppercase w-auto"
                          size="txtUbuntuRegular30"
                        >
                          Luxury Stainless Watch
                        </Text>
                        <Text
                          className="leading-[180.00%] max-w-[571px] md:max-w-full text-base text-gray-800"
                          size="txtUbuntuRegular16"
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Lobortis facilisis tortor, ut molestie. In
                          rhoncus aliquam dui, vitae sollicitudin justo, cursus
                          maecenas. Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit. Lobortis facilisis tortor, ut
                          molestie. In rhoncus aliquam dui, vitae sollicitudin
                          justo, cursus maecenas. In rhoncus aliquam dui, vitae
                          sollicitudin justo, cursus maecenas.
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-10 items-end justify-center w-auto">
                      <div className="flex flex-col gap-[15px] items-start justify-start w-auto">
                        <Text
                          className="capitalize text-[15px] text-gray-800 w-auto"
                          size="txtUbuntuRegular15"
                        >
                          Current Owner
                        </Text>
                        <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                          <div className="flex flex-row gap-3 items-center justify-start w-auto">
                            <Img
                              className="h-[34px] md:h-auto rounded-[50%] w-[34px]"
                              src="images/img_image_34x34.png"
                              alt="image_Six"
                            />
                            <Text
                              className="text-gray-900_02 text-xl w-auto"
                              size="txtUbuntuMedium20"
                            >
                              Adam wick
                            </Text>
                          </div>
                          <Img
                            className="h-[25px] rounded-[5px] w-[25px]"
                            src="images/img_lineararrows.svg"
                            alt="lineararrows"
                          />
                        </div>
                      </div>
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[132px]"
                        leftIcon={
                          <div className="mr-2.5 bg-gray-900_02">
                            <Img
                              src="images/img_vector_gray_900_02.svg"
                              alt="Vector"
                            />
                          </div>
                        }
                        shape="square"
                        color="gray_400_4c"
                        size="md"
                        variant="fill"
                      >
                        <div className="capitalize font-medium leading-[normal] text-left text-sm">
                          View map
                        </div>
                      </Button>
                    </div>
                  </div>
                  <div className="bg-gray-100 border border-indigo-200 border-solid flex flex-col gap-[17px] items-center justify-end p-5 shadow-bs5 w-full">
                    <div className="flex flex-col items-center justify-start mt-[3px] w-full">
                      <div className="flex flex-col gap-[17px] items-center justify-start w-full">
                        <div className="flex flex-row sm:gap-10 items-center justify-between w-[99%] md:w-full">
                          <Text
                            className="text-black-900 text-lg"
                            size="txtUbuntuRegular18"
                          >
                            Proof of Authenticity
                          </Text>
                          <Img
                            className="h-[25px] w-[25px]"
                            src="images/img_arrowdown.svg"
                            alt="arrowdown_Two"
                          />
                        </div>
                        <Line className="bg-gray-600_6c h-px w-full" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-[18px] items-start justify-start w-auto sm:w-full">
                      <div className="flex flex-row sm:gap-10 items-center justify-between w-[99%] md:w-full">
                        <Text
                          className="text-black-900 text-lg"
                          size="txtUbuntuRegular18"
                        >
                          POA 1{" "}
                        </Text>
                        <Img
                          className="h-[25px] rounded-[5px] w-[25px]"
                          src="images/img_lineararrows.svg"
                          alt="lineararrows_One"
                        />
                      </div>
                      <Line className="bg-gray-600_6c h-px w-full" />
                      <div className="flex flex-row sm:gap-10 items-center justify-between w-[99%] md:w-full">
                        <Text
                          className="text-black-900 text-lg"
                          size="txtUbuntuRegular18"
                        >
                          POA 2
                        </Text>
                        <Img
                          className="h-[25px] rounded-[5px] w-[25px]"
                          src="images/img_lineararrows.svg"
                          alt="lineararrows_Two"
                        />
                      </div>
                      <Line className="bg-gray-600_6c h-px w-full" />
                      <div className="flex flex-row sm:gap-10 items-center justify-between w-[99%] md:w-full">
                        <Text
                          className="text-black-900 text-lg"
                          size="txtUbuntuRegular18"
                        >
                          POA 3
                        </Text>
                        <Img
                          className="h-[25px] rounded-[5px] w-[25px]"
                          src="images/img_lineararrows.svg"
                          alt="lineararrows_Three"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-10 items-center justify-start mt-auto mx-auto w-auto">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-5 items-start justify-start w-auto md:w-full">
                  <div className="bg-gray-100 flex flex-col items-start justify-start p-[23px] sm:px-5 w-full">
                    <Input
                      name="groupFiftyTwo"
                      placeholder="Attribute"
                      className="leading-[normal] p-0 placeholder:text-black-900 text-left text-lg w-full"
                      wrapClassName="flex md:ml-[0] ml-[7px] w-[99%]"
                      suffix={
                        <Img
                          className="h-[25px] ml-[35px] my-auto"
                          src="images/img_arrowdown.svg"
                          alt="arrow-down"
                        />
                      }
                    ></Input>
                    <div className="flex sm:flex-col flex-row sm:gap-10 gap-[86px] items-center justify-center md:ml-[0] ml-[7px] mt-[19px] w-auto sm:w-full">
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
                          Tue Jul 18 2023
                        </Text>
                      </div>
                      <Line className="bg-gray-600_7e h-[26px] sm:h-px sm:w-full w-px" />
                      <div className="flex flex-row gap-[30px] items-center justify-center w-auto">
                        <Text
                          className="capitalize text-[15px] text-gray-800 w-auto"
                          size="txtUbuntuRegular15"
                        >
                          Created by:
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
                    <List
                      className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 justify-start md:ml-[0] ml-[7px] mt-6 w-auto md:w-full"
                      orientation="horizontal"
                    >
                      <div className="bg-white-A700 hover:cursor-pointer flex flex-col items-center justify-start p-[29px] sm:px-5 hover:shadow-bs shadow-bs hover:w-full w-full">
                        <div className="flex flex-col items-center justify-start mb-2 w-auto">
                          <div className="flex flex-col gap-4 items-center justify-start w-auto">
                            <Text
                              className="capitalize text-[15px] text-center text-white-A700 w-auto"
                              size="txtUbuntuMedium15"
                            >
                              Color
                            </Text>
                            <Text
                              className="capitalize text-center text-lg text-white-A700 w-auto"
                              size="txtUbuntuBold18WhiteA700"
                            >
                              Amber
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white-A700 hover:cursor-pointer flex flex-col items-center justify-start p-[29px] sm:px-5 hover:shadow-bs hover:w-full w-full">
                        <div className="flex flex-col gap-4 items-center justify-start mb-[7px] w-auto">
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
                      <div className="bg-white-A700 hover:cursor-pointer flex flex-col items-center justify-start p-7 sm:px-5 hover:shadow-bs hover:w-full w-full">
                        <div className="flex flex-col gap-4 items-center justify-start mb-[7px] w-auto">
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
                      <div className="bg-white-A700 hover:cursor-pointer flex flex-col items-center justify-start p-[29px] sm:px-5 hover:shadow-bs hover:w-full w-full">
                        <div className="flex flex-col gap-4 items-center justify-start mb-[7px] w-auto">
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
                      <div className="bg-white-A700 hover:cursor-pointer flex flex-col items-center justify-start p-[29px] sm:px-5 hover:shadow-bs hover:w-full w-full">
                        <div className="flex flex-col gap-4 items-center justify-start mb-[7px] w-auto">
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
                      <div className="bg-white-A700 hover:cursor-pointer flex flex-col items-center justify-start p-[29px] sm:px-5 hover:shadow-bs hover:w-full w-full">
                        <div className="flex flex-col gap-4 items-center justify-start mb-[7px] w-auto">
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
                    </List>
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
                        className="cursor-pointer font-bold h-10 leading-[normal] text-center text-xs w-10"
                        shape="square"
                        color="black_900_02"
                        size="md"
                        variant="fill"
                      >
                        01
                      </Button>
                      <Button
                        className="cursor-pointer font-medium h-10 leading-[normal] text-center text-xs w-10"
                        shape="square"
                        color="black_900_02"
                        size="md"
                        variant="outline"
                      >
                        02
                      </Button>
                      <Button
                        className="cursor-pointer font-medium h-10 leading-[normal] text-center text-xs w-10"
                        shape="square"
                        color="black_900_02"
                        size="md"
                        variant="outline"
                      >
                        03
                      </Button>
                      <Button
                        className="cursor-pointer font-medium h-10 leading-[normal] text-center text-xs w-10"
                        shape="square"
                        color="black_900_02"
                        size="md"
                        variant="outline"
                      >
                        04
                      </Button>
                      <Button
                        className="cursor-pointer font-medium h-10 leading-[normal] text-center text-xs w-10"
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
                  <div className="bg-gray-100 flex flex-col items-center justify-start p-3 w-full">
                    <div className="flex flex-col items-start justify-start mb-[18px] w-[98%] md:w-full">
                      <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                        <div className="flex flex-col h-[42px] md:h-auto items-center justify-center w-auto">
                          <Button
                            className="capitalize cursor-pointer font-medium min-w-[99px] text-center text-sm"
                            shape="square"
                            color="gray_800_01"
                            size="md"
                            variant="outline"
                          >
                            History 1
                          </Button>
                        </div>
                        <Img
                          className="h-[25px] w-[25px]"
                          src="images/img_arrowdown.svg"
                          alt="arrowdown_One"
                        />
                      </div>
                      <Line className="bg-gray-600_6c h-px mt-[11px] w-full" />
                      <div className="flex sm:flex-col flex-row sm:gap-10 gap-[86px] items-center justify-center mt-[19px] w-auto sm:w-full">
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
                            Tue Jul 18 2023
                          </Text>
                        </div>
                        <Line className="bg-gray-600_7e h-[26px] sm:h-px sm:w-full w-px" />
                        <div className="flex flex-row gap-[30px] items-center justify-center w-auto">
                          <Text
                            className="capitalize text-[15px] text-gray-800 w-auto"
                            size="txtUbuntuRegular15"
                          >
                            Created by:
                          </Text>
                          <div className="flex flex-row gap-2 items-center justify-center w-auto">
                            <Img
                              className="h-8 md:h-auto rounded-[50%] w-8"
                              src="images/img_image_32x32.png"
                              alt="image_One"
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
                      <List
                        className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 justify-start mt-6 w-auto md:w-full"
                        orientation="horizontal"
                      >
                        <div className="bg-white-A700 hover:cursor-pointer flex flex-col items-center justify-start p-[30px] sm:px-5 hover:shadow-bs shadow-bs hover:w-full w-full">
                          <div className="flex flex-col items-center justify-start mb-[7px] w-auto">
                            <div className="flex flex-col gap-4 items-center justify-start w-auto">
                              <Text
                                className="capitalize text-[15px] text-center text-white-A700 w-auto"
                                size="txtUbuntuMedium15"
                              >
                                Country
                              </Text>
                              <Text
                                className="capitalize text-center text-lg text-white-A700 w-auto"
                                size="txtUbuntuBold18WhiteA700"
                              >
                                Osaka
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white-A700 hover:cursor-pointer flex flex-col items-center justify-start p-[29px] sm:px-5 hover:shadow-bs hover:w-full w-full">
                          <div className="flex flex-col gap-4 items-center justify-start mb-[7px] w-auto">
                            <Text
                              className="capitalize text-[15px] text-gray-800 w-auto"
                              size="txtUbuntuRegular15"
                            >
                              Alcohol
                            </Text>
                            <Text
                              className="text-gray-900_02 text-lg w-auto"
                              size="txtUbuntuMedium18"
                            >
                              30%
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white-A700 hover:cursor-pointer flex flex-col items-center justify-start p-[29px] sm:px-5 hover:shadow-bs hover:w-full w-full">
                          <div className="flex flex-col gap-4 items-center justify-start mb-2 w-auto">
                            <Text
                              className="capitalize text-[15px] text-gray-800 w-auto"
                              size="txtUbuntuRegular15"
                            >
                              Color
                            </Text>
                            <Text
                              className="text-gray-900_02 text-lg w-auto"
                              size="txtUbuntuMedium18"
                            >
                              Amber
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white-A700 hover:cursor-pointer flex flex-col items-center justify-start p-[29px] sm:px-5 hover:shadow-bs hover:w-full w-full">
                          <div className="flex flex-col gap-4 items-center justify-start mb-[7px] w-auto">
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
                        <div className="bg-white-A700 hover:cursor-pointer flex flex-col items-center justify-start p-[29px] sm:px-5 hover:shadow-bs hover:w-full w-full">
                          <div className="flex flex-col gap-4 items-center justify-start mb-[7px] w-auto">
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
                        <div className="bg-white-A700 hover:cursor-pointer flex flex-col items-center justify-start p-[29px] sm:px-5 hover:shadow-bs hover:w-full w-full">
                          <div className="flex flex-col gap-4 items-center justify-start mb-[7px] w-auto">
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
                      </List>
                      <div className="flex flex-row gap-[15px] items-start justify-start md:ml-[0] ml-[403px] mt-[30px] w-auto">
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
                            alt="group1000004439_One"
                          />
                        </Button>
                        <Button
                          className="cursor-pointer font-bold h-10 leading-[normal] text-center text-xs w-10"
                          shape="square"
                          color="black_900_02"
                          size="md"
                          variant="fill"
                        >
                          01
                        </Button>
                        <Button
                          className="cursor-pointer font-medium h-10 leading-[normal] text-center text-xs w-10"
                          shape="square"
                          color="black_900_02"
                          size="md"
                          variant="outline"
                        >
                          02
                        </Button>
                        <Button
                          className="cursor-pointer font-medium h-10 leading-[normal] text-center text-xs w-10"
                          shape="square"
                          color="black_900_02"
                          size="md"
                          variant="outline"
                        >
                          03
                        </Button>
                        <Button
                          className="cursor-pointer font-medium h-10 leading-[normal] text-center text-xs w-10"
                          shape="square"
                          color="black_900_02"
                          size="md"
                          variant="outline"
                        >
                          04
                        </Button>
                        <Button
                          className="cursor-pointer font-medium h-10 leading-[normal] text-center text-xs w-10"
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
                            alt="group1000004438_One"
                          />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Text
                className="sm:text-2xl md:text-[26px] text-[28px] text-gray-800_01 w-auto"
                size="txtUbuntuRegular28"
              >
                Metadata & Ownership Activities
              </Text>
              <div className="bg-gray-100 flex flex-col items-center justify-end p-[39px] sm:px-5 w-full">
                <div className="flex flex-col gap-10 items-start justify-start w-auto md:w-full">
                  <div className="flex flex-row gap-[30px] items-center justify-start w-auto">
                    <Text
                      className="text-gray-800_01 text-sm w-auto"
                      size="txtUbuntuMedium14"
                    >
                      Filter by:
                    </Text>
                    <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                      <SelectBox
                        className="capitalize font-medium text-left text-sm w-full"
                        placeholderClassName="text-gray-800_01"
                        indicator={
                          <Img
                            className="h-[3px] outline-gray-800_01 outline-[0.5px] outline w-[7px]"
                            src="images/img_arrowdown_gray_800_01.svg"
                            alt="arrow_down"
                          />
                        }
                        isMulti={false}
                        name="frame1000004659"
                        options={salesItemsTypeOptionsList}
                        isSearchable={false}
                        placeholder="Sales items type"
                        shape="square"
                        color="black_900"
                        size="xs"
                        variant="outline"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-auto md:w-full">
                    <div className="bg-white-A700 flex flex-row sm:gap-[60px] items-center justify-start p-4 w-full">
                      <Text
                        className="ml-4 text-gray-800_01 text-xs"
                        size="txtUbuntuMedium12Gray80001"
                      >
                        Event
                      </Text>
                      <Text
                        className="ml-[267px] text-gray-800_01 text-xs"
                        size="txtUbuntuMedium12Gray80001"
                      >
                        Price
                      </Text>
                      <Text
                        className="ml-[197px] text-gray-800_01 text-xs"
                        size="txtUbuntuMedium12Gray80001"
                      >
                        From
                      </Text>
                      <Text
                        className="h-3.5 ml-[220px] text-gray-800_01 text-xs"
                        size="txtUbuntuMedium12Gray80001"
                      >
                        To
                      </Text>
                      <Text
                        className="ml-[211px] text-gray-800_01 text-xs"
                        size="txtUbuntuMedium12Gray80001"
                      >
                        Date
                      </Text>
                    </div>
                    <List
                      className="flex flex-col items-start w-auto"
                      orientation="vertical"
                    >
                      {new Array(8).fill({}).map((props, index) => (
                        <React.Fragment key={`Onr${index}`}>
                          <Onr
                            className="flex flex-col items-center justify-start my-0 w-full"
                            {...props}
                          />
                        </React.Fragment>
                      ))}
                    </List>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer className="bg-black-900_01 flex items-center justify-center mt-[18px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default ProductdetailsSingleImagePage;
