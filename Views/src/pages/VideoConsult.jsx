import { Routes, Route } from "react-router-dom";
import LobbyScreen from "../screens/Lobby";
// import RoomPage from "../screens/Room";

function VideoConsult() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LobbyScreen />} />
        {/* <Route path="/room/:roomId" element={<RoomPage />} /> */}
      </Routes>
    </div>
  );
}

export default VideoConsult;
