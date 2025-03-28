
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoginForm from "@/components/auth/LoginForm";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 md:py-24 bg-gray-50">
        <div className="container">
          <LoginForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
