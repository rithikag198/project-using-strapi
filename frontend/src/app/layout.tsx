import type { Metadata } from "next";
import "./globals.css";
import NavbarPosts from "@/components/NavbarPosts";

export const metadata: Metadata = {
  title: "BlogHub - Modern Blog Platform",
  description: "Discover amazing content about technology, design, and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <div className="min-h-screen bg-gray-50">
          <NavbarPosts />

          {/* Main Content */}
          <main>{children}</main>

          {/* Simple Footer */}
          <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4 text-center">
              <p>&copy; 2024 BlogHub. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
