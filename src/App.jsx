import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import Options from "./components/Options";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Options/>}/>
        <Route path="/password" element={<Login/>}/>
      </Routes>
      </>
  );
};

export default App;
