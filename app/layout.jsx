import { Figtree } from "next/font/google";
import { Toaster } from "sonner";

import ReduxProvider from "@/providers/redux-provider";
import SessionProvider from "@/providers/session-provider";

import "./globals.css";

const font = Figtree({ subsets: ["latin"] });

export const metadata = {
  title: "Spotify",
  description:
    "Spotify is a digital music service that gives you access to millions of songs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Toaster />
        <SessionProvider>
          <ReduxProvider>{children}</ReduxProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
