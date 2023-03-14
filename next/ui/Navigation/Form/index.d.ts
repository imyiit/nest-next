export interface Element {
  name: string;
  validate?: (value: string) => string;
}
