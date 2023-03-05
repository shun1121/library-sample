import { ButtonProps } from "./Button.types";

export const getColor = (colorKey: ButtonProps["color"]) =>
  new Map<ButtonProps["color"], string>([
    ["none", ""],
    ["primary", "text-white bg-primary hover:bg-primary_hover"],
    ["danger", "text-white bg-danger hover:bg-danger_hover"],
    ["success", "text-white bg-success hover:bg-success_hover"],
  ]).get(colorKey);

export const getSize = (sizeKey: ButtonProps["size"]) =>
  new Map<ButtonProps["size"], string>([
    ["sm", "w-32 block"],
    ["md", "w-60 block"],
    ["full", "w-full block"],
  ]).get(sizeKey);
