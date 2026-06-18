import Navbar from "@/components/layouts/Navbar";
import SmoothScroll from "@/components/common/SmoothScroll";
import "./globals.css";

export const metadata = {
  title: "Chanchal Kumar",
  description: "Chanchal Kumar Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen" suppressHydrationWarning>
        <SmoothScroll />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
