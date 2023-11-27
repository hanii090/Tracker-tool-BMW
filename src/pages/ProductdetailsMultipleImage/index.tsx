import React from "react";

import {
  Button,
  Img,
  Line,
  List,
  PagerIndicator,
  SelectBox,
  Text,
} from "components";
import Attributes from "components/Attributes";
import Footer from "components/Footer";
import Onr from "components/Onr";

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

const ProductdetailsMultipleImagePage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-ubuntu items-center justify-end mx-auto pt-[30px] w-full">
        <div className="flex flex-col items-center justify-start md:px-5 w-[53%] md:w-full">
          <div className="flex md:flex-col flex-row gap-[39px] items-end justify-start sm:overflow-scroll w-auto md:w-full">
            <Img
              className="h-14 md:h-auto object-cover sm:overflow-visible w-14"
              src="images/img_logo1.png"
              alt="logoOne"
            />
            <div className="flex flex-col items-start justify-start w-[88%] md:w-full">
              <div className="flex md:flex-col flex-row font-ubuntu gap-[22px] items-center justify-start w-auto md:w-full">
                <div className="flex flex-row gap-[9px] items-center sm:justify-center justify-start sm:relative w-auto sm:w-full">
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
        <div className="flex flex-col gap-[30px] items-center justify-start max-w-[1236px] mt-[59px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-[50px] items-center justify-between w-full">
              <div className="flex md:flex-1 flex-col items-center justify-start w-1/2 md:w-full">
                <div className="h-[525px] relative w-full">
                  <Img
                    className="h-[525px] m-auto object-cover w-full"
                    src="images/img_frame7.png"
                    alt="rectangleOne"
                  />
                  <div className="absolute flex flex-col h-max inset-[0] items-end justify-center m-auto w-[96%]">
                    <div className="flex flex-row gap-[15px] items-center justify-end w-[24%] md:w-full">
                      <Img
                        className="h-[42px]"
                        src="images/img_group1000004749.svg"
                        alt="group1000004749"
                      />
                      <Button
                        className="flex h-[42px] items-center justify-center shadow-bs2 w-[42px]"
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
                    </div>
                    <div className="flex flex-row sm:gap-10 items-center justify-between mt-[183px] w-full">
                      <Img
                        className="h-[35px] w-[35px]"
                        src="images/img_arrowdown_white_a700.svg"
                        alt="arrowdown"
                      />
                      <Img
                        className="h-[35px] w-[35px]"
                        src="images/img_arrowdown_white_a700_35x35.svg"
                        alt="arrowdown_One"
                      />
                    </div>
                    <div className="flex flex-row items-center justify-between mt-[198px] w-[66%] md:w-full">
                      <PagerIndicator
                        className="flex gap-2 h-[5px] items-center justify-center w-[184px]"
                        count={4}
                        activeCss="inline-block cursor-pointer h-[5px] bg-white-A700 w-10"
                        activeIndex={1}
                        inactiveCss="inline-block cursor-pointer h-[5px] bg-gray-600_7f w-10"
                        selectedWrapperCss="inline-block"
                        unselectedWrapperCss="inline-block"
                      />
                      <Img
                        className="h-[30px] w-[30px]"
                        src="images/img_boldessentional.svg"
                        alt="boldessentional"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex sm:flex-1 flex-col gap-10 items-start justify-start w-auto sm:w-full">
                <div className="flex flex-col gap-10 items-start justify-start w-auto sm:w-full">
                  <div className="flex flex-row gap-3.5 items-center justify-start w-auto">
                    <div className="bg-gray-100 flex flex-col h-[54px] items-center justify-start p-1 rounded-[50%] w-[54px]">
                      <Img
                        className="h-[45px] md:h-auto rounded-[50%] w-[45px]"
                        src="images/img_image.png"
                        alt="image_Three"
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
                      dui, vitae sollicitudin justo, cursus maecenas. Lorem
                      ipsum dolor sit amet, consectetur adipiscing elit.
                      Lobortis facilisis tortor, ut molestie. In rhoncus aliquam
                      dui, vitae sollicitudin justo, cursus maecenas. In rhoncus
                      aliquam dui, vitae sollicitudin justo, cursus maecenas.
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[30px] items-start justify-start w-auto sm:w-full">
                  <div className="flex flex-col items-start justify-start w-auto">
                    <div className="flex flex-col gap-5 items-start justify-start w-auto">
                      <Text
                        className="capitalize text-[15px] text-gray-800 w-auto"
                        size="txtUbuntuRegular15"
                      >
                        Current Owner
                      </Text>
                      <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                        <Text
                          className="text-gray-900_02 text-xl w-auto"
                          size="txtUbuntuMedium20"
                        >
                          0xabde....assd
                        </Text>
                        <Img
                          className="h-[25px] rounded-[5px] w-[25px]"
                          src="images/img_lineararrows.svg"
                          alt="lineararrows"
                        />
                      </div>
                    </div>
                  </div>
                  <SelectBox
                    className="leading-[normal] text-left text-lg w-full"
                    placeholderClassName="text-black-900"
                    indicator={
                      <Img
                        className="h-[25px] mr-[0] w-[25px]"
                        src="images/img_arrowdown_black_900_02.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="group48096724"
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
          </div>
          <div className="flex flex-col gap-10 items-center justify-start w-auto md:w-full">
            <div className="flex flex-col items-center justify-start w-full">
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
                      <div className="bg-light_blue-800 flex flex-col items-center justify-start p-[30px] sm:px-5 shadow-bs w-full">
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
                      <div className="bg-white-A700 flex flex-col items-center justify-start p-[29px] sm:px-5 w-full">
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
                      <div className="bg-white-A700 flex flex-col items-center justify-start p-[29px] sm:px-5 w-full">
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
                      <div className="bg-white-A700 flex flex-col items-center justify-start p-[29px] sm:px-5 w-full">
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
                      <div className="bg-white-A700 flex flex-col items-center justify-start p-[29px] sm:px-5 w-full">
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
                      <div className="bg-white-A700 flex flex-col items-center justify-start p-[29px] sm:px-5 w-full">
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
                <div className="flex flex-col sm:items-center items-start justify-start sm:justify-start sm:relative w-auto md:w-full">
                  <div className="bg-white-A700 flex flex-row sm:gap-2 items-center justify-start p-4 w-full">
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
        <Footer className="bg-black-900_01 flex items-center justify-center mt-[84px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default ProductdetailsMultipleImagePage;
