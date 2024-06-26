import { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import { ReactNode } from "react";
import { RootLayout } from "@/layouts/RootLayout";

const inter = Roboto_Condensed({ weight: "400", subsets: ["latin"] });

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
