import { useState } from "react";
import { useChatRoom } from "./useChatRoom";

export default function ChatRoom({ roomId }: { roomId: string }) {
  const [serverUrl, setServerUrl] = useState("https://localhost:1234");

  useChatRoom({
    serverUrl,
    roomId,
  });

  return (
    <>
      <label>
        Server URL:
        <input
          value={serverUrl}
          onChange={(e) => setServerUrl(e.target.value)}
        />
      </label>
      <h1>Welcome to the {roomId} room!</h1>
    </>
  );
}
