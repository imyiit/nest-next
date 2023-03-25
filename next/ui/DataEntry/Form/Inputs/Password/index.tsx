import React, { useState } from "react";
import { useField } from "formik";
import classNames from "classnames";

import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

import ErrorBox from "../../Utils/ErrorBox";

import type Props from "./index.d";

function Password({ name, icon, placeholder, onPasswordChanged }: Props) {
  const [field, meta, helpers] = useField(name);
  const [visible, setVisible] = useState<boolean>(true);

  return (
    <div
      className={classNames({
        "flex flex-col relative rounded-sm border-2": true,
        "border-transparent": !meta.touched && !meta.error,
        "border-red-500": meta.error,
        "border-green-500": meta.touched && !meta.error,
      })}
    >
      <div className="flex">
        {icon && (
          <div className="flex justify-center items-center select-none bg-gray-200 px-2">
            {icon}
          </div>
        )}

        <input
          type={!visible ? "text" : "password"}
          {...field}
          placeholder={placeholder}
          onChange={(e) => {
            onPasswordChanged && onPasswordChanged(e.target.value);
            helpers.setValue(e.target.value);
          }}
          className={classNames({
            "bg-white w-full h-full outline-none py-2 px-3 rounded-sm": true,
          })}
        />

        <div
          className={classNames({
            "flex justify-center items-center select-none bg-white px-2 text-xl cursor-pointer":
              true,
            "text-green-500": visible,
            "text-red-500": !visible,
          })}
          onClick={() => {
            setVisible((v) => !v);
          }}
        >
          {visible ? <AiFillEye /> : <AiFillEyeInvisible />}
        </div>
      </div>

      {meta.touched && meta.error && <ErrorBox text={meta.error} />}
    </div>
  );
}

export { Password };
