// pages/index.js
"use client";
import dynamic from "next/dynamic";
import "@sendbird/uikit-react/dist/index.css";
import Layout from "./components/Layout";

const DynamicAppWithNoSSR = dynamic(() => import("./components/Chat"), {
  ssr: false,
  loading: () => (
    <div className="flex justify-center items-center h-screen w-full">
      Loading...
    </div>
  ),
});

export default function Home() {
  return (
    <Layout>
      <div style={{ flex: 1 }}>
        <DynamicAppWithNoSSR />
      </div>
    </Layout>
  );
}
