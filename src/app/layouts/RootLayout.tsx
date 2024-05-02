"use client";

import { FC, ReactNode } from "react";
import { Header } from "@/widgets/header";
import { QueryProvider } from "../providers/QueryProvider";

import "../styles/null.css";
import "../styles/globals.css";

interface RootLayoutProps {
  children: ReactNode;
}

export const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <QueryProvider>
      <div className="wrapper">
        <Header />
        {children}
      </div>
    </QueryProvider>
  );
};
