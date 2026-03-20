"use client";
import { HeroUIProvider } from "@heroui/react";

export default function UIProvider({ children }: any) {
  return <HeroUIProvider>{children}</HeroUIProvider>;
}
