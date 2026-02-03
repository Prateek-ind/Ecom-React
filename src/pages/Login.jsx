import LoginForm from "@/features/auth/components/AuthForm";

const Login = () => {
  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div className="max-w-xl max-h-2xl bg-gray-200 rounded-xl">
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default Login;
