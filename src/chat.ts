export function createConnection({
  serverUrl,
  roomId,
}: {
  serverUrl: string;
  roomId: string;
}) {
  // A real implementation would actually connect to the server
  if (typeof serverUrl !== "string") {
    throw Error("Expected serverUrl to be a string. Received: " + serverUrl);
  }
  if (typeof roomId !== "string") {
    throw Error("Expected roomId to be a string. Received: " + roomId);
  }
  let intervalId: NodeJS.Timer | undefined = undefined;
  let messageCallback: ((m: string) => void) | undefined = undefined;
  return {
    connect() {
      console.log(
        '✅ Connecting to "' + roomId + '" room at ' + serverUrl + "..."
      );
      clearInterval(intervalId);
      intervalId = setInterval(() => {
        if (messageCallback) {
          if (Math.random() > 0.5) {
            messageCallback("hey");
          } else {
            messageCallback("lol");
          }
        }
      }, 3000);
    },
    disconnect() {
      clearInterval(intervalId);
      messageCallback = undefined;
      console.log(
        '❌ Disconnected from "' + roomId + '" room at ' + serverUrl + ""
      );
    },
    on(event: string, callback: (m: string) => void) {
      if (messageCallback) {
        throw Error("Cannot add the handler twice.");
      }
      if (event !== "message") {
        throw Error('Only "message" event is supported.');
      }
      messageCallback = callback;
    },
  };
}
