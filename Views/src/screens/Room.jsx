import { useEffect, useCallback, useState } from "react";
import ReactPlayer from "react-player";
import peer from "../services/peer";
import { useSocket } from "../context/UseSocket";
import { useNavigate } from "react-router-dom";

import "./Room.css";

const RoomPage = () => {
  // Fetch the socket context
  const socket = useSocket();

  // Navigate
  const navigate = useNavigate();

  // State for managing various aspects of the call
  const [remoteSocketId, setRemoteSocketId] = useState(null);
  const [myStream, setMyStream] = useState();
  const [remoteStream, setRemoteStream] = useState();
  const [callEnded, setCallEnded] = useState(false);
  const [isAudioMuted, setIsAudioMuted] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [meetingEnded, setMeetingEnded] = useState(false);
  const [userRole, setUserRole] = useState("");

  // Data from Localstorage
  // const email_ls = localStorage.getItem("email");
  // const name_ls = localStorage.getItem("user");
  const role_ls = localStorage.getItem("role");
  // const status_ls = localStorage.getItem("status");

  // Set userRole state to the value from local storage
  useEffect(() => {
    console.log("Role from local storage:", role_ls);
    setUserRole(role_ls);
  }, [role_ls]);

  // Handle when a user joins the room
  const handleUserJoined = useCallback(({ email, id }) => {
    console.log(`Email ${email} joined room`);
    setRemoteSocketId(id);
  }, []);

  // Handle initiating a call to another user
  const handleCallUser = useCallback(async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });
    const offer = await peer.getOffer();
    socket.emit("user:call", { to: remoteSocketId, offer });
    setMyStream(stream);
    setCallEnded(false);
  }, [remoteSocketId, socket]);

  // Handle incoming call from another user
  const handleIncomminCall = useCallback(
    async ({ from, offer }) => {
      setRemoteSocketId(from);
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      });
      setMyStream(stream);
      console.log(`Incoming Call `, from, offer);
      const ans = await peer.getAnswer(offer);
      socket.emit("call:accepted", { to: from, ans });
    },
    [socket]
  );

  // Function to send user's streams to the peer
  const sendStreams = useCallback(() => {
    for (const track of myStream.getTracks()) {
      peer.peer.addTrack(track, myStream);
    }
  }, [myStream]);

  // Handle when a call is accepted by the user
  const handleCallAccepted = useCallback(
    ({ from, ans }) => {
      peer.setLocalDescription(ans);
      console.log(`Call Accepted ${from}`);
      sendStreams();
    },
    [sendStreams]
  );

  const handleNegoNeeded = useCallback(async () => {
    const offer = await peer.getOffer();
    socket.emit("peer:nego:needed", { offer, to: remoteSocketId });
  }, [remoteSocketId, socket]);

  useEffect(() => {
    peer.peer.addEventListener("negotiationneeded", handleNegoNeeded);
    return () => {
      peer.peer.removeEventListener("negotiationneeded", handleNegoNeeded);
    };
  }, [handleNegoNeeded]);

  // Handle incoming negotiation request from the peer
  const handleNegoNeedIncomming = useCallback(
    async ({ from, offer }) => {
      const ans = await peer.getAnswer(offer);
      socket.emit("peer:nego:done", { to: from, ans });
    },
    [socket]
  );

  const handleNegoNeedFinal = useCallback(async ({ ans }) => {
    await peer.setLocalDescription(ans);
  }, []);

  const handleCallEnd = useCallback(() => {
    // Stop tracks in myStream
    if (myStream) {
      myStream.getTracks().forEach((track) => track.stop());
    }
    // Close the connection and reset peer state
    if (peer.peer) {
      peer.peer.close();
    }
    // Update state to show call ended
    setRemoteStream(null);
    setMyStream(null);
    setRemoteSocketId(null);
    setCallEnded(true);
    setMeetingEnded(true); // Set the meetingEnded state to true

    alert("Call Ended");
  }, [myStream]);

  useEffect(() => {
    peer.peer.addEventListener("track", async (ev) => {
      const remoteStream = ev.streams;
      console.log("GOT TRACKS!!");
      setRemoteStream(remoteStream[0]);
    });
  }, []);

  useEffect(() => {
    socket.on("user:joined", handleUserJoined);
    socket.on("incomming:call", handleIncomminCall);
    socket.on("call:accepted", handleCallAccepted);
    socket.on("peer:nego:needed", handleNegoNeedIncomming);
    socket.on("peer:nego:final", handleNegoNeedFinal);
    // socket.on("call:end", handleEndCall); // Listen for the call:end event
    socket.on("call:end", handleCallEnd);

    return () => {
      socket.off("user:joined", handleUserJoined);
      socket.off("incomming:call", handleIncomminCall);
      socket.off("call:accepted", handleCallAccepted);
      socket.off("peer:nego:needed", handleNegoNeedIncomming);
      socket.off("peer:nego:final", handleNegoNeedFinal);
      // socket.off("call:end", handleEndCall); // Remove the event listener
      socket.off("call:end", handleCallEnd);
    };
  }, [
    socket,
    handleUserJoined,
    handleIncomminCall,
    handleCallAccepted,
    handleNegoNeedIncomming,
    handleNegoNeedFinal,
    handleCallEnd,
  ]);
  const toggleAudio = () => {
    if (myStream) {
      myStream.getAudioTracks().forEach((track) => {
        track.enabled = !track.enabled; // Toggle audio track
        setIsAudioMuted(!track.enabled); // Update state
      });
    }
  };

  const toggleVideo = () => {
    if (myStream) {
      myStream.getVideoTracks().forEach((track) => {
        track.enabled = !track.enabled; // Toggle video track
        setIsVideoOn(track.enabled); // Update state
      });
    }
  };

  return (
    <div className="RoomPage">
      <div className="status">
        {meetingEnded ? (
          <div className="ended-message">
            <h4>
              {userRole === "doctor"
                ? "Meeting Ended. Thank you for conducting the appointment."
                : "Meeting Ended. Thank you for booking an appointment."}
            </h4>
            <button onClick={() => navigate("/")}>Return to Home</button>
          </div>
        ) : (
          <h4 className="connected-as">
            {remoteSocketId ? `Connected as ${userRole}` : "No one in room "}
          </h4>
        )}
      </div>

      <div className="controls">
        {myStream && <button onClick={sendStreams}>Accept Call</button>}
        {remoteSocketId && <button onClick={handleCallUser}>CALL</button>}
      </div>

      <div className="stream-container">
        {myStream && (
          <div className="stream">
            <h1>{userRole === "doctor" ? "Doctor" : "Patient"}</h1>
            <ReactPlayer
              url={myStream}
              playing
              muted
              height="100%"
              width="100%"
            />
            <button onClick={toggleAudio}>
              {isAudioMuted ? "Unmute Audio" : "Mute Audio"}
            </button>
            <button onClick={toggleVideo}>
              {isVideoOn ? "Turn Off Video" : "Turn On Video"}
            </button>
          </div>
        )}

        {remoteSocketId && remoteStream && !callEnded && (
          <div className="stream">
            <h1>{userRole === "doctor" ? "Patient" : "Doctor"}</h1>
            <ReactPlayer
              url={remoteStream}
              playing
              muted
              height="100%"
              width="100%"
            />
            <div className="end-button">
              <button onClick={handleCallEnd}>End Call</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default RoomPage;
