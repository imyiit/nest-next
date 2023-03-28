import React from "react";
import type { Element } from "../index.d";

export default interface Props extends Element {
  validate?: (check: boolean) => string;
  text?: string;
  onCheckedChanged?: (number: boolean) => void;
}
