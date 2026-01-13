import React from "react";
import LoginForm from "../components/LoginForm";
import CheckoutNavbar from "../components/CartDrawer/Checkout/CheckoutNavbar";

const Login = () => {
  return (
    
    <>
    <CheckoutNavbar/>
    <div className="h-screen flex items-center justify-center">
       
      <div className="max-w-xl max-h-2xl bg-gray-200 rounded-xl">
        
        <LoginForm/>
      </div>
    </div>
    </>
  );
};

export default Login;
