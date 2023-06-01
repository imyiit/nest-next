import React from "react";
import { useField } from "formik";

import type Props from "./index.d";
import classNames from "classnames";

const Button = ({
  children,
  name,
  disabled = false,
  type = "Primary",
  buttonType = "button",
}: Props) => {
  const [field, , helpers] = useField(name);

  return (
    <div>
      <button
        disabled={disabled}
        {...field}
        type={buttonType}
        onClick={() => {
          helpers.setValue(true);
        }}
        className={classNames({
          "transition text-white px-2 py-1 rounded-sm font-semibold shadow select-none hover:bg-opacity-80 ":
            true,
          "cursor-not-allowed bg-opacity-70": disabled,
          "cursor-pointer": !disabled,
          "bg-blue-500": type === "Primary",
          "bg-gray-500": type === "Secondary",
          "bg-green-500": type === "Success",
          "bg-red-500": type === "Danger",
          "bg-orange-500": type === "Warning",
          "bg-gray-200 text-blue-500 shadow-none": type === "Link",
        })}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
