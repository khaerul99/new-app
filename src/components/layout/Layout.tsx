import React from "react";
import Navbar from "../navbar/Navbar";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center w-full h-screen p-4">
      <div className="w-full mx-auto max-w-7xl">
          <Navbar />
        <div className="mt-32 md:mt-20">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
