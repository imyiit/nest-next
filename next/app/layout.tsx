"use client";

import "@/styles/dist.css";
import "@/styles/globals.scss";
import "react-toastify/dist/ReactToastify.css";

import React from "react";
import Store from "store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

import Header from "@/ui/Layout/Header";
import Footer from "@/ui/Layout/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={Store}>
      <html>
        <body className="grid grid-cols-[1fr_min(1444px,_94%)_1fr] grid-rows-[96px_auto_96px]">
          <header className="col-start-2 relative after:col-span-3 after:">
            <ToastContainer position="top-center" />
            <Header
              items={[
                { label: "Anasayfa", url: "/#" },
                { label: "Hakkımda", url: "/#" },
                { label: "İletişim", url: "/#" },
                { label: "Bana Ulaş", url: "/#" },
              ]}
            ></Header>
          </header>
          <main className="col-start-2">{children}</main>
          <footer className="col-start-2">
            <Footer>
              <div>test</div>
              <div>test2</div>
            </Footer>
          </footer>
        </body>
      </html>
    </Provider>
  );
}
