import "@/app/ui/globals.css";
import { inter } from "./ui/fonts";

export const metadata = {
  title: {
    template: "%s | Metaversus",
    default: "Metaversus",
  },
  description:
    "Metaverse is a new thing in the future, where you can enjoy the virtual world by feeling like it&apos;s really real",
  metadataBase: new URL("https://metaversus-nine-delta.vercel.app/"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
