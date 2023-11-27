import React from "react";

import { Button, Img, Line, List, SelectBox, Text } from "components";
import Attributes from "components/Attributes";
import Footer from "components/Footer";
import Metadata from "components/Metadata";

const proofOfAuthenticityOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const salesItemsTypeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ProductdetailsSingleImageTwoPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-end mx-auto pt-[30px] w-full">
        <div className="h-20 md:h-[255px] max-w-[1380px] mx-auto md:px-5 relative w-full">
          <div className="flex flex-col gap-[3px] md:h-auto h-full items-end justify-start ml-auto mr-[46px] mt-2.5 w-[100px]">
            <Text
              className="text-base text-gray-900 text-right w-auto"
              size="txtPoppinsMedium16"
            >
              Cia Natasya
            </Text>
            <Text
              className="text-gray-600 text-right text-sm w-auto"
              size="txtPoppinsRegular14"
            >
              Creator
            </Text>
          </div>
          <div className="absolute bg-white-A700 font-publicsans h-20 md:h-[255px] inset-[0] justify-center m-auto rounded shadow-bs1 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 h-full items-start justify-start m-auto w-[95%]">
              <div className="flex flex-col gap-[-1px] h-11 md:h-auto items-center justify-center w-[73px]">
                <Img
                  className="h-[19px] md:h-auto object-cover w-[34px] sm:w-full"
                  src="images/img_image3.png"
                  alt="imageThree"
                />
                <Img
                  className="h-[26px] md:h-auto object-cover w-[73px] sm:w-full"
                  src="images/img_image2.png"
                  alt="imageTwo"
                />
              </div>
              <div className="bg-gray-100_01 flex flex-col h-12 md:h-auto items-start justify-center max-w-[815px] md:ml-[0] ml-[153px] px-4 rounded w-full">
                <div className="flex flex-row gap-2 h-[17px] md:h-auto items-center justify-start w-[71px]">
                  <Img
                    className="h-4 md:h-auto object-cover w-4"
                    src="images/img_7.png"
                    alt="Seven"
                  />
                  <Text
                    className="text-gray-600 text-sm w-auto"
                    size="txtPublicSansRegular14"
                  >
                    Search
                  </Text>
                </div>
              </div>
              <Img
                className="h-6 md:h-auto md:ml-[0] ml-[58px] md:mt-0 mt-[15px] object-cover w-6"
                src="images/img_3.png"
                alt="Three"
              />
              <Img
                className="h-12 md:h-auto ml-4 md:ml-[0] rounded-[50%] w-12"
                src="images/img_ellipse1192.png"
                alt="ellipse1192"
              />
              <div className="flex flex-col gap-[7px] h-[42px] md:h-auto items-end justify-start md:ml-[0] ml-[26px] md:mt-0 mt-[3px] w-[90px]">
                <Text
                  className="text-base text-gray-900 text-right w-auto"
                  size="txtPublicSansMedium16"
                >
                  Cia Natasya
                </Text>
                <Text
                  className="text-gray-600 text-right text-sm w-auto"
                  size="txtPublicSansRegular14"
                >
                  Creator
                </Text>
              </div>
            </div>
            <div className="absolute bg-gray-900_01 sm:bg-white-A700 flex flex-row h-full inset-[0] items-center justify-center m-auto pb-4 px-4 rounded shadow-bs1 w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start ml-2 w-[99%]">
                <div className="flex flex-col gap-[-1px] h-11 md:h-auto items-center justify-center md:mt-0 mt-[17px] w-[73px]">
                  <Img
                    className="h-[19px] md:h-auto object-cover w-[34px] sm:w-full"
                    src="images/img_image3.png"
                    alt="imageThree_One"
                  />
                  <Img
                    className="h-[26px] md:h-auto object-cover w-[73px] sm:w-full"
                    src="images/img_image2.png"
                    alt="imageTwo_One"
                  />
                </div>
                <div className="sm:bg-white-A700 sm:flex sm:flex-row h-16 md:h-[191px] sm:h-[59px] sm:items-center sm:justify-center md:ml-[0] ml-[153px] relative w-[62%] md:w-full">
                  <div className="absolute bg-black-900_01 sm:bg-white-A700 bottom-[0] flex flex-col h-12 md:h-auto inset-x-[0] items-start justify-center max-w-[815px] mx-auto px-4 rounded w-full">
                    <div className="flex flex-row gap-2 h-[17px] md:h-auto items-center justify-start w-[71px]">
                      <Img
                        className="h-4 md:h-auto object-cover w-4"
                        src="images/img_7.png"
                        alt="Seven_One"
                      />
                      <Text
                        className="text-blue_gray-100 text-sm w-auto"
                        size="txtPublicSansRegular14Bluegray100"
                      >
                        Search
                      </Text>
                    </div>
                  </div>
                  <div className="absolute flex md:flex-col flex-row gap-[39px] items-end justify-between right-[0] top-[0] w-auto">
                    <Img
                      className="block h-14 md:h-auto items-start object-cover w-14"
                      src="images/img_logo1.png"
                      alt="logoOne"
                    />
                    <div className="flex flex-col items-start justify-start">
                      <div className="flex md:flex-col flex-row font-ubuntu gap-[22px] items-center justify-start w-auto md:w-full">
                        <div className="flex flex-row gap-[9px] items-center justify-start w-auto sm:w-full">
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
                        className="sm:m-[] md:ml-[0] ml-[536px] mt-[7px] text-black-900 text-xs"
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
                <Img
                  className="h-6 md:h-auto md:ml-[0] ml-[55px] md:mt-0 mt-[31px] object-cover w-6"
                  src="images/img_3.png"
                  alt="Three_One"
                />
                <Img
                  className="h-12 md:h-auto ml-4 md:ml-[0] md:mt-0 mt-4 rounded-[50%] w-12"
                  src="images/img_ellipse1192.png"
                  alt="ellipse1192_One"
                />
                <div className="flex flex-col gap-[7px] h-[42px] md:h-auto items-end justify-start md:ml-[0] ml-[26px] md:mt-0 mt-[19px] w-[90px]">
                  <Text
                    className="text-base text-right text-white-A700 w-auto"
                    size="txtPublicSansMedium16WhiteA700"
                  >
                    Cia Natasya
                  </Text>
                  <Text
                    className="text-blue_gray-100 text-right text-sm w-auto"
                    size="txtPublicSansRegular14Bluegray100"
                  >
                    Creator
                  </Text>
                </div>
                <Img
                  className="h-2.5 md:h-auto ml-2.5 md:ml-[0] md:mt-0 mt-[38px] object-cover"
                  src="images/img_arrowup.png"
                  alt="arrowup"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-ubuntu gap-[30px] h-[2184px] md:h-auto items-center justify-start max-w-[1236px] mt-[39px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row gap-[50px] h-[528px] md:h-auto items-start justify-start max-w-[1236px] w-full">
            <Img
              className="md:flex-1 h-[525px] sm:h-auto object-cover w-[615px] md:w-full"
              src="images/img_frame7.png"
              alt="frameSeven"
            />
            <div className="flex sm:flex-1 flex-col gap-10 items-start justify-start w-auto sm:w-full">
              <div className="flex flex-col gap-10 items-start justify-start w-auto sm:w-full">
                <div className="flex flex-row gap-3.5 items-center justify-start w-auto">
                  <div className="bg-gray-100 flex flex-col h-[54px] md:h-auto items-start justify-start p-[4.15px] rounded-[50%] w-[54px]">
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lobortis facilisis tortor, ut molestie. In rhoncus aliquam
                    dui, vitae sollicitudin justo, cursus maecenas. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Lobortis
                    facilisis tortor, ut molestie. In rhoncus aliquam dui, vitae
                    sollicitudin justo, cursus maecenas. In rhoncus aliquam dui,
                    vitae sollicitudin justo, cursus maecenas.
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[30px] items-start justify-start w-auto sm:w-full">
                <div className="flex flex-col items-start justify-start w-auto">
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
                </div>
                <SelectBox
                  className="h-[70px] leading-[normal] text-left text-lg w-full"
                  placeholderClassName="text-black-900"
                  indicator={
                    <Img
                      className="h-[25px] w-[25px]"
                      src="images/img_arrowdown_black_900_02.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="frame48096724"
                  options={proofOfAuthenticityOptionsList}
                  isSearchable={false}
                  placeholder="Proof of Authenticity"
                  shape="square"
                  color="gray_100"
                  size="sm"
                  variant="fill"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10 items-center justify-start w-auto md:w-full">
            <List
              className="flex flex-col gap-5 items-start w-auto"
              orientation="vertical"
            >
              <Attributes className="bg-gray-100 flex flex-col items-start justify-start my-0 p-[23px] sm:px-5 w-full" />
              <div className="bg-gray-100 flex flex-col items-center justify-start my-0 p-3 w-full">
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
                      alt="arrowdown"
                    />
                  </div>
                  <Line className="bg-gray-600_6c h-px mt-[11px] w-full" />
                  <div className="flex sm:flex-col flex-row sm:gap-10 gap-[86px] items-center justify-center mt-[19px] w-auto md:w-full">
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
                  <div className="gap-6 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 items-start justify-start mt-6 w-auto md:w-full">
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
                    <div className="bg-white-A700 flex flex-col h-[121px] md:h-auto items-center justify-start py-[30px] w-full">
                      <div className="flex flex-col gap-4 items-center justify-start w-auto">
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
              </div>
            </List>
            <Text
              className="sm:text-2xl md:text-[26px] text-[28px] text-gray-800_01 w-auto"
              size="txtUbuntuRegular28"
            >
              Metadata & Ownership Activities
            </Text>
            <div className="bg-gray-100 flex flex-col h-[770px] md:h-auto items-center justify-center max-w-[1236px] w-full">
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
                <div className="flex flex-col sm:items-center items-start justify-start sm:justify-start w-auto md:w-full">
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
                      <React.Fragment key={`Metadata${index}`}>
                        <Metadata
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
        <Footer className="bg-black-900_01 flex font-ubuntu items-center justify-center mt-[81px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default ProductdetailsSingleImageTwoPage;
