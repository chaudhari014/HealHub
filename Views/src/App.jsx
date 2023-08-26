import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Homepage, FindDoctors, Services, VideoConsult, SignIn } from "./pages";
import { Navbar, Footer } from "./components";
import SignUp from "./pages/SignUp";
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
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
