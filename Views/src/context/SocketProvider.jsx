import { useMemo } from "react";
import PropTypes from "prop-types"; // Import the prop-types library
import { io } from "socket.io-client";
import SocketContext from "./SocketContext";

// Define the SocketProvider component
export const SocketProvider = (props) => {
  const socket = useMemo(() => io("localhost:8000"), []);
  return (
    <SocketContext.Provider value={socket}>
      {props.children}
    </SocketContext.Provider>
  );
};

// Add PropTypes validation for the 'children' prop after the component is defined
SocketProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
