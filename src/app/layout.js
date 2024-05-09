import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CURRENCY CONVERTER",
  description: "Generated CURRENCY CONVERTER",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{height:"100vh"}}>
        <AppRouterCacheProvider>
          {children}
        </AppRouterCacheProvider>
        </body>
    </html>
  );
}
