import React from "react";
import { default as ModalProvider } from "react-modal";

import { Button, Img, Line, Text } from "components";
import Map from "components/Map";

const ProductdetailsModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[70%]"
      overlayClassName="bg-black-900_bf fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex flex-col items-center justify-start max-w-[1002px] mx-auto p-[30px] md:px-5 w-full">
          <Map className="flex flex-col gap-[27px] items-center justify-start w-full" />
        </div>
      </div>
    </ModalProvider>
  );
};

export default ProductdetailsModal;
