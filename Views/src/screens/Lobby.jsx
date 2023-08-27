import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSocket } from "../context/UseSocket";
import "./Lobby.css";
const LobbyScreen = () => {
  const [email, setEmail] = useState("");
  const [room, setRoom] = useState("");

  const socket = useSocket();
  const navigate = useNavigate();

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      // Check if the email in local storage matches the entered email for all users
      const storedEmail = localStorage.getItem("email");
      if (storedEmail !== email) {
        alert("Please login with the correct email.");
        return;
      }

      const role = localStorage.getItem("role");

      if (role === "customer") {
        // Check payment status for customers
        const paymentStatus = localStorage.getItem("status");
        if (paymentStatus !== "true") {
          alert("Payment is not done. Please complete the payment.");
          return;
        }
      }

      socket.emit("room:join", { email, room });
    },
    [email, room, socket]
  );

  const handleJoinRoom = useCallback(
    (data) => {
      const { email, room } = data;
      console.log(`Handle join room ${email}`);
      navigate(`/room/${room}`);
    },
    [navigate]
  );

  useEffect(() => {
    socket.on("room:join", handleJoinRoom);
    return () => {
      socket.off("room:join", handleJoinRoom);
    };
  }, [socket, handleJoinRoom]);

  return (
    <div className="Lobby">
      <div>
        <img
          src="https://digiqure.com/pages/wp-content/uploads/2023/07/whatisteli.png"
          alt="err"
        />
      </div>
      <div>
        <h1>Enter Your Details</h1>
        <form className="FormData" onSubmit={handleSubmit}>
          {/* <label htmlFor="email">Email ID</label> */}
          <input
            type="email"
            id="email"
            value={email}
            placeholder="Enter your EmailID"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          {/* <label htmlFor="room">Room Number</label> */}
          <input
            type="text"
            id="room"
            value={room}
            placeholder="Room Number"
            onChange={(e) => setRoom(e.target.value)}
            required
          />
          <br />
          <button>JOIN</button>
        </form>
      </div>
    </div>
  );
};

export default LobbyScreen;
