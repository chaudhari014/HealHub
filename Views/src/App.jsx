import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Homepage, FindDoctors, Services, VideoConsult, SignIn } from "./pages";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/find_doctors" element={<FindDoctors />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/video_consult" element={<VideoConsult />}></Route>
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      <h1>Footer</h1>
    </div>
  );
}

export default App;
