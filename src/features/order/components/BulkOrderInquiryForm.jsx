import React from "react";
import { Form, useNavigate } from "react-router";
import { useBulkOrderInquiry } from "../../../hooks/useBulkOrderInquiry";
import { useSelector } from "react-redux";

const BulkOrderInquiryForm = () => {
  const { submitInquiry } = useBulkOrderInquiry();
  const userEmail = useSelector((state) => state.user.email);
  const userId = useSelector((state) => state.user.userId);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const orderDetails = Object.fromEntries(formData.entries());
    const result = await submitInquiry({ userId, orderDetails });
    if (result) {
      console.log(result);
      navigate("/");
    }
  };

  return (
    <div className="mt-12">
      <Form
        className="grid grid-cols-2 gap-4 font-thin text-sm"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          className="col-span-1 w-full px-4 py-4 outline-none border border-gray-300 rounded"
        />
        <input
          type="email"
          name="email"
          value={userEmail ? userEmail : null}
          required
          placeholder="Email"
          className="col-span-1 w-full px-4 py-4 outline-none border border-gray-300 rounded"
        />
        <input
          type="number"
          name="phoneNumber"
          required
          placeholder="Phone Number"
          className="col-span-2 w-full px-4 py-4 outline-none border border-gray-300 rounded"
        />
        <select
          name="requirementType"
          required
          defaultValue=""
          className="col-span-2 text-gray-700 w-full px-4 py-4 outline-none border border-gray-300 rounded"
        >
          <option value=""  disabled>
            Type of Requirement
          </option>
          <option value="corporate-gifting">Corporate Gifting</option>
          <option value="wedding-hampers">Wedding Hampers</option>
          <option value="retail/wholesale">Retail/Wholesale</option>
          <option value="institution-supply">Institution Supply</option>
          <option value="other">Other</option>
        </select>
        <input
          type="number"
          name="quantityRequired"
          placeholder="Quantity Required"
          required
          className="col-span-2 w-full px-4 py-4 outline-none border border-gray-300 rounded"
        />
        <select
          name="packagingType"
          required
          defaultValue=""
          className="col-span-2 text-gray-700 w-full px-4 py-4 outline-none border border-gray-300 rounded"
        >
          <option value="" disabled>
            Preferred Packaging
          </option>
          <option value="standard-packs">Standard Packs</option>
          <option value="custom-branding">Custom Branding</option>
          <option value="gift-hampers">Gift Hampers</option>
          <option value="not-sure">Not sure yet</option>
        </select>
        <textarea
          name="customMessage"
          placeholder="Enter your message."
          required
          className="col-span-2 h-32 border border-gray-300 rounded p-4"
        ></textarea>
        <button className="col-span-2 w-full px-8 py-2 bg-[#63ce36] text-lg tracking-widest text-white mt-4 mb-4 uppercase">
          Send message
        </button>
      </Form>
    </div>
  );
};

export default BulkOrderInquiryForm;
