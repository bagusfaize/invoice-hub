import type { Metadata } from "next";
import "./globals.css";
import BaseLayout from "@/layouts/BaseLayout";

export const metadata: Metadata = {
  title: "Nabitu Invoice Hub",
  description: "Invoice ManagementZ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <BaseLayout>
          {children}
        </BaseLayout>
      </body>
    </html>
  );
}
