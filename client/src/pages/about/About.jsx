import React from "react";
import CommonHeader from "../../components/commonHeader/CommonHeader";
import AboutSection from "../../components/aboutSection/AboutSection";

export default function About() {
  return (
    <>
      <CommonHeader menu={"About Us"} />
      <div className="container-fluid py-5">
        <AboutSection />
      </div>
    </>
  );
}
