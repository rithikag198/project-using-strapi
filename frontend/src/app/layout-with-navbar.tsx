import Navbar from "@/components/Navbar-client";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "BlogHub - Discover Amazing Stories",
  description: "A modern blog platform built with Strapi and Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
