import "./App.css";

import React, { useState, useEffect } from "react";

function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }
    function handleOffline() {
      setIsOnline(false);
    }
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);
  return isOnline;
}

function useFormInput(initialValue: string) {
  const [value, setValue] = useState<string>(initialValue);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ): void => {
    setValue(e.target.value);
  };

  const inputProps = {
    value: value,
    handleChange: handleChange,
  };
  return inputProps;
}

export function SaveButton() {
  const isOnline = useOnlineStatus();
  function handleSaveClick() {
    console.log("✅ Progress saved");
  }

  return (
    <button disabled={!isOnline} onClick={handleSaveClick}>
      {isOnline ? "Save progress" : "Reconnecting..."}
    </button>
  );
}

function App(): JSX.Element {
  const isOnline = useOnlineStatus();
  const firstNameProps = useFormInput("");
  const lastNameProps = useFormInput("");

  return (
    <>
      <h1>{isOnline ? "✅ Online" : "❌ Disconnected"}</h1>
      <label>
        first name
        <input
          value={firstNameProps.value}
          onChange={firstNameProps.handleChange}
        />
      </label>
      <label>
        last name
        <input
          value={lastNameProps.value}
          onChange={lastNameProps.handleChange}
        />
      </label>
    </>
  );
}

export default App;
