import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  Homepage,
  FindDoctors,
  Services,
  VideoConsult,
  SignIn,
  SignUp,
  Appointment,
  AllDoctors,
} from "./pages";
import { Navbar, Footer } from "./components";
import RoomPage from "./screens/Room";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/find_doctors" element={<FindDoctors />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/video_consult/*" element={<VideoConsult />}></Route>
        <Route path="/room/:id" element={<RoomPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/all_doctors" element={<AllDoctors />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
