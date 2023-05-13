import React from "react";
import { Helmet } from "react-helmet-async";

const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>Techflow Agency by Victor Gallo</title>
    </Helmet>
  );
};

export default PageTitle;
