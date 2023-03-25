import React, { PropsWithChildren } from "react";

const ErrorBox = ({ text }: PropsWithChildren & { text: string }) => {
  return (
    <div className="w-full font-bold h-fit bg-gray-100 text-red-500 shadow rounded-b text-xs py-1 px-2">
      <p>{text}</p>
    </div>
  );
};

export default ErrorBox;
