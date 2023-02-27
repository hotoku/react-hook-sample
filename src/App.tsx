import { useState } from "react";
import ChatRoom from "./ChatRoom";

export default function App() {
  const [roomId, setRoomId] = useState("general");
  return (
    <div style={{ padding: 100, background: "#eeeeee" }}>
      <label>
        Choose the chat room:{" "}
        <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <hr />
      <ChatRoom roomId={roomId} />
    </div>
  );
}
