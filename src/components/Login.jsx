import { useState, useRef } from "react";
import axios from "axios";
import * as faceapi from "face-api.js";

const Login = () => {
  const [loginMethod, setLoginMethod] = useState("emailPassword");
  const [loginStatus, setLoginStatus] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [faceId, setFaceId] = useState("");
  const videoRef = useRef();

  const handleLogin = async () => {
    try {
      if (loginMethod === "faceId") {
        await setupWebcam();
        const capturedFaceId = await captureFace();
        setFaceId(capturedFaceId);
      }

      const response = await axios.post("http://localhost:3003/login", {
        email: loginMethod === "emailPassword" ? email : null,
        password: loginMethod === "emailPassword" ? password : null,
        faceId: loginMethod === "faceId" ? faceId : null,
      });

      if (response.data.success) {
        setLoginStatus("Login successful");
        // Perform actions upon successful login
      } else {
        setLoginStatus("Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const captureFace = async () => {
    try {
      const displaySize = { width: videoRef.current.width, height: videoRef.current.height };
      const canvas = faceapi.createCanvasFromMedia(videoRef.current);
      document.body.appendChild(canvas);
      faceapi.matchDimensions(canvas, displaySize);
  
      const detections = await faceapi.detectSingleFace(videoRef.current, new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks()
        .withFaceDescriptor();
  
      if (!detections) {
        throw new Error('No face detected');
      }
  
      const faceId = detections.descriptor;
      return faceId;
    } catch (error) {
      console.error('Error capturing face:', error);
      throw error;
    }
  };
  

  const setupWebcam = async () => {
    try {
      await faceapi.nets.tinyFaceDetector.loadFromUri("/models");
      await faceapi.nets.faceLandmark68Net.loadFromUri("/models");
      await faceapi.nets.faceRecognitionNet.loadFromUri("/models");

      const stream = await navigator.mediaDevices.getUserMedia({ video: true });

      videoRef.current.srcObject = stream;

      videoRef.current.addEventListener("play", () => {
        const canvas = faceapi.createCanvasFromMedia(videoRef.current);
        document.body.appendChild(canvas);

        const displaySize = {
          width: videoRef.current.width,
          height: videoRef.current.height,
        };
        faceapi.matchDimensions(canvas, displaySize);

        setInterval(async () => {
          const detections = await faceapi
            .detectAllFaces(
              videoRef.current,
              new faceapi.TinyFaceDetectorOptions()
            )
            .withFaceLandmarks()
            .withFaceDescriptors();

          const resizedDetections = faceapi.resizeResults(
            detections,
            displaySize
          );
          canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
          faceapi.draw.drawDetections(canvas, resizedDetections);
        }, 100);
      });
    } catch (error) {
      console.error("Error setting up webcam:", error);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-white">
      <div className="flex flex-col justify-center items-center w-[400px] h-[480px] border-2 border-blue-900 bg-white rounded">
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
              className="py-2 px-4 rounded flex justify-center bg-blue-700 text-white mt-2"
              onClick={handleLogin}
            >
              Log in
            </button>
            <p className="mt-2">or use</p>
            <button
              className="py-2 px-4 rounded flex justify-center bg-orange-500 text-white mt-2"
              onClick={() => setLoginMethod("faceId")}
            >
              FaceID
            </button>
            <p>{loginStatus}</p>
          </div>
          <div className="flex gap-2 mt-2">
            <p>Dont have an account</p>
            <p className="bg-blue-700 rounded px-1 text-white cursor-pointer">
              Sign Up
            </p>
          </div>
        </div>
      </div>
      <video
        ref={videoRef}
        style={{ display: "none" }}
        autoPlay
        muted
        playsInline
      />
    </div>
  );
};

export default Login;
