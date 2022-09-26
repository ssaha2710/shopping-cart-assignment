import React from "react";
import Category from "../components/category/category";
import Carousel from "../components/Carousel/carousel";
import DocumentTitle from "react-document-title";

const Home = () => {
  return (
    <DocumentTitle title="Saabka-Bazaar/Home">
      <>
        <Carousel />
        <Category />
      </>
    </DocumentTitle>
  );
};

export default Home;
