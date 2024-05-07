"use client";

import NextTopLoader from "nextjs-toploader";
import { FC, ReactNode } from "react";
import { Header } from "@/widgets/Header";
import { QueryProvider } from "../providers/QueryProvider";

import "simplebar-react/dist/simplebar.min.css";
import "../styles/null.css";
import "../styles/globals.css";

interface RootLayoutProps {
  children: ReactNode;
}

export const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <QueryProvider>
      <div className="wrapper">
        <NextTopLoader showSpinner={false} color="#9f0013" />
        <Header />
        {children}
      </div>
    </QueryProvider>
  );
};
