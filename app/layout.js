import "./globals.css";
export const metadata = {
  title: "Veed IO",
  description: "Video and Audio editing.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
