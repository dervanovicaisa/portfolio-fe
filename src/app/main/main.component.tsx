"use client";
import React, { useState } from "react";
import BlackHole from "../layout/black-hole/black-hole.component";
import Footer from "../layout/footer/footer";
import Header from "../layout/header/header";

interface MainProps {
  children: React.ReactNode;
}
const Main: React.FC<MainProps> = ({ children }) => {
  const [showBlackHole, setShowBlackHole] = useState(false);
  return (
    <div className={showBlackHole ? "bg-black bg-galaxy-set-pos" : ""}>
      <Header
        showBlackHole={showBlackHole}
        setShowBlackHole={setShowBlackHole}
      />
      {showBlackHole && <BlackHole children={children} />}
      <div className={showBlackHole ? "galaxy" : ""}>
        {!showBlackHole && (
          <>
            <div>{children}</div>
            <Footer />
          </>
        )}
      </div>
    </div>
  );
};

export default Main;
