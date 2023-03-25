import type { Element } from "../index.d";

export default interface Props extends Element {
  defaultChecked?: boolean;
  validate?: (value: boolean) => string;
  onChecked?: (value: boolean) => void;
}
