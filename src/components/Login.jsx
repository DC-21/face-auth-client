import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-white">
      <div className="flex flex-col justify-center items-center w-[400px] h-[500px] border-2 border-blue-900 bg-white rounded">
        <h1 className="text-blue-900 text-xl font-semibold">Login Please</h1>
        <div className="w-full flex flex-col justify-center items-center">
          <div className="w-full flex flex-col justify-center items-center mt-2">
            <label className="mt-2 text-blue-800">Email</label>
            <input
              style={{ textAlign: "center", color: "blue" }}
              type="email"
              className="h-10 mt-2 border rounded text-blue-800 border-blue-900 justify-center"
              placeholder="email"
            />
          </div>
          <div className="w-full flex flex-col justify-center items-center mt-2">
            <label className="mt-2 text-blue-800">Password</label>
            <input
              style={{ textAlign: "center", color: "blue" }}
              type="password"
              className="h-10 mt-2 border rounded text-blue-800 border-blue-900 justify-center"
              placeholder="password"
            />
          </div>
          <div className="w-full flex flex-col justify-center items-center mt-2">
            <button className="py-2 px-4 rounded flex justify-center bg-blue-700 text-white mt-2">
              Log in
            </button>
            <p className="mt-2">or use</p>
            <button className="py-2 px-4 rounded flex justify-center bg-orange-500 text-white mt-2">
              FaceID
            </button>
          </div>
          <div className="flex gap-2 mt-2">
            <p>Don't have an account</p>
            <p>Sing in</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
