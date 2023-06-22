import React from "react";
import Button from "./Button";

export default {
  title: "Button",
  component: Button,
};

export const ButtonDefault = () => <Button label="day la button default" />;

export const ButtonSmall = () => (
  <Button size="small" label="Day la button small" />
);
export const ButtonMedium = () => (
  <Button size="medium" label="Day la button medium" />
);
export const ButtonDanger = () => (
  <Button variant="danger" label="Day la button danger" />
);

export const ButtonSuccess = () => (
  <Button variant="success" label="Day la button success" />
);
