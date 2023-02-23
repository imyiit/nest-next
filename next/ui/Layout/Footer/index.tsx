import React from "react";

const Footer = ({ children }: { children: React.ReactNode[] }) => {
  return (
    <div className="flex gap-5 justify-center items-center flex-wrap shrink-0">
      {children}
    </div>
  );
};

export default Footer;
