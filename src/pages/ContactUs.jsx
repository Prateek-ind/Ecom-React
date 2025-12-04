import React from "react";
import ContactUsForm from "../components/ContactUsForm";

const ContactUs = () => {
  return (
    <section className=" w-full mx-auto mb-12 px-4 pt-32 tracking-widest bg-[#feffec]">
      <div className="flex flex-col items-center mb-12 mt-12">
        <h2 className="text-4xl text-gray-800 uppercase tracking-widest mb-8">
          Get in touch
        </h2>
        <p className="text-sm max-w-4xl text-gray-700 px-4 py-2 text-center">
          We’re here for you — whether you have a question, suggestion, or just
          need a wellness partner. Here's how you can reach us:
        </p>
      </div>
      <hr />
      <div className="grid grid-cols-3 py-12 px-8">
        <div className="flex flex-col items-center">
          <h3 className="text-gray-800 font-light mb-12 uppercase">Phone</h3>
          <p className="font-semibold text-gray-900 text-sm">12345678</p>
        </div>
        <div className="flex flex-col items-center mx-auto ">
          <h3 className="text-gray-800 font-light mb-12 uppercase">Email</h3>
          <p className="font-semibold text-gray-900 text-xs">support@abc.com</p>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-gray-800 font-light mb-12 uppercase">
            Office Hours
          </h3>
          <p className="font-semibold text-gray-900 text-xs">
            Monday to Saturday, 9 AM – 6 PM
          </p>
        </div>
      </div>
      <hr />
      <div className="my-8 flex flex-col items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-900 tracking-wider mb-8">
          Business Inquiries & Collaborations
        </h3>
        <p className="text-xs font-light tracking-wider text-gray-800">
          Please email our business development team at{" "}
          <span className="underline">support@abc.com</span> and expect a
          response within one business day.
        </p>
      </div>
      <div className="my-12  flex flex-col items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-900 tracking-wider mb-8">
          Why Contact Healthy Buddie?
        </h3>
        <p className="text-xs max-w-5xl text-center font-light leading-6 tracking-wider text-gray-800">
          At <span className="font-bold">Healthy Buddie™</span>, you’re not just
          reaching out—you’re sharing ideas and storytelling. We carefully
          listen to every message, whether it's feedback on our roasted
          makhanas, suggestions on our wellness teas, or inquiries about clean
          snacking. Expect a helpful response that reflects our promise of{" "}
          <span className="font-bold">
            flavorful wellness made accessible—and personal.
          </span>
        </p>
      </div>
      <hr />
      <div className=" flex flex-col items-center justify-between my-12">
        <h3 className="text-4xl text-gray-800 uppercase tracking-widest italic mb-8">
          We’d Love to Hear From You
        </h3>
        <ContactUsForm />
      </div>
    </section>
  );
};

export default ContactUs;
