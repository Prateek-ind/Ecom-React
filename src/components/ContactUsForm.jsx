import React from "react";
import { useSelector } from "react-redux";
import { Form, useNavigate } from "react-router";
import { useContactUs } from "../hooks/useContactUs";

const ContactUsForm = () => {
  const { contactUsFormSubmit } = useContactUs();
  const userId = useSelector((state) => state.user.userId);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const messageDetails = Object.fromEntries(formData.entries());
    const result = await contactUsFormSubmit({ userId, messageDetails });
    if (result) {
      console.log(result);
      navigate("/");
    }
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className="w-full max-w-3xl grid grid-cols-2 gap-8"
    >
      <input
        type="text"
        name="name"
        placeholder="Name"
        required
        className="w-full col-span-1 px-4 py-2 outline-none text-gray-800 border border-gray-300"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        className="col-span-1 px-4 py-4 outline-none text-gray-800 border border-gray-300"
      />
      <input
        type="number"
        name="phoneNumber"
        placeholder="Phone Number"
        required
        className="col-span-2 px-4 py-4 outline-none text-gray-800 border border-gray-300"
      />
      <textarea
        name="message"
        placeholder="Message"
        required
        className="h-32 col-span-2 px-4 py-4 outline-none text-gray-800 border border-gray-300"
      />
      <button className="col-span-2 w-full px-8 py-2 bg-[#63ce36] text-lg tracking-widest text-white mt-4 mb-4 uppercase">
        Send message
      </button>
    </Form>
  );
};

export default ContactUsForm;
