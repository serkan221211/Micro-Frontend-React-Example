import Login from "../components/Login";
import Navbar from "Host/Navbar";

const LoginPage = () => {
  return (
    <div className="h-screen bg-gray-100">
      <Navbar />
      <Login />
    </div>
  );
};

export default LoginPage;
