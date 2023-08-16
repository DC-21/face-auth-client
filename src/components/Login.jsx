import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3003/login", {
        email: email,
        password: password,
      });

      // You can handle the response here, such as redirecting to another page upon successful login.
      console.log("Login successful:", response.data);
    } catch (error) {
      // Handle login error here
      console.error("Login error:", error);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-white">
      <div className="flex flex-col justify-center items-center w-[350px] h-[400px] border-2 border-blue-900 bg-white rounded">
        <h1 className="text-blue-900 text-xl font-semibold">Login Please</h1>
        <div className="w-full flex flex-col justify-center items-center">
          <div className="w-full flex flex-col justify-center items-center mt-2">
            <label className="mt-2 text-blue-800">Email</label>
            <input
              style={{ textAlign: "center", color: "blue" }}
              type="email"
              className="h-10 mt-2 border rounded text-blue-800 border-blue-900 justify-center"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="w-full flex flex-col justify-center items-center mt-2">
            <label className="mt-2 text-blue-800">Password</label>
            <input
              style={{ textAlign: "center", color: "blue" }}
              type="password"
              className="h-10 mt-2 border rounded text-blue-800 border-blue-900 justify-center"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="w-full flex flex-col justify-center items-center mt-2">
            <button
              onClick={handleLogin} // Call the handleLogin function when the button is clicked
              className="py-2 px-4 rounded flex justify-center bg-blue-700 text-white mt-2"
            >
              Log in
            </button>
          </div>
          <div className="flex gap-2 mt-2">
            <p>Dont have an account</p>
            <p className="bg-blue-700 rounded px-1 text-white cursor-pointer">
              Sign Up
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
