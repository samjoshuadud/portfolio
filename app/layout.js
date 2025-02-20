import "./globals.css";

export const metadata = {
  title: "Portfolio",
  description: "E-Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-screen bg-[#0D2818]">{children}
      </body>
    </html>
  );
}
