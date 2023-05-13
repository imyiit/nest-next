import React from "react";
import type { Element } from "../../index.d";

export default interface Props extends Element {
  icon?: React.ReactNode;
  placeholder?: string;
  onPasswordChanged?: (password: string) => void;
}