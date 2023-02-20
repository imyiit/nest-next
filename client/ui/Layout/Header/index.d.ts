import type React from "react";

interface Item {
  label: string;
  url: string;
  icon?: React.ReactNode;
}

export interface Props {
  itemPosition?: "Front" | "Back";
  items?: Item[];
  logo?: {
    text: string;
    icon: React.ReactNode;
  };
}
