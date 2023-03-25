import React, { useState } from "react";
import { useField } from "formik";
import classNames from "classnames";
import ErrorBox from "../Utils/ErrorBox";

import type Props from "./index.d";

const Switch = ({ name, defaultChecked = false, onChecked }: Props) => {
  const [field, meta, helpers] = useField(name);

  const [clicked, setClicked] = useState<boolean>(defaultChecked);

  const [alreadyClick, setAlreadyClick] = useState(false);

  return (
    <div className="flex flex-col">
      <div
        {...field}
        className="h-6 w-12 relative select-none bg-white rounded-sm cursor-pointer"
        onClick={() => {
          setAlreadyClick(true);
          setClicked((bool) => {
            helpers.setValue(!bool);
            onChecked && onChecked(!bool);
            return !bool;
          });
        }}
      >
        <div
          className={classNames({
            "transition-all h-4 w-4 flex flex-shrink-0 justify-center items-center select-none rounded-full absolute top-1 text-xs content-center shadow-xl":
              true,
            "bg-blue-500 left-7 text-white": clicked,
            "bg-gray-400 left-1 text-blue-500": !clicked,
          })}
        ></div>
      </div>

      {alreadyClick && meta.error && <ErrorBox text={meta.error} />}
    </div>
  );
};

export default Switch;
