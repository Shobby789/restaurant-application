import React from "react";
import CommonHeader from "../../components/commonHeader/CommonHeader";
import ContactForm from "../../components/contactForm/ContactForm";

export default function Contact() {
  return (
    <div className="container-fluid p-0 min-vh-100">
      <CommonHeader menu={"Contact Us"} />
      <ContactForm />
    </div>
  );
}
