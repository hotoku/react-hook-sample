import { useEffect } from "react";
import { createConnection } from "./chat";
import { showNotification } from "./notifications";

export function useChatRoom({
  serverUrl,
  roomId,
}: {
  serverUrl: string;
  roomId: string;
}) {
  useEffect(() => {
    const options = {
      serverUrl: serverUrl,
      roomId: roomId,
    };
    const connection = createConnection(options);
    connection.on("message", (msg: string) => {
      showNotification("New message: " + msg);
    });
    connection.connect();
    return () => connection.disconnect();
  }, [roomId, serverUrl]);
}
