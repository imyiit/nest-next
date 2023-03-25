import React from "react";
import { useField } from "formik";
import ErrorBox from "../../Utils/ErrorBox";
import type Props from "./index.d";

const Number = ({
  name,
  placeholder,
  max,
  min,
  step = 1,
  value,
  onNumberChanged,
}: Props) => {
  const [field, meta, helpers] = useField(name);

  return (
    <div className="flex flex-col">
      <input
        type="number"
        className="p-2 outline-none rounded-sm"
        {...field}
        placeholder={placeholder}
        max={max}
        min={min}
        step={step}
        value={value}
        onChange={(e) => {
          onNumberChanged && onNumberChanged(+e.target.value);
          helpers.setValue(+e.target.value);
        }}
      />
      {meta.touched && meta.error && <ErrorBox text={meta.error} />}
    </div>
  );
};

export { Number };
