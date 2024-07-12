"use client";
import { App as SendbirdApp } from "@sendbird/uikit-react";
import "@sendbird/uikit-react/dist/index.css";

function ChatApp() {
  return (
    // The chat interface can expand up to the dimensions of your parent component.
    // To achieve a full-screen mode, apply the following CSS rules to the parent element.
    <div style={{ width: "100vw", height: "100vh" }}>
      <SendbirdApp
        // You can find your Sendbird application ID on the Sendbird dashboard.
        appId="EFFF7270-B6D0-4CCE-86DC-64FD6686985F"
        // Specify the user ID you've created on the dashboard.
        // Or you can create a user by specifying a unique userId.
        userId="1"
        enableLegacyChannelModules
      />
    </div>
  );
}

export default ChatApp;
