"use client";
import React from "react";
import { useField } from "formik";

import type Props from "./index.d";
import classNames from "classnames";

import ErrorBox from "../../Utils/ErrorBox";

const Text = ({ name, icon, placeholder, onTextChanged }: Props) => {
  const [field, meta, helpers] = useField(name);

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
          type="text"
          {...field}
          placeholder={placeholder}
          onChange={(e) => {
            onTextChanged && onTextChanged(e.target.value);
            helpers.setValue(e.target.value);
          }}
          className={classNames({
            "bg-white w-full h-full outline-none py-2 px-3 rounded-sm": true,
          })}
        />
      </div>

      {meta.touched && meta.error && <ErrorBox text={meta.error} />}
    </div>
  );
};

export { Text };
