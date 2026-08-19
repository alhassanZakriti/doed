"use client";

import { LocaleProvider } from "@/components/LocaleProvider";
import type { ReactNode } from "react";

export function AppProviders({ children }: { children: ReactNode }) {
  return <LocaleProvider>{children}</LocaleProvider>;
}
