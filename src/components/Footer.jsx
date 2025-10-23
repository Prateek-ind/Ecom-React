import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { Form } from "react-router";

const Footer = () => {
  return (
    <footer
      className="w-full flex flex-col items-center
     px-4 lg:px-6 xl:px-8 py-12 font-customFont bg-[#7cc65d] "
    >
      <div className="flex items-start justify-between gap-4 ">
        <div>
          <h3 className="mb-4 font-normal">NewsLetter</h3>
          <p className="text-sm font-thin my-2">
            Sign up to our newsletter to receive exclusive offers.
          </p>
          <div>
            <Form className="flex flex-col gap-4">
              <input
                type="text"
                className="w-72 border border-gray-300 outline-none px-4 py-2 text-sm font-thin bg-transparent text-black placeholder:text-black"
                placeholder="Email"
              />
              <button
                className="px-4 py-2 font-lg w-48
         font-customFont bg-gray-100 border border-[#80ad53] text-[#80ad53] hover:scale-105
         transition-all duration-500 hover:bg-gradient-to-l hover:from-green-500 hover:to-green-800
         hover:text-white"
              >
                Subscribe
              </button>
            </Form>
          </div>
        </div>
        <div>
          <h3 className="mb-4 font-normal">Links</h3>
          <ul className="text-xs font-thin">
            <li className="my-2">Search</li>
            <li className="my-2">Our Story</li>
            <li className="my-2">FAQ's</li>
            <li className="my-2">Contact Us</li>
            <li className="my-2">Track Your Order</li>
            <li className="my-2">Bulk Order Inquiry</li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-normal">Help and Information</h3>
          <ul className="text-xs font-thin">
            <li className="my-2">Terms of Service</li>
            <li className="my-2">Privacy Policy</li>
            <li className="my-2">Refund Policy</li>
            <li className="my-2">Shipping Policy</li>
          </ul>
        </div>
        <div className="w-1/3">
          <h3 className="font-normal mb-4">About</h3>
          <p className="text-sm font-thin">
            At Healthy Buddie, we believe in making nutritious eating a
            delightful experience. As a trusted provider of premium snacks and
            dry fruits, we are committed to delivering the finest quality
            products that support your healthy lifestyle. From the crunch of
            roasted makhana to the sweetness of caramelized raisins and the
            richness of almonds and cashews, our diverse range is crafted to
            cater to your taste and health needs.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center my-4 gap-4">
        <div className="flex gap-4">
          <a href="https://www.facebook.com">
            <AiFillFacebook size={24} className="cursor-pointer" />
          </a>
          <a href="https://www.instagram.com">
            <AiFillInstagram size={24} className="cursor-pointer" />
          </a>
        </div>
        <p>© 2025 - ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
};

export default Footer;
