import Navigation from "./Navigation";

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  return (
    <div className="flex flex-col h-screen bg-white">
      <Navigation />
      {children}
    </div>
  );
}
