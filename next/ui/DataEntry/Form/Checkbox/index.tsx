import classNames from "classnames";
import { useField } from "formik";
import React, { useState } from "react";
import ErrorBox from "../Utils/ErrorBox";

import type Props from "./index.d";

const Checkbox = ({ name, text = "", onCheckedChanged }: Props) => {
  const [field, meta, helpers] = useField(name);

  const [alreadyClick, setAlreadyClick] = useState(false);
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <div
      className={classNames({
        "flex flex-col rounded-sm bg-white border-2": true,
        "border-transparent": !alreadyClick && !meta.error,
        "border-red-500": meta.error,
        "border-green-500": alreadyClick && !meta.error,
      })}
    >
      <div className="flex gap-x-2 p-2">
        <div
          {...field}
          onClick={() => {
            setAlreadyClick(true);

            setChecked((val) => {
              onCheckedChanged && onCheckedChanged(!val);
              helpers.setValue(!val);

              return !val;
            });
          }}
          className={classNames({
            "transition-all w-3 h-3 flex justify-center items-center cursor-pointer select-none p-3 font-bold text-white shadow rounded":
              true,
            "bg-blue-500": checked,
            "bg-white": !checked,
          })}
        >
          ✓
        </div>
        <p className="text-xs px-2 flex items-center justify-center">{text}</p>
      </div>
      {alreadyClick && meta.error && <ErrorBox text={meta.error} />}
    </div>
  );
};

export default Checkbox;
