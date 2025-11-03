import React from "react";
import { Form } from "react-router-dom";

const CheckoutForm = () => {
  return (
    <Form className="space-y-6 ">
      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">CONTACT</h2>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="border px-2 py-4 w-full rounded"
        />
        <div className="flex gap-2">
          <input type="checkbox" name="news-and-offers" id="news-and-offers" />
          <label htmlFor="news-and-offers">Email me with news and offers</label>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Delivery</h2>

        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="first-name"
            className="border px-2 py-4 w-full rounded"
            placeholder="First Name"
          />
          <input
            type="text"
            name="last-name"
            className="border px-2 py-4 w-full rounded"
            placeholder="Last Name"
          />

          <input
            type="text"
            name="address"
            className="col-span-2 border px-2 py-4 w-full rounded"
            placeholder="Address"
          />
          <input
            type="text"
            name="address-optional"
            className=" col-span-2 border px-2 py-4 w-full rounded"
            placeholder="Apartment/Flat No. etc (Optional) "
          />
          <input
            type="text"
            name="City"
            className="border px-2 py-4 w-full rounded"
            placeholder="City"
          />
          <input
            type="text"
            name="State"
            className="border px-2 py-4 w-full rounded"
            placeholder="State"
          />
          <input
            type="text"
            name="pin-code"
            className="border px-2 py-4 w-full rounded"
            placeholder="Pin-code"
          />
          <select
            name="country"
            className="border px-2 py-4 rounded w-full "
            defaultValue="India"
          >
            <option value="Select Country/Region">
              - Select Country/Region
            </option>
            <option>India</option>
          </select>
          <input
            type="number"
            name="phone-number"
            id="phone-number"
            placeholder="Phone number"
            className="border px-2 py-4 w-full rounded"
          />
        </div>
      </section>
    </Form>
  );
};

export default CheckoutForm;
