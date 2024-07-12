// pages/index.js
"use client";
import dynamic from "next/dynamic";
import "@sendbird/uikit-react/dist/index.css";

const DynamicAppWithNoSSR = dynamic(() => import("@/app/components/Chat"), {
  ssr: false,
  loading: () => <p>...</p>,
});

export default function Home() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <DynamicAppWithNoSSR />
    </div>
  );
}
