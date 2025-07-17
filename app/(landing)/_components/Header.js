import React from "react";

const Header = ({ children }) => {
  return (
    <div className="bg-transparent">
      <header className="absolute inset-x-0 top-0 z-50">{children}</header>
    </div>
  );
};

export default Header;
