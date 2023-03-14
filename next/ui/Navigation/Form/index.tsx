"use client";
import React from "react";

import { Formik } from "formik";

import type { Element } from "./index.d";

const Form = ({
  children,
  onValid,
}: {
  children: React.ReactElement<Element>[] | React.ReactElement<Element>;
  onValid?: (value: Record<string, any>) => void;
}) => {
  const initialValues: Record<string, any> = {};
  const childrens = Array.isArray(children) ? [...children] : [children];

  childrens.forEach((child) => {
    initialValues[child.props.name] = "";
  });

  return (
    <Formik
      initialValues={initialValues}
      validate={(values) => {
        let errors: Record<string, any> = {};

        childrens.forEach((child) => {
          if (
            child.props.validate &&
            child.props.validate(values[child.props.name])
          )
            errors[child.props.name] = child.props.validate(
              values[child.props.name]
            );
        });

        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        onValid && onValid(values);
        setSubmitting(false);
      }}
    >
      {({ handleSubmit }) => (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col p-2 bg-gray-300 shadow-lg rounded-sm gap-1"
        >
          {children}
        </form>
      )}
    </Formik>
  );
};

export default Form;
