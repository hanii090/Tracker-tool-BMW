import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ImagePreview = React.lazy(() => import("pages/ImagePreview"));
const ProductdetailsSingleImage = React.lazy(
  () => import("pages/ProductdetailsSingleImage"),
);
const ProductdetailsMultipleImage = React.lazy(
  () => import("pages/ProductdetailsMultipleImage"),
);
const ProductdetailsSingleImageOne = React.lazy(
  () => import("pages/ProductdetailsSingleImageOne"),
);
const ProductdetailsSingleImageTwo = React.lazy(
  () => import("pages/ProductdetailsSingleImageTwo"),
);
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/productdetailssingleimagetwo"
            element={<ProductdetailsSingleImageTwo />}
          />
          <Route
            path="/productdetailssingleimageone"
            element={<ProductdetailsSingleImageOne />}
          />
          <Route
            path="/productdetailsmultipleimage"
            element={<ProductdetailsMultipleImage />}
          />
          <Route
            path="/productdetailssingleimage"
            element={<ProductdetailsSingleImage />}
          />
          <Route path="/imagepreview" element={<ImagePreview />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
