import { ButtonProps } from "./Button.types";

export const getColor = (colorKey: ButtonProps["color"]) =>
  new Map([
    ["none", ""],
    ["primary", "text-white bg-primary hover:bg-primary_hover"],
    ["danger", "text-white bg-danger hover:bg-danger_hover"],
    ["success", "text-white bg-success hover:bg-success_hover"],
  ]).get(colorKey);
