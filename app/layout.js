import "@/app/ui/globals.css";
import { inter } from "./ui/fonts";

export const metadata = {
  title: {
    template: "%s | Metaversus",
    default: "Metaversus",
  },
  description: "The official Next.js Learn Dashboard built with App Router.",
  metadataBase: new URL("https://nextjs-dashboard-five-dun-58.vercel.app"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
