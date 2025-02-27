import "./globals.css";

export const metadata = {
  title: "Portfolio",
  description: "E-Portfolio",
 icons: {
    icon: "/batman.png",
    shortcut: "/batman.png",
    apple: "/batman.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0D2818]">{children}
      </body>
    </html>
  );
}
