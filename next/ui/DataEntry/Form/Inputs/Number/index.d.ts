import React from "react";
import type { Element } from "../../index.d";

export default interface Props extends Element {
  validate?: (value: number) => string;
  placeholder?: string;
  value?: number;
  max?: number;
  min?: number;
  step?: number;
  onNumberChanged?: (number: number) => void;
}
