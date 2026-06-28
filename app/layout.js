import Navbar from "@/components/layouts/Navbar";
import SmoothScroll from "@/components/common/SmoothScroll";
import "./globals.css";
import Footer from "@/components/layouts/Footer";

export const metadata = {
  title: "Chanchal Khatri",
  description: "Chanchal Khatri Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen" suppressHydrationWarning>
        <SmoothScroll />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
