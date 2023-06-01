import type { Element } from "../index.d";
export default interface Props extends Element {
  disabled?: boolean;
  type?:
    | "Primary"
    | "Secondary"
    | "Success"
    | "Danger"
    | "Warning"
    | "Info"
    | "Link";
  buttonType?: "submit" | "reset" | "button";
}
