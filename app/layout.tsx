import type { Metadata } from "next";
import "./globals.css";
import { Menus} from '@/components/common';

export const metadata: Metadata = {
  title: "Vica Zhuo - Digital practitioner and Content Creator",
  description: "Digital practitioner",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" />
      <body className={'bg-gray-100'}>
          <div className={'m-auto'}>
              <Menus></Menus>
              <div className={' w-[90%] m-auto'}>
                  {children}
              </div>
          </div>
      </body>
    </html>
  );
}
