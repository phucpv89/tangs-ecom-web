import React from "react";
import { Helmet } from "react-helmet-async";
import LandingPage from "./LandingPage";

function LandingPageContainer() {
  return (
    <>
      <LandingPage />
      <Helmet>
        <title>Landing Page</title>
      </Helmet>
    </>
  );
}
export default LandingPageContainer;
